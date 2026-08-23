// Game Catalog of 20 active games
const ALL_GAMES = [
    { slug: 'index.html', title: 'Night City Racing', img: 'night-city-racing.png' },
    { slug: '2-player-dark-racing.html', title: '2 Player Dark Racing', img: '2-player-dark-racing.png' },
    { slug: 'atv-ultimate-offroad.html', title: 'ATV Ultimate Offroad', img: 'atv-ultimate-offroad.png' },
    { slug: 'boat-drift.html', title: 'Boat Drift', img: 'boat-drift.png' },
    { slug: 'burnin-rubber-5-xs.html', title: 'Burnin Rubber 5 XS', img: 'burnin-rubber-5-xs.png' },
    { slug: 'burnout-drift-hilltop.html', title: 'Burnout Drift Hilltop', img: 'burnout-drift-hilltop.png' },
    { slug: 'car-speed-racing-tycoon.html', title: 'Car Speed Racing Tycoon', img: 'car-speed-racing-tycoon.png' },
    { slug: 'construction-ramp-jumping.html', title: 'Construction Ramp Jumping', img: 'construction-ramp-jumping.png' },
    { slug: 'crazy-cars.html', title: 'Crazy Cars', img: 'crazy-cars.png' },
    { slug: 'crazy-for-speed.html', title: 'Crazy For Speed', img: 'crazy-for-speed.png' },
    { slug: 'drift-escape.html', title: 'Drift Escape', img: 'drift-escape.png' },
    { slug: 'highway-racer-2.html', title: 'Highway Racer 2', img: 'highway-racer-2.png' },
    { slug: 'hill-climb-pixel-car.html', title: 'Hill Climb Pixel Car', img: 'hill-climb-pixel-car.png' },
    { slug: 'jump-in-to-the-plane.html', title: 'Jump In To The Plane', img: 'jump-in-to-the-plane.png' },
    { slug: 'kart-race-3d.html', title: 'Kart Race 3D', img: 'kart-race-3d.png' },
    { slug: 'mr-racer-car-racing.html', title: 'Mr Racer Car Racing', img: 'mr-racer-car-racing.png' },
    { slug: 'parking-fury-3d-beach-city-2.html', title: 'Parking Fury 3D Beach City 2', img: 'parking-fury-3d-beach-city-2.png' },
    { slug: 'rally-racer-dirt.html', title: 'Rally Racer Dirt', img: 'rally-racer-dirt.png' },
    { slug: 'traffic-jam-3d-gh-pages.html', title: 'Traffic Jam 3D', img: 'traffic-jam-3d.png' },
    { slug: 'traffic-tour.html', title: 'Traffic Tour', img: 'traffic-tour.png' }
];

function renderSimilarGames() {
    const grid = document.querySelector('.similar-games .games-grid');
    if (!grid) return;

    const path = window.location.pathname;
    let fileName = path.substring(path.lastIndexOf('/') + 1);
    if (!fileName || fileName === '') fileName = 'index.html';

    const isRoot = !path.includes('/game/');

    // Find current game slug
    const currentSlug = fileName;

    // Filter out current game
    const availableGames = ALL_GAMES.filter(g => g.slug !== currentSlug);

    // Calculate deterministic start index based on fileName hash
    let hash = 0;
    for (let i = 0; i < fileName.length; i++) {
        hash = (hash * 31 + fileName.charCodeAt(i)) % availableGames.length;
    }
    if (hash < 0) hash = Math.abs(hash);

    const selectedGames = [];
    for (let i = 0; i < 8; i++) {
        selectedGames.push(availableGames[(hash + i) % availableGames.length]);
    }

    grid.innerHTML = selectedGames.map(game => {
        let href = '';
        let imgSrc = '';

        if (isRoot) {
            href = game.slug === 'index.html' ? './index.html' : `./game/${game.slug}`;
            imgSrc = `./img/${game.img}`;
        } else {
            href = game.slug === 'index.html' ? '../index.html' : `../game/${game.slug}`;
            imgSrc = `../img/${game.img}`;
        }

        return `
            <a href="${href}" class="game-card">
                <img src="${imgSrc}" alt="${game.title}">
                <div class="game-card-info">
                    <h4>${game.title}</h4>
                </div>
            </a>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    renderSimilarGames();
});
renderSimilarGames();

const fullscreenBtn = document.getElementById('fullscreenGame');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function() {
        const canvas = document.getElementById('gameCanvas');
        const controls = document.querySelector('.game-controls');
        const container = document.querySelector('.canvas-container');
        const gameIframe = document.getElementById('gameIframe');
        const gameFrame = document.getElementById('gameFrame');
        const playOverlay = document.querySelector('.play-overlay');

        if (!document.fullscreenElement) {
            if (container && container.requestFullscreen) {
                container.requestFullscreen();
            }
            if (canvas) canvas.classList.add('fullscreen');
            if (controls) controls.classList.add('fullscreen');
            if (container) container.classList.add('fullscreen');
            if (gameIframe) gameIframe.classList.add('fullscreen');
            if (gameFrame) gameFrame.classList.add('fullscreen');
            if (playOverlay) playOverlay.classList.add('fullscreen');
            this.classList.add('active');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            if (canvas) canvas.classList.remove('fullscreen');
            if (controls) controls.classList.remove('fullscreen');
            if (container) container.classList.remove('fullscreen');
            if (gameIframe) gameIframe.classList.remove('fullscreen');
            if (gameFrame) gameFrame.classList.remove('fullscreen');
            if (playOverlay) playOverlay.classList.remove('fullscreen');
            this.classList.remove('active');
        }
    });
}

document.addEventListener('fullscreenchange', function() {
    const canvas = document.getElementById('gameCanvas');
    const controls = document.querySelector('.game-controls');
    const container = document.querySelector('.canvas-container');
    const gameIframe = document.getElementById('gameIframe');
    const gameFrame = document.getElementById('gameFrame');
    const playOverlay = document.querySelector('.play-overlay');
    const fullscreenBtn = document.getElementById('fullscreenGame');

    if (!document.fullscreenElement) {
        if (canvas) canvas.classList.remove('fullscreen');
        if (controls) controls.classList.remove('fullscreen');
        if (container) container.classList.remove('fullscreen');
        if (gameIframe) gameIframe.classList.remove('fullscreen');
        if (gameFrame) gameFrame.classList.remove('fullscreen');
        if (playOverlay) playOverlay.classList.remove('fullscreen');
        if (fullscreenBtn) fullscreenBtn.classList.remove('active');

        if (gameIframe && gameIframe.classList.contains('active')) {
            gameIframe.style.position = 'absolute';
            gameIframe.style.width = '100%';
            gameIframe.style.height = '100%';
            if (gameFrame) {
                gameFrame.style.width = '100%';
                gameFrame.style.height = '100%';
            }
        }
    }
});

const playNowBtn = document.getElementById('playNowBtn');
if (playNowBtn) {
    playNowBtn.addEventListener('click', function() {
        const canvas = document.getElementById('gameCanvas');
        const overlay = document.querySelector('.play-overlay');
        const gameIframe = document.getElementById('gameIframe');

        if (overlay) overlay.style.display = 'none';
        if (canvas) canvas.style.display = 'none';
        if (gameIframe) gameIframe.classList.add('active');
    });
}

document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

        this.classList.add('active');

        const tabId = this.getAttribute('data-tab');
        const pane = document.getElementById(tabId);
        if (pane) pane.classList.add('active');
    });
});
 