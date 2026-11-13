const fs = require('fs');
const path = require('path');

const adventureGames = [
  { slug: 'boxrob', title: 'BoxRob', img: 'boxrob.png', iframe: 'https://webglmath.github.io/boxrob/' },
  { slug: 'boxrob2', title: 'Boxrob 2', img: 'boxrob2.png', iframe: 'https://ubg77.github.io/fix/boxrob2/' },
  { slug: 'boxrob3', title: 'Boxrob 3', img: 'boxrob3.png', iframe: 'https://ubg77.github.io/fix/boxrob3/' },
  { slug: 'bob-the-robber', title: 'Bob The Robber', img: 'bob-the-robber.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber/' },
  { slug: 'bob-the-robber-2', title: 'Bob The Robber 2', img: 'bob-the-robber-2.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber-2/' },
  { slug: 'bob-the-robber-3', title: 'Bob The Robber 3', img: 'bob-the-robber-3.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber-3/' },
  { slug: 'bob-the-robber-4', title: 'Bob The Robber 4', img: 'bob-the-robber-4.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber-4/' },
  { slug: 'bob-the-robber-4-season-2-russia', title: 'Bob The Robber 4 Season 2 Russia', img: 'bob-the-robber-4-season-2-russia.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber-4-season-2-russia/' },
  { slug: 'bob-the-robber-4-season-3-japan', title: 'Bob The Robber 4 Season 3 Japan', img: 'bob-the-robber-4-season-3-japan.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber-4-season-3-japan/' },
  { slug: 'bob-the-robber-5', title: 'Bob The Robber 5', img: 'bob-the-robber-5.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/bob-the-robber-5-temple-adventure/' },
  { slug: 'lows-adventures', title: 'Lows Adventures', img: 'lows-adventures.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/lows-adventures/' },
  { slug: 'lows-adventures-2', title: 'Lows Adventures 2', img: 'lows-adventures-2.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/lows-adventures-2/' },
  { slug: 'lows-adventures-3', title: 'Lows Adventures 3', img: 'lows-adventures-3.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/lows-adventures-3/' },
  { slug: 'geometrical-dash', title: 'Geometrical Dash', img: 'geometrical-dash.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometrical-dash/' },
  { slug: 'geometry-dash', title: 'Geometry Dash', img: 'geometry-dash.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash/' },
  { slug: 'geometry-dash-bloodbath', title: 'Geometry Dash Bloodbath', img: 'geometry-dash-bloodbath.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-bloodbath/' },
  { slug: 'geometry-dash-classic', title: 'Geometry Dash Classic', img: 'geometry-dash-classic.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-classic/' },
  { slug: 'geometry-dash-finally', title: 'Geometry Dash Finally', img: 'geometry-dash-finally.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-finally/' },
  { slug: 'geometry-dash-mr-dubstep', title: 'Geometry Dash Mr Dubstep', img: 'geometry-dash-mr-dubstep.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-mr-dubstep/' },
  { slug: 'geometry-dash-nemesis', title: 'Geometry Dash Nemesis', img: 'geometry-dash-nemesis.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-nemesis/' },
  { slug: 'geometry-dash-robot', title: 'Geometry Dash Robot', img: 'geometry-dash-robot.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-robot/' },
  { slug: 'geometry-dash-ship', title: 'Geometry Dash Ship', img: 'geometry-dash-ship.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-ship/' },
  { slug: 'geometry-dash-world', title: 'Geometry Dash World', img: 'geometry-dash-world.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-dash-world/' },
  { slug: 'geometry-jump', title: 'Geometry Jump', img: 'geometry-jump.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-jump/' },
  { slug: 'geometry-jump-challenge', title: 'Geometry Jump Challenge', img: 'geometry-jump-challenge.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-jump-challenge/' },
  { slug: 'geometry-meltdown', title: 'Geometry Meltdown', img: 'geometry-meltdown.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-meltdown/' },
  { slug: 'geometry-neon-dash-rainbow', title: 'Geometry Neon Dash Rainbow', img: 'geometry-neon-dash-rainbow.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-neon-dash-rainbow/' },
  { slug: 'geometry-neon-dash-world-two', title: 'Geometry Neon Dash World Two', img: 'geometry-neon-dash-world-two.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-neon-dash-world-two/' },
  { slug: 'geometry-rash', title: 'Geometry Rash', img: 'geometry-rash.png', iframe: 'https://nightcityracing.github.io/game-nightcityracing/geometry-rash/' }
];

