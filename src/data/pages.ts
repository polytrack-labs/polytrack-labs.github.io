/**
 * All long-form page copy, per language.
 *
 * Paragraphs may contain inline links written as `[anchor](/path)`. They are
 * resolved against the deployment base path at render time by
 * `src/lib/inline.ts`, so never hard-code the repository name here.
 */

export type SchemaKind = 'HowTo' | 'Article' | 'WebPage';

export interface Section {
  id: string;
  heading: string;
  /** Plain paragraphs, may include `[anchor](/path)` links. */
  body?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
  table?: { caption?: string; head: string[]; rows: string[][] };
}

export interface Faq {
  question: string;
  answer: string;
}

export interface PageContent {
  slug: string;
  /** <title> and og:title */
  title: string;
  /** <h1> */
  heading: string;
  description: string;
  /** Short lead paragraph under the h1. */
  intro: string;
  updated: string;
  schema: SchemaKind;
  sections: Section[];
  faqs?: Faq[];
  related?: string[];
}

export interface HomeContent {
  title: string;
  heading: string;
  description: string;
  intro: string;
  aboutHeading: string;
  about: string[];
  featuresHeading: string;
  features: { title: string; text: string; icon: string }[];
  stepsHeading: string;
  steps: { title: string; text: string }[];
  controlsHeading: string;
  controlsNote: string;
  faqs: Faq[];
}

const CONTROLS_ROWS_EN: string[][] = [
  ['W or ↑', 'Accelerate'],
  ['S or ↓', 'Brake and reverse'],
  ['A or ←', 'Turn left'],
  ['D or →', 'Turn right'],
  ['R or Enter', 'Reset to the last checkpoint'],
  ['T or Backspace', 'Restart the track from the start'],
  ['C or M', 'Toggle the cockpit camera'],
  ['H', 'Hide or show the on-screen interface'],
  ['P or Space', 'Pause'],
];

const CONTROLS_ROWS_ES: string[][] = [
  ['W o ↑', 'Acelerar'],
  ['S o ↓', 'Frenar y dar marcha atrás'],
  ['A o ←', 'Girar a la izquierda'],
  ['D o →', 'Girar a la derecha'],
  ['R o Enter', 'Volver al último punto de control'],
  ['T o Retroceso', 'Reiniciar la pista desde el principio'],
  ['C o M', 'Cambiar a la cámara del cockpit'],
  ['H', 'Mostrar u ocultar la interfaz'],
  ['P o Espacio', 'Pausa'],
];

export const home: Record<'en' | 'es', HomeContent> = {
  en: {
    title: 'PolyTrack Online — Play the Free Low-Poly Racing Game',
    heading: 'PolyTrack Online',
    description:
      'Play PolyTrack online for free in your browser. A low-poly 3D racing game with a full track editor, community tracks, ghost replays and leaderboards. No download, no login.',
    intro:
      'Build a track out of blocks, pick a car, and race the clock. PolyTrack is a browser-based 3D racing game with a level editor — it boots in seconds and needs nothing but a keyboard.',
    aboutHeading: 'What is PolyTrack?',
    about: [
      'PolyTrack is a free 3D racing game that runs entirely in the browser. Every track is assembled from plain blocks — walls, ramps, half-pipes and signs — so the game looks like a stack of plastic bricks and plays like an arcade racer. You drive a small car from a start line to a finish line, passing through checkpoints, and the clock decides how good you really are.',
      'What separates it from most browser racers is the built-in editor. The game ships with official tracks and community tracks, and it lets you build your own from scratch, test it instantly, and race against ghost replays of other players. If you have played TrackMania, the loop will feel familiar: learn a line, shave a tenth, repeat.',
      'The version on this page is the official 0.6.3 web build, hosted directly on this site so that it loads fast and starts without an account.',
    ],
    featuresHeading: 'What you can do here',
    features: [
      {
        title: 'Race official and community tracks',
        text: 'Jump straight into the built-in tracks, or browse the huge library of player-made community maps — from 20-second sprints to multi-minute technical circuits.',
        icon: 'flag',
      },
      {
        title: 'Build your own track',
        text: 'The editor places blocks, ramps, checkpoints and scenery in 3D. Build a track in ten minutes, test it with one key, then publish it to the community.',
        icon: 'blocks',
      },
      {
        title: 'Chase ghost replays',
        text: 'Every run can be raced against a ghost of your best attempt or another player’s record, so you can see exactly where the time is lost.',
        icon: 'ghost',
      },
      {
        title: 'Online leaderboards',
        text: 'Times are ranked per track. Compare your run with the global leaderboard for official tracks and see how far off the world record you are.',
        icon: 'trophy',
      },
      {
        title: 'Customise your car',
        text: 'Paint and personalise your car so your ghost is recognisable when it lines up next to everyone else’s.',
        icon: 'paint',
      },
      {
        title: 'Play with friends',
        text: 'Host a multiplayer lobby and race other players live, or take turns chasing the same leaderboard time.',
        icon: 'users',
      },
    ],
    stepsHeading: 'How to start racing in 30 seconds',
    steps: [
      {
        title: 'Load the game',
        text: 'Press play above. The 3D engine streams in on first load — after that it is cached and starts almost instantly.',
      },
      {
        title: 'Pick a track',
        text: 'Choose an official track to learn the handling, or open the community list and sort by difficulty.',
      },
      {
        title: 'Drive with W A S D or the arrow keys',
        text: 'Accelerate, brake, steer. Press R to snap back to the last checkpoint instead of restarting the whole track.',
      },
      {
        title: 'Beat your own ghost',
        text: 'Finish once to set a time, then race the ghost that appears next to you and start shaving tenths.',
      },
    ],
    controlsHeading: 'PolyTrack controls at a glance',
    controlsNote: 'Full list, including camera and editor keys:',
    faqs: [
      {
        question: 'Is PolyTrack free to play?',
        answer:
          'Yes. PolyTrack is free to play in the browser with no purchase, no subscription and no account. This page hosts the official web build and does not put anything behind a paywall.',
      },
      {
        question: 'Do I need to download or install PolyTrack?',
        answer:
          'No. The game loads straight into the browser tab. There is no installer, no app store listing and no plugin — the only requirement is a browser with WebGL enabled, which covers Chrome, Edge, Firefox, Safari and Chromebooks.',
      },
      {
        question: 'Can I play PolyTrack on a school Chromebook?',
        answer:
          'Usually yes. The game is a static web page with no install step, so it works on managed Chromebooks as long as the network allows this domain and WebGL is not disabled by policy. There is a dedicated guide covering blocked-network cases.',
      },
      {
        question: 'Does PolyTrack work on a phone or tablet?',
        answer:
          'It runs, and the game includes on-screen touch controls, but it is designed around a keyboard. Precise steering with a mouse-free touchscreen is much harder, so a laptop or desktop is the better way to chase lap times.',
      },
      {
        question: 'Is there a track editor in the browser version?',
        answer:
          'Yes — the editor is part of the game, not a separate download. You can place blocks, ramps, checkpoints and decorations, test the track instantly, and save or share it.',
      },
      {
        question: 'Can I race other people online?',
        answer:
          'Yes. The game supports multiplayer lobbies where one player hosts and the others join, plus per-track leaderboards and ghost replays if you would rather race the clock than race a person.',
      },
    ],
  },
  es: {
    title: 'PolyTrack Online — Juega gratis al juego de carreras low-poly',
    heading: 'PolyTrack Online',
    description:
      'Juega PolyTrack online gratis en tu navegador. Un juego de carreras 3D low-poly con editor de pistas, pistas de la comunidad, repeticiones fantasma y clasificaciones. Sin descargas ni registro.',
    intro:
      'Construye una pista con bloques, elige un coche y corre contra el cronómetro. PolyTrack es un juego de carreras 3D para navegador con editor de niveles: arranca en segundos y solo necesita un teclado.',
    aboutHeading: '¿Qué es PolyTrack?',
    about: [
      'PolyTrack es un juego de carreras 3D gratuito que se ejecuta por completo en el navegador. Cada pista se construye con bloques simples — muros, rampas, half-pipes y señales —, así que el juego parece una pila de piezas de plástico y se conduce como un arcade. Llevas un coche pequeño desde la salida hasta la meta, pasando por puntos de control, y el cronómetro decide lo bueno que eres de verdad.',
      'Lo que lo diferencia de la mayoría de los juegos de navegador es su editor integrado. El juego incluye pistas oficiales y pistas de la comunidad, y te deja crear las tuyas desde cero, probarlas al instante y competir contra las repeticiones fantasma de otros jugadores. Si has jugado a TrackMania, el bucle te resultará familiar: aprende la trazada, recorta una décima, repite.',
      'La versión de esta página es la build web oficial 0.6.3, alojada directamente en este sitio para que cargue rápido y arranque sin cuenta.',
    ],
    featuresHeading: 'Qué puedes hacer aquí',
    features: [
      {
        title: 'Corre en pistas oficiales y de la comunidad',
        text: 'Entra directamente en las pistas incluidas o explora la enorme biblioteca de mapas creados por jugadores: desde sprints de 20 segundos hasta circuitos técnicos de varios minutos.',
        icon: 'flag',
      },
      {
        title: 'Crea tu propia pista',
        text: 'El editor coloca bloques, rampas, puntos de control y decoración en 3D. Monta una pista en diez minutos, pruébala con una tecla y publícala para la comunidad.',
        icon: 'blocks',
      },
      {
        title: 'Persigue repeticiones fantasma',
        text: 'Cada carrera puede disputarse contra el fantasma de tu mejor intento o del récord de otro jugador, así ves exactamente dónde pierdes tiempo.',
        icon: 'ghost',
      },
      {
        title: 'Clasificaciones online',
        text: 'Los tiempos se ordenan por pista. Compara tu vuelta con la clasificación global de las pistas oficiales y mira a cuánto estás del récord del mundo.',
        icon: 'trophy',
      },
      {
        title: 'Personaliza tu coche',
        text: 'Pinta y personaliza tu coche para que tu fantasma sea reconocible cuando se ponga al lado de los demás.',
        icon: 'paint',
      },
      {
        title: 'Juega con amigos',
        text: 'Crea una partida multijugador y corre en directo contra otros jugadores, o compite por turnos contra el mismo tiempo de la clasificación.',
        icon: 'users',
      },
    ],
    stepsHeading: 'Cómo empezar a correr en 30 segundos',
    steps: [
      {
        title: 'Carga el juego',
        text: 'Pulsa jugar arriba. El motor 3D se descarga en la primera carga; después queda en caché y arranca casi al instante.',
      },
      {
        title: 'Elige una pista',
        text: 'Escoge una pista oficial para aprender el manejo, o abre la lista de la comunidad y ordena por dificultad.',
      },
      {
        title: 'Conduce con W A S D o las flechas',
        text: 'Acelera, frena y gira. Pulsa R para volver al último punto de control en lugar de reiniciar toda la pista.',
      },
      {
        title: 'Supera a tu propio fantasma',
        text: 'Termina una vez para fijar un tiempo, y luego corre contra el fantasma que aparece a tu lado para recortar décimas.',
      },
    ],
    controlsHeading: 'Controles de PolyTrack de un vistazo',
    controlsNote: 'Lista completa, con cámara y teclas del editor:',
    faqs: [
      {
        question: '¿PolyTrack es gratis?',
        answer:
          'Sí. PolyTrack se juega gratis en el navegador, sin compra, sin suscripción y sin cuenta. Esta página aloja la build web oficial y no pone nada detrás de un muro de pago.',
      },
      {
        question: '¿Hay que descargar o instalar PolyTrack?',
        answer:
          'No. El juego se carga directamente en la pestaña del navegador. No hay instalador, ni tienda de aplicaciones, ni plugin: solo necesitas un navegador con WebGL activado, lo que incluye Chrome, Edge, Firefox, Safari y Chromebooks.',
      },
      {
        question: '¿Se puede jugar a PolyTrack en un Chromebook del colegio?',
        answer:
          'Normalmente sí. El juego es una página web estática sin instalación, así que funciona en Chromebooks gestionados siempre que la red permita este dominio y WebGL no esté desactivado por política. Hay una guía específica para los casos de red bloqueada.',
      },
      {
        question: '¿PolyTrack funciona en móvil o tablet?',
        answer:
          'Funciona y el juego incluye controles táctiles en pantalla, pero está diseñado para teclado. Girar con precisión en una pantalla táctil es mucho más difícil, así que un portátil o un PC es mejor para perseguir tiempos.',
      },
      {
        question: '¿La versión de navegador incluye editor de pistas?',
        answer:
          'Sí: el editor forma parte del juego, no es una descarga aparte. Puedes colocar bloques, rampas, puntos de control y decoración, probar la pista al instante y guardarla o compartirla.',
      },
      {
        question: '¿Puedo correr contra otras personas online?',
        answer:
          'Sí. El juego admite partidas multijugador en las que un jugador hace de anfitrión y los demás se unen, además de clasificaciones por pista y repeticiones fantasma si prefieres correr contra el cronómetro.',
      },
    ],
  },
};

