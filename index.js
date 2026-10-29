const defaultWords = [
  "comet",
  "orbit",
  "galaxy",
  "rocket",
  "meteor",
  "planet",
  "cosmos",
  "nebula",
  "starlight",
  "gravity",
  "satellite",
  "asteroid",
  "eclipse",
  "voyage",
  "signal",
  "captain",
  "shield",
  "engine",
  "crystal",
  "horizon",
  "quantum",
  "photon",
  "react",
  "jsx",
  "components",
  "props",
  "state",
  "hooks",
  "usestate",
  "useeffect",
  "usecontext",
  "reducer",
  "action",
  "store",
  "middleware",
  "redux",
  "router",
  "virtualdom",
  "suspense",
  "boundary",
  "portals",
  "ref",
  "fragments",
  "context",
  "immutability",
  "composition",
  "webpack",
  "babel",
  "typescript",
  "javascript",
  "eslint",
  "prettier",
  "testing",
  "storybook",
  "graphql",
  "apollo",
  "material",
  "interface",
  "function",
  "variable",
  "object",
  "array",
  "promise",
  "callback",
  "module",
  "browser",
  "server",
  "render",
  "component",
  "animation",
  "canvas",
  "pixel",
  "keyboard",
  "firewall",
  "database",
  "network",
  "protocol",
  "algorithm",
  "iteration",
  "recursive",
  "compile",
  "runtime",
  "debugger",
  "terminal",
  "repository",
  "branch",
  "commit",
  "release",
  "package",
  "dependency",
  "document",
  "element",
  "selector",
  "stylesheet",
  "gradient",
  "responsive",

  //! from here maths words

  "equation",
  "inequality",
  "polynomial",
  "coefficient",
  "constant",
  "factor",
  "root",
  "degree",
  "discriminant",
  "reciprocal",
  "remainder",
  "quotient",
  "simultaneous",
  "identity",
  "substitution",
  "matrix",
  "determinant",
  "singular",
  "non-singular",
  "transpose",
  "inverse",
  "identity-matrix",
  "order",
  "symmetric",
  "skew-symmetric",
  "trace",
  "adjoint",
  "minor",
  "cofactor",
  "rank",
  "slope",
  "intercept",
  "collinear",
  "perpendicular",
  "parallel",
  "distance",
  "midpoint",
  "locus",
  "tangent",
  "normal",
  "chord",
  "radius",
  "diameter",
  "concentric",
  "eccentricity",
  "sine",
  "cosine",
  "tangent",
  "cotangent",
  "secant",
  "cosecant",
  "periodicity",
  "amplitude",
  "principal-value",
  "complementary",
  "limit",
  "continuity",
  "derivative",
  "differentiation",
  "integration",
  "antiderivative",
  "maximum",
  "minimum",
  "stationary-point",
  "inflection-point",
  "increasing",
  "decreasing",
  "definite-integral",
  "indefinite-integral",
  "asymptote",
  "probability",
  "sample-space",
  "event",
  "mutually-exclusive",
  "independent",
  "conditional-probability",
  "permutation",
  "combination",
  "mean",
  "median",
  "mode",
  "variance",
  "standard-deviation",
  "random-variable",
  "expected-value",
  "union",
  "intersection",
  "complement",
  "subset",
  "domain",
  "range",
  "one-to-one",
  "onto",
  "bijective",
  "composite-function",
  "arithmetic-progression",
  "geometric-progression",
  "convergence",
  "divergence",
  "periodic-function",
];

const storageKey = "wordwave-save-v1";
const weaponCatalog = [
  {
    id: "laser",
    name: "Laser Bolts",
    color: "#ff4a4a",
    info: "Twin pulsed light bolts",
  },
  {
    id: "plasma",
    name: "Plasma Blast",
    color: "#5dff8a",
    info: "Glowing plasma orb",
  },
  {
    id: "particle",
    name: "Particle Beam",
    color: "#ffe27a",
    info: "Crackling particle beam",
  },
  {
    id: "ion",
    name: "Ion Cannon",
    color: "#7fd0ff",
    info: "EMP energy sphere",
  },
  {
    id: "rail",
    name: "Railgun",
    color: "#cfe0ff",
    info: "Hyper-velocity rail shot",
  },
  {
    id: "flak",
    name: "Flak Shell",
    color: "#ffb347",
    info: "Explosive flak shell",
  },
  {
    id: "torpedo",
    name: "Photon Torpedo",
    color: "#c08bff",
    info: "Guided photon torpedo",
  },
  {
    id: "swarm",
    name: "Swarm Missiles",
    color: "#ff9a3c",
    info: "Spiraling missile salvo",
  },
  {
    id: "singularity",
    name: "Singularity",
    color: "#a066ff",
    info: "Gravity-warping black hole",
  },
];
const shipDesigns = [
  {
    id: "interceptor",
    name: "Interceptor",
    body: "#112d35",
    trim: "#58f0cf",
    core: "#58f0cf",
    shape: "interceptor",
  },
  {
    id: "scout",
    name: "Scout",
    body: "#142b43",
    trim: "#76b8ff",
    core: "#d8f1ff",
    shape: "scout",
  },
  {
    id: "guardian",
    name: "Guardian",
    body: "#382a1c",
    trim: "#ffb44a",
    core: "#ffe2a6",
    shape: "guardian",
    engineFlame: true,
  },
  {
    id: "comet",
    name: "Comet",
    body: "#30213d",
    trim: "#d38cff",
    core: "#f3dfff",
    shape: "comet",
    engineFlame: true,
  },
  {
    id: "garuda-x",
    name: "GARUDA X",
    imagePath: "assets/spaceships/GARUDA X.png",
    engineFlame: true,
    imageStatus: "loading",
  },
  {
    id: "pushpaka-prime",
    name: "PUSHPAKA PRIME",
    imagePath: "assets/spaceships/PUSHPAKA PRIME.png",
    engineFlame: true,
    imageStatus: "loading",
  },
  {
    id: "ratha-01",
    name: "RATHA 01",
    imagePath: "assets/spaceships/RATHA 01.png",
    imageStatus: "loading",
    engineFlame: true,
  },
  {
    id: "tejas-x",
    name: "TEJAS-X",
    imagePath: "assets/spaceships/TEJAS-X.png",
    imageStatus: "loading",
    engineFlame: true,
  },
  {
    id: "vajra-9",
    name: "VAJRA-9",
    imagePath: "assets/spaceships/VAJRA-9.png",
    imageStatus: "loading",
    engineFlame: true,
  },
  {
    id: "vyoma-01",
    name: "VYOMA-01",
    imagePath: "assets/spaceships/VYOMA-01.png",
    imageStatus: "loading",
    engineFlame: true,
  },
  {
    id: "spyrox",
    name: "SPYROX",
    imagePath: "assets/spaceships/SPYROX.png",
    imageStatus: "loading",
    engineFlame: true,
  },
];
let width = 480;
let height = 720;
let viewScale = 1;
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
const mobileLayout = window.matchMedia("(pointer: coarse), (max-width: 600px)");
const hud = document.getElementById("hud");
const gameKeyboard = document.getElementById("gameKeyboard");
const masterVolumeInput = document.getElementById("masterVolume");
const musicInput = document.getElementById("musicVolume");
const soundEffectsInput = document.getElementById("soundEffectsVolume");
const musicEnabledInput = document.getElementById("musicEnabled");
const soundEffectsEnabledInput = document.getElementById("soundEffectsEnabled");
const shootingMethodInputs = document.querySelectorAll(
  'input[name="shootingMethod"]',
);
const masterVolumeValue = document.getElementById("masterVolumeValue");
const musicValue = document.getElementById("musicValue");
const soundEffectsValue = document.getElementById("soundEffectsValue");
const customWordsInput = document.getElementById("customWords");
const customError = document.getElementById("customError");
const shootSoundInput = document.getElementById("shootSound");
const hitSoundInput = document.getElementById("hitSound");
const backgroundMusicInput = document.getElementById("backgroundMusic");
const audioSources = {
  shoot: {
    "bullet-01": "audio/bullet_sound_01.mp3",
    "bullet-02": "audio/bullet_sound_02.mp3",
    "bullet-03": "audio/bullet_sound_03.mp3",
    "bullet-04": "audio/bullet_sound_04.mp3",
  },
  hit: {
    "bullet-01": "audio/bullet_sound_01.mp3",
    "bullet-02": "audio/bullet_sound_02.mp3",
    "bullet-03": "audio/bullet_sound_03.mp3",
    "bullet-04": "audio/bullet_sound_04.mp3",
  },
  background: {
    "background-01": "audio/background_music_01.mp3",
  },
};

const screens = {
  title: document.getElementById("titleScreen"),
  ships: document.getElementById("shipsScreen"),
  paused: document.getElementById("pauseScreen"),
  settings: document.getElementById("settingsScreen"),
  stats: document.getElementById("statsScreen"),
  custom: document.getElementById("customScreen"),
  gameOver: document.getElementById("gameOverScreen"),
};
const homeSidebarAd = document.getElementById("home-sidebar-ad");
const gameSidebarAd = document.getElementById("game-sidebar-ad");
const initializedAdUnits = new WeakSet();

/* ===== WEAPON EFFECTS (integrated) ===== */
/* =====================================================================
   WORDWAVE – WEAPON EFFECTS ADD-ON  (load AFTER your game script)
   Every weapon now does something real. Non-final keystrokes get a light
   effect on the word being typed; the FINAL letter (word completes) also
   triggers the weapon's area effect, which eliminates nearby words.
   Tune everything in WEAPON_FX below.
   ===================================================================== */
const WEAPON_FX = {
  laser: { speed: 1300 },
  plasma: { speed: 560, blast: 75 }, // splash melt (+ slows the hit word)
  particle: { speed: 3000, line: 3000 }, // instant beam: kills EVERY word in the line
  ion: { speed: 850, freeze: 240, chain: 2 }, // EMP freezes words, lightning zaps 2 nearest
  rail: { speed: 2200, line: 3000 }, // piercing slug: kills everything in the line
  flak: { speed: 950, blast: 90, shards: true }, // proximity burst + shrapnel cloud
  torpedo: { speed: 300, accel: 900, max: 760, homing: true, blast: 160 }, // slow homing warhead, huge blast
  swarm: { speed: 700, homing: true, spiral: true, blast: 50 }, // 4 drunk micro-missiles
  singularity: { speed: 520, well: true }, // black hole drags words in, then collapses
};
const AOE_SCORE_FRACTION = 0.5; // score given for words eliminated by an effect (vs. typed)
const weaponFx = {
  wells: [],
  rings: [],
  beams: [],
  arcs: [],
  flashes: [],
  puffs: [],
};

