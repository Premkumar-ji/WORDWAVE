Add transparent, nose-up spaceship PNG images to this folder. The currently
configured images are GARUDA X.png, PUSHPAKA PRIME.png, RATHA 01.png, TEJAS-X.png,
VAJRA-9.png, and VYOMA-01.png.

To add another ship, add its exact relative image path and settings to the
shipDesigns array near the top of ../../index.js, then add a matching ship-choice
button to ../../index.html. Set engineFlame: true only for ships that should
have the animated blue engine flame. Images keep their aspect ratio and use the
Interceptor rendering as a fallback if loading fails.
