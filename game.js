// Game Catalog of active games
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
    { slug: 'traffic-tour.html', title: 'Traffic Tour', img: 'traffic-tour.png' },
    { slug: 'bomb-it-mission.html', title: 'Bomb It Mission', img: 'bomb-it-mission.png' },
    { slug: 'bomb-it.html', title: 'Bomb It', img: 'bomb-it.png' },
    { slug: 'bomb-it-3.html', title: 'Bomb It 3', img: 'bomb-it-3.png' },
    { slug: 'bomb-it-4.html', title: 'Bomb It 4', img: 'bomb-it-4.png' },
    { slug: 'bomb-it-5.html', title: 'Bomb It 5', img: 'bomb-it-5.png' },
    { slug: 'bomb-it-6.html', title: 'Bomb It 6', img: 'bomb-it-6.png' },
    { slug: 'bomb-it-7.html', title: 'Bomb It 7', img: 'bomb-it-7.png' },
    { slug: 'bomb-it-8.html', title: 'Bomb It 8', img: 'bomb-it-8.png' },
    { slug: 'fireboy-and-watergirl-1-forest-temple.html', title: 'Fireboy and Watergirl 1: Forest Temple', img: 'fireboy-and-watergirl-1-forest-temple.png' },
    { slug: 'fireboy-and-watergirl-7-and-friends.html', title: 'Fireboy and Watergirl 7: And Friends', img: 'fireboy-and-watergirl-7-and-friends.png' },
    { slug: 'fireboy-water-2.html', title: 'Fireboy and Watergirl 2: Light Temple', img: 'fireboy-water-2.png' },
    { slug: 'fireboy-water-3.html', title: 'Fireboy and Watergirl 3: Ice Temple', img: 'fireboy-water-3.png' },
    { slug: 'fireboy-water-4.html', title: 'Fireboy and Watergirl 4: Crystal Temple', img: 'fireboy-water-4.png' },
    { slug: 'fireboy-water-5.html', title: 'Fireboy and Watergirl 5: Elements', img: 'fireboy-water-5.png' },
    { slug: 'fireboy-water-6.html', title: 'Fireboy and Watergirl 6: Fairy Tales', img: 'fireboy-water-6.png' },
    { slug: 'snail-bob-1-html5.html', title: 'Snail Bob 1', img: 'snail-bob-1-html5.png' },
    { slug: 'snail-bob-2-html5.html', title: 'Snail Bob 2', img: 'snail-bob-2-html5.png' },
    { slug: 'snail-bob-3.html', title: 'Snail Bob 3', img: 'snail-bob-3.png' },
    { slug: 'snail-bob-4.html', title: 'Snail Bob 4: Space', img: 'snail-bob-4.png' },
    { slug: 'snail-bob-5-html5.html', title: 'Snail Bob 5: Love Story', img: 'snail-bob-5-html5.png' },
    { slug: 'snail-bob-6.html', title: 'Snail Bob 6: Winter Story', img: 'snail-bob-6.png' },
    { slug: 'snail-bob-7.html', title: 'Snail Bob 7: Fantasy Story', img: 'snail-bob-7.png' },
    { slug: 'snail-bob-8.html', title: 'Snail Bob 8: Island Story', img: 'snail-bob-8.png' },
    { slug: 'vex3.html', title: 'Vex 3', img: 'vex3.png' },
    { slug: 'vex4.html', title: 'Vex 4', img: 'vex4.png' },
    { slug: 'vex5.html', title: 'Vex 5', img: 'vex5.png' },
    { slug: 'vex6.html', title: 'Vex 6', img: 'vex6.png' },
    { slug: 'vex7.html', title: 'Vex 7', img: 'vex7.png' },
    { slug: 'vex-8.html', title: 'Vex 8', img: 'vex-8.png' },
    { slug: 'vex-9.html', title: 'Vex 9', img: 'vex-9.png' },
    { slug: 'vex-10.html', title: 'Vex 10', img: 'vex-10.png' },
    { slug: 'vex-hyper-dash.html', title: 'Vex Hyper Dash', img: 'vex-hyper-dash.png' },
    { slug: 'vex-try-to-fly.html', title: 'Vex Try to Fly', img: 'vex-try-to-fly.png' },
    { slug: 'vex-x3m.html', title: 'Vex X3M', img: 'vex-x3m.png' },
    { slug: 'vex-x3m-2.html', title: 'Vex X3M 2', img: 'vex-x3m-2.png' },
    { slug: 'vex-x3m-3.html', title: 'Vex X3M 3', img: 'vex-x3m-3.png' },
    { slug: 'vex-3-xmas.html', title: 'Vex 3 Xmas', img: 'vex-3-xmas.png' },
    { slug: '2048.html', title: '2048', img: '2048.png' },
    { slug: 'block-toggle.html', title: 'Block Toggle', img: 'block-toggle.png' },
    { slug: 'bubble-game-3.html', title: 'Bubble Game 3', img: 'bubble-game-3.png' },
    { slug: 'cats.html', title: 'Cats', img: 'cats.png' },
    { slug: 'cooking-tile.html', title: 'Cooking Tile', img: 'cooking-tile.png' },
    { slug: 'duck-hunt.html', title: 'Duck Hunt', img: 'duck-hunt.png' },
    { slug: 'fill-the-battery.html', title: 'Fill The Battery', img: 'fill-the-battery.png' },
    { slug: 'fish-eat.html', title: 'Fish Eat Fish', img: 'fish-eat.png' },
    { slug: 'fnaf1.html', title: "Five Nights at Freddy's 1", img: 'fnaf1.png' },
    { slug: 'fnaf2.html', title: "Five Nights at Freddy's 2", img: 'fnaf2.png' },
    { slug: 'icedodo.html', title: 'Ice Dodo', img: 'icedodo.png' },
    { slug: 'jewel-shuffle.html', title: 'Jewel Shuffle', img: 'jewel-shuffle.png' },
    { slug: 'jungle-friends.html', title: 'Jungle Friends', img: 'jungle-friends.png' },
    { slug: 'level-devil.html', title: 'Level Devil', img: 'level-devil.png' },
    { slug: 'mad-dentist-2.html', title: 'Mad Dentist 2', img: 'mad-dentist-2.png' },
    { slug: 'magic-tiles.html', title: 'Magic Tiles', img: 'magic-tiles.png' },
    { slug: 'mahjong-quest.html', title: 'Mahjong Quest', img: 'mahjong-quest.png' },
    { slug: 'mahjong-sweet-easter.html', title: 'Mahjong Sweet Easter', img: 'mahjong-sweet-easter.png' },
    { slug: 'melon-playground.html', title: 'Melon Playground', img: 'melon-playground.png' },
    { slug: 'merge-fruits.html', title: 'Merge Fruits', img: 'merge-fruits.png' },
    { slug: 'mine-clone.html', title: 'Mine Clone', img: 'mine-clone.png' },
    { slug: 'miner-cat-4.html', title: 'Miner Cat 4', img: 'miner-cat-4.png' },
    { slug: 'minesweeper.html', title: 'Minesweeper', img: 'minesweeper.png' },
    { slug: 'paint-blob-ball.html', title: 'Paint Blob Ball', img: 'paint-blob-ball.png' },
    { slug: 'paint-hit.html', title: 'Paint Hit', img: 'paint-hit.png' },
    { slug: 'paint-hit-2d.html', title: 'Paint Hit 2D', img: 'paint-hit-2d.png' },
    { slug: 'tetra-blocks.html', title: 'Tetra Blocks', img: 'tetra-blocks.png' },
    { slug: 'tetris-n-blox.html', title: 'Tetris N Blox', img: 'tetris-n-blox.png' },
    { slug: 'the-battle-cats.html', title: 'The Battle Cats', img: 'the-battle-cats.png' },
    { slug: 'wordle-unlimited.html', title: 'Wordle Unlimited', img: 'wordle-unlimited.png' },
    { slug: 'marble-maze-1.html', title: 'Marble Maze 1', img: 'marble-maze-1.png' },
    { slug: 'ball-and-maze.html', title: 'Ball and Maze', img: 'ball-and-maze.png' },
    { slug: 'airport-clash-3d.html', title: 'Airport Clash 3D', img: 'airport-clash-3d.png' },
    { slug: 'apple-shooter-champ.html', title: 'Apple Shooter Champ', img: 'apple-shooter-champ.png' },
    { slug: 'armedforces.html', title: 'Armed Forces io', img: 'armedforces.png' },
    { slug: 'cat-gunner.html', title: 'Cat Gunner', img: 'cat-gunner.png' },
    { slug: 'fire-free.html', title: 'Fire Free', img: 'fire-free.png' },
    { slug: 'fnaf-shooter.html', title: 'FNaF Shooter', img: 'fnaf-shooter.png' },
    { slug: 'fps-assault-shooter.html', title: 'FPS Assault Shooter', img: 'fps-assault-shooter.png' },
    { slug: 'fps-io.html', title: 'FPS io', img: 'fps-io.png' },
    { slug: 'funny-battle.html', title: 'Funny Battle', img: 'funny-battle.png' },
    { slug: 'getaway-shootout.html', title: 'Getaway Shootout', img: 'getaway-shootout.png' },
    { slug: 'gunspin.html', title: 'Gunspin', img: 'gunspin.png' },
    { slug: 'military-shooter-training.html', title: 'Military Shooter Training', img: 'military-shooter-training.png' },
    { slug: 'mine-shooter.html', title: 'Mine Shooter', img: 'mine-shooter.png' },
    { slug: 'mr-bullet.html', title: 'Mr. Bullet', img: 'mr-bullet.png' },
    { slug: 'mr-bullet-2-online.html', title: 'Mr Bullet 2 Online', img: 'mr-bullet-2-online.png' },
    { slug: 'mr-bullet-3d.html', title: 'Mr Bullet 3D', img: 'mr-bullet-3d.png' },
    { slug: 'ninja-clash-heroes.html', title: 'Ninja Clash Heroes', img: 'ninja-clash-heroes.png' },
    { slug: 'pinatamasters.html', title: 'Pinatamasters', img: 'pinatamasters.png' },
    { slug: 'pixel-shooter.html', title: 'Pixel Shooter', img: 'pixel-shooter.png' },
    { slug: 'raft-wars.html', title: 'Raft Wars', img: 'raft-wars.png' },
    { slug: 'raft-wars-2.html', title: 'Raft Wars 2', img: 'raft-wars-2.png' },
    { slug: 'rooftop-shooters.html', title: 'Rooftop Shooters', img: 'rooftop-shooters.png' },
    { slug: 'rooftop-snipers.html', title: 'Rooftop Snipers', img: 'rooftop-snipers.png' },
    { slug: 'strike-force-heroes.html', title: 'Strike Force Heroes', img: 'strike-force-heroes.png' },
    { slug: 'time-shooter-2.html', title: 'Time Shooter 2', img: 'time-shooter-2.png' },
    { slug: 'time-shooter-3-swat.html', title: 'Time Shooter 3 SWAT', img: 'time-shooter-3-swat.png' },
    { slug: 'tiny-rifles.html', title: 'Tiny Rifles', img: 'tiny-rifles.png' },
    { slug: 'xmas-rooftop-battles.html', title: 'Xmas Rooftop Battles', img: 'xmas-rooftop-battles.png' },
    { slug: 'you-vs-100-skibidi-toilets.html', title: 'You vs 100 Skibidi Toilets', img: 'you-vs-100-skibidi-toilets.png' },
    { slug: 'zombie-shooter-3d-1.html', title: 'Zombie Shooter 3D', img: 'zombie-shooter-3d-1.png' },
    { slug: 'zombies-shooter-part-2.html', title: 'Zombies Shooter Part 2', img: 'zombies-shooter-part-2.png' },
    { slug: 'funny-shooter-2.html', title: 'Funny Shooter 2', img: 'funny-shooter-2.png' },
    { slug: 'balls-avoid.html', title: 'Balls Avoid', img: 'balls-avoid.png' },
    { slug: 'color-road.html', title: 'Color Road', img: 'color-road.png' },
    { slug: 'color-road-2.html', title: 'Color Road 2', img: 'color-road-2.png' },
    { slug: 'color-tunnel.html', title: 'Color Tunnel', img: 'color-tunnel.png' },
    { slug: 'crazy-runner-in-city.html', title: 'Crazy Runner in City', img: 'crazy-runner-in-city.png' },
    { slug: 'crowd-run-3d.html', title: 'Crowd Run 3D', img: 'crowd-run-3d.png' },
    { slug: 'cubito.html', title: 'Cubito', img: 'cubito.png' },
    { slug: 'dark-runner.html', title: 'Dark Runner', img: 'dark-runner.png' },
    { slug: 'death-run-3d.html', title: 'Death Run 3D', img: 'death-run-3d.png' },
    { slug: 'escape-run.html', title: 'Escape Run', img: 'escape-run.png' },
    { slug: 'glitch-dash.html', title: 'Glitch Dash', img: 'glitch-dash.png' },
    { slug: 'going-balls.html', title: 'Going Balls', img: 'going-balls.png' },
    { slug: 'gswitch.html', title: 'G-Switch 3', img: 'gswitch.png' },
    { slug: 'g-switch-4.html', title: 'G-Switch 4', img: 'g-switch-4.png' },
    { slug: 'healing-rush.html', title: 'Healing Rush', img: 'healing-rush.png' },
    { slug: 'nail-stack.html', title: 'Nail Stack', img: 'nail-stack.png' },
    { slug: 'obby-parkour-racing.html', title: 'Obby Parkour Racing', img: 'obby-parkour-racing.png' },
    { slug: 'rail-surfers.html', title: 'Rail Surfers', img: 'rail-surfers.png' },
    { slug: 'running-fred.html', title: 'Running Fred', img: 'running-fred.png' },
    { slug: 'run-rich-3d.html', title: 'Run Rich 3D', img: 'run-rich-3d.png' },
    { slug: 'shift-run.html', title: 'Shift Run', img: 'shift-run.png' },
    { slug: 'snowboard-king-2024.html', title: 'Snowboard King 2024', img: 'snowboard-king-2024.png' },
    { slug: 'snowboard-kings-2022.html', title: 'Snowboard Kings 2022', img: 'snowboard-kings-2022.png' },
    { slug: 'snow-rider-3d.html', title: 'Snow Rider 3D', img: 'snow-rider-3d.png' },
    { slug: 'snow-rider-3d-2.html', title: 'Snow Rider 3D 2', img: 'snow-rider-3d-2.png' },
    { slug: 'snow-rider-3d-nostalgia.html', title: 'Snow Rider 3D Nostalgia', img: 'snow-rider-3d-nostalgia.png' },
    { slug: 'snow-rider-obby-parkour.html', title: 'Snow Rider Obby Parkour', img: 'snow-rider-obby-parkour.png' },
    { slug: 'snow-rush-3d.html', title: 'Snow Rush 3D', img: 'snow-rush-3d.png' },
    { slug: 'stairs.html', title: 'Stairs', img: 'stairs.png' },
    { slug: 'subway-surfers-hongkong.html', title: 'Subway Surfers: Hong Kong', img: 'subway-surfers-hongkong.png' },
    { slug: 'subway-surfers-nyc.html', title: 'Subway Surfers: New York City', img: 'subway-surfers-nyc.png' },
    { slug: 'talking-tom-run.html', title: 'Talking Tom Gold Run', img: 'talking-tom-run.png' },
    { slug: 'tanuki-sunset.html', title: 'Tanuki Sunset', img: 'tanuki-sunset.png' },
    { slug: 'temple-run-2-holi-festival.html', title: 'Temple Run 2: Holi Festival', img: 'temple-run-2-holi-festival.png' },
    { slug: 'temple-run-2-jungle-fall.html', title: 'Temple Run 2: Jungle Fall', img: 'temple-run-2-jungle-fall.png' },
    { slug: 'tunnel-rush.html', title: 'Tunnel Rush', img: 'tunnel-rush.png' },
    { slug: 'tunnel-rush-2.html', title: 'Tunnel Rush 2', img: 'tunnel-rush-2.png' },
    { slug: 'two-tubes-3d.html', title: 'Two Tubes 3D', img: 'two-tubes-3d.png' },
    { slug: 'vector.html', title: 'Vector', img: 'vector.png' },
    { slug: 'run-1.html', title: 'Run 1', img: 'run-1.png' },
    { slug: 'run-2.html', title: 'Run 2', img: 'run-2.png' },
    { slug: 'run-3.html', title: 'Run 3', img: 'run-3.png' },
    { slug: 'basketball-frvr.html', title: 'Basketball FRVR', img: 'basketball-frvr.png' },
    { slug: 'basketball-stars.html', title: 'Basketball Stars', img: 'basketball-stars.png' },
    { slug: 'basketball-stars-2026.html', title: 'Basketball Stars 2026', img: 'basketball-stars-2026.png' },
    { slug: 'boxing-random.html', title: 'Boxing Random', img: 'boxing-random.png' },
    { slug: 'dunkbrush.html', title: 'Dunkbrush', img: 'dunkbrush.png' },
    { slug: 'hockey-taka.html', title: 'Hockey Taka', img: 'hockey-taka.png' },
    { slug: 'monster-truck-soccer.html', title: 'Monster Truck Soccer', img: 'monster-truck-soccer.png' },
    { slug: 'penalty-shooters.html', title: 'Penalty Shooters', img: 'penalty-shooters.png' },
    { slug: 'penalty-shooters-3.html', title: 'Penalty Shooters 3', img: 'penalty-shooters-3.png' },
    { slug: 'penalty-shooters-x.html', title: 'Penalty Shooters X', img: 'penalty-shooters-x.png' },
    { slug: 'penalty-superstar.html', title: 'Penalty Superstar', img: 'penalty-superstar.png' },
    { slug: 'soccer-champ.html', title: 'Soccer Champ', img: 'soccer-champ.png' },
    { slug: 'soccer-physics.html', title: 'Soccer Physics', img: 'soccer-physics.png' },
    { slug: 'soccer-sprint.html', title: 'Soccer Sprint', img: 'soccer-sprint.png' },
    { slug: 'soccer-world-cup.html', title: 'Soccer World Cup', img: 'soccer-world-cup.png' },
    { slug: 'sports-heads-football-championship.html', title: 'Sports Heads Football Championship', img: 'sports-heads-football-championship.png' },
    { slug: 'swipe-basketball.html', title: 'Swipe Basketball', img: 'swipe-basketball.png' },
    { slug: 'tap-goal.html', title: 'Tap Goal', img: 'tap-goal.png' },
    { slug: 'tennis-open.html', title: 'Tennis Open', img: 'tennis-open.png' },
    { slug: 'uno.html', title: 'Uno', img: 'uno.png' },
    { slug: 'volley-random.html', title: 'Volley Random', img: 'volley-random.png' },
    { slug: 'retro-bowl-college.html', title: 'Retro Bowl College', img: 'retro-bowl-college.png' },
    { slug: 'retro-bowl.html', title: 'Retro Bowl', img: 'retro-bowl.png' },
    { slug: 'football-legends-2026.html', title: 'Football Legends 2026', img: 'football-legends-2026.png' },
    { slug: 'football-penalty-2026.html', title: 'Football Penalty 2026', img: 'football-penalty-2026.png' },
    { slug: 'boxrob.html', title: 'BoxRob', img: 'boxrob.png' },
    { slug: 'boxrob2.html', title: 'Boxrob 2', img: 'boxrob2.png' },
    { slug: 'boxrob3.html', title: 'Boxrob 3', img: 'boxrob3.png' },
    { slug: 'bob-the-robber.html', title: 'Bob The Robber', img: 'bob-the-robber.png' },
    { slug: 'bob-the-robber-2.html', title: 'Bob The Robber 2', img: 'bob-the-robber-2.png' },
    { slug: 'bob-the-robber-3.html', title: 'Bob The Robber 3', img: 'bob-the-robber-3.png' },
    { slug: 'bob-the-robber-4.html', title: 'Bob The Robber 4', img: 'bob-the-robber-4.png' },
    { slug: 'bob-the-robber-4-season-2-russia.html', title: 'Bob The Robber 4 Season 2 Russia', img: 'bob-the-robber-4-season-2-russia.png' },
    { slug: 'bob-the-robber-4-season-3-japan.html', title: 'Bob The Robber 4 Season 3 Japan', img: 'bob-the-robber-4-season-3-japan.png' },
    { slug: 'bob-the-robber-5.html', title: 'Bob The Robber 5', img: 'bob-the-robber-5.png' },
    { slug: 'lows-adventures.html', title: 'Lows Adventures', img: 'lows-adventures.png' },
    { slug: 'lows-adventures-2.html', title: 'Lows Adventures 2', img: 'lows-adventures-2.png' },
    { slug: 'lows-adventures-3.html', title: 'Lows Adventures 3', img: 'lows-adventures-3.png' },
    { slug: 'geometrical-dash.html', title: 'Geometrical Dash', img: 'geometrical-dash.png' },
    { slug: 'geometry-dash.html', title: 'Geometry Dash', img: 'geometry-dash.png' },
    { slug: 'geometry-dash-bloodbath.html', title: 'Geometry Dash Bloodbath', img: 'geometry-dash-bloodbath.png' },
    { slug: 'geometry-dash-classic.html', title: 'Geometry Dash Classic', img: 'geometry-dash-classic.png' },
    { slug: 'geometry-dash-finally.html', title: 'Geometry Dash Finally', img: 'geometry-dash-finally.png' },
    { slug: 'geometry-dash-mr-dubstep.html', title: 'Geometry Dash Mr Dubstep', img: 'geometry-dash-mr-dubstep.png' },
    { slug: 'geometry-dash-nemesis.html', title: 'Geometry Dash Nemesis', img: 'geometry-dash-nemesis.png' },
    { slug: 'geometry-dash-robot.html', title: 'Geometry Dash Robot', img: 'geometry-dash-robot.png' },
    { slug: 'geometry-dash-ship.html', title: 'Geometry Dash Ship', img: 'geometry-dash-ship.png' },
    { slug: 'geometry-dash-world.html', title: 'Geometry Dash World', img: 'geometry-dash-world.png' },
    { slug: 'geometry-jump.html', title: 'Geometry Jump', img: 'geometry-jump.png' },
    { slug: 'geometry-jump-challenge.html', title: 'Geometry Jump Challenge', img: 'geometry-jump-challenge.png' },
    { slug: 'geometry-meltdown.html', title: 'Geometry Meltdown', img: 'geometry-meltdown.png' },
    { slug: 'geometry-neon-dash-rainbow.html', title: 'Geometry Neon Dash Rainbow', img: 'geometry-neon-dash-rainbow.png' },
    { slug: 'geometry-neon-dash-world-two.html', title: 'Geometry Neon Dash World Two', img: 'geometry-neon-dash-world-two.png' },
    { slug: 'geometry-rash.html', title: 'Geometry Rash', img: 'geometry-rash.png' }
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
 