/* ---------- hooks used by your game code ---------- */
function resetWeaponEffects() {
  weaponFx.wells = [];
  weaponFx.rings = [];
  weaponFx.beams = [];
  weaponFx.arcs = [];
  weaponFx.flashes = [];
  weaponFx.puffs = [];
}
function weaponSpeed() {
  return (WEAPON_FX[selectedWeaponId] || {}).speed || 1050;
}
function weaponBarrelOffsets() {
  if (selectedWeaponId === "swarm") return [-9, -3, 3, 9];
  if (["rail", "particle", "torpedo", "singularity"].includes(selectedWeaponId))
    return [0]; // heavy weapons: ONE shot
  return shootingMethod === "garuda-x" ? [-4, 4] : [0];
}

/* ---------- helpers ---------- */
const fxColor = (id) =>
  (weaponCatalog.find((w) => w.id === id) || {}).color || "#ffffff";
const canClear = (e) => !e.awaitingImpact && e.id !== lockedTargetId;
function rectDist(b, x, y) {
  const dx = Math.max(b.x - x, 0, x - (b.x + b.width)),
    dy = Math.max(b.y - y, 0, y - (b.y + b.height));
  return Math.hypot(dx, dy);
}
function eliminate(e, col, fraction = AOE_SCORE_FRACTION) {
  if (!activeWords.includes(e) || !canClear(e)) return false;
  const b = getTargetBounds(e);
  game.score += Math.round((e.word.length * 10 + game.wave * 5) * fraction);
  activeWords = activeWords.filter((t) => t !== e);
  addBurst(b.x + b.width / 2, b.y + b.height / 2, 14, col);
  updateHud();
  return true;
}
function addRing(x, y, r, col, life = 0.4) {
  weaponFx.rings.push({ x, y, r: r / viewScale, life, max: life, col });
}
function addShrapnel(x, y, n, col) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.283,
      v = (260 + Math.random() * 280) / viewScale;
    particles.push({
      x,
      y,
      vx: Math.cos(a) * v,
      vy: Math.sin(a) * v,
      life: 0.35,
      maxLife: 0.35,
      radius: 1.7 / viewScale,
      color: col,
    });
  }
}
function jag(x1, y1, x2, y2) {
  const pts = [[x1, y1]],
    n = 7,
    nx = -(y2 - y1),
    ny = x2 - x1,
    L = Math.hypot(nx, ny) || 1;
  for (let i = 1; i < n; i++) {
    const k = i / n,
      j = ((Math.random() - 0.5) * 18) / viewScale;
    pts.push([
      x1 + (x2 - x1) * k + (nx / L) * j,
      y1 + (y2 - y1) * k + (ny / L) * j,
    ]);
  }
  pts.push([x2, y2]);
  return pts;
}

/* ---------- called on EVERY projectile hit (after applyTargetImpact) ---------- */
function weaponOnHit(e, p) {
  const col = fxColor(p.weaponId);
  addBurst(p.x, p.y, 6, col);
  switch (p.weaponId) {
    case "particle":
    case "rail":
      weaponFx.flashes.push({
        x: p.x,
        y: p.y,
        r: 34 / viewScale,
        life: 0.15,
        max: 0.15,
        col,
      });
      break;
    case "ion":
      e.freezeT = Math.max(e.freezeT || 0, 1.2);
      addRing(p.x, p.y, 40, col, 0.3);
      break;
    case "plasma":
      e.slowT = Math.max(e.slowT || 0, 1.5);
      addRing(p.x, p.y, 34, col, 0.3);
      break;
    case "flak":
      addShrapnel(p.x, p.y, 8, col);
      break;
    case "torpedo":
      addRing(p.x, p.y, 50, col, 0.35);
      break;
    case "singularity":
      e.slowT = Math.max(e.slowT || 0, 1);
      addRing(p.x, p.y, 30, col, 0.3);
      break;
  }
  if (p.completesTarget && e.awaitingImpact && !e.fxDone) {
    e.fxDone = true;
    weaponAreaEffect(e, p);
  }
}

/* ---------- area effect when the word is completed ---------- */
function weaponAreaEffect(e, p) {
  const cfg = WEAPON_FX[p.weaponId] || {},
    col = fxColor(p.weaponId),
    others = () => activeWords.filter((o) => o !== e && canClear(o));
  if (cfg.line) {
    // laser / particle beam / railgun
    let dx = p.x - p.originX,
      dy = p.y - p.originY;
    const d = Math.hypot(dx, dy) || 1;
    dx /= d;
    dy /= d;
    const len = d + cfg.line / viewScale,
      ex = p.originX + dx * len,
      ey = p.originY + dy * len;
    for (const o of others())
      if (projectileIntersectsEnemy({ x: ex, y: ey }, o, p.originX, p.originY))
        eliminate(o, col);
    addRing(p.x, p.y, p.weaponId === "rail" ? 70 : 45, col, 0.35);
  }
  if (cfg.blast) {
    // plasma / flak / torpedo / swarm
    const R = cfg.blast / viewScale;
    for (const o of others())
      if (rectDist(getTargetBounds(o), p.x, p.y) < R) eliminate(o, col);
    addRing(p.x, p.y, cfg.blast, col, 0.45);
    addBurst(p.x, p.y, Math.round(cfg.blast / 3), col);
    if (cfg.shards) addShrapnel(p.x, p.y, 30, col);
    if (p.weaponId === "torpedo")
      addRing(p.x, p.y, cfg.blast * 1.5, "#ffffff", 0.3);
  }
  if (cfg.freeze) {
    // ion: EMP freeze + chain lightning
    const R = cfg.freeze / viewScale;
    for (const o of others())
      if (rectDist(getTargetBounds(o), p.x, p.y) < R) o.freezeT = 3;
    addRing(p.x, p.y, cfg.freeze, col, 0.5);
    const near = others()
      .map((o) => ({ o, b: getTargetBounds(o) }))
      .sort((a, c) => rectDist(a.b, p.x, p.y) - rectDist(c.b, p.x, p.y))
      .slice(0, cfg.chain);
    for (const { o, b } of near) {
      weaponFx.arcs.push({
        pts: jag(p.x, p.y, b.x + b.width / 2, b.y + b.height / 2),
        life: 0.3,
        max: 0.3,
        col,
      });
      eliminate(o, col);
    }
  }
  if (cfg.well)
    weaponFx.wells.push({
      x: p.x,
      y: p.y,
      t: 0,
      life: 2.6,
      r: 230 / viewScale,
      col,
    });
}

/* ---------- per-frame update (call BEFORE the enemy-movement loop) ---------- */
function updateWeaponEffects(delta) {
  for (const e of activeWords) {
    // freeze / slow = scale the fall speed
    let s = 1;
    if (e.freezeT > 0) {
      e.freezeT -= delta;
      s = 0;
    } else if (e.slowT > 0) {
      e.slowT -= delta;
      s = 0.35;
    }
    if (s < 1) e.y -= e.speed * (1 - s) * delta;
  }
  for (const p of projectiles) {
    // torpedo / swarm homing
    const cfg = WEAPON_FX[p.weaponId];
    if (!cfg) continue;
    weaponTrail(p);
    if (cfg.accel)
      p.speed = Math.min(
        cfg.max / viewScale,
        p.speed + (cfg.accel / viewScale) * delta,
      );
    if (!cfg.homing) continue;
    const t = activeWords.find((e) => e.id === p.targetId);
    if (!t) continue;
    const pt = getTargetPoint(t);
    let dx = pt.x - p.x,
      dy = pt.y - p.y;
    const d = Math.hypot(dx, dy) || 1;
    dx /= d;
    dy /= d;
    if (cfg.spiral) {
      // "drunk" missiles: wobble first, then snap on
      p.phase = p.phase ?? Math.random() * 6;
      const a =
          Math.sin(p.age * 22 + p.phase) * 1.1 * Math.max(0, 1 - p.age / 0.5),
        c = Math.cos(a),
        s = Math.sin(a);
      [dx, dy] = [dx * c - dy * s, dx * s + dy * c];
    }
    const k = cfg.spiral ? 1 : Math.min(1, delta * 5);
    p.vx += (dx - p.vx) * k;
    p.vy += (dy - p.vy) * k;
    const m = Math.hypot(p.vx, p.vy) || 1;
    p.vx /= m;
    p.vy /= m;
    p.maxDistance = Math.max(
      p.maxDistance,
      p.distanceTraveled + d + 150 / viewScale,
    );
  }
  for (const w of weaponFx.wells) {
    // singularity gravity wells
    w.t += delta;
    for (const o of [...activeWords]) {
      const b = getTargetBounds(o),
        dx = w.x - (b.x + b.width / 2),
        dy = w.y - (b.y + b.height / 2),
        d = Math.hypot(dx, dy);
      if (d < w.r) {
        const f = (((1 - d / w.r) * 420) / viewScale) * delta;
        o.x += (dx / (d || 1)) * f;
        o.y += (dy / (d || 1)) * f;
      }
      if (d < 34 / viewScale) eliminate(o, w.col, 0.75);
    }
    if (w.t >= w.life) {
      // collapse
      for (const o of [...activeWords])
        if (rectDist(getTargetBounds(o), w.x, w.y) < 110 / viewScale)
          eliminate(o, w.col, 0.75);
      addRing(w.x, w.y, 130, w.col, 0.5);
      addRing(w.x, w.y, 200, "#ffffff", 0.35);
      addBurst(w.x, w.y, 40, w.col);
      w.dead = true;
    }
  }
  weaponFx.wells = weaponFx.wells.filter((w) => !w.dead);
  for (const k of ["rings", "beams", "arcs", "flashes", "puffs"]) {
    for (const f of weaponFx[k]) f.life -= delta;
    weaponFx[k] = weaponFx[k].filter((f) => f.life > 0);
  }
}

