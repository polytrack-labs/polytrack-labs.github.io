/**
 * Translation dictionaries for UI chrome (navigation, footer, game embed).
 * Long-form page copy lives in src/data/pages.ts.
 */

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Play',
    'nav.howToPlay': 'How to Play',
    'nav.controls': 'Controls',
    'nav.trackEditor': 'Track Editor',
    'nav.unblocked': 'Unblocked',
    'nav.about': 'About',
    'nav.more': 'More',
    'nav.menu': 'Menu',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.mainNav': 'Main navigation',
    'nav.mobileNav': 'Mobile navigation',

    'cta.playNow': 'Play Now',
    'cta.playFree': 'Play PolyTrack Free',
    'cta.browseGuides': 'Browse the guides',

    'lang.switch': 'Language',
    'lang.en': 'English',
    'lang.es': 'Español',

    'game.frameTitle': 'PolyTrack game',
    'game.posterAlt': 'PolyTrack low-poly racing game cover art',
    'game.play': 'Click to play',
    'game.playHint': 'Loads the game instantly. Keyboard: W A S D or arrow keys.',
    'game.loading': 'Loading PolyTrack…',
    'game.loadingNote':
      'The first load takes a moment — the game is a 3D engine, not a 2D sprite page.',
    'game.fullscreen': 'Fullscreen',
    'game.exitFullscreen': 'Exit fullscreen',
    'game.failed': 'The game could not start. Try reloading the page, or open it in a new tab.',
    'game.openTab': 'Open in a new tab',
    'game.reload': 'Reload game',
    'game.modNote':
      'The game shows its own “unofficial version” notice — that is the developer’s notice, kept intact. The official release is on',

    'common.home': 'Home',
    'common.updated': 'Last updated',
    'common.readGuide': 'Read the full guide',
    'common.relatedPages': 'Keep reading',
    'common.onThisPage': 'On this page',
    'common.backToGame': 'Back to the game',
    'common.faqTitle': 'Frequently asked questions',

    'footer.about': 'About PolyTrack Online',
    'footer.aboutText':
      'A free browser version of PolyTrack, the low-poly 3D racing game with a built-in track editor. No download, no account, no install.',
    'footer.game': 'Game',
    'footer.guides': 'Guides',
    'footer.site': 'Site',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.credit':
      'PolyTrack is created by Kodub. This site is an unofficial fan-made mirror and is not affiliated with or endorsed by Kodub.',
    'footer.official': 'Official release:',
    'footer.builtWith': 'Built with Astro',

    'notFound.title': 'Page not found',
    'notFound.text':
      'That page does not exist — but the game is still one click away. Head back to the track.',
    'notFound.cta': 'Play PolyTrack',
  },
  es: {
    'nav.home': 'Jugar',
    'nav.howToPlay': 'Cómo jugar',
    'nav.controls': 'Controles',
    'nav.trackEditor': 'Editor de pistas',
    'nav.unblocked': 'Sin bloqueos',
    'nav.about': 'Acerca de',
    'nav.more': 'Más',
    'nav.menu': 'Menú',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.mainNav': 'Navegación principal',
    'nav.mobileNav': 'Navegación móvil',

    'cta.playNow': 'Jugar ahora',
    'cta.playFree': 'Juega PolyTrack gratis',
    'cta.browseGuides': 'Ver las guías',

    'lang.switch': 'Idioma',
    'lang.en': 'English',
    'lang.es': 'Español',

    'game.frameTitle': 'Juego PolyTrack',
    'game.posterAlt': 'Portada del juego de carreras low-poly PolyTrack',
    'game.play': 'Haz clic para jugar',
    'game.playHint': 'El juego se carga al instante. Teclado: W A S D o las flechas.',
    'game.loading': 'Cargando PolyTrack…',
    'game.loadingNote':
      'La primera carga tarda unos segundos: el juego es un motor 3D, no una página de sprites 2D.',
    'game.fullscreen': 'Pantalla completa',
    'game.exitFullscreen': 'Salir de pantalla completa',
    'game.failed': 'El juego no pudo iniciarse. Recarga la página o ábrelo en una pestaña nueva.',
    'game.openTab': 'Abrir en una pestaña nueva',
    'game.reload': 'Recargar juego',
    'game.modNote':
      'El juego muestra su propio aviso de «versión no oficial»: es el aviso del desarrollador, sin modificar. La versión oficial está en',

    'common.home': 'Inicio',
    'common.updated': 'Última actualización',
    'common.readGuide': 'Leer la guía completa',
    'common.relatedPages': 'Sigue leyendo',
    'common.onThisPage': 'En esta página',
    'common.backToGame': 'Volver al juego',
    'common.faqTitle': 'Preguntas frecuentes',

    'footer.about': 'Acerca de PolyTrack Online',
    'footer.aboutText':
      'Una versión gratuita para navegador de PolyTrack, el juego de carreras 3D low-poly con editor de pistas integrado. Sin descargas, sin cuenta, sin instalación.',
    'footer.game': 'Juego',
    'footer.guides': 'Guías',
    'footer.site': 'Sitio',
    'footer.privacy': 'Política de privacidad',
    'footer.terms': 'Términos de uso',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.credit':
      'PolyTrack es un juego creado por Kodub. Este sitio es un espejo no oficial hecho por fans y no está afiliado ni respaldado por Kodub.',
    'footer.official': 'Versión oficial:',
    'footer.builtWith': 'Hecho con Astro',

    'notFound.title': 'Página no encontrada',
    'notFound.text':
      'Esa página no existe, pero el juego sigue a un clic de distancia. Vuelve a la pista.',
    'notFound.cta': 'Jugar PolyTrack',
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
