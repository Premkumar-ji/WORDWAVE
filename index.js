const defaultWords = [
    "comet", "orbit", "galaxy", "rocket", "meteor", "planet", "cosmos", "nebula",
    "starlight", "gravity", "satellite", "asteroid", "eclipse", "voyage", "signal",
    "captain", "shield", "engine", "crystal", "horizon", "quantum", "photon",
    "react", "jsx", "components", "props", "state", "hooks", "usestate",
    "useeffect", "usecontext", "reducer", "action", "store", "middleware",
    "redux", "router", "virtualdom", "suspense", "boundary", "portals", "ref",
    "fragments", "context", "immutability", "composition", "webpack", "babel",
    "typescript", "javascript", "eslint", "prettier", "testing", "storybook",
    "graphql", "apollo", "material", "interface", "function", "variable",
    "object", "array", "promise", "callback", "module", "browser", "server",
    "render", "component", "animation", "canvas", "pixel", "keyboard",
    "firewall", "database", "network", "protocol", "algorithm", "iteration",
    "recursive", "compile", "runtime", "debugger", "terminal", "repository",
    "branch", "commit", "release", "package", "dependency", "document",
    "element", "selector", "stylesheet", "gradient", "responsive"
];

const storageKey = "wordwave-save-v1";
let width = 480;
let height = 720;
let viewScale = 1;
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
const hud = document.getElementById("hud");
const touchEntry = document.getElementById("touchEntry");
const touchInput = document.getElementById("touchInput");
const soundInput = document.getElementById("soundVolume");
const musicInput = document.getElementById("musicVolume");
const soundValue = document.getElementById("soundValue");
const musicValue = document.getElementById("musicValue");
const customWordsInput = document.getElementById("customWords");
const customError = document.getElementById("customError");

const screens = {
    title: document.getElementById("titleScreen"),
    paused: document.getElementById("pauseScreen"),
    settings: document.getElementById("settingsScreen"),
    stats: document.getElementById("statsScreen"),
    custom: document.getElementById("customScreen"),
    gameOver: document.getElementById("gameOverScreen")
};

function readSave() {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
        return {
            settings: { sound: 50, music: 0 },
            stats: { bestScore: 0, bestWave: 0, gamesPlayed: 0, bestStreak: 0 }
        };
    }

    let saved;
    try {
        saved = JSON.parse(raw);
    } catch (error) {
        console.error("Saved game data could not be read.", error);
        return {
            settings: { sound: 50, music: 0 },
            stats: { bestScore: 0, bestWave: 0, gamesPlayed: 0, bestStreak: 0 }
        };
    }

    const settings = saved.settings || {};
    const stats = saved.stats || {};
    return {
        settings: {
            sound: Number.isFinite(settings.sound) ? Math.max(0, Math.min(100, settings.sound)) : 50,
            music: Number.isFinite(settings.music) ? Math.max(0, Math.min(100, settings.music)) : 0
        },
        stats: {
            bestScore: Number.isFinite(stats.bestScore) ? Math.max(0, stats.bestScore) : 0,
            bestWave: Number.isFinite(stats.bestWave) ? Math.max(0, stats.bestWave) : 0,
            gamesPlayed: Number.isFinite(stats.gamesPlayed) ? Math.max(0, stats.gamesPlayed) : 0,
            bestStreak: Number.isFinite(stats.bestStreak) ? Math.max(0, stats.bestStreak) : 0
        }
    };
}

const savedData = readSave();
const settings = savedData.settings;
const lifetimeStats = savedData.stats;
let screenName = "title";
let wordsForGame = defaultWords;
let activeWords = [];
let projectiles = [];
let particles = [];
let spawnQueue = [];
let lockedTargetId = null;
let nextEnemyId = 1;
let ambientTime = 0;
let lastFrameTime = 0;
let aimAngle = -Math.PI / 2;
let audioContext = null;
let musicGain = null;
let musicOscillators = [];
let game = createGameState();

let stars = [];

function createStars() {
    const count = Math.max(90, Math.round(width * height / 3800));
    return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: (Math.random() * 1.35 + 0.25) / viewScale,
        speed: (Math.random() * 7 + 2) / viewScale,
        alpha: Math.random() * 0.55 + 0.15
    }));
}