export const pages: Record<'en' | 'es', PageContent[]> = {
  en: [
    {
      slug: 'how-to-play',
      title: 'How to Play PolyTrack — Beginner’s Guide to Racing and Winning',
      heading: 'How to Play PolyTrack',
      description:
        'A complete beginner’s guide to PolyTrack: how the timer works, how checkpoints save you, how to read ghost replays, and the driving habits that cut seconds off every track.',
      intro:
        'PolyTrack looks simple until the first hairpin. This guide covers the rules of a run, the checkpoints that save you, and the driving habits that separate a clean lap from a scrappy one.',
      updated: '2026-11-07',
      schema: 'HowTo',
      sections: [
        {
          id: 'the-goal',
          heading: 'The goal of every run',
          body: [
            'A run starts at the start line and ends when you cross the finish flag. Between the two sit checkpoints, and your score is simply the time it took. There is no fuel, no damage model and no lap limit — the only resource you have is momentum, and the only thing you lose is time.',
            'Because the tracks are built from blocks, most corners are geometric: a clean 90-degree turn, a banked sweeper, a hairpin over a ramp. The game rewards carrying speed through those corners rather than braking late and scrubbing off speed.',
          ],
        },
        {
          id: 'first-race',
          heading: 'Your first race, step by step',
          steps: [
            {
              title: 'Load the game and open the track list',
              text: 'The main menu lists official tracks and community tracks. Start with an official one — they are tuned for the default car and have gentler geometry.',
            },
            {
              title: 'Hold accelerate and learn the first corner',
              text: 'Do not chase a time on the first attempt. Drive to the first checkpoint slowly, then repeat that one section until the turn-in point feels automatic.',
            },
            {
              title: 'Reset instead of restarting',
              text: 'Press R (or Enter) to be placed back at the last checkpoint you touched. This is the single biggest time-saver when you are learning a route.',
            },
            {
              title: 'Finish once to unlock your ghost',
              text: 'Your first completed run becomes a ghost you can race against. Restart with T (or Backspace) and try to stay in front of it.',
            },
            {
              title: 'Compare with the leaderboard',
              text: 'When your ghost is no longer a challenge, load a faster ghost or check the leaderboard for the track to see where the real time is found.',
            },
          ],
        },
        {
          id: 'checkpoints',
          heading: 'How checkpoints work',
          body: [
            'Checkpoints are the reason a mistake is not fatal. Touch one and it becomes your respawn point: from then on, pressing the reset key returns you there instead of to the start line.',
            'The practical consequence is that you can attack a hard section repeatedly at full speed. If a jump keeps landing you on your roof, reset, take a different approach angle, and reset again — you are only losing the two seconds between the checkpoint and the crash.',
          ],
          bullets: [
            'Pass a checkpoint by driving through the gate, not around it.',
            'A reset while airborne still counts — you respawn at the gate, stationary.',
            'Restarting with T wipes every checkpoint, including your ghost comparison for that attempt.',
          ],
        },
        {
          id: 'ghosts',
          heading: 'Racing ghosts instead of people',
          body: [
            'Ghost replays are the core practice tool. A ghost is a recorded run played back as a translucent car, and it is displayed against you in real time so you can see where you gain or lose ground.',
            'The useful habit is to watch the ghost at the exact corner where you fall behind, not the whole track at once. Most of the time the difference is a single braking point, or taking a ramp on the correct side so you land pointing at the next gate.',
          ],
        },
        {
          id: 'faster',
          heading: 'Six habits that make you faster',
          bullets: [
            'Brake before the corner, not in it. Trail-braking into a block wall kills your exit speed.',
            'Use the whole width of the track on entry — clipping the inside wall costs more time than a wide entry ever does.',
            'Land on the flat side of ramps. Landing on a slope sends you sideways and you lose the next gate.',
            'Keep the cockpit camera off while learning. The default chase camera shows more of the track ahead.',
            'Practice one section per session instead of full laps. Three clean corners beat ten sloppy laps.',
            'Check the mirror of your ghost, not the leaderboard. Beating yesterday’s time is the only measurable progress.',
          ],
        },
        {
          id: 'mistakes',
          heading: 'Mistakes beginners make',
          body: [
            'The most common one is treating the throttle as a binary switch. In PolyTrack, lifting for a fraction of a second before a corner often keeps the car settled enough to take the next gate flat out.',
            'The second is ignoring elevation. A track that looks flat from the chase camera can be a downhill launch; if you are still accelerating on the lip, you will overshoot the landing by a full block.',
            'The third is restarting too often. Use checkpoints to isolate the hard part, and only restart the whole track when you are ready to put a complete run together.',
          ],
        },
      ],
      faqs: [
        {
          question: 'How do I reset to the last checkpoint in PolyTrack?',
          answer:
            'Press R or Enter while driving. That returns the car to the most recent checkpoint gate you passed, with the clock still running. Pressing T or Backspace instead restarts the whole track.',
        },
        {
          question: 'Does the timer keep running when I reset?',
          answer:
            'Yes. A checkpoint reset does not pause or rewind the clock — it only repositions the car. That is why a clean section is worth far more than a fast crash.',
        },
        {
          question: 'How do I unlock new tracks?',
          answer:
            'There is no unlock progression. Every official track and every community track is available from the track list as soon as the game loads; harder tracks are simply harder to finish.',
        },
        {
          question: 'Can I race my own track against a ghost?',
          answer:
            'Yes. Once you complete a run on a track you built, that run is saved as a ghost, and you can race against it the same way you race ghosts on official tracks.',
        },
      ],
      related: ['controls', 'track-editor', 'unblocked'],
    },

    {
      slug: 'controls',
      title: 'PolyTrack Controls — Full Keyboard, Camera and Editor Key List',
      heading: 'PolyTrack Controls',
      description:
        'Every PolyTrack key binding on one page: driving, camera, checkpoints, pause, and the full list of track editor shortcuts, plus how to change them in settings.',
      intro:
        'The default layout is built around WASD with arrow-key alternatives. Here is the complete list, including the keys that are easy to miss — cockpit camera, UI toggle and editor rotation.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'driving',
          heading: 'Driving controls',
          body: [
            'Two full sets of driving keys are bound by default, so you can use either the letter block or the arrow cluster. Both work at the same time, which is handy if a second player is sitting at the same keyboard.',
          ],
          table: {
            caption: 'Default driving bindings in PolyTrack 0.6.3',
            head: ['Key', 'Action'],
            rows: CONTROLS_ROWS_EN.slice(0, 5),
          },
        },
        {
          id: 'camera-ui',
          heading: 'Camera, interface and pause',
          table: {
            head: ['Key', 'Action'],
            rows: CONTROLS_ROWS_EN.slice(5),
          },
        },
        {
          id: 'changing',
          heading: 'How to change the key bindings',
          body: [
            'Open the settings menu from the main menu or the pause menu and expand the Controls section. Every action listed above can be rebound to a different key, and the game stores the result locally, so your layout survives a page reload.',
            'If a key does nothing, first check that the game canvas has focus — click once inside the game area. Browsers route keyboard events to whichever element has focus, and an iframe that has not been clicked will not receive them.',
          ],
        },
        {
          id: 'editor-keys',
          heading: 'Track editor shortcuts',
          body: [
            'The editor reuses the movement keys and adds rotation, height and delete modifiers. Note that R changes meaning inside the editor: in the editor it rotates the selected part instead of resetting the car.',
          ],
          table: {
            caption: 'Track editor shortcuts',
            head: ['Key', 'Action'],
            rows: [
              ['W A S D or arrows', 'Move the editor camera'],
              ['R or Space', 'Rotate the selected block'],
              ['Shift', 'Hold to raise or lower the block height'],
              ['Delete or X', 'Delete the selected block'],
              ['Mouse drag', 'Pan and orbit the view'],
              ['Scroll', 'Zoom in and out'],
            ],
          },
        },
        {
          id: 'touch',
          heading: 'Touch controls and gamepads',
          body: [
            'On a phone or tablet the game draws on-screen steering and pedal buttons automatically, and the steering side can be flipped in the settings if you prefer the other hand. Every menu in the game is reachable with a tap.',
            'A physical keyboard is still the most precise option: analogue-feeling steering comes from tapping rather than holding, and a keyboard lets you feather a turn in a way a touchscreen cannot match.',
          ],
        },
      ],
      faqs: [
        {
          question: 'What is the reset key in PolyTrack?',
          answer:
            'R or Enter resets to the last checkpoint. T or Backspace restarts the entire track from the start line. Both are rebindable in the settings menu.',
        },
        {
          question: 'Why is my keyboard not working in the game?',
          answer:
            'The game canvas usually just needs focus: click once inside the game area, then press a key. If it still does nothing, check that the page is not inside a nested frame and that no browser extension is intercepting keystrokes.',
        },
        {
          question: 'Can I play PolyTrack with a controller?',
          answer:
            'The web build is designed around keyboard and touch input rather than gamepad. A controller can be mapped through browser or OS-level tools, but the in-game settings only expose keyboard bindings.',
        },
        {
          question: 'How do I go fullscreen?',
          answer:
            'Use the fullscreen button in the game toolbar above the canvas, or the fullscreen option in the game’s own settings. Press Escape to leave fullscreen and return to the page.',
        },
      ],
      related: ['how-to-play', 'track-editor'],
    },

    {
      slug: 'track-editor',
      title: 'PolyTrack Track Editor Guide — Build, Test and Share Custom Tracks',
      heading: 'PolyTrack Track Editor',
      description:
        'Learn the PolyTrack track editor: placing blocks, rotating and raising parts, adding checkpoints and a finish line, testing a track, and sharing it with the community.',
      intro:
        'The editor is the reason people stay. It is a block-based 3D level builder, and once you understand height, rotation and checkpoints you can build a track worth racing in an afternoon.',
      updated: '2026-11-07',
      schema: 'HowTo',
      sections: [
        {
          id: 'opening',
          heading: 'Opening the editor',
          body: [
            'Select the editor entry from the main menu. You start on an empty grid with a free camera: W A S D or the arrow keys move the view, the mouse orbits it, and the scroll wheel zooms.',
            'The part palette is grouped by category — track surface, walls, ramps, half-pipes, checkpoints, scenery and signs. There is also a search field if you know the name of a part.',
          ],
        },
        {
          id: 'placing',
          heading: 'Placing, rotating and raising blocks',
          steps: [
            {
              title: 'Pick a part from the palette',
              text: 'The ghost preview follows the grid so you can see exactly which cell the block will occupy.',
            },
            {
              title: 'Click to place it',
              text: 'Blocks snap to the grid. Placing next to an existing block continues the surface, which is how you extend a road.',
            },
            {
              title: 'Rotate with R',
              text: 'R or Space rotates the selected block through its allowed orientations. Ramps need the correct facing direction or the car will hit the vertical face.',
            },
            {
              title: 'Hold Shift to change height',
              text: 'Shift raises or lowers the block, letting you build bridges, banked corners and multi-level layouts instead of a flat circuit.',
            },
            {
              title: 'Delete with X',
              text: 'Delete or X removes the selected block. Clean up stray blocks — a single misplaced block in a corner is enough to ruin a racing line.',
            },
          ],
        },
        {
          id: 'checkpoints',
          heading: 'Checkpoints, start and finish',
          body: [
            'Every track needs one start position and one finish gate. Place them in the direction of travel — a finish gate facing the wrong way will not trigger.',
            'Add a checkpoint every 10 to 20 seconds of driving. More checkpoints mean fewer full restarts for the player, which makes a hard track far more enjoyable than one with a single gate at the halfway point.',
          ],
        },
        {
          id: 'testing',
          heading: 'Testing and iterating',
          body: [
            'Test straight from the editor. You drive your unfinished track exactly as a player would, and if a corner is unfair you can return to the editor and move one block instead of rebuilding the section.',
            'Test with the default car and default camera. It is tempting to tune a track around a specific setup, but most players will run whatever the game hands them.',
          ],
        },
        {
          id: 'sharing',
          heading: 'Saving, sharing and community tracks',
          body: [
            'Finished tracks can be saved locally, exported as a file, and published to the community track list where other players can race them and set times.',
            'Exported tracks are the practical way to back up your work: save the file, keep it with your other project files, and import it again if the browser storage is cleared.',
          ],
        },
        {
          id: 'design-tips',
          heading: 'Design rules that make a track fun',
          bullets: [
            'Open with a straight long enough to reach top speed — it teaches the player how the car behaves.',
            'Alternate corner directions. Three right-handers in a row becomes a chore.',
            'Use elevation for rhythm, not for cruelty: a blind crest followed by a hairpin is punishing.',
            'Place signs before blind corners so a fast player can react instead of memorising.',
            'Keep walls close on technical sections and wide on fast ones.',
            'End with a section the player has already seen in reverse, so the finish feels earned rather than random.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Can I share a track I built in PolyTrack?',
          answer:
            'Yes. Tracks can be exported as a file and published to the community track list, where other players can race them and compare times on the leaderboard.',
        },
        {
          question: 'Why does my track not start at the right place?',
          answer:
            'Check that exactly one start position exists and that the finish gate faces the direction you drive through it. A gate rotated 180 degrees will not register a finish.',
        },
        {
          question: 'Do custom tracks count on the leaderboard?',
          answer:
            'Official tracks have global leaderboards. Community and personal tracks keep their own times and ghost replays, so you can still race yourself even without a global ranking.',
        },
      ],
      related: ['how-to-play', 'controls'],
    },

    {
      slug: 'unblocked',
      title: 'PolyTrack Unblocked — Play at School or Work Without Installing',
      heading: 'PolyTrack Unblocked',
      description:
        'Why PolyTrack works on school and work networks, how to fix a game that will not load, and what to do when the domain itself is blocked.',
      intro:
        'PolyTrack is a static web game with no install step, which is exactly why it usually runs where app stores and installers do not. Here is what actually gets blocked, and what to try first.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'what-unblocked-means',
          heading: 'What “unblocked” really means',
          body: [
            'A game is blocked for one of three reasons: the domain is on a deny list, the network blocks installers and executables, or the browser policy disables a technology the game needs. PolyTrack avoids the second category entirely — there is nothing to download.',
            'It cannot avoid the first. If the network blocks this domain, no amount of reloading will help; that is a network-policy question, not a game question. What often does help is that a self-hosted copy like this one has no advertising, analytics or third-party script dependencies, so it is far less likely to be flagged by content filters than a game portal.',
          ],
        },
        {
          id: 'why-this-copy',
          heading: 'Why this copy is a good fit for restricted networks',
          bullets: [
            'The game files are served from the same origin as the page — no CDN, no ad network, no tracker.',
            'No account, no email, no login wall, so no third-party authentication domain is needed.',
            'A single page load is enough: the game is a static HTML file plus one JavaScript bundle.',
            'Works on Chromebooks and locked-down Windows machines because it never asks for install permissions.',
          ],
        },
        {
          id: 'troubleshooting',
          heading: 'If the game will not start',
          steps: [
            {
              title: 'Wait for the first load',
              text: 'The engine bundle is a couple of megabytes. On a slow school connection the first visit can take a while; the second visit is served from the browser cache.',
            },
            {
              title: 'Click inside the game area',
              text: 'Keyboard input goes to the focused element. If WASD does nothing, click once on the canvas and try again.',
            },
            {
              title: 'Check WebGL',
              text: 'The game needs WebGL. If the canvas stays black, open a WebGL demo page — if that also fails, the browser or GPU has been locked down by policy.',
            },
            {
              title: 'Try fullscreen',
              text: 'Some managed browsers crop the canvas inside a small iframe. Fullscreen gives the renderer a real viewport size and fixes most “half the track is missing” reports.',
            },
            {
              title: 'Open it in a new tab',
              text: 'If the page is embedded inside another site, open the game in its own tab — nested frames are the most common reason for broken input and audio.',
            },
          ],
        },
        {
          id: 'responsible',
          heading: 'A note on playing at school',
          body: [
            'This page exists so the game is reachable and fast, not so it can be used to skip class. School networks are managed for a reason, and a game that runs in a browser tab is still visible on a teacher’s screen and in network logs.',
            'If the game is genuinely part of a lesson — game design, level design, or a reward session — the honest route is to ask, because a network administrator can allow this domain faster than any workaround can be invented.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Is PolyTrack unblocked at school?',
          answer:
            'It depends on the network. The game itself needs no installation, so it often works where installers are blocked, but a domain-level block cannot be bypassed. If this page loads, the game will almost certainly load too, since both are served from the same place.',
        },
        {
          question: 'Why does the game show a black screen?',
          answer:
            'A black canvas usually means WebGL is unavailable or the tab lost its graphics context. Reload the page, try fullscreen, and check whether other WebGL sites work in the same browser.',
        },
        {
          question: 'Does this page work on a Chromebook?',
          answer:
            'Yes. It is a static site with no plugins and no installer, so it runs in ChromeOS as long as the domain is reachable and WebGL is enabled by the device policy.',
        },
        {
          question: 'Is there an installable app version?',
          answer:
            'The game ships a web app manifest, so a browser can offer to install it as a standalone window on desktop. That still uses the same web build — there is no separate desktop download on this site.',
        },
      ],
      related: ['how-to-play', 'controls', 'about'],
    },

    {
      slug: 'about',
      title: 'About PolyTrack Online — Who Made PolyTrack and What This Site Is',
      heading: 'About PolyTrack Online',
      description:
        'What this site is, who created PolyTrack, which version is hosted here, and how the game is served without ads, accounts or tracking.',
      intro:
        'This site exists for one reason: to load PolyTrack fast, in a clean tab, without an account or a wall of ads. Here is exactly what it is and what it is not.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'what-this-is',
          heading: 'What this site is',
          body: [
            'PolyTrack Online is a fan-made, unofficial mirror of the PolyTrack web build, hosted as a static site. The game runs locally in your browser: the page loads the official 0.6.3 build from its own domain and nothing else.',
            'There is no account system, no newsletter, no comment section and no advertising. The site is a single game with a handful of guides around it, because a page that loads in one second is worth more to a player than a portal with forty thumbnails.',
          ],
        },
        {
          id: 'who-made-it',
          heading: 'Who made PolyTrack',
          body: [
            'PolyTrack is created by Kodub, an independent developer who publishes browser games at [kodub.com](https://www.kodub.com). The official web release is playable on [CrazyGames](https://www.crazygames.com/game/polytrack). All credit for the game, its engine, its artwork and its music belongs to Kodub.',
            'This site is not affiliated with, endorsed by, or sponsored by Kodub, CrazyGames, Poki or itch.io. It exists because Kodub’s terms allow non-commercial reuploads of the game for networks that block the official hosts, and a clean, fast page is genuinely more useful to players than a portal full of ads.',
          ],
        },
        {
          id: 'notice',
          heading: 'Why the game shows an “unofficial version” notice',
          body: [
            'When PolyTrack runs on a domain it does not recognise, it displays a notice above the menu: “Unofficial PolyTrack Online mod by calcnate. For the original version please visit:” followed by the CrazyGames link, plus a link to the Terms of Service.',
            'That notice is generated by the game itself and is left exactly as the developer intended — it is not hidden, restyled or removed. It is the mechanism Kodub uses to tell players where the official release lives, and keeping it visible is a condition of hosting a reupload.',
            'If you want the newest version, the multiplayer servers run by the developer and the official leaderboards, play the game at [kodub.com](https://www.kodub.com) or on [CrazyGames](https://www.crazygames.com/game/polytrack).',
          ],
        },
        {
          id: 'version',
          heading: 'Which version is hosted here',
          body: [
            'The build on this page is version 0.6.3 of the web release, including the track editor, community tracks, ghost replays, leaderboards and multiplayer lobbies. When Kodub publishes a newer web build, this mirror is updated to match.',
          ],
        },
        {
          id: 'data',
          heading: 'What happens to your data',
          body: [
            'Your settings, key bindings, custom tracks and ghosts are stored by the game in your own browser storage. Nothing is uploaded to this site, and this site has no backend to upload anything to.',
            'Leaderboard and multiplayer features connect to the game’s own servers, as they do on the official site. Those requests go to Kodub’s infrastructure, not to this page.',
          ],
        },
        {
          id: 'take-down',
          heading: 'Rights holders and take-down requests',
          body: [
            'PolyTrack is the intellectual property of its creator. If you are the rights holder and you want this mirror removed, contact the address on the terms page and it will be taken down promptly, without argument.',
          ],
        },
      ],
      faqs: [
        {
          question: 'Is this the official PolyTrack website?',
          answer:
            'No. It is an unofficial fan mirror. PolyTrack itself is created and published by Kodub at kodub.com, and all rights to the game belong to them.',
        },
        {
          question: 'Is PolyTrack Online free?',
          answer:
            'Yes, and there is no ad-supported tier, no login and no paid upgrade. The game is served as a static build, so there is nothing to monetise.',
        },
        {
          question: 'Do I need an account to play?',
          answer:
            'No account is needed anywhere on this site. The game stores your progress, settings and custom tracks in your browser, so they persist on the same device without a login.',
        },
      ],
      related: ['privacy', 'terms', 'unblocked'],
    },

    {
      slug: 'privacy',
      title: 'Privacy Policy — PolyTrack Online',
      heading: 'Privacy Policy',
      description:
        'What PolyTrack Online stores, what it does not collect, which third-party requests the game makes, and how to clear the data kept in your browser.',
      intro:
        'Short version: this site has no accounts, no analytics and no advertising. The game keeps your settings in your own browser, and leaderboard features talk directly to the game’s servers.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'summary',
          heading: 'Summary',
          bullets: [
            'No account, no email address, no name is ever requested.',
            'No analytics scripts, no advertising networks, no cross-site trackers are loaded by this page.',
            'Game settings, key bindings, custom tracks and ghost replays are stored in your browser’s local storage.',
            'Requests to the game’s leaderboard and multiplayer servers go to Kodub’s infrastructure, not to this site.',
          ],
        },
        {
          id: 'hosting',
          heading: 'Hosting and server logs',
          body: [
            'This site is served as static files by GitHub Pages. As with any web host, GitHub records standard technical information when it delivers a page — IP address, browser user agent, requested path and timestamp — for security and abuse prevention.',
            'This site has no application server and no database, so it does not create its own records of visitors and cannot look up an individual visitor.',
          ],
        },
        {
          id: 'local-storage',
          heading: 'Data stored in your browser',
          body: [
            'The game saves your preferences locally so that your key bindings, camera mode, audio levels and display name survive a reload. Custom tracks and ghost replays are also stored locally, in the same browser profile.',
            'Clearing site data for this domain deletes all of it, including custom tracks that were never exported. Export any track you care about before clearing your browser data.',
          ],
        },
        {
          id: 'third-parties',
          heading: 'Third-party requests',
          body: [
            'Leaderboards and multiplayer need a server, and the game connects to Kodub’s own endpoints for those features. Those requests are subject to Kodub’s privacy practices, not this policy. If you want a fully offline session, simply stay out of the leaderboard and multiplayer menus.',
          ],
        },
        {
          id: 'children',
          heading: 'Children',
          body: [
            'This site does not collect personal information from anyone, and it is not directed at children under 13 in the sense of any data-collecting service. There is nothing to sign up for and nothing to submit.',
          ],
        },
        {
          id: 'changes',
          heading: 'Changes and contact',
          body: [
            'If this policy changes, the updated date at the top of the page changes with it. Questions about privacy can be sent to the contact address listed on the terms page.',
          ],
        },
      ],
      related: ['terms', 'about'],
    },

    {
      slug: 'terms',
      title: 'Terms of Use — PolyTrack Online',
      heading: 'Terms of Use',
      description:
        'The terms that apply to using this unofficial PolyTrack mirror: ownership of the game, acceptable use, availability, and how to request a take-down.',
      intro:
        'These terms cover this website only. The game itself is owned by its creator and governed by the terms published on the official site.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'acceptance',
          heading: '1. Acceptance',
          body: [
            'By using this website you agree to these terms. If you do not agree, please close the page — the game is also available from its official source.',
          ],
        },
        {
          id: 'ownership',
          heading: '2. Ownership of the game',
          body: [
            'PolyTrack, including its code, artwork, audio and name, is the property of Kodub. This site claims no ownership over the game and provides no licence to redistribute it. The site itself — its layout, text and guides — is an independent fan project.',
          ],
        },
        {
          id: 'unofficial',
          heading: '3. Unofficial status',
          body: [
            'This site is not affiliated with Kodub. Any statement on this site about the game is informational, based on the public web build, and may be out of date if the game changes.',
          ],
        },
        {
          id: 'use',
          heading: '4. Acceptable use',
          bullets: [
            'Do not attempt to disrupt the site or the game for other players.',
            'Do not redistribute the game files hosted here as if they were your own.',
            'Do not use the site in a way that breaks the rules of the network you are connected to.',
            'Do not scrape the site at a rate that degrades service for others.',
          ],
        },
        {
          id: 'availability',
          heading: '5. Availability and warranty',
          body: [
            'The site is provided “as is”, without warranty of any kind. It may be unavailable, the game may fail to load on a given device, and saved data may be lost when browser storage is cleared. Back up custom tracks by exporting them.',
          ],
        },
        {
          id: 'liability',
          heading: '6. Limitation of liability',
          body: [
            'To the extent permitted by law, the operator of this site is not liable for any indirect or consequential loss arising from use of the site or the game.',
          ],
        },
        {
          id: 'takedown',
          heading: '7. Take-down requests',
          body: [
            'Rights holders may request removal of any hosted material. Open an issue on the repository that serves this site and the material will be removed promptly.',
          ],
        },
        {
          id: 'changes',
          heading: '8. Changes to these terms',
          body: [
            'These terms may be updated; the date at the top of the page reflects the current version. Continued use of the site after a change means you accept the updated terms.',
          ],
        },
      ],
      related: ['privacy', 'about'],
    },
  ],

  es: [
    {
      slug: 'how-to-play',
      title: 'Cómo jugar a PolyTrack — Guía para principiantes',
      heading: 'Cómo jugar a PolyTrack',
      description:
        'Guía completa para empezar en PolyTrack: cómo funciona el cronómetro, cómo te salvan los puntos de control, cómo leer las repeticiones fantasma y qué hábitos recortan segundos.',
      intro:
        'PolyTrack parece sencillo hasta la primera curva cerrada. Esta guía explica las reglas de una carrera, los puntos de control que te salvan y los hábitos que separan una vuelta limpia de una desastrosa.',
      updated: '2026-11-07',
      schema: 'HowTo',
      sections: [
        {
          id: 'the-goal',
          heading: 'El objetivo de cada carrera',
          body: [
            'Una carrera empieza en la línea de salida y termina al cruzar la bandera de meta. Entre medias hay puntos de control, y tu resultado es simplemente el tiempo que has tardado. No hay combustible, ni daños, ni límite de vueltas: tu único recurso es el impulso y lo único que pierdes es tiempo.',
            'Como las pistas se construyen con bloques, la mayoría de las curvas son geométricas: un giro limpio de 90 grados, una curva peraltada, una horquilla sobre una rampa. El juego premia mantener velocidad en esas curvas en lugar de frenar tarde y arrastrar el coche.',
          ],
        },
        {
          id: 'first-race',
          heading: 'Tu primera carrera, paso a paso',
          steps: [
            {
              title: 'Carga el juego y abre la lista de pistas',
              text: 'El menú principal muestra pistas oficiales y pistas de la comunidad. Empieza por una oficial: están ajustadas al coche por defecto y tienen una geometría más amable.',
            },
            {
              title: 'Acelera y aprende la primera curva',
              text: 'No persigas un tiempo en el primer intento. Llega despacio al primer punto de control y repite ese tramo hasta que el punto de giro te salga automático.',
            },
            {
              title: 'Reinicia en el punto de control en lugar de empezar de cero',
              text: 'Pulsa R (o Enter) para volver al último punto de control que hayas tocado. Es el mayor ahorro de tiempo cuando estás aprendiendo un recorrido.',
            },
            {
              title: 'Termina una vez para desbloquear tu fantasma',
              text: 'Tu primera carrera completada se convierte en un fantasma contra el que puedes correr. Reinicia con T (o Retroceso) e intenta ir por delante.',
            },
            {
              title: 'Compárate con la clasificación',
              text: 'Cuando tu fantasma ya no sea un reto, carga un fantasma más rápido o mira la clasificación de la pista para descubrir dónde está el tiempo de verdad.',
            },
          ],
        },
        {
          id: 'checkpoints',
          heading: 'Cómo funcionan los puntos de control',
          body: [
            'Los puntos de control son la razón de que un error no sea definitivo. Al tocarlos se convierten en tu punto de reaparición: desde ese momento, la tecla de reinicio te devuelve allí y no a la salida.',
            'La consecuencia práctica es que puedes atacar un tramo difícil a máxima velocidad una y otra vez. Si un salto te deja boca abajo, reinicia, prueba otro ángulo de entrada y vuelve a reiniciar: solo pierdes los dos segundos entre el punto de control y el choque.',
          ],
          bullets: [
            'Cruza el punto de control por la puerta, no por fuera.',
            'El reinicio funciona también en el aire: reapareces en la puerta, detenido.',
            'Reiniciar con T borra todos los puntos de control, y también la comparación con tu fantasma en ese intento.',
          ],
        },
        {
          id: 'ghosts',
          heading: 'Correr contra fantasmas en vez de contra personas',
          body: [
            'Las repeticiones fantasma son la herramienta de práctica principal. Un fantasma es una carrera grabada que se reproduce como un coche translúcido y se muestra a tu lado en tiempo real, para que veas dónde ganas o pierdes terreno.',
            'El hábito útil es mirar al fantasma justo en la curva donde te quedas atrás, no en toda la pista a la vez. Casi siempre la diferencia está en un único punto de frenada, o en atacar una rampa por el lado correcto para aterrizar apuntando a la siguiente puerta.',
          ],
        },
        {
          id: 'faster',
          heading: 'Seis hábitos que te hacen más rápido',
          bullets: [
            'Frena antes de la curva, no dentro de ella. Frenar contra un muro de bloques te deja sin velocidad de salida.',
            'Usa todo el ancho de la pista a la entrada: rozar el muro interior cuesta más tiempo que entrar abierto.',
            'Aterriza en la parte plana de las rampas. Caer en una pendiente te lanza de lado y pierdes la siguiente puerta.',
            'Desactiva la cámara del cockpit mientras aprendes. La cámara persecutoria muestra más pista por delante.',
            'Practica un tramo por sesión en lugar de vueltas completas. Tres curvas limpias valen más que diez vueltas sucias.',
            'Compárate con tu fantasma, no con la clasificación. Batir el tiempo de ayer es el único progreso medible.',
          ],
        },
        {
          id: 'mistakes',
          heading: 'Errores habituales de principiante',
          body: [
            'El más común es tratar el acelerador como un interruptor. En PolyTrack, levantar el pie una fracción de segundo antes de una curva suele mantener el coche lo bastante estable para encarar la siguiente puerta a fondo.',
            'El segundo es ignorar el desnivel. Una pista que parece plana desde la cámara persecutoria puede ser un salto cuesta abajo; si sigues acelerando en el borde, te pasarás el aterrizaje por un bloque entero.',
            'El tercero es reiniciar demasiado. Usa los puntos de control para aislar la parte difícil y reinicia la pista completa solo cuando estés listo para encadenar una carrera entera.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Cómo vuelvo al último punto de control en PolyTrack?',
          answer:
            'Pulsa R o Enter mientras conduces. El coche vuelve a la última puerta que hayas pasado y el cronómetro sigue corriendo. Si pulsas T o Retroceso, reinicias la pista completa.',
        },
        {
          question: '¿El cronómetro sigue contando cuando reinicio?',
          answer:
            'Sí. El reinicio en un punto de control no pausa ni rebobina el reloj: solo recoloca el coche. Por eso un tramo limpio vale mucho más que un choque rápido.',
        },
        {
          question: '¿Cómo desbloqueo pistas nuevas?',
          answer:
            'No hay progresión que desbloquear. Todas las pistas oficiales y de la comunidad están disponibles en la lista desde que se carga el juego; las difíciles simplemente son más difíciles de terminar.',
        },
        {
          question: '¿Puedo correr contra un fantasma en mi propia pista?',
          answer:
            'Sí. Cuando completas una carrera en una pista que has creado, esa carrera se guarda como fantasma y puedes competir contra ella igual que en las pistas oficiales.',
        },
      ],
      related: ['controls', 'track-editor', 'unblocked'],
    },

    {
      slug: 'controls',
      title: 'Controles de PolyTrack — Teclas de conducción, cámara y editor',
      heading: 'Controles de PolyTrack',
      description:
        'Todos los controles de PolyTrack en una página: conducción, cámara, puntos de control, pausa y los atajos del editor de pistas, además de cómo cambiarlos.',
      intro:
        'La disposición por defecto está pensada para WASD, con las flechas como alternativa. Aquí tienes la lista completa, incluidas las teclas que más se olvidan: cámara del cockpit, ocultar interfaz y rotar en el editor.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'driving',
          heading: 'Controles de conducción',
          body: [
            'Hay dos juegos completos de teclas de conducción asignados por defecto, así que puedes usar el bloque de letras o el de flechas. Ambos funcionan a la vez, lo que viene bien si otra persona está sentada al mismo teclado.',
          ],
          table: {
            caption: 'Controles de conducción por defecto en PolyTrack 0.6.3',
            head: ['Tecla', 'Acción'],
            rows: CONTROLS_ROWS_ES.slice(0, 5),
          },
        },
        {
          id: 'camera-ui',
          heading: 'Cámara, interfaz y pausa',
          table: {
            head: ['Tecla', 'Acción'],
            rows: CONTROLS_ROWS_ES.slice(5),
          },
        },
        {
          id: 'changing',
          heading: 'Cómo cambiar los controles',
          body: [
            'Abre el menú de ajustes desde el menú principal o desde el menú de pausa y despliega la sección Controles. Todas las acciones se pueden reasignar, y el juego guarda el resultado localmente, así que tu configuración sobrevive a una recarga.',
            'Si una tecla no hace nada, comprueba primero que el lienzo del juego tiene el foco: haz clic una vez dentro del área del juego. Los navegadores envían el teclado al elemento que tiene el foco, y un iframe en el que no has hecho clic no recibe las pulsaciones.',
          ],
        },
        {
          id: 'editor-keys',
          heading: 'Atajos del editor de pistas',
          body: [
            'El editor reutiliza las teclas de movimiento y añade modificadores de rotación, altura y borrado. Ojo: dentro del editor la tecla R cambia de significado, porque rota el bloque seleccionado en lugar de reiniciar el coche.',
          ],
          table: {
            caption: 'Atajos del editor',
            head: ['Tecla', 'Acción'],
            rows: [
              ['W A S D o flechas', 'Mover la cámara del editor'],
              ['R o Espacio', 'Rotar el bloque seleccionado'],
              ['Shift', 'Mantener para subir o bajar la altura del bloque'],
              ['Suprimir o X', 'Eliminar el bloque seleccionado'],
              ['Arrastrar el ratón', 'Desplazar y orbitar la vista'],
              ['Rueda', 'Acercar y alejar'],
            ],
          },
        },
        {
          id: 'touch',
          heading: 'Controles táctiles y mandos',
          body: [
            'En móvil y tablet el juego dibuja automáticamente botones de dirección y pedales en pantalla, y el lado de la dirección se puede invertir en los ajustes si prefieres la otra mano. Todos los menús se manejan con un toque.',
            'Un teclado físico sigue siendo la opción más precisa: la sensación analógica sale de dar toques en lugar de mantener pulsado, y un teclado permite modular un giro como una pantalla táctil no puede.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Cuál es la tecla de reinicio en PolyTrack?',
          answer:
            'R o Enter reinician en el último punto de control. T o Retroceso reinician la pista entera desde la salida. Ambas se pueden reasignar en los ajustes.',
        },
        {
          question: '¿Por qué no funciona mi teclado en el juego?',
          answer:
            'Normalmente el lienzo solo necesita el foco: haz clic una vez dentro del área del juego y vuelve a pulsar la tecla. Si sigue sin responder, comprueba que la página no está dentro de un iframe anidado y que ninguna extensión está capturando las pulsaciones.',
        },
        {
          question: '¿Se puede jugar a PolyTrack con mando?',
          answer:
            'La versión web está pensada para teclado y pantalla táctil, no para mando. Se puede mapear un mando con herramientas del navegador o del sistema, pero los ajustes del juego solo exponen teclas.',
        },
        {
          question: '¿Cómo pongo el juego en pantalla completa?',
          answer:
            'Usa el botón de pantalla completa en la barra sobre el lienzo, o la opción correspondiente en los ajustes del juego. Pulsa Escape para salir y volver a la página.',
        },
      ],
      related: ['how-to-play', 'track-editor'],
    },

    {
      slug: 'track-editor',
      title: 'Editor de pistas de PolyTrack — Crear, probar y compartir pistas',
      heading: 'Editor de pistas de PolyTrack',
      description:
        'Aprende a usar el editor de pistas de PolyTrack: colocar bloques, rotar y elevar piezas, añadir puntos de control y meta, probar la pista y compartirla con la comunidad.',
      intro:
        'El editor es la razón por la que la gente se queda. Es un constructor de niveles 3D por bloques, y cuando entiendes altura, rotación y puntos de control puedes montar una pista digna de correrse en una tarde.',
      updated: '2026-11-07',
      schema: 'HowTo',
      sections: [
        {
          id: 'opening',
          heading: 'Abrir el editor',
          body: [
            'Selecciona el editor en el menú principal. Empiezas en una rejilla vacía con cámara libre: W A S D o las flechas mueven la vista, el ratón la orbita y la rueda hace zoom.',
            'La paleta de piezas está agrupada por categorías: superficie de pista, muros, rampas, half-pipes, puntos de control, decoración y señales. También hay un buscador si sabes el nombre de la pieza.',
          ],
        },
        {
          id: 'placing',
          heading: 'Colocar, rotar y elevar bloques',
          steps: [
            {
              title: 'Elige una pieza de la paleta',
              text: 'La previsualización translúcida sigue la rejilla, así que ves exactamente qué celda ocupará el bloque.',
            },
            {
              title: 'Haz clic para colocarlo',
              text: 'Los bloques se ajustan a la rejilla. Colocar junto a un bloque existente continúa la superficie, y así se alarga una carretera.',
            },
            {
              title: 'Rota con R',
              text: 'R o Espacio giran el bloque seleccionado entre sus orientaciones posibles. Las rampas necesitan la orientación correcta o el coche chocará contra la cara vertical.',
            },
            {
              title: 'Mantén Shift para cambiar la altura',
              text: 'Shift sube o baja el bloque, lo que permite construir puentes, curvas peraltadas y trazados a varios niveles en lugar de un circuito plano.',
            },
            {
              title: 'Borra con X',
              text: 'Suprimir o X elimina el bloque seleccionado. Limpia los bloques sueltos: un solo bloque mal colocado en una curva basta para arruinar una trazada.',
            },
          ],
        },
        {
          id: 'checkpoints',
          heading: 'Puntos de control, salida y meta',
          body: [
            'Toda pista necesita una posición de salida y una puerta de meta. Colócalas en el sentido de la marcha: una meta orientada al revés no se activa.',
            'Añade un punto de control cada 10 o 20 segundos de conducción. Más puntos significa menos reinicios completos para el jugador, y eso hace que una pista difícil sea mucho más disfrutable que una con una sola puerta a mitad de recorrido.',
          ],
        },
        {
          id: 'testing',
          heading: 'Probar e iterar',
          body: [
            'Se prueba directamente desde el editor. Conduces tu pista inacabada igual que lo haría un jugador, y si una curva es injusta vuelves al editor y mueves un bloque en lugar de rehacer el tramo.',
            'Prueba con el coche y la cámara por defecto. Es tentador ajustar la pista a una configuración concreta, pero la mayoría de la gente jugará con lo que el juego le dé.',
          ],
        },
        {
          id: 'sharing',
          heading: 'Guardar, compartir y pistas de la comunidad',
          body: [
            'Las pistas terminadas se pueden guardar en local, exportar como archivo y publicar en la lista de pistas de la comunidad, donde otros jugadores pueden correrlas y marcar tiempos.',
            'Exportar es la forma práctica de hacer copia de seguridad: guarda el archivo con tus otros proyectos e impórtalo de nuevo si se borran los datos del navegador.',
          ],
        },
        {
          id: 'design-tips',
          heading: 'Reglas de diseño que hacen divertida una pista',
          bullets: [
            'Empieza con una recta suficiente para alcanzar velocidad punta: enseña al jugador cómo se comporta el coche.',
            'Alterna el sentido de las curvas. Tres giros a la derecha seguidos se convierten en una tarea pesada.',
            'Usa el desnivel para dar ritmo, no para castigar: un cambio de rasante ciego antes de una horquilla es cruel.',
            'Coloca señales antes de las curvas sin visibilidad para que un jugador rápido pueda reaccionar en vez de memorizar.',
            'Muros cerca en los tramos técnicos y anchos en los rápidos.',
            'Termina con un tramo que el jugador ya conoce en sentido inverso, para que la meta se sienta ganada y no aleatoria.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Puedo compartir una pista creada en PolyTrack?',
          answer:
            'Sí. Las pistas se pueden exportar como archivo y publicar en la lista de la comunidad, donde otros jugadores las corren y comparan tiempos en la clasificación.',
        },
        {
          question: '¿Por qué mi pista no empieza en el sitio correcto?',
          answer:
            'Comprueba que existe exactamente una posición de salida y que la puerta de meta mira hacia el sentido en el que la cruzas. Una puerta girada 180 grados no registra la llegada.',
        },
        {
          question: '¿Las pistas personalizadas cuentan en la clasificación?',
          answer:
            'Las pistas oficiales tienen clasificación global. Las de la comunidad y las personales guardan sus propios tiempos y fantasmas, así que puedes competir contigo mismo aunque no haya ranking global.',
        },
      ],
      related: ['how-to-play', 'controls'],
    },

    {
      slug: 'unblocked',
      title: 'PolyTrack sin bloqueos — Jugar en el colegio o el trabajo',
      heading: 'PolyTrack sin bloqueos',
      description:
        'Por qué PolyTrack funciona en redes escolares y de oficina, cómo arreglar un juego que no carga y qué hacer cuando el dominio está bloqueado.',
      intro:
        'PolyTrack es un juego web estático sin instalación, y precisamente por eso suele funcionar donde las tiendas de aplicaciones y los instaladores no. Aquí tienes qué se bloquea de verdad y qué probar primero.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'what-unblocked-means',
          heading: 'Qué significa realmente «sin bloqueos»',
          body: [
            'Un juego se bloquea por una de tres razones: el dominio está en una lista negra, la red bloquea instaladores y ejecutables, o la política del navegador desactiva una tecnología que el juego necesita. PolyTrack evita la segunda categoría por completo: no hay nada que descargar.',
            'Lo que no puede evitar es la primera. Si la red bloquea este dominio, recargar no sirve de nada: es una cuestión de política de red, no del juego. Lo que suele ayudar es que una copia autoalojada como esta no tiene publicidad, analítica ni scripts de terceros, así que los filtros de contenido la marcan con mucha menos frecuencia que a un portal de juegos.',
          ],
        },
        {
          id: 'why-this-copy',
          heading: 'Por qué esta copia encaja en redes restringidas',
          bullets: [
            'Los archivos del juego se sirven desde el mismo origen que la página: sin CDN, sin red publicitaria, sin rastreadores.',
            'Sin cuenta, sin correo y sin muro de acceso, así que no hace falta ningún dominio de autenticación externo.',
            'Con una sola carga de página basta: es un HTML estático más un único paquete de JavaScript.',
            'Funciona en Chromebooks y en equipos Windows restringidos porque nunca pide permisos de instalación.',
          ],
        },
        {
          id: 'troubleshooting',
          heading: 'Si el juego no arranca',
          steps: [
            {
              title: 'Espera a la primera carga',
              text: 'El paquete del motor ocupa un par de megabytes. En una conexión lenta la primera visita puede tardar; la segunda se sirve desde la caché del navegador.',
            },
            {
              title: 'Haz clic dentro del área del juego',
              text: 'El teclado va al elemento que tiene el foco. Si WASD no hace nada, haz clic una vez en el lienzo y vuelve a probar.',
            },
            {
              title: 'Comprueba WebGL',
              text: 'El juego necesita WebGL. Si el lienzo se queda negro, abre una página de demostración de WebGL: si esa también falla, el navegador o la GPU están restringidos por política.',
            },
            {
              title: 'Prueba la pantalla completa',
              text: 'Algunos navegadores gestionados recortan el lienzo dentro de un iframe pequeño. La pantalla completa da al motor un tamaño real de ventana y arregla la mayoría de los avisos de «falta medio circuito».',
            },
            {
              title: 'Ábrelo en una pestaña nueva',
              text: 'Si la página está embebida en otro sitio, abre el juego en su propia pestaña: los marcos anidados son la causa más común de fallos de teclado y audio.',
            },
          ],
        },
        {
          id: 'responsible',
          heading: 'Una nota sobre jugar en el colegio',
          body: [
            'Esta página existe para que el juego sea accesible y rápido, no para saltarse clase. Las redes escolares están gestionadas por algo, y un juego en una pestaña sigue siendo visible en la pantalla del profesor y en los registros de red.',
            'Si el juego forma parte de una actividad real —diseño de juegos, diseño de niveles o una sesión de premio—, lo honesto es preguntar: un administrador de red puede permitir este dominio más rápido de lo que se inventa cualquier rodeo.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿PolyTrack está desbloqueado en el colegio?',
          answer:
            'Depende de la red. El juego no necesita instalación, así que suele funcionar donde se bloquean los instaladores, pero un bloqueo a nivel de dominio no se puede saltar. Si esta página carga, el juego casi seguro también, porque ambos se sirven desde el mismo sitio.',
        },
        {
          question: '¿Por qué se ve una pantalla negra?',
          answer:
            'Un lienzo negro suele significar que WebGL no está disponible o que la pestaña perdió el contexto gráfico. Recarga la página, prueba la pantalla completa y comprueba si otros sitios con WebGL funcionan en el mismo navegador.',
        },
        {
          question: '¿Funciona en un Chromebook?',
          answer:
            'Sí. Es un sitio estático sin plugins ni instalador, así que corre en ChromeOS siempre que el dominio sea accesible y la política del dispositivo permita WebGL.',
        },
        {
          question: '¿Hay una versión instalable?',
          answer:
            'El juego incluye un manifiesto de aplicación web, así que el navegador puede ofrecer instalarlo como ventana independiente en escritorio. Sigue siendo la misma versión web: aquí no hay descarga de escritorio aparte.',
        },
      ],
      related: ['how-to-play', 'controls', 'about'],
    },

    {
      slug: 'about',
      title: 'Acerca de PolyTrack Online — Quién hizo PolyTrack y qué es este sitio',
      heading: 'Acerca de PolyTrack Online',
      description:
        'Qué es este sitio, quién creó PolyTrack, qué versión se aloja aquí y cómo se sirve el juego sin anuncios, cuentas ni rastreo.',
      intro:
        'Este sitio existe por una razón: cargar PolyTrack rápido, en una pestaña limpia, sin cuenta y sin un muro de anuncios. Esto es exactamente lo que es y lo que no es.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'what-this-is',
          heading: 'Qué es este sitio',
          body: [
            'PolyTrack Online es un espejo no oficial hecho por fans de la versión web de PolyTrack, alojado como sitio estático. El juego se ejecuta en tu navegador: la página carga la build oficial 0.6.3 desde su propio dominio y nada más.',
            'No hay sistema de cuentas, ni boletín, ni comentarios, ni publicidad. El sitio es un juego con unas cuantas guías alrededor, porque una página que carga en un segundo vale más para un jugador que un portal con cuarenta miniaturas.',
          ],
        },
        {
          id: 'who-made-it',
          heading: 'Quién hizo PolyTrack',
          body: [
            'PolyTrack lo crea Kodub, un desarrollador independiente que publica juegos de navegador en [kodub.com](https://www.kodub.com). La versión web oficial se puede jugar en [CrazyGames](https://www.crazygames.com/game/polytrack). Todo el mérito del juego, su motor, su arte y su música es de Kodub.',
            'Este sitio no está afiliado, respaldado ni patrocinado por Kodub, CrazyGames, Poki ni itch.io. Existe porque las condiciones de Kodub permiten resubidas no comerciales del juego para redes que bloquean los servidores oficiales, y una página limpia y rápida resulta más útil que un portal lleno de anuncios.',
          ],
        },
        {
          id: 'notice',
          heading: 'Por qué el juego muestra un aviso de «versión no oficial»',
          body: [
            'Cuando PolyTrack se ejecuta en un dominio que no reconoce, muestra un aviso encima del menú: «Unofficial PolyTrack Online mod by calcnate. For the original version please visit:» seguido del enlace a CrazyGames y de un enlace a los Términos de Servicio.',
            'Ese aviso lo genera el propio juego y se deja tal como el desarrollador lo diseñó: no se oculta, ni se reestiliza, ni se elimina. Es el mecanismo que usa Kodub para indicar a los jugadores dónde está la versión oficial, y mantenerlo visible es una condición para alojar una resubida.',
            'Si quieres la versión más reciente, los servidores multijugador del desarrollador y las clasificaciones oficiales, juega en [kodub.com](https://www.kodub.com) o en [CrazyGames](https://www.crazygames.com/game/polytrack).',
          ],
        },
        {
          id: 'version',
          heading: 'Qué versión se aloja aquí',
          body: [
            'La build de esta página es la versión 0.6.3 de la publicación web, con editor de pistas, pistas de la comunidad, repeticiones fantasma, clasificaciones y partidas multijugador. Cuando Kodub publique una build web más nueva, este espejo se actualizará.',
          ],
        },
        {
          id: 'data',
          heading: 'Qué pasa con tus datos',
          body: [
            'Tus ajustes, controles, pistas personalizadas y fantasmas los guarda el juego en el almacenamiento de tu propio navegador. No se sube nada a este sitio, y este sitio no tiene backend al que subirlo.',
            'Las clasificaciones y el multijugador se conectan a los servidores del propio juego, igual que en el sitio oficial. Esas peticiones van a la infraestructura de Kodub, no a esta página.',
          ],
        },
        {
          id: 'take-down',
          heading: 'Titulares de derechos y solicitudes de retirada',
          body: [
            'PolyTrack es propiedad intelectual de su creador. Si eres el titular de los derechos y quieres que este espejo se retire, escribe a la dirección indicada en la página de términos y se retirará sin discusión.',
          ],
        },
      ],
      faqs: [
        {
          question: '¿Es este el sitio oficial de PolyTrack?',
          answer:
            'No. Es un espejo no oficial hecho por fans. PolyTrack lo crea y publica Kodub en kodub.com, y todos los derechos del juego son suyos.',
        },
        {
          question: '¿PolyTrack Online es gratis?',
          answer:
            'Sí, y no hay versión con anuncios, ni inicio de sesión, ni mejora de pago. El juego se sirve como build estática, así que no hay nada que monetizar.',
        },
        {
          question: '¿Hace falta una cuenta para jugar?',
          answer:
            'No hace falta cuenta en ninguna parte de este sitio. El juego guarda tu progreso, ajustes y pistas en el navegador, así que se mantienen en el mismo dispositivo sin iniciar sesión.',
        },
      ],
      related: ['privacy', 'terms', 'unblocked'],
    },

    {
      slug: 'privacy',
      title: 'Política de privacidad — PolyTrack Online',
      heading: 'Política de privacidad',
      description:
        'Qué guarda PolyTrack Online, qué no recoge, qué peticiones externas hace el juego y cómo borrar los datos que quedan en tu navegador.',
      intro:
        'Versión corta: este sitio no tiene cuentas, ni analítica, ni publicidad. El juego guarda tus ajustes en tu propio navegador y las clasificaciones hablan directamente con los servidores del juego.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'summary',
          heading: 'Resumen',
          bullets: [
            'Nunca se pide cuenta, correo electrónico ni nombre.',
            'Esta página no carga analítica, redes publicitarias ni rastreadores entre sitios.',
            'Los ajustes, controles, pistas personalizadas y fantasmas se guardan en el almacenamiento local del navegador.',
            'Las peticiones a las clasificaciones y al multijugador van a la infraestructura de Kodub, no a este sitio.',
          ],
        },
        {
          id: 'hosting',
          heading: 'Alojamiento y registros del servidor',
          body: [
            'Este sitio se sirve como archivos estáticos mediante GitHub Pages. Como cualquier alojamiento web, GitHub registra información técnica estándar al entregar una página —dirección IP, agente de usuario, ruta solicitada y fecha— por seguridad y prevención de abusos.',
            'Este sitio no tiene servidor de aplicaciones ni base de datos, así que no crea registros propios de visitantes ni puede identificar a una persona concreta.',
          ],
        },
        {
          id: 'local-storage',
          heading: 'Datos guardados en tu navegador',
          body: [
            'El juego guarda tus preferencias en local para que los controles, el modo de cámara, los volúmenes y el nombre se mantengan al recargar. Las pistas personalizadas y los fantasmas también se almacenan en local, en el mismo perfil del navegador.',
            'Borrar los datos de sitio de este dominio elimina todo eso, incluidas las pistas que nunca exportaste. Exporta cualquier pista que te importe antes de limpiar los datos del navegador.',
          ],
        },
        {
          id: 'third-parties',
          heading: 'Peticiones a terceros',
          body: [
            'Las clasificaciones y el multijugador necesitan un servidor, y el juego se conecta a los endpoints de Kodub para esas funciones. Esas peticiones se rigen por las prácticas de privacidad de Kodub, no por esta política. Si quieres una sesión totalmente offline, simplemente no entres en los menús de clasificación y multijugador.',
          ],
        },
        {
          id: 'children',
          heading: 'Menores',
          body: [
            'Este sitio no recoge información personal de nadie y no es un servicio que recopile datos de menores. No hay nada que registrar ni nada que enviar.',
          ],
        },
        {
          id: 'changes',
          heading: 'Cambios y contacto',
          body: [
            'Si esta política cambia, la fecha de actualización de la parte superior cambiará con ella. Las dudas sobre privacidad se pueden enviar a la dirección de contacto indicada en la página de términos.',
          ],
        },
      ],
      related: ['terms', 'about'],
    },

    {
      slug: 'terms',
      title: 'Términos de uso — PolyTrack Online',
      heading: 'Términos de uso',
      description:
        'Las condiciones de uso de este espejo no oficial de PolyTrack: propiedad del juego, uso aceptable, disponibilidad y cómo solicitar una retirada.',
      intro:
        'Estos términos cubren solo este sitio web. El juego es propiedad de su creador y se rige por los términos publicados en el sitio oficial.',
      updated: '2026-11-07',
      schema: 'Article',
      sections: [
        {
          id: 'acceptance',
          heading: '1. Aceptación',
          body: [
            'Al usar este sitio aceptas estos términos. Si no estás de acuerdo, cierra la página: el juego también está disponible en su fuente oficial.',
          ],
        },
        {
          id: 'ownership',
          heading: '2. Propiedad del juego',
          body: [
            'PolyTrack, incluido su código, arte, audio y nombre, es propiedad de Kodub. Este sitio no reclama ninguna propiedad sobre el juego ni concede licencia para redistribuirlo. El sitio en sí —su diseño, textos y guías— es un proyecto independiente hecho por fans.',
          ],
        },
        {
          id: 'unofficial',
          heading: '3. Carácter no oficial',
          body: [
            'Este sitio no está afiliado a Kodub. Cualquier afirmación sobre el juego es informativa, se basa en la versión web pública y puede quedar desactualizada si el juego cambia.',
          ],
        },
        {
          id: 'use',
          heading: '4. Uso aceptable',
          bullets: [
            'No intentes interrumpir el sitio ni el juego para otros jugadores.',
            'No redistribuyas los archivos del juego alojados aquí como si fueran tuyos.',
            'No uses el sitio de forma que incumpla las normas de la red a la que estás conectado.',
            'No hagas scraping a un ritmo que degrade el servicio para los demás.',
          ],
        },
        {
          id: 'availability',
          heading: '5. Disponibilidad y garantías',
          body: [
            'El sitio se ofrece «tal cual», sin garantía de ningún tipo. Puede no estar disponible, el juego puede no cargar en un dispositivo concreto y los datos guardados pueden perderse al limpiar el almacenamiento del navegador. Haz copia de tus pistas exportándolas.',
          ],
        },
        {
          id: 'liability',
          heading: '6. Limitación de responsabilidad',
          body: [
            'En la medida en que la ley lo permita, el operador de este sitio no responde de daños indirectos o derivados del uso del sitio o del juego.',
          ],
        },
        {
          id: 'takedown',
          heading: '7. Solicitudes de retirada',
          body: [
            'Los titulares de derechos pueden solicitar la retirada de cualquier material alojado. Abre una incidencia en el repositorio que sirve este sitio y el material se retirará sin demora.',
          ],
        },
        {
          id: 'changes',
          heading: '8. Cambios en estos términos',
          body: [
            'Estos términos pueden actualizarse; la fecha de la parte superior refleja la versión vigente. Seguir usando el sitio después de un cambio significa que aceptas los términos actualizados.',
          ],
        },
      ],
      related: ['privacy', 'about'],
    },
  ],
};

/** Slugs that have a dedicated page, in navigation order. */
export const PAGE_SLUGS = ['how-to-play', 'controls', 'track-editor', 'unblocked', 'about'] as const;

export function getPage(lang: 'en' | 'es', slug: string): PageContent | undefined {
  return pages[lang].find((page) => page.slug === slug);
}