/* ---------- drawing (call after drawProjectiles) ---------- */
function drawWeaponEffects() {
  const c = context,
    s = 1 / viewScale;
  c.save();
  c.lineCap = "round";
  c.globalCompositeOperation = "lighter";
  for (const e of activeWords) {
    // frozen / slowed word markers
    if (!(e.freezeT > 0 || e.slowT > 0)) continue;
    const b = getTargetBounds(e),
      frozen = e.freezeT > 0;
    c.strokeStyle = frozen ? "rgba(127,208,255,.9)" : "rgba(93,255,138,.7)";
    c.lineWidth = 2 * s;
    c.strokeRect(b.x - 2 * s, b.y - 2 * s, b.width + 4 * s, b.height + 4 * s);
    if (frozen) {
      c.fillStyle = "rgba(127,208,255,.16)";
      c.fillRect(b.x, b.y, b.width, b.height);
    }
  }
  for (const f of weaponFx.puffs) {
    const k = f.life / f.max;
    c.globalAlpha = k * 0.55;
    fxGlow(c, f.x, f.y, f.size * (2 - k), f.col);
  }
  for (const f of weaponFx.flashes) {
    const k = f.life / f.max;
    c.globalAlpha = k;
    fxGlow(c, f.x, f.y, f.r * (1.2 - 0.4 * k), f.col);
    fxGlow(c, f.x, f.y, f.r * 0.45, "#ffffff");
  }
  for (const b of weaponFx.beams) {
    const k = b.life / b.max;
    c.globalAlpha = k;
    c.strokeStyle = b.col;
    c.lineWidth = b.w * k * s * 1.8;
    c.beginPath();
    c.moveTo(b.x1, b.y1);
    c.lineTo(b.x2, b.y2);
    c.stroke();
    c.strokeStyle = "#ffffff";
    c.lineWidth = Math.max(1, b.w * 0.35 * k) * s;
    c.beginPath();
    c.moveTo(b.x1, b.y1);
    c.lineTo(b.x2, b.y2);
    c.stroke();
  }
  for (const r of weaponFx.rings) {
    const k = r.life / r.max;
    c.globalAlpha = k;
    c.strokeStyle = r.col;
    c.lineWidth = (4 * k + 1) * s;
    c.beginPath();
    c.arc(r.x, r.y, r.r * (1 - k), 0, 7);
    c.stroke();
  }
  for (const a of weaponFx.arcs) {
    c.globalAlpha = a.life / a.max;
    for (const [col, w] of [
      [a.col, 5],
      ["#ffffff", 1.6],
    ]) {
      c.strokeStyle = col;
      c.lineWidth = w * s;
      c.beginPath();
      a.pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
      c.stroke();
    }
  }
  for (const w of weaponFx.wells) {
    // black holes (dark core needs normal compositing)
    const fade = Math.min(1, w.t * 4, (w.life - w.t) * 2 + 0.2),
      cr = (24 + 4 * Math.sin(ambientTime * 10)) * s;
    c.globalAlpha = fade;
    const g = c.createRadialGradient(w.x, w.y, 0, w.x, w.y, cr * 3.4);
    g.addColorStop(0, w.col);
    g.addColorStop(1, w.col + "00");
    c.fillStyle = g;
    c.beginPath();
    c.arc(w.x, w.y, cr * 3.4, 0, 7);
    c.fill();
    for (let i = 0; i < 3; i++) {
      // inward-rushing rings
      const k = (ambientTime * 0.8 + i / 3) % 1;
      c.globalAlpha = fade * 0.45 * k;
      c.strokeStyle = w.col;
      c.lineWidth = 2 * s;
      c.beginPath();
      c.arc(w.x, w.y, w.r * (1 - k), 0, 7);
      c.stroke();
    }
    c.globalCompositeOperation = "source-over";
    c.globalAlpha = fade;
    c.fillStyle = "#05020c";
    c.beginPath();
    c.arc(w.x, w.y, cr, 0, 7);
    c.fill();
    c.globalCompositeOperation = "lighter";
    c.strokeStyle = "#d9c2ff";
    c.lineWidth = 2 * s;
    for (let i = 0; i < 2; i++) {
      c.beginPath();
      c.ellipse(w.x, w.y, cr * 2.2, cr * 0.7, ambientTime * 3 + i * 1.6, 0, 7);
      c.stroke();
    }
    c.strokeStyle = w.col;
    c.lineWidth = 3 * s;
    c.beginPath();
    c.arc(w.x, w.y, cr, 0, 7);
    c.stroke();
  }
  c.restore();
}

/* ---------- muzzle flash, beams and flight trails (called when you fire / every frame) ---------- */
function fxGlow(c, x, y, r, col) {
  const g = c.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, col);
  g.addColorStop(1, col + "00");
  c.fillStyle = g;
  c.beginPath();
  c.arc(x, y, r, 0, 7);
  c.fill();
}
function weaponOnFire(list) {
  const s = 1 / viewScale;
  for (const p of list) {
    const col = fxColor(p.weaponId),
      cfg = WEAPON_FX[p.weaponId] || {},
      big = p.weaponId === "torpedo" || p.weaponId === "singularity";
    const mx = p.originX + p.vx * 30 * s,
      my = p.originY + p.vy * 30 * s;
    weaponFx.flashes.push({
      x: mx,
      y: my,
      r: (big ? 40 : 28) * s,
      life: 0.14,
      max: 0.14,
      col,
    });
    if (p.weaponId === "rail") addRing(mx, my, 60, col, 0.3);
    if (cfg.line > 1000) {
      // ONE beam per shot (particle beam / railgun)
      const toTarget = Math.hypot(p.targetX - p.originX, p.targetY - p.originY);
      const len = p.completesTarget ? 3000 * s : toTarget;
      weaponFx.beams.push({
        x1: mx,
        y1: my,
        x2: p.originX + p.vx * len,
        y2: p.originY + p.vy * len,
        life: 0.22,
        max: 0.22,
        w: p.weaponId === "rail" ? 3 : 10,
        col,
      });
    }
  }
}
function weaponTrail(p) {
  const col = fxColor(p.weaponId),
    r = Math.random,
    s = 1 / viewScale;
  const puff = (size, life, c = col) =>
    weaponFx.puffs.push({
      x: p.x,
      y: p.y,
      size: size * s,
      life,
      max: life,
      col: c,
    });
  const spark = (n, sp, life, c = col) => {
    for (let i = 0; i < n; i++)
      particles.push({
        x: p.x,
        y: p.y,
        vx: (r() - 0.5) * sp * s,
        vy: (r() - 0.5) * sp * s,
        life,
        maxLife: life,
        radius: 1.6 * s,
        color: c,
      });
  };
  switch (p.weaponId) {
    case "laser":
      if (r() < 0.5) spark(1, 60, 0.15, "#ffd0d0");
      break;
    case "plasma":
      puff(11, 0.28);
      break;
    case "ion":
      spark(2, 120, 0.22, "#bfe8ff");
      break;
    case "flak":
      spark(1, 90, 0.2, "#ffd27a");
      puff(6, 0.2);
      break;
    case "torpedo":
      puff(15, 0.4);
      puff(7, 0.3, "#ffffff");
      break;
    case "swarm":
      puff(8, 0.3);
      break;
    case "singularity":
      spark(2, 100, 0.35, "#d9c2ff");
      break;
    case "rail":
      if (r() < 0.6) spark(1, 40, 0.2, "#ffffff");
      break;
  }
}
/* ===== END WEAPON EFFECTS ===== */

function defaultSaveData() {
  return {
    settings: {
      masterVolume: 100,
      musicVolume: 35,
      soundEffectsVolume: 60,
      musicEnabled: true,
      soundEffectsEnabled: true,
    },
    stats: {
      bestScore: 0,
      bestWave: 0,
      gamesPlayed: 0,
      bestStreak: 0,
      bestAccuracy: 0,
    },
    selectedShip: "interceptor",
    shootingMethod: "standard",
    selectedWeapon: "laser",
    audioSelection: {
      shoot: "bullet-03",
      hit: "bullet-03",
      background: "background-01",
    },
    customWords: "",
  };
}

function readSave() {
  let raw;
  try {
    raw = localStorage.getItem(storageKey);
  } catch (error) {
    console.error("Saved game data could not be accessed.", error);
    return defaultSaveData();
  }
  if (!raw) return defaultSaveData();

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch (error) {
    console.error("Saved game data could not be read.", error);
    return defaultSaveData();
  }
  if (!saved || typeof saved !== "object") saved = {};

  const settings =
    saved.settings && typeof saved.settings === "object" ? saved.settings : {};
  const stats =
    saved.stats && typeof saved.stats === "object" ? saved.stats : {};
  const selectedShip = shipDesigns.some(
    (ship) => ship.id === saved.selectedShip,
  )
    ? saved.selectedShip
    : "interceptor";
  const selectedWeapon = weaponCatalog.some(
    (weapon) => weapon.id === saved.selectedWeapon,
  )
    ? saved.selectedWeapon
    : "laser";
  const savedAudioSelection =
    saved.audioSelection && typeof saved.audioSelection === "object"
      ? saved.audioSelection
      : {};
  const validAudioSelection = (kind, value) => {
    if (Object.prototype.hasOwnProperty.call(audioSources[kind], value))
      return value;
    return kind === "background" ? "background-01" : "bullet-03";
  };
  const boundedVolume = (value, fallback) =>
    Number.isFinite(value) ? Math.max(0, Math.min(100, value)) : fallback;
  return {
    selectedShip,
    shootingMethod:
      saved.shootingMethod === "garuda-x" ? "garuda-x" : "standard",
    selectedWeapon,
    audioSelection: {
      shoot: validAudioSelection("shoot", savedAudioSelection.shoot),
      hit: validAudioSelection("hit", savedAudioSelection.hit),
      background: validAudioSelection(
        "background",
        savedAudioSelection.background,
      ),
    },
    settings: {
      masterVolume: boundedVolume(settings.masterVolume, 100),
      musicVolume: boundedVolume(
        settings.musicVolume,
        boundedVolume(settings.music, 35),
      ),
      soundEffectsVolume: boundedVolume(
        settings.soundEffectsVolume,
        boundedVolume(settings.sound, 60),
      ),
      musicEnabled:
        typeof settings.musicEnabled === "boolean"
          ? settings.musicEnabled
          : true,
      soundEffectsEnabled:
        typeof settings.soundEffectsEnabled === "boolean"
          ? settings.soundEffectsEnabled
          : true,
    },
    stats: {
      bestScore: Number.isFinite(stats.bestScore)
        ? Math.max(0, stats.bestScore)
        : 0,
      bestWave: Number.isFinite(stats.bestWave)
        ? Math.max(0, stats.bestWave)
        : 0,
      gamesPlayed: Number.isFinite(stats.gamesPlayed)
        ? Math.max(0, stats.gamesPlayed)
        : 0,
      bestStreak: Number.isFinite(stats.bestStreak)
        ? Math.max(0, stats.bestStreak)
        : 0,
      bestAccuracy: Number.isFinite(stats.bestAccuracy)
        ? Math.max(0, Math.min(100, stats.bestAccuracy))
        : 0,
    },
    customWords:
      typeof saved.customWords === "string"
        ? saved.customWords.slice(0, 2000)
        : "",
  };
}