function createGameState() {
    return {
        score: 0,
        wave: 1,
        hull: 3,
        correctKeys: 0,
        totalKeys: 0,
        streak: 0,
        longestStreak: 0,
        elapsed: 0,
        spawnTimer: 0,
        waveBanner: 0,
        damageFlash: 0
    };
}

function saveData() {
    localStorage.setItem(storageKey, JSON.stringify({
        settings,
        stats: lifetimeStats
    }));
}

function currentAccuracy() {
    if (game.totalKeys === 0) return 100;
    return Math.round((game.correctKeys / game.totalKeys) * 1000) / 10;
}

function setScreen(nextScreen) {
    screenName = nextScreen;
    for (const [name, element] of Object.entries(screens)) {
        element.hidden = name !== nextScreen;
    }
    hud.hidden = nextScreen !== "playing";
    touchEntry.hidden = nextScreen !== "playing";
    setMusicActive(nextScreen === "playing");
    updateHud();

    if (nextScreen === "playing" && window.matchMedia("(pointer: coarse)").matches) {
        touchInput.focus({ preventScroll: true });
    }
}

function updateHud() {
    document.getElementById("scoreValue").textContent = game.score.toLocaleString();
    document.getElementById("waveValue").textContent = String(game.wave).padStart(2, "0");
    document.getElementById("livesValue").textContent = String(game.hull);
    document.getElementById("accuracyValue").textContent = `${currentAccuracy()}%`;
    document.getElementById("streakValue").textContent = String(game.streak);
}

function updateStatsScreen() {
    document.getElementById("bestScoreValue").textContent = lifetimeStats.bestScore.toLocaleString();
    document.getElementById("bestWaveValue").textContent = String(lifetimeStats.bestWave);
    document.getElementById("gamesPlayedValue").textContent = String(lifetimeStats.gamesPlayed);
    document.getElementById("bestStreakValue").textContent = String(lifetimeStats.bestStreak);
}

function updateSettingsControls() {
    soundInput.value = String(settings.sound);
    musicInput.value = String(settings.music);
    soundValue.value = `${settings.sound}%`;
    musicValue.value = `${settings.music}%`;
    soundValue.textContent = `${settings.sound}%`;
    musicValue.textContent = `${settings.music}%`;
    if (musicGain) {
        musicGain.gain.setTargetAtTime(settings.music * 0.0001, audioContext.currentTime, 0.08);
    }
}

function initializeAudio() {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextConstructor || audioContext) return;

    audioContext = new AudioContextConstructor();
    musicGain = audioContext.createGain();
    musicGain.gain.value = 0;
    musicGain.connect(audioContext.destination);

    for (const frequency of [55, 82.41]) {
        const oscillator = audioContext.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        oscillator.connect(musicGain);
        oscillator.start();
        musicOscillators.push(oscillator);
    }
    updateSettingsControls();
}

function setMusicActive(active) {
    if (!active || settings.music === 0 || !audioContext || !musicGain) {
        if (musicGain && audioContext) {
            musicGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.08);
        }
        return;
    }
    musicGain.gain.setTargetAtTime(settings.music * 0.0001, audioContext.currentTime, 0.08);
}

function playTone(frequency, duration, volume = 0.04, type = "sine") {
    if (settings.sound === 0) return;
    initializeAudio();
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(volume * settings.sound / 100, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + duration);
}

function startGame(wordList = defaultWords) {
    wordsForGame = wordList;
    game = createGameState();
    activeWords = [];
    projectiles = [];
    particles = [];
    lockedTargetId = null;
    nextEnemyId = 1;
    startWave();
    initializeAudio();
    setScreen("playing");
    updateHud();
}

function startWave() {
    const count = Math.min(3 + game.wave, 10);
    spawnQueue = Array.from({ length: count }, () => (
        wordsForGame[Math.floor(Math.random() * wordsForGame.length)]
    ));
    game.spawnTimer = 0.5;
    game.waveBanner = 1.8;
}

function spawnEnemy(word) {
    const maxX = Math.max(18 / viewScale, width - Math.min(190 / viewScale, word.length * 14 / viewScale + 24 / viewScale));
    activeWords.push({
        id: nextEnemyId++,
        word,
        x: 18 / viewScale + Math.random() * Math.max(1, maxX - 18 / viewScale),
        y: -30 / viewScale - Math.random() * 45 / viewScale,
        speed: (17 + game.wave * 1.7 + Math.random() * 5) / viewScale,
        typed: 0,
        wobble: Math.random() * Math.PI * 2
    });
}