function generateGameHtml(game) {
  return `<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${game.title} - Night City Racing</title>
    <meta name="description"
        content="Play ${game.title} unblocked online for free on Night City Racing! Enjoy thrilling gameplay directly in your browser without downloads.">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="../styles.css">
</head>

<body>
    <!-- Top Header -->
    <header>
        <nav class="main-nav">
            <a href="../index.html" class="logo">
                <img src="../img/night-city-racing.png" alt="Racing Logo" class="logo-icon">
                <h1>Night City Racing</h1>
            </a>
            <ul class="nav-links">
                <li><a href="../index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                <li><a href="../catology/newgame.html"><i class="fa-solid fa-star"></i> New Games</a></li>
                <li><a href="../catology/hotgame.html"><i class="fa-solid fa-fire"></i> Hot Games</a></li>
                <li><a href="../catology/action.html"><i class="fa-solid fa-bolt"></i> Action</a></li>
                <li><a href="../catology/adventure.html"><i class="fa-solid fa-compass"></i> Adventure</a></li>
                <li><a href="../catology/car.html"><i class="fa-solid fa-car"></i> Car</a></li>
                <li><a href="../catology/puzzle.html"><i class="fa-solid fa-puzzle-piece"></i> Puzzle</a></li>
                <li><a href="../catology/running.html"><i class="fa-solid fa-person-running"></i> Running</a></li>
                <li><a href="../catology/shootting.html"><i class="fa-solid fa-crosshairs"></i> Shooting</a></li>
                <li><a href="../catology/sports.html"><i class="fa-solid fa-trophy"></i> Sports</a></li>
            </ul>
        </nav>
    </header>

    <main class="game-page">
        <!-- Game Play Area -->
        <section class="game-player-section">
            <div class="game-wrapper">
                <div class="canvas-container">
                    <iframe id="gameFrame" src="${game.iframe}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="game-controls">
                    <div class="game-info">
                        <h2>${game.title}</h2>
                    </div>
                    <div class="control-buttons">
                        <button id="fullscreenGame" title="Fullscreen"><i class="fa-solid fa-expand"></i></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Game Description & Info -->
        <section class="game-details-section">
            <div class="game-description">
                <h3>About ${game.title}</h3>
                <p>Welcome to <strong>${game.title}</strong>, an exciting adventure unblocked game available on Night City Racing! Test your reflexes, navigate challenging levels, and enjoy endless entertainment directly in your web browser.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Engaging and challenging levels</li>
                    <li>Smooth controls and seamless gameplay</li>
                    <li>Instant browser play with no downloads required</li>
                    <li>Fully unblocked and free to play</li>
                </ul>

                <h4>How to Play</h4>
                <p>Follow the on-screen instructions or use standard keyboard controls (Arrow Keys / WASD / Space / Mouse) to control your character and complete each challenge.</p>
            </div>
        </section>

        <!-- Similar Games Grid -->
        <section class="similar-games">
            <div class="games-container">
                <h3>More Games You Might Like</h3>
                <div class="games-grid">
                    <!-- Populated dynamically by game.js -->
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <p>&copy; 2026 Night City Racing. All rights reserved.</p>
            <div class="footer-links">
                <a href="../index.html">Home</a>
                <a href="../catology/newgame.html">New Games</a>
                <a href="../catology/hotgame.html">Hot Games</a>
            </div>
        </div>
    </footer>

    <script src="../game.js"></script>
</body>

</html>`;
}

// 1. Create all game HTML files in game/
adventureGames.forEach(g => {
  const filePath = path.join('game', `${g.slug}.html`);
  fs.writeFileSync(filePath, generateGameHtml(g), 'utf8');
  console.log(`Created: ${filePath}`);
});

// 2. Generate games grid for catology/adventure.html
const cardsHtml = adventureGames.map(g => `                    <a href="../game/${g.slug}.html" class="game-card">
                        <img src="../img/${g.img}" alt="${g.title}">
                        <div class="game-card-info">
                            <h4>${g.title}</h4>
                        </div>
                    </a>`).join('\n');

const adventureHtmlContent = `<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventure Games - Night City Racing</title>
    <meta name="description" content="Play the best unblocked Adventure Games on Night City Racing for free!" />
    <meta name="robots" content="index,follow" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="../styles.css">
</head>

<body>
    <header>
        <nav class="main-nav">
            <a href="../index.html" class="logo">
                <img src="../img/night-city-racing.png" alt="Racing Logo" class="logo-icon">
                <h1>Night City Racing</h1>
            </a>
            <ul class="nav-links">
                <li><a href="../index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                <li><a href="./newgame.html"><i class="fa-solid fa-star"></i> New Games</a></li>
                <li><a href="./hotgame.html"><i class="fa-solid fa-fire"></i> Hot Games</a></li>
                <li><a href="./action.html"><i class="fa-solid fa-bolt"></i> Action</a></li>
                <li><a href="./adventure.html"><i class="fa-solid fa-compass"></i> Adventure</a></li>
                <li><a href="./car.html"><i class="fa-solid fa-car"></i> Car</a></li>
                <li><a href="./puzzle.html"><i class="fa-solid fa-puzzle-piece"></i> Puzzle</a></li>
                <li><a href="./running.html"><i class="fa-solid fa-person-running"></i> Running</a></li>
                <li><a href="./shootting.html"><i class="fa-solid fa-crosshairs"></i> Shooting</a></li>
                <li><a href="./sports.html"><i class="fa-solid fa-trophy"></i> Sports</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="games-grid-section">
            <div class="games-container">
                <h2>Adventure Games</h2>
                <div class="games-grid">
${cardsHtml}
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="footer-content">
            <p>&copy; 2026 Night City Racing. All rights reserved.</p>
            <div class="footer-links">
                <a href="../index.html">Home</a>
                <a href="./newgame.html">New Games</a>
                <a href="./hotgame.html">Hot Games</a>
            </div>
        </div>
    </footer>
</body>

</html>
`;

fs.writeFileSync(path.join('catology', 'adventure.html'), adventureHtmlContent, 'utf8');
console.log('Updated catology/adventure.html with 29 adventure games');