const savedData = readSave();
const settings = savedData.settings;
const lifetimeStats = savedData.stats;
customWordsInput.value = savedData.customWords;
let selectedShipId = savedData.selectedShip;
let shootingMethod = savedData.shootingMethod;
let selectedWeaponId = savedData.selectedWeapon;
const audioSelection = savedData.audioSelection;
let screenName = "title";
let shipsReturnScreen = "title";
let settingsReturnScreen = "title";
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
const restAimAngle = -Math.PI / 2;
let audioContext = null;
let audioInitialized = false;
let backgroundAudio = null;
let musicActive = false;
let musicPlayPending = false;
const audioPools = { shoot: [], hit: [] };
const audioPoolPositions = { shoot: 0, hit: 0 };
const reportedAudioErrors = new Set();
let game = createGameState();

let stars = [];

function createStars() {
  const count = Math.max(90, Math.round((width * height) / 3800));
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: (Math.random() * 1.35 + 0.25) / viewScale,
    speed: (Math.random() * 7 + 2) / viewScale,
    alpha: Math.random() * 0.55 + 0.15,
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
    damageFlash: 0,
  };
}

function saveData() {
  try {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        settings,
        stats: lifetimeStats,
        selectedShip: selectedShipId,
        shootingMethod,
        selectedWeapon: selectedWeaponId,
        audioSelection,
        customWords: customWordsInput.value,
      }),
    );
  } catch (error) {
    console.error("Game data could not be saved.", error);
  }
}

function currentAccuracy() {
  if (game.totalKeys === 0) return 100;
  return Math.round((game.correctKeys / game.totalKeys) * 1000) / 10;
}

function initializeAd(container) {
  const adUnit = container.querySelector(".adsbygoogle");
  if (
    !adUnit ||
    !/^\d+$/.test(adUnit.dataset.adSlot || "") ||
    initializedAdUnits.has(adUnit) ||
    container.getClientRects().length === 0
  ) {
    return;
  }

  initializedAdUnits.add(adUnit);
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (error) {
    console.error("Google AdSense unit could not be initialized.", error);
  }
}

function setScreen(nextScreen) {
  screenName = nextScreen;
  for (const [name, element] of Object.entries(screens)) {
    element.hidden = name !== nextScreen;
  }
  hud.hidden = nextScreen !== "playing";
  homeSidebarAd.hidden = nextScreen !== "title";
  gameKeyboard.hidden = nextScreen !== "playing";
  if (nextScreen === "title") initializeAd(homeSidebarAd);
  if (nextScreen === "playing") initializeAd(gameSidebarAd);
  if (nextScreen === "playing") setMusicActive(true);
  updateHud();

  if (nextScreen === "ships") {
    drawShipPreviews();
    updateWeaponChoices();
  }
}

function updateHud() {
  document.getElementById("scoreValue").textContent =
    game.score.toLocaleString();
  document.getElementById("waveValue").textContent = String(game.wave).padStart(
    2,
    "0",
  );
  document.getElementById("livesValue").textContent = String(game.hull);
  document.getElementById("accuracyValue").textContent =
    `${currentAccuracy()}%`;
  document.getElementById("streakValue").textContent = String(game.streak);
}

function updateStatsScreen() {
  document.getElementById("bestScoreValue").textContent =
    lifetimeStats.bestScore.toLocaleString();
  document.getElementById("bestWaveValue").textContent = String(
    lifetimeStats.bestWave,
  );
  document.getElementById("gamesPlayedValue").textContent = String(
    lifetimeStats.gamesPlayed,
  );
  document.getElementById("bestStreakValue").textContent = String(
    lifetimeStats.bestStreak,
  );
  document.getElementById("bestAccuracyValue").textContent =
    `${lifetimeStats.bestAccuracy}%`;
}

function updateSettingsControls() {
  masterVolumeInput.value = String(settings.masterVolume);
  musicInput.value = String(settings.musicVolume);
  soundEffectsInput.value = String(settings.soundEffectsVolume);
  masterVolumeValue.value = `${settings.masterVolume}%`;
  musicValue.value = `${settings.musicVolume}%`;
  soundEffectsValue.value = `${settings.soundEffectsVolume}%`;
  masterVolumeValue.textContent = `${settings.masterVolume}%`;
  musicValue.textContent = `${settings.musicVolume}%`;
  soundEffectsValue.textContent = `${settings.soundEffectsVolume}%`;
  musicEnabledInput.checked = settings.musicEnabled;
  soundEffectsEnabledInput.checked = settings.soundEffectsEnabled;
  shootSoundInput.value = audioSelection.shoot;
  hitSoundInput.value = audioSelection.hit;
  backgroundMusicInput.value = audioSelection.background;
  document.getElementById("musicEnabledLabel").textContent =
    settings.musicEnabled ? "Music on" : "Music off";
  document.getElementById("soundEffectsEnabledLabel").textContent =
    settings.soundEffectsEnabled ? "Sound effects on" : "Sound effects off";
  updateAudioVolumes();
  setMusicActive(musicActive);
  shootingMethodInputs.forEach((input) => {
    input.checked = input.value === shootingMethod;
  });
}

function effectiveMusicVolume() {
  return settings.musicEnabled
    ? Math.max(
        0,
        Math.min(
          1,
          ((settings.masterVolume / 100) * settings.musicVolume) / 100,
        ),
      )
    : 0;
}

function effectiveSoundEffectsVolume() {
  return settings.soundEffectsEnabled
    ? Math.max(
        0,
        Math.min(
          1,
          ((settings.masterVolume / 100) * settings.soundEffectsVolume) / 100,
        ),
      )
    : 0;
}

function reportAudioError(kind, error) {
  if (reportedAudioErrors.has(kind)) return;
  reportedAudioErrors.add(kind);
  console.warn(`Audio ${kind} could not be played.`, error || "");
}

function configureAudioElement(audio, kind) {
  audio.preload = "auto";
  audio.addEventListener("error", () => {
    reportAudioError(
      kind,
      audio.error ? audio.error.message : "Audio file unavailable.",
    );
  });
}

function initializeAudio() {
  if (audioInitialized) return;
  audioInitialized = true;
  if (typeof Audio !== "function") {
    reportAudioError("background", "This browser does not support HTML audio.");
    return;
  }

  backgroundAudio = new Audio(
    audioSources.background[audioSelection.background],
  );
  backgroundAudio.loop = true;
  configureAudioElement(backgroundAudio, "background");
  for (const kind of ["shoot", "hit"]) {
    audioPools[kind] = Array.from({ length: 4 }, () => {
      const audio = new Audio(audioSources[kind][audioSelection[kind]]);
      configureAudioElement(audio, kind);
      return audio;
    });
  }
  updateAudioVolumes();
}

function updateAudioSources() {
  if (!audioInitialized) return;
  const backgroundSource = audioSources.background[audioSelection.background];
  if (backgroundAudio && !backgroundAudio.src.endsWith(backgroundSource)) {
    backgroundAudio.src = backgroundSource;
    backgroundAudio.load();
  }
  for (const kind of ["shoot", "hit"]) {
    const source = audioSources[kind][audioSelection[kind]];
    for (const audio of audioPools[kind]) {
      if (!audio.src.endsWith(source)) {
        audio.src = source;
        audio.load();
      }
    }
  }
}

function updateAudioVolumes() {
  updateAudioSources();
  const musicVolume = effectiveMusicVolume();
  if (backgroundAudio) backgroundAudio.volume = musicVolume;
  for (const pool of Object.values(audioPools)) {
    for (const audio of pool) audio.volume = effectiveSoundEffectsVolume();
  }
}

function setMusicActive(active) {
  musicActive = active;
  if (!audioInitialized && active) initializeAudio();
  if (!backgroundAudio) return;

  updateAudioVolumes();
  if (!musicActive || effectiveMusicVolume() === 0) {
    backgroundAudio.pause();
    musicPlayPending = false;
    return;
  }

  if (backgroundAudio.paused && !musicPlayPending) {
    musicPlayPending = true;
    try {
      const playback = backgroundAudio.play();
      if (playback && typeof playback.then === "function") {
        playback
          .then(() => {
            musicPlayPending = false;
          })
          .catch((error) => {
            musicPlayPending = false;
            reportAudioError("background", error);
          });
      } else {
        musicPlayPending = false;
      }
    } catch (error) {
      musicPlayPending = false;
      reportAudioError("background", error);
    }
  }
}

function playAudioEffect(kind) {
  if (!settings.soundEffectsEnabled || effectiveSoundEffectsVolume() === 0)
    return;
  initializeAudio();
  const pool = audioPools[kind];
  if (!pool || pool.length === 0) return;

  let audio = pool.find((candidate) => candidate.paused || candidate.ended);
  if (!audio) {
    const position = audioPoolPositions[kind] % pool.length;
    audio = pool[position];
    audioPoolPositions[kind] = position + 1;
  }
  audio.volume = effectiveSoundEffectsVolume();
  try {
    audio.currentTime = 0;
    const playback = audio.play();
    if (playback && typeof playback.catch === "function") {
      playback.catch((error) => reportAudioError(kind, error));
    }
  } catch (error) {
    reportAudioError(kind, error);
  }
}