function updateGame(delta) {
    game.elapsed += delta;
    game.waveBanner = Math.max(0, game.waveBanner - delta);
    game.damageFlash = Math.max(0, game.damageFlash - delta);

    if (spawnQueue.length > 0) {
        game.spawnTimer -= delta;
        if (game.spawnTimer <= 0) {
            spawnEnemy(spawnQueue.shift());
            game.spawnTimer = Math.max(0.58, 1.2 - game.wave * 0.035);
        }
    }

    for (let index = activeWords.length - 1; index >= 0; index--) {
        const enemy = activeWords[index];
        enemy.y += enemy.speed * delta;
        enemy.wobble += delta * 1.4;
        if (enemy.y > height - 112 / viewScale) {
            activeWords.splice(index, 1);
            if (lockedTargetId === enemy.id) lockedTargetId = null;
            game.hull -= 1;
            game.damageFlash = 0.32;
            playTone(115, 0.22, 0.08, "triangle");
            if (game.hull <= 0) {
                finishGame();
                return;
            }
            updateHud();
        }
    }

    for (let index = projectiles.length - 1; index >= 0; index--) {
        const projectile = projectiles[index];
        const stepDistance = projectile.speed * delta;
        projectile.x += projectile.vx * stepDistance;
        projectile.y += projectile.vy * stepDistance;
        projectile.distanceTraveled += stepDistance;
        if (projectile.distanceTraveled >= projectile.targetDistance) {
            addBurst(projectile.targetX, projectile.targetY, 4, "#8ffff0");
            projectiles.splice(index, 1);
        }
    }

    for (let index = particles.length - 1; index >= 0; index--) {
        const particle = particles[index];
        particle.life -= delta;
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        if (particle.life <= 0) particles.splice(index, 1);
    }

    updateAim(delta);

    if (spawnQueue.length === 0 && activeWords.length === 0) {
        game.wave += 1;
        startWave();
        updateHud();
    }
}

function findTargetFor(character) {
    if (lockedTargetId !== null) {
        const locked = activeWords.find(enemy => enemy.id === lockedTargetId);
        if (locked) return locked;
        lockedTargetId = null;
    }

    const candidates = activeWords
        .filter(enemy => enemy.typed === 0 && enemy.word[0] === character)
        .sort((left, right) => right.y - left.y);
    return candidates[0] || null;
}

function handleCharacter(character) {
    const normalized = character.toLowerCase();
    if (!/^[a-z0-9-]$/.test(normalized) || screenName !== "playing") return;

    game.totalKeys += 1;
    let target = lockedTargetId === null
        ? findTargetFor(normalized)
        : activeWords.find(enemy => enemy.id === lockedTargetId);

    if (!target || target.word[target.typed] !== normalized) {
        game.streak = 0;
        updateHud();
        return;
    }

    lockedTargetId = target.id;
    target.typed += 1;
    game.correctKeys += 1;
    game.streak += 1;
    game.longestStreak = Math.max(game.longestStreak, game.streak);
    fireAt(target);
    playTone(520 + Math.min(game.streak, 20) * 12, 0.07, 0.035);

    if (target.typed === target.word.length) {
        game.score += target.word.length * 10 + game.wave * 5;
        const targetX = target.x + Math.min(target.word.length * 7, 84);
        activeWords = activeWords.filter(enemy => enemy.id !== target.id);
        lockedTargetId = null;
        addBurst(targetX, target.y + 10, 16, "#ffb44a");
        playTone(760, 0.18, 0.06, "triangle");
    }
    updateHud();
}

function fireAt(enemy) {
    const { x: targetX, y: targetY } = getTargetPoint(enemy);
    const ship = getShipOrigin();
    const deltaX = targetX - ship.x;
    const deltaY = targetY - ship.y;
    const distance = Math.hypot(deltaX, deltaY);
    const directionX = deltaX / Math.max(distance, 1);
    const directionY = deltaY / Math.max(distance, 1);
    const muzzleOffset = 35 / viewScale;
    projectiles.push({
        x: ship.x + directionX * muzzleOffset,
        y: ship.y + directionY * muzzleOffset,
        vx: directionX,
        vy: directionY,
        angle: aimAngle,
        speed: 1050 / viewScale,
        distanceTraveled: 0,
        targetDistance: Math.max(0, distance - muzzleOffset),
        targetX,
        targetY
    });
}

function getShipOrigin() {
    return { x: width / 2, y: height - 58 / viewScale };
}

function getTargetPoint(enemy) {
    context.font = `${17 / viewScale}px "Trebuchet MS", "Segoe UI", sans-serif`;
    const x = Math.max(6, Math.min(width - context.measureText(enemy.word).width - 26 / viewScale, enemy.x));
    const prefix = enemy.word.slice(0, enemy.typed);
    const typedWidth = context.measureText(prefix).width;
    const nextWidth = context.measureText(enemy.word[enemy.typed] || "").width;
    return {
        x: x + 10 / viewScale + typedWidth + nextWidth / 2,
        y: enemy.y + 13.5 / viewScale
    };
}

function updateAim(delta) {
    if (lockedTargetId === null) return;
    const target = activeWords.find(enemy => enemy.id === lockedTargetId);
    if (!target) return;
    const ship = getShipOrigin();
    const point = getTargetPoint(target);
    const targetAngle = Math.atan2(point.y - ship.y, point.x - ship.x);
    const difference = Math.atan2(Math.sin(targetAngle - aimAngle), Math.cos(targetAngle - aimAngle));
    aimAngle += difference * Math.min(1, delta * 8);
}

function addBurst(x, y, count, color) {
    for (let index = 0; index < count; index++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (18 + Math.random() * 80) / viewScale;
        particles.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 0.22 + Math.random() * 0.45,
            maxLife: 0.67,
            radius: (1 + Math.random() * 2.4) / viewScale,
            color
        });
    }
}

function finishGame() {
    const personalBest = game.score > lifetimeStats.bestScore;
    lifetimeStats.gamesPlayed += 1;
    lifetimeStats.bestScore = Math.max(lifetimeStats.bestScore, game.score);
    lifetimeStats.bestWave = Math.max(lifetimeStats.bestWave, game.wave);
    lifetimeStats.bestStreak = Math.max(lifetimeStats.bestStreak, game.longestStreak);
    saveData();

    document.getElementById("finalScoreValue").textContent = game.score.toLocaleString();
    document.getElementById("finalWaveValue").textContent = String(game.wave).padStart(2, "0");
    document.getElementById("finalAccuracyValue").textContent = `${currentAccuracy()}%`;
    document.getElementById("finalStreakValue").textContent = String(game.longestStreak);
    document.getElementById("personalBestMessage").hidden = !personalBest;
    setScreen("gameOver");
}