function playTone(frequency, duration, volume = 0.04, type = "sine") {
  const effectiveVolume = effectiveSoundEffectsVolume();
  if (effectiveVolume === 0) return;
  initializeAudio();
  const AudioContextConstructor =
    window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return;
  if (!audioContext) audioContext = new AudioContextConstructor();
  if (audioContext.state === "suspended") {
    audioContext
      .resume()
      .catch((error) =>
        console.warn("Synthesized sound could not be resumed.", error),
      );
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(volume * effectiveVolume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function startGame(wordList = defaultWords) {
  wordsForGame = wordList;
  createGameKeyboard(wordList);
  game = createGameState();
  activeWords = [];
  projectiles = [];
  particles = [];
  lockedTargetId = null;
  aimAngle = restAimAngle;
  nextEnemyId = 1;
  resetWeaponEffects();
  startWave();
  initializeAudio();
  setScreen("playing");
  updateHud();
}

function startWave() {
  const count = Math.min(3 + game.wave, 10);
  spawnQueue = Array.from(
    { length: count },
    () => wordsForGame[Math.floor(Math.random() * wordsForGame.length)],
  );
  game.spawnTimer = 0.5;
  game.waveBanner = 1.8;
}

function spawnEnemy(word) {
  const maxX = Math.max(
    18 / viewScale,
    width -
      Math.min(
        190 / viewScale,
        (word.length * 14) / viewScale + 24 / viewScale,
      ),
  );
  activeWords.push({
    id: nextEnemyId++,
    word,
    x: 18 / viewScale + Math.random() * Math.max(1, maxX - 18 / viewScale),
    y: -30 / viewScale - (Math.random() * 45) / viewScale,
    speed: (17 + game.wave * 1.7 + Math.random() * 5) / viewScale,
    typed: 0,
    wobble: Math.random() * Math.PI * 2,
    pushX: 0,
    pushY: 0,
    pushVx: 0,
    pushVy: 0,
    hitFlash: 0,
    awaitingImpact: false,
    pendingFinalProjectiles: 0,
  });
}

function updateGame(delta) {
  game.elapsed += delta;
  game.waveBanner = Math.max(0, game.waveBanner - delta);
  game.damageFlash = Math.max(0, game.damageFlash - delta);
  updateWeaponEffects(delta);

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
    enemy.pushX += enemy.pushVx * delta;
    enemy.pushY += enemy.pushVy * delta;
    enemy.pushY *= Math.exp(-4.5 * delta); // word settles back into its lane
    const pushDamping = Math.exp(-7 * delta);
    enemy.pushVx *= pushDamping;
    enemy.pushVy *= pushDamping;
    enemy.hitFlash = Math.max(0, enemy.hitFlash - delta);
    if (Math.hypot(enemy.pushX, enemy.pushY) < 0.15 / viewScale) {
      enemy.pushX = 0;
      enemy.pushY = 0;
    }
    if (enemy.y + enemy.pushY > height - 112 / viewScale) {
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
    const previousX = projectile.x;
    const previousY = projectile.y;
    projectile.age += delta;
    projectile.x += projectile.vx * stepDistance;
    projectile.y += projectile.vy * stepDistance;
    projectile.distanceTraveled += stepDistance;

    const target = activeWords.find(
      (enemy) => enemy.id === projectile.targetId,
    );
    if (
      target &&
      projectileIntersectsEnemy(projectile, target, previousX, previousY)
    ) {
      applyTargetImpact(target, projectile);
      weaponOnHit(target, projectile);
      playAudioEffect("hit");
      addBurst(projectile.x, projectile.y, 5, "#8ffff0");
      projectiles.splice(index, 1);
      if (projectile.completesTarget && target.awaitingImpact) {
        completeWord(target);
      }
      continue;
    }

    if (projectile.distanceTraveled >= projectile.maxDistance || !target) {
      if (projectile.completesTarget && target) {
        resolveMissedFinalProjectile(target, projectile);
      }
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
    const locked = activeWords.find((enemy) => enemy.id === lockedTargetId);
    if (locked) return locked;
    lockedTargetId = null;
  }

  const candidates = activeWords
    .filter(
      (enemy) =>
        enemy.typed === 0 &&
        !enemy.awaitingImpact &&
        enemy.word[0] === character,
    )
    .sort((left, right) => right.y - left.y);
  return candidates[0] || null;
}

function handleCharacter(character) {
  const normalized = character.toLowerCase();
  if (!/^[a-z0-9'-]$/.test(normalized) || screenName !== "playing") return;

  game.totalKeys += 1;
  let target =
    lockedTargetId === null
      ? findTargetFor(normalized)
      : activeWords.find((enemy) => enemy.id === lockedTargetId);

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
  const completesTarget = target.typed === target.word.length;
  if (completesTarget) {
    target.awaitingImpact = true;
    target.pendingFinalProjectiles = 0;
  }
  const firedProjectiles = fireAt(target, completesTarget);
  if (completesTarget) {
    target.pendingFinalProjectiles = firedProjectiles;
    lockedTargetId = null;
  }
  updateHud();
}

function fireAt(enemy, completesTarget = false) {
  const { x: targetX, y: targetY } = getTargetPoint(enemy);
  const ship = getShipOrigin();
  const barrelOffsets = [...new Set(weaponBarrelOffsets())];
  const projectilesToFire = barrelOffsets.map((barrelOffset, volleyIndex) => {
    const barrelX = ship.x - (Math.sin(aimAngle) * barrelOffset) / viewScale;
    const barrelY = ship.y + (Math.cos(aimAngle) * barrelOffset) / viewScale;
    const deltaX = targetX - barrelX;
    const deltaY = targetY - barrelY;
    const distance = Math.hypot(deltaX, deltaY);
    const directionX = deltaX / Math.max(distance, 1);
    const directionY = deltaY / Math.max(distance, 1);
    const muzzleOffset = 35 / viewScale;
    return {
      x: barrelX + directionX * muzzleOffset,
      y: barrelY + directionY * muzzleOffset,
      vx: directionX,
      vy: directionY,
      angle: Math.atan2(directionY, directionX),
      age: 0,
      weaponId: selectedWeaponId,
      originX: barrelX,
      originY: barrelY,
      speed: weaponSpeed() / viewScale,
      distanceTraveled: 0,
      maxDistance: Math.max(0, distance - muzzleOffset) + 150 / viewScale,
      targetId: enemy.id,
      targetX,
      targetY,
      completesTarget,
      knock: volleyIndex === 0,
    };
  });
  projectiles.push(...projectilesToFire);
  weaponOnFire(projectilesToFire);
  if (projectilesToFire.length > 0) playAudioEffect("shoot");
  return projectilesToFire.length;
}

function applyTargetImpact(enemy, projectile) {
  enemy.hitFlash = 0.18;
  if (projectile && projectile.knock === false) return; // only ONE nudge per volley (twin barrels / swarm)
  enemy.pushVy = Math.max(-56 / viewScale, enemy.pushVy - 28 / viewScale);
}

function getShipOrigin() {
  return { x: width / 2, y: height - 58 / viewScale };
}

function getTargetPoint(enemy) {
  const bounds = getTargetBounds(enemy);
  const prefix = enemy.word.slice(0, enemy.typed);
  const typedWidth = context.measureText(prefix).width;
  const nextWidth = context.measureText(enemy.word[enemy.typed] || "").width;
  return {
    x: bounds.x + 10 / viewScale + typedWidth + nextWidth / 2,
    y: bounds.y + bounds.height / 2,
  };
}

function getTargetBounds(enemy) {
  const fontSize = 17 / viewScale;
  context.font = `500 ${fontSize}px "Trebuchet MS", "Segoe UI", sans-serif`;
  const textWidth = context.measureText(enemy.word).width;
  const widthWithPadding = textWidth + 20 / viewScale;
  return {
    x: Math.max(
      6 / viewScale,
      Math.min(width - widthWithPadding - 6 / viewScale, enemy.x + enemy.pushX),
    ),
    y: enemy.y + enemy.pushY + (Math.sin(enemy.wobble) * 2) / viewScale,
    width: widthWithPadding,
    height: 27 / viewScale,
  };
}

function projectileIntersectsEnemy(projectile, enemy, startX, startY) {
  const bounds = getTargetBounds(enemy);
  const padding = 3 / viewScale;
  const left = bounds.x - padding;
  const right = bounds.x + bounds.width + padding;
  const top = bounds.y - padding;
  const bottom = bounds.y + bounds.height + padding;
  const deltaX = projectile.x - startX;
  const deltaY = projectile.y - startY;
  let minimum = 0;
  let maximum = 1;

  for (const [origin, delta, lower, upper] of [
    [startX, deltaX, left, right],
    [startY, deltaY, top, bottom],
  ]) {
    if (Math.abs(delta) < Number.EPSILON) {
      if (origin < lower || origin > upper) return false;
      continue;
    }
    const first = (lower - origin) / delta;
    const second = (upper - origin) / delta;
    minimum = Math.max(minimum, Math.min(first, second));
    maximum = Math.min(maximum, Math.max(first, second));
    if (minimum > maximum) return false;
  }
  return true;
}

function completeWord(enemy) {
  const bounds = getTargetBounds(enemy);
  game.score += enemy.word.length * 10 + game.wave * 5;
  activeWords = activeWords.filter((target) => target.id !== enemy.id);
  if (lockedTargetId === enemy.id) lockedTargetId = null;
  addBurst(
    bounds.x + bounds.width / 2,
    bounds.y + bounds.height / 2,
    16,
    "#ffb44a",
  );
  playTone(760, 0.18, 0.06, "triangle");
  updateHud();
}

function resolveMissedFinalProjectile(enemy, projectile) {
  enemy.pendingFinalProjectiles -= 1;
  if (enemy.pendingFinalProjectiles > 0 || !enemy.awaitingImpact) return;
  enemy.awaitingImpact = false;
  enemy.typed = 0;
  enemy.pendingFinalProjectiles = 0;
  if (lockedTargetId === enemy.id) lockedTargetId = null;
  addBurst(projectile.x, projectile.y, 4, "#8ffff0");
}

function updateAim(delta) {
  const target = activeWords.find((enemy) => enemy.id === lockedTargetId);
  let targetAngle = restAimAngle;
  if (target) {
    const ship = getShipOrigin();
    const point = getTargetPoint(target);
    targetAngle = Math.atan2(point.y - ship.y, point.x - ship.x);
  }
  const difference = Math.atan2(
    Math.sin(targetAngle - aimAngle),
    Math.cos(targetAngle - aimAngle),
  );
  aimAngle += difference * (1 - Math.exp(-8 * delta));
  if (!target && Math.abs(difference) < 0.001) aimAngle = restAimAngle;
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
      color,
    });
  }
}

function finishGame() {
  const personalBest = game.score > lifetimeStats.bestScore;
  lifetimeStats.gamesPlayed += 1;
  lifetimeStats.bestScore = Math.max(lifetimeStats.bestScore, game.score);
  lifetimeStats.bestWave = Math.max(lifetimeStats.bestWave, game.wave);
  lifetimeStats.bestStreak = Math.max(
    lifetimeStats.bestStreak,
    game.longestStreak,
  );
  lifetimeStats.bestAccuracy = Math.max(
    lifetimeStats.bestAccuracy,
    currentAccuracy(),
  );
  saveData();

  document.getElementById("finalScoreValue").textContent =
    game.score.toLocaleString();
  document.getElementById("finalWaveValue").textContent = String(
    game.wave,
  ).padStart(2, "0");
  document.getElementById("finalAccuracyValue").textContent =
    `${currentAccuracy()}%`;
  document.getElementById("finalStreakValue").textContent = String(
    game.longestStreak,
  );
  document.getElementById("personalBestMessage").hidden = !personalBest;
  setScreen("gameOver");
}

function parseCustomWords() {
  const parsed =
    customWordsInput.value.match(/[a-z0-9]+(?:[-'][a-z0-9]+)?/gi) || [];
  return [...new Set(parsed.map((word) => word.toLowerCase()))].slice(0, 80);
}

function handleAction(action, shipId = null, weaponId = null) {
  if (action === "start") {
    startGame();
  } else if (action === "ships") {
    shipsReturnScreen = screenName;
    setScreen("ships");
  } else if (action === "loadout") {
    shipsReturnScreen = screenName;
    setScreen("ships");
  } else if (action === "select-ship") {
    if (shipDesigns.some((ship) => ship.id === shipId)) {
      selectedShipId = shipId;
      saveData();
      updateShipChoices();
    }
  } else if (action === "select-weapon") {
    if (weaponCatalog.some((weapon) => weapon.id === weaponId)) {
      selectedWeaponId = weaponId;
      saveData();
      updateWeaponChoices();
    }
  } else if (action === "start-custom") {
    const customWords = parseCustomWords();
    if (customWords.length === 0) {
      customError.textContent =
        "Enter at least one word using letters or numbers.";
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
    settingsReturnScreen = screenName;
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
  } else if (action === "menu-back") {
    setScreen(
      screenName === "settings" ? settingsReturnScreen : shipsReturnScreen,
    );
  }
}

function drawBackground(delta) {
  const gradient = context.createRadialGradient(
    width * 0.5,
    height * 0.52,
    35,
    width * 0.5,
    height * 0.52,
    height * 0.85,
  );
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
  const offset = ((ambientTime * 10) / viewScale) % gridSize;
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

  if (
    screenName === "playing" ||
    screenName === "paused" ||
    screenName === "gameOver"
  ) {
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
  const shipScale = mobileLayout.matches ? 0.75 : 1;
  const shipWidth = (60 * shipScale) / viewScale;
  const shipHeight = (72 * shipScale) / viewScale;
  const ship = getShipOrigin();
  const design = getSelectedShip();
  const entranceProgress =
    screenName === "playing" || screenName === "paused"
      ? Math.min(game.elapsed / 0.9, 1)
      : 1;
  const easedEntrance = 1 - (1 - entranceProgress) ** 3;
  const entranceOffset = (1 - easedEntrance) * (height - ship.y + shipHeight);

  context.save();
  context.translate(ship.x, ship.y + entranceOffset);
  context.rotate(aimAngle + Math.PI / 2);
  drawShipVisual(context, design, shipWidth, shipHeight, 1 / viewScale);
  context.restore();
}

function getSelectedShip() {
  return (
    shipDesigns.find((ship) => ship.id === selectedShipId) || shipDesigns[0]
  );
}

function drawShipVisual(
  targetContext,
  design,
  shipWidth,
  shipHeight,
  unitScale,
) {
  if (design.engineFlame) drawEngineFlame(targetContext, shipHeight, unitScale);
  if (design.imageStatus === "loaded" && design.image) {
    const imageScale = Math.min(
      shipWidth / design.image.naturalWidth,
      shipHeight / design.image.naturalHeight,
    );
    const imageWidth = design.image.naturalWidth * imageScale;
    const imageHeight = design.image.naturalHeight * imageScale;
    targetContext.drawImage(
      design.image,
      -imageWidth / 2,
      -imageHeight / 2,
      imageWidth,
      imageHeight,
    );
    return;
  }
  drawShipDesign(
    targetContext,
    design.imagePath ? shipDesigns[0] : design,
    shipWidth,
    shipHeight,
    unitScale,
  );
}

function drawEngineFlame(targetContext, shipHeight, unitScale) {
  const baseY = shipHeight * 0.34;
  const length = shipHeight * (0.15 + 0.035 * Math.sin(ambientTime * 42));
  const flameWidth = shipHeight * 0.055;
  const gradient = targetContext.createLinearGradient(
    0,
    baseY,
    0,
    baseY + length,
  );
  gradient.addColorStop(0, "rgba(225, 250, 255, 0.95)");
  gradient.addColorStop(0.3, "rgba(80, 190, 255, 0.9)");
  gradient.addColorStop(1, "rgba(34, 100, 255, 0)");
  targetContext.save();
  targetContext.globalCompositeOperation = "lighter";
  targetContext.globalAlpha = 0.85;
  targetContext.shadowColor = "#48aaff";
  targetContext.shadowBlur = 7 * unitScale;
  targetContext.fillStyle = gradient;
  targetContext.beginPath();
  targetContext.moveTo(-flameWidth, baseY);
  targetContext.quadraticCurveTo(
    -flameWidth * 0.7,
    baseY + length * 0.65,
    0,
    baseY + length,
  );
  targetContext.quadraticCurveTo(
    flameWidth * 0.7,
    baseY + length * 0.65,
    flameWidth,
    baseY,
  );
  targetContext.closePath();
  targetContext.fill();
  targetContext.restore();
}

function drawShipDesign(
  targetContext,
  design,
  shipWidth,
  shipHeight,
  unitScale,
) {
  targetContext.save();
  targetContext.shadowColor = design.trim;
  targetContext.shadowBlur = 14 * unitScale;
  targetContext.fillStyle = design.body;
  targetContext.strokeStyle = design.trim;
  targetContext.lineWidth = 1.5 * unitScale;
  targetContext.beginPath();

  if (design.shape === "scout") {
    targetContext.moveTo(0, -shipHeight / 2);
    targetContext.lineTo(shipWidth * 0.23, -shipHeight * 0.03);
    targetContext.lineTo(shipWidth * 0.34, shipHeight * 0.43);
    targetContext.lineTo(0, shipHeight * 0.31);
    targetContext.lineTo(-shipWidth * 0.34, shipHeight * 0.43);
    targetContext.lineTo(-shipWidth * 0.23, -shipHeight * 0.03);
  } else if (design.shape === "guardian") {
    targetContext.moveTo(0, -shipHeight * 0.47);
    targetContext.lineTo(shipWidth * 0.24, -shipHeight * 0.17);
    targetContext.lineTo(shipWidth * 0.5, shipHeight * 0.2);
    targetContext.lineTo(shipWidth * 0.43, shipHeight * 0.43);
    targetContext.lineTo(shipWidth * 0.14, shipHeight * 0.33);
    targetContext.lineTo(0, shipHeight * 0.46);
    targetContext.lineTo(-shipWidth * 0.14, shipHeight * 0.33);
    targetContext.lineTo(-shipWidth * 0.43, shipHeight * 0.43);
    targetContext.lineTo(-shipWidth * 0.5, shipHeight * 0.2);
    targetContext.lineTo(-shipWidth * 0.24, -shipHeight * 0.17);
  } else if (design.shape === "comet") {
    targetContext.moveTo(0, -shipHeight / 2);
    targetContext.lineTo(shipWidth * 0.18, -shipHeight * 0.08);
    targetContext.lineTo(shipWidth * 0.42, shipHeight * 0.4);
    targetContext.lineTo(0, shipHeight * 0.28);
    targetContext.lineTo(-shipWidth * 0.42, shipHeight * 0.4);
    targetContext.lineTo(-shipWidth * 0.18, -shipHeight * 0.08);
  } else {
    targetContext.moveTo(0, -shipHeight / 2);
    targetContext.lineTo(shipWidth * 0.31, shipHeight * 0.22);
    targetContext.lineTo(shipWidth / 2, shipHeight / 2);
    targetContext.lineTo(shipWidth * 0.14, shipHeight * 0.37);
    targetContext.lineTo(0, shipHeight * 0.45);
    targetContext.lineTo(-shipWidth * 0.14, shipHeight * 0.37);
    targetContext.lineTo(-shipWidth / 2, shipHeight / 2);
    targetContext.lineTo(-shipWidth * 0.31, shipHeight * 0.22);
  }

  targetContext.closePath();
  targetContext.fill();
  targetContext.stroke();
  targetContext.shadowBlur = 0;
  targetContext.fillStyle = design.core;
  targetContext.beginPath();
  targetContext.moveTo(0, -shipHeight * 0.27);
  targetContext.lineTo(shipWidth * 0.1, shipHeight * 0.16);
  targetContext.lineTo(0, shipHeight * 0.28);
  targetContext.lineTo(-shipWidth * 0.1, shipHeight * 0.16);
  targetContext.closePath();
  targetContext.fill();

  if (design.shape === "guardian" || design.shape === "interceptor") {
    targetContext.strokeStyle = design.trim;
    targetContext.lineWidth = 2 * unitScale;
    for (const side of [-1, 1]) {
      targetContext.beginPath();
      targetContext.moveTo(side * shipWidth * 0.17, shipHeight * 0.22);
      targetContext.lineTo(side * shipWidth * 0.39, shipHeight * 0.34);
      targetContext.stroke();
    }
  }

  targetContext.fillStyle =
    design.shape === "guardian" ? "#ffb44a" : design.trim;
  targetContext.beginPath();
  targetContext.ellipse(
    0,
    shipHeight * 0.45,
    shipWidth * 0.09,
    4 * unitScale,
    0,
    0,
    Math.PI * 2,
  );
  targetContext.fill();
  targetContext.restore();
}

function drawShipPreviews() {
  document.querySelectorAll("[data-ship-preview]").forEach((preview) => {
    const previewContext = preview.getContext("2d");
    const design = shipDesigns.find(
      (ship) => ship.id === preview.dataset.shipPreview,
    );
    if (!design) return;
    previewContext.clearRect(0, 0, preview.width, preview.height);
    previewContext.save();
    previewContext.translate(preview.width / 2, preview.height / 2);
    const scale = 0.72;
    drawShipVisual(previewContext, design, 60 * scale, 72 * scale, scale);
    previewContext.restore();
  });
  updateShipChoices();
}

function updateShipChoices() {
  document.querySelectorAll("[data-ship]").forEach((choice) => {
    const selected = choice.dataset.ship === selectedShipId;
    choice.setAttribute("aria-pressed", String(selected));
    const design = shipDesigns.find((ship) => ship.id === choice.dataset.ship);
    const status = choice.querySelector("[data-ship-status]");
    if (status && design) {
      status.textContent =
        design.imageStatus === "loaded"
          ? "Image loaded"
          : design.imageStatus === "missing"
            ? "Image unavailable - using Interceptor"
            : "Loading image...";
    }
  });
}

function updateWeaponChoices() {
  document.querySelectorAll("[data-weapon]").forEach((choice) => {
    choice.setAttribute(
      "aria-pressed",
      String(choice.dataset.weapon === selectedWeaponId),
    );
  });
}

function loadShipImages() {
  for (const design of shipDesigns.filter((ship) => ship.imagePath)) {
    const image = new Image();
    image.onload = () => {
      if (!image.naturalWidth || !image.naturalHeight) {
        design.imageStatus = "missing";
      } else {
        design.image = image;
        design.imageStatus = "loaded";
      }
      drawShipPreviews();
      drawFrame(0);
    };
    image.onerror = () => {
      design.imageStatus = "missing";
      updateShipChoices();
      drawShipPreviews();
    };
    image.src = design.imagePath;
  }
}

function drawEnemy(enemy) {
  const fontSize = (mobileLayout.matches ? 13 : 17) / viewScale;
  const horizontalPadding = (mobileLayout.matches ? 8 : 10) / viewScale;
  context.font = `500 ${fontSize}px "Trebuchet MS", "Segoe UI", sans-serif`;
  const textWidth = context.measureText(enemy.word).width;
  const boxWidth = textWidth + horizontalPadding * 2;
  const boxHeight = (mobileLayout.matches ? 23 : 27) / viewScale;
  const x = Math.max(
    6 / viewScale,
    Math.min(width - boxWidth - 6 / viewScale, enemy.x + enemy.pushX),
  );
  const y = enemy.y + enemy.pushY + (Math.sin(enemy.wobble) * 2) / viewScale;

  context.save();
  if (enemy.id === lockedTargetId) {
    context.shadowColor = "#58f0cf";
    context.shadowBlur = 13 / viewScale;
    context.strokeStyle = "rgba(88, 240, 207, 0.8)";
    context.strokeRect(
      x - 3 / viewScale,
      y - 3 / viewScale,
      boxWidth + 6 / viewScale,
      boxHeight + 6 / viewScale,
    );
  }
  context.fillStyle =
    enemy.hitFlash > 0
      ? `rgba(88, 240, 207, ${0.25 + enemy.hitFlash})`
      : "rgba(4, 10, 15, 0.86)";
  context.fillRect(x, y, boxWidth, boxHeight);
  context.shadowBlur = 0;
  context.font = `500 ${fontSize}px "Trebuchet MS", "Segoe UI", sans-serif`;
  context.textBaseline = "middle";
  context.textAlign = "left";
  const typedText = enemy.word.slice(0, enemy.typed);
  const remainingText = enemy.word.slice(enemy.typed);
  context.fillStyle = "#58f0cf";
  context.fillText(typedText, x + horizontalPadding, y + boxHeight / 2);
  context.fillStyle = "#f2fbfa";
  context.fillText(
    remainingText,
    x + horizontalPadding + context.measureText(typedText).width,
    y + boxHeight / 2,
  );

  context.strokeStyle = "rgba(255, 180, 74, 0.8)";
  context.lineWidth = 1.5 / viewScale;
  context.beginPath();
  context.arc(
    x - 5 / viewScale,
    y + boxHeight / 2,
    4 / viewScale,
    0,
    Math.PI * 2,
  );
  context.stroke();
  context.restore();
}

function drawProjectiles() {
  for (const projectile of projectiles) {
    drawWeaponProjectile(context, projectile, 1 / viewScale, ambientTime);
  }
}

function drawWeaponProjectile(targetContext, projectile, scale, time) {
  const weapon =
    weaponCatalog.find((item) => item.id === projectile.weaponId) ||
    weaponCatalog[0];
  const color = weapon.color;
  const angle = Math.atan2(projectile.vy || 0, projectile.vx || 1);
  const glow = (x, y, radius, tint) => {
    const gradient = targetContext.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, tint);
    gradient.addColorStop(1, `${tint}00`);
    targetContext.fillStyle = gradient;
    targetContext.beginPath();
    targetContext.arc(x, y, radius, 0, Math.PI * 2);
    targetContext.fill();
  };
  const streak = (length, thickness, tint = color) => {
    length = Math.min(
      length,
      ((projectile.distanceTraveled || 0) + 35 * scale) / scale,
    );
    const dx = 1; // canvas is already rotated to the shot direction
    const dy = 0;
    const gradient = targetContext.createLinearGradient(
      -dx * length * scale,
      -dy * length * scale,
      0,
      0,
    );
    gradient.addColorStop(0, `${tint}00`);
    gradient.addColorStop(0.72, tint);
    gradient.addColorStop(1, "#ffffff");
    targetContext.strokeStyle = gradient;
    targetContext.lineWidth = thickness * scale;
    targetContext.beginPath();
    targetContext.moveTo(-dx * length * scale, -dy * length * scale);
    targetContext.lineTo(0, 0);
    targetContext.stroke();
  };

  targetContext.save();
  targetContext.translate(projectile.x, projectile.y);
  targetContext.rotate(angle);
  targetContext.globalCompositeOperation = "lighter";
  targetContext.lineCap = "round";

  switch (projectile.weaponId) {
    case "laser":
      glow(0, 0, 10 * scale, color);
      streak(46, 3);
      targetContext.globalAlpha = 0.38;
      streak(46, 9);
      targetContext.globalAlpha = 1;
      targetContext.fillStyle = "#fff";
      targetContext.beginPath();
      targetContext.arc(0, 0, 2.2 * scale, 0, Math.PI * 2);
      targetContext.fill();
      break;
    case "plasma":
      glow(0, 0, 17 * scale, color);
      glow(0, 0, 7 * scale, "#ffffff");
      targetContext.strokeStyle = "#caffd8";
      targetContext.lineWidth = 1.5 * scale;
      for (let index = 0; index < 3; index++) {
        const start = time * 8 + index * 2.1;
        targetContext.beginPath();
        targetContext.arc(0, 0, 8 * scale, start, start + 1);
        targetContext.stroke();
      }
      break;
    case "particle": {
      if (!projectile.preview) {
        // the long beam is drawn once by the effects layer
        glow(0, 0, 18 * scale, color);
        glow(0, 0, 7 * scale, "#ffffff");
        break;
      }
      const length =
        Math.min(180, Math.max(26, projectile.distanceTraveled || 26)) * scale;
      targetContext.lineWidth = 11 * scale;
      targetContext.strokeStyle = color;
      targetContext.globalAlpha = 0.38;
      targetContext.beginPath();
      targetContext.moveTo(-length, 0);
      for (let index = 1; index <= 12; index++) {
        const x = -length + (length * index) / 12;
        targetContext.lineTo(x, Math.sin(time * 50 + index) * 2.5 * scale);
      }
      targetContext.stroke();
      targetContext.globalAlpha = 1;
      targetContext.strokeStyle = "#fff6c0";
      targetContext.lineWidth = 3.4 * scale;
      targetContext.stroke();
      glow(0, 0, 14 * scale, color);
      break;
    }
    case "ion":
      glow(0, 0, 18 * scale, color);
      glow(0, 0, 7 * scale, "#ffffff");
      targetContext.strokeStyle = "#bfe8ff";
      targetContext.lineWidth = 1.2 * scale;
      for (let index = 0; index < 4; index++) {
        const arc = time * 7 + (index * Math.PI) / 2;
        targetContext.beginPath();
        targetContext.moveTo(0, 0);
        targetContext.lineTo(
          Math.cos(arc + 0.45) * 6 * scale,
          Math.sin(arc + 0.45) * 6 * scale,
        );
        targetContext.lineTo(
          Math.cos(arc) * 13 * scale,
          Math.sin(arc) * 13 * scale,
        );
        targetContext.stroke();
      }
      break;
    case "rail": {
      const railLength = projectile.preview ? 230 : 42;
      streak(railLength, 4);
      targetContext.globalAlpha = 0.5;
      streak(railLength, 10);
      targetContext.globalAlpha = 1;
      glow(0, 0, 12 * scale, color);
      glow(0, 0, 5 * scale, "#ffffff");
      break;
    }
    case "flak":
      glow(0, 0, 19 * scale, color);
      glow(0, 0, 7 * scale, "#ffffff");
      targetContext.fillStyle = "#fff4cf";
      targetContext.beginPath();
      targetContext.arc(0, 0, 3.5 * scale, 0, Math.PI * 2);
      targetContext.fill();
      break;
    case "torpedo":
      glow(-5 * scale, 0, 16 * scale, color);
      targetContext.fillStyle = "#efe6ff";
      targetContext.beginPath();
      targetContext.ellipse(0, 0, 14 * scale, 5 * scale, 0, 0, Math.PI * 2);
      targetContext.fill();
      glow(5 * scale, 0, 7 * scale, "#ffffff");
      break;
    case "swarm":
      glow(0, 0, 9 * scale, color);
      streak(16, 2.2);
      glow(0, 0, 6 * scale, "#ffe0b0");
      for (const offset of [-5, 5]) {
        targetContext.globalAlpha = 0.65;
        targetContext.fillStyle = color;
        targetContext.beginPath();
        targetContext.ellipse(
          -4 * scale,
          offset * scale,
          5 * scale,
          1.8 * scale,
          0,
          0,
          Math.PI * 2,
        );
        targetContext.fill();
      }
      break;
    case "singularity":
      glow(0, 0, 21 * scale, color);
      targetContext.globalCompositeOperation = "source-over";
      targetContext.fillStyle = "#05020c";
      targetContext.beginPath();
      targetContext.arc(0, 0, 8 * scale, 0, Math.PI * 2);
      targetContext.fill();
      targetContext.globalCompositeOperation = "lighter";
      targetContext.strokeStyle = "#d9c2ff";
      targetContext.lineWidth = 1.2 * scale;
      for (let index = 0; index < 2; index++) {
        targetContext.beginPath();
        targetContext.ellipse(
          0,
          0,
          17 * scale,
          5.5 * scale,
          time * 3 + index * 1.6,
          0,
          Math.PI * 2,
        );
        targetContext.stroke();
      }
      break;
  }
  targetContext.restore();
}

function drawWeaponChoices() {
  document.querySelectorAll("[data-weapon-preview]").forEach((preview) => {
    const previewContext = preview.getContext("2d");
    const weaponId = preview.dataset.weaponPreview;
    previewContext.clearRect(0, 0, preview.width, preview.height);
    drawWeaponProjectile(
      previewContext,
      {
        weaponId,
        x: preview.width / 2,
        y: preview.height / 2,
        vx: 1,
        vy: 0,
        age: ambientTime,
        distanceTraveled: 65,
        preview: true,
      },
      0.55,
      ambientTime,
    );
  });
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
  context.fillText(
    `WAVE ${String(game.wave).padStart(2, "0")}`,
    width / 2,
    height * 0.43,
  );
  context.restore();
}

function drawFrame(delta) {
  context.setTransform(
    canvas.width / width,
    0,
    0,
    canvas.height / height,
    0,
    0,
  );
  drawBackground(delta);
  if (screenName === "ships") drawWeaponChoices();
  if (
    screenName === "title" ||
    screenName === "ships" ||
    screenName === "settings" ||
    screenName === "stats" ||
    screenName === "custom"
  ) {
    drawShip();
    return;
  }

  for (const enemy of activeWords) drawEnemy(enemy);
  drawProjectiles();
  drawWeaponEffects();
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
  context.setTransform(
    pixelRatio * viewScale,
    0,
    0,
    pixelRatio * viewScale,
    0,
    0,
  );
  drawFrame(0);
}

function frame(timestamp) {
  const delta =
    lastFrameTime === 0
      ? 0
      : Math.min((timestamp - lastFrameTime) / 1000, 0.05);
  lastFrameTime = timestamp;
  ambientTime += delta;
  if (screenName === "playing") updateGame(delta);
  drawFrame(delta);
  requestAnimationFrame(frame);
}

const pressedKeys = new Set();
let controlPressPending = false;
let controlPressUsed = false;
let controlPressStartedInEditable = false;
let spacePressTimer = null;

function isEditableTarget(target) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable ||
      target.matches("input, textarea, select, [role='textbox']"))
  );
}

function createGameKeyboard(wordList) {
  const availableCharacters = new Set(
    wordList
      .join("")
      .toLowerCase()
      .match(/[a-z0-9'-]/g) || [],
  );
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const hasAllLetters = [...alphabet].every((character) =>
    availableCharacters.has(character),
  );
  const keyOrder = "qwertyuiopasdfghjklzxcvbnm0123456789-'";
  const availableKeys = [...keyOrder].filter((character) =>
    availableCharacters.has(character),
  );
  const rowLayouts = hasAllLetters
    ? ["qwertyuiop", "asdfghjkl", "zxcvbnm", "0123456789-'"].map((row) =>
        [...row]
          .filter((character) => availableCharacters.has(character))
          .join(""),
      )
    : Array.from({ length: Math.ceil(availableKeys.length / 10) }, (_, index) =>
        availableKeys.slice(index * 10, index * 10 + 10).join(""),
      );
  const populatedRows = rowLayouts.filter(Boolean);
  gameKeyboard.replaceChildren();
  canvas.parentElement.dataset.keyboardRows = String(populatedRows.length);

  for (const rowLayout of populatedRows) {
    const row = document.createElement("div");
    row.className = "game-keyboard-row";
    for (const character of rowLayout) {
      if (!availableCharacters.has(character)) continue;
      const key = document.createElement("button");
      key.className = "game-key";
      key.type = "button";
      key.dataset.gameKey = character;
      key.setAttribute(
        "aria-label",
        character === "'" ? "apostrophe" : character,
      );
      key.textContent = character;
      row.append(key);
    }
    if (row.childElementCount) gameKeyboard.append(row);
  }
}

gameKeyboard.addEventListener("pointerdown", (event) => {
  const gameKey = event.target.closest("[data-game-key]");
  if (gameKey) {
    event.preventDefault();
    handleCharacter(gameKey.dataset.gameKey);
  }
});

gameKeyboard.addEventListener("click", (event) => {
  const gameKey = event.target.closest("[data-game-key]");
  if (gameKey && event.detail === 0) handleCharacter(gameKey.dataset.gameKey);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (button)
    handleAction(
      button.dataset.action,
      button.dataset.ship,
      button.dataset.weapon,
    );
});

document.addEventListener("keydown", (event) => {
  const editableTarget = isEditableTarget(event.target);
  const isControlKey =
    event.code === "ControlLeft" || event.code === "ControlRight";

  if (isControlKey) {
    if (!event.repeat && !pressedKeys.has(event.code)) {
      pressedKeys.add(event.code);
      controlPressPending = true;
      controlPressUsed = false;
      controlPressStartedInEditable = editableTarget;
    }
    return;
  }

  if (event.repeat || pressedKeys.has(event.code)) return;
  pressedKeys.add(event.code);
  if (controlPressPending) controlPressUsed = true;
  if (editableTarget) return;

  if (event.ctrlKey && event.altKey && event.code === "KeyC") {
    event.preventDefault();
    handleAction("ships");
    return;
  }

  if (event.ctrlKey && !event.altKey && event.code === "KeyH") {
    event.preventDefault();
    handleAction("title");
    return;
  }

  if (
    event.code === "Space" &&
    (screenName === "playing" || screenName === "paused")
  ) {
    event.preventDefault();
    if (spacePressTimer !== null) {
      window.clearTimeout(spacePressTimer);
      spacePressTimer = null;
      setScreen("title");
    } else {
      spacePressTimer = window.setTimeout(() => {
        spacePressTimer = null;
        if (screenName === "playing") setScreen("paused");
        else if (screenName === "paused") setScreen("playing");
      }, 320);
    }
    return;
  }

  if (event.ctrlKey || event.metaKey || event.altKey) return;

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

  if (screenName !== "playing" || event.key.length !== 1) return;
  handleCharacter(event.key);
});

document.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.code);

  if (event.code !== "ControlLeft" && event.code !== "ControlRight") return;
  const shouldOpenSettings =
    controlPressPending &&
    !controlPressUsed &&
    !controlPressStartedInEditable &&
    !isEditableTarget(event.target);
  controlPressPending = false;
  controlPressUsed = false;
  controlPressStartedInEditable = false;
  if (shouldOpenSettings) handleAction("settings");
});

window.addEventListener("blur", () => {
  pressedKeys.clear();
  controlPressPending = false;
  controlPressUsed = false;
  controlPressStartedInEditable = false;
  if (spacePressTimer !== null) {
    window.clearTimeout(spacePressTimer);
    spacePressTimer = null;
  }
});

customWordsInput.addEventListener("input", saveData);

for (const [input, setting, output] of [
  [masterVolumeInput, "masterVolume", masterVolumeValue],
  [musicInput, "musicVolume", musicValue],
  [soundEffectsInput, "soundEffectsVolume", soundEffectsValue],
]) {
  input.addEventListener("input", () => {
    settings[setting] = Number(input.value);
    output.value = `${settings[setting]}%`;
    output.textContent = `${settings[setting]}%`;
    updateAudioVolumes();
    setMusicActive(musicActive);
    saveData();
  });
}

musicEnabledInput.addEventListener("change", () => {
  settings.musicEnabled = musicEnabledInput.checked;
  document.getElementById("musicEnabledLabel").textContent =
    settings.musicEnabled ? "Music on" : "Music off";
  setMusicActive(musicActive);
  saveData();
});

soundEffectsEnabledInput.addEventListener("change", () => {
  settings.soundEffectsEnabled = soundEffectsEnabledInput.checked;
  document.getElementById("soundEffectsEnabledLabel").textContent =
    settings.soundEffectsEnabled ? "Sound effects on" : "Sound effects off";
  updateAudioVolumes();
  saveData();
});

for (const [input, selection] of [
  [shootSoundInput, "shoot"],
  [hitSoundInput, "hit"],
  [backgroundMusicInput, "background"],
]) {
  input.addEventListener("change", () => {
    if (
      !Object.prototype.hasOwnProperty.call(
        audioSources[selection],
        input.value,
      )
    )
      return;
    audioSelection[selection] = input.value;
    updateAudioVolumes();
    setMusicActive(musicActive);
    saveData();
  });
}

shootingMethodInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (!input.checked) return;
    shootingMethod = input.value === "garuda-x" ? "garuda-x" : "standard";
    saveData();
  });
});

function resizeCanvasAndAds() {
  resizeCanvas();
  if (screenName === "title") initializeAd(homeSidebarAd);
  if (screenName === "playing") initializeAd(gameSidebarAd);
}

window.addEventListener("resize", resizeCanvasAndAds);
window.addEventListener("orientationchange", resizeCanvasAndAds);
window.visualViewport?.addEventListener("resize", resizeCanvasAndAds);

updateSettingsControls();
updateStatsScreen();
loadShipImages();
drawShipPreviews();
setScreen("title");
resizeCanvas();
requestAnimationFrame(frame);