function parseCustomWords() {
    const parsed = customWordsInput.value.match(/[a-z0-9]+(?:[-'][a-z0-9]+)?/gi) || [];
    return [...new Set(parsed.map(word => word.toLowerCase()))].slice(0, 80);
}

function handleAction(action) {
    if (action === "start") {
        startGame();
    } else if (action === "start-custom") {
        const customWords = parseCustomWords();
        if (customWords.length === 0) {
            customError.textContent = "Enter at least one word using letters or numbers.";
            customError.hidden = false;
            return;
        }
        customError.hidden = true;
        startGame(customWords);
    } else if (action === "pause" && screenName === "playing") {
        setScreen("paused");
    } else if (action === "resume" && screenName === "paused") {
        setScreen("playing");
    } else if (action === "settings") {
        updateSettingsControls();
        setScreen("settings");
    } else if (action === "stats") {
        updateStatsScreen();
        setScreen("stats");
    } else if (action === "custom") {
        customError.hidden = true;
        setScreen("custom");
    } else if (action === "title") {
        setScreen("title");
    }
}

function drawBackground(delta) {
    const gradient = context.createRadialGradient(width * 0.5, height * 0.52, 35, width * 0.5, height * 0.52, height * 0.85);
    gradient.addColorStop(0, "#102832");
    gradient.addColorStop(0.55, "#09161f");
    gradient.addColorStop(1, "#050a11");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    for (const star of stars) {
        const y = (star.y + ambientTime * star.speed) % height;
        context.globalAlpha = star.alpha;
        context.fillStyle = "#bce8e4";
        context.beginPath();
        context.arc(star.x, y, star.radius, 0, Math.PI * 2);
        context.fill();
    }
    context.globalAlpha = 1;

    const gridSize = 40 / viewScale;
    const offset = (ambientTime * 10 / viewScale) % gridSize;
    context.strokeStyle = "rgba(117, 185, 188, 0.09)";
    context.lineWidth = 0.7;
    context.beginPath();
    for (let x = 0; x <= width; x += gridSize) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
    }
    for (let y = -gridSize + offset; y <= height; y += gridSize) {
        context.moveTo(0, y);
        context.lineTo(width, y);
    }
    context.stroke();

    if (screenName === "playing" || screenName === "paused" || screenName === "gameOver") {
        context.strokeStyle = "rgba(255, 180, 74, 0.18)";
        context.setLineDash([5, 9]);
        context.beginPath();
        context.moveTo(0, height - 105 / viewScale);
        context.lineTo(width, height - 105 / viewScale);
        context.stroke();
        context.setLineDash([]);
    }
    void delta;
}

function drawShip() {
    const shipWidth = 60 / viewScale;
    const shipHeight = 72 / viewScale;
    const ship = getShipOrigin();

    context.save();
    context.translate(ship.x, ship.y);
    context.rotate(aimAngle + Math.PI / 2);
    context.shadowColor = "#58f0cf";
    context.shadowBlur = 18 / viewScale;
    context.fillStyle = "#112d35";
    context.strokeStyle = "#58f0cf";
    context.lineWidth = 1.5 / viewScale;
    context.beginPath();
    context.moveTo(0, -shipHeight / 2);
    context.lineTo(shipWidth * 0.31, shipHeight * 0.22);
    context.lineTo(shipWidth / 2, shipHeight / 2);
    context.lineTo(shipWidth * 0.14, shipHeight * 0.37);
    context.lineTo(0, shipHeight * 0.45);
    context.lineTo(-shipWidth * 0.14, shipHeight * 0.37);
    context.lineTo(-shipWidth / 2, shipHeight / 2);
    context.lineTo(-shipWidth * 0.31, shipHeight * 0.22);
    context.closePath();
    context.fill();
    context.stroke();
    context.fillStyle = "#58f0cf";
    context.beginPath();
    context.moveTo(0, -shipHeight * 0.28);
    context.lineTo(shipWidth * 0.09, shipHeight * 0.2);
    context.lineTo(0, shipHeight * 0.31);
    context.lineTo(-shipWidth * 0.09, shipHeight * 0.2);
    context.closePath();
    context.fill();
    context.fillStyle = "rgba(255, 180, 74, 0.9)";
    context.beginPath();
    context.ellipse(0, shipHeight * 0.46, shipWidth * 0.09, 4 / viewScale, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();
}

function drawEnemy(enemy) {
    const fontSize = 17 / viewScale;
    context.font = `500 ${fontSize}px "Trebuchet MS", "Segoe UI", sans-serif`;
    const textWidth = context.measureText(enemy.word).width;
    const boxWidth = textWidth + 20 / viewScale;
    const boxHeight = 27 / viewScale;
    const x = Math.max(6 / viewScale, Math.min(width - boxWidth - 6 / viewScale, enemy.x));
    const y = enemy.y + Math.sin(enemy.wobble) * 2 / viewScale;

    context.save();
    if (enemy.id === lockedTargetId) {
        context.shadowColor = "#58f0cf";
        context.shadowBlur = 13 / viewScale;
        context.strokeStyle = "rgba(88, 240, 207, 0.8)";
        context.strokeRect(x - 3 / viewScale, y - 3 / viewScale, boxWidth + 6 / viewScale, boxHeight + 6 / viewScale);
    }
    context.fillStyle = "rgba(4, 10, 15, 0.86)";
    context.fillRect(x, y, boxWidth, boxHeight);
    context.shadowBlur = 0;
    context.font = `500 ${fontSize}px "Trebuchet MS", "Segoe UI", sans-serif`;
    context.textBaseline = "middle";
    context.textAlign = "left";
    const typedText = enemy.word.slice(0, enemy.typed);
    const remainingText = enemy.word.slice(enemy.typed);
    context.fillStyle = "#58f0cf";
    context.fillText(typedText, x + 10 / viewScale, y + boxHeight / 2);
    context.fillStyle = "#f2fbfa";
    context.fillText(remainingText, x + 10 / viewScale + context.measureText(typedText).width, y + boxHeight / 2);

    context.strokeStyle = "rgba(255, 180, 74, 0.8)";
    context.lineWidth = 1.5 / viewScale;
    context.beginPath();
    context.arc(x - 5 / viewScale, y + boxHeight / 2, 4 / viewScale, 0, Math.PI * 2);
    context.stroke();
    context.restore();
}

function drawProjectiles() {
    for (const projectile of projectiles) {
        context.save();
        context.translate(projectile.x, projectile.y);
        context.rotate(projectile.angle);
        context.shadowColor = "#58f0cf";
        context.shadowBlur = 7 / viewScale;
        context.fillStyle = "rgba(88, 240, 207, 0.38)";
        context.beginPath();
        context.ellipse(-4 / viewScale, 0, 7 / viewScale, 1.6 / viewScale, 0, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 11 / viewScale;
        context.fillStyle = "#effffc";
        context.beginPath();
        context.ellipse(0, 0, 5 / viewScale, 2 / viewScale, 0, 0, Math.PI * 2);
        context.fill();
        context.restore();
    }
}

function drawParticles() {
    for (const particle of particles) {
        context.globalAlpha = Math.max(0, particle.life / particle.maxLife);
        context.fillStyle = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
    }
    context.globalAlpha = 1;
}

function drawWaveBanner() {
    if (game.waveBanner <= 0 || screenName !== "playing") return;
    context.save();
    context.globalAlpha = Math.min(1, game.waveBanner);
    context.fillStyle = "#58f0cf";
    context.textAlign = "center";
    context.font = `700 ${12 / viewScale}px 'Trebuchet MS', 'Segoe UI', sans-serif`;
    context.letterSpacing = `${3 / viewScale}px`;
    context.fillText(`WAVE ${String(game.wave).padStart(2, "0")}`, width / 2, height * 0.43);
    context.restore();
}

function drawFrame(delta) {
    context.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0);
    drawBackground(delta);
    if (screenName === "title" || screenName === "settings" || screenName === "stats" || screenName === "custom") {
        drawShip();
        return;
    }

    for (const enemy of activeWords) drawEnemy(enemy);
    drawProjectiles();
    drawParticles();
    drawShip();
    drawWaveBanner();

    if (game.damageFlash > 0) {
        context.fillStyle = `rgba(255, 82, 71, ${game.damageFlash * 0.4})`;
        context.fillRect(0, 0, width, height);
    }
}

function resizeCanvas() {
    const bounds = canvas.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    viewScale = Math.min(bounds.width / 480, bounds.height / 720);
    width = bounds.width / viewScale;
    height = bounds.height / viewScale;
    stars = createStars();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(bounds.width * pixelRatio);
    canvas.height = Math.round(bounds.height * pixelRatio);
    context.setTransform(pixelRatio * viewScale, 0, 0, pixelRatio * viewScale, 0, 0);
    drawFrame(0);
}

function frame(timestamp) {
    const delta = lastFrameTime === 0 ? 0 : Math.min((timestamp - lastFrameTime) / 1000, 0.05);
    lastFrameTime = timestamp;
    ambientTime += delta;
    if (screenName === "playing") updateGame(delta);
    drawFrame(delta);
    requestAnimationFrame(frame);
}

document.addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (button) handleAction(button.dataset.action);
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        if (screenName === "playing") {
            event.preventDefault();
            setScreen("paused");
        } else if (screenName === "paused") {
            event.preventDefault();
            setScreen("playing");
        }
        return;
    }

    if (event.repeat || screenName !== "playing" || event.target === touchInput || event.key.length !== 1) return;
    handleCharacter(event.key);
});

touchInput.addEventListener("input", () => {
    const typedText = touchInput.value;
    touchInput.value = "";
    for (const character of typedText) handleCharacter(character);
});

for (const [input, setting, output] of [
    [soundInput, "sound", soundValue],
    [musicInput, "music", musicValue]
]) {
    input.addEventListener("input", () => {
        settings[setting] = Number(input.value);
        output.value = `${settings[setting]}%`;
        output.textContent = `${settings[setting]}%`;
        if (setting === "music") setMusicActive(screenName === "playing");
        saveData();
    });
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("orientationchange", resizeCanvas);

updateSettingsControls();
updateStatsScreen();
setScreen("title");
resizeCanvas();
requestAnimationFrame(frame);
