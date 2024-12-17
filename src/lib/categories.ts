import almas_pite from '/public/assets/images/almas_pite.jpg'
import citromos_fagylalt from '/public/assets/images/citromos_fagylalt.jpg'
import csokis_fagylalt from '/public/assets/images/csokis_fagylalt.jpg'
import csokis_macaron from '/public/assets/images/csokis_macaron.jpg'
import csokitorta from '/public/assets/images/csokitorta.jpg'
import dios_bejgli from '/public/assets/images/dios_bejgli.jpg'
import epres_macaron from '/public/assets/images/epres_macaron.jpg'
import gyumolcsos_pavlova from '/public/assets/images/gyumolcsos_pavlova.jpg'
import makos_bejgli from '/public/assets/images/makos_bejgli.jpg'
import malnas_fagylalt from '/public/assets/images/malnas_fagylalt.jpg'
import medvehagymas_pogacsa from '/public/assets/images/medvehagymas_pogacsa.jpg'
import pisztacias_fagylalt from '/public/assets/images/pisztacias_fagylalt.jpg'
import pisztacias_macaron from '/public/assets/images/pisztacias_macaron.jpg'
import sajtos_croissant from '/public/assets/images/sajtos_croissant.jpg'
import sajtos_pogacsa from '/public/assets/images/sajtos_pogacsa.jpeg'
import sos_rud from '/public/assets/images/sos_rud.jpg'
import bejglik from '/public/assets/images/bejglik.jpeg'
import desszertek from '/public/assets/images/desszertek.jpg'
import macaronok from '/public/assets/images/macaronok.jpg'
import sos_sutemenyek from '/public/assets/images/sos_sutemenyek.jpeg'
import fagylaltok from '/public/assets/images/fagylaltok.jpg'
import tepertos_pogacsa from '/public/assets/images/tepertos_pogacsa.jpg'
import tiramisu from '/public/assets/images/tiramisu.jpg'
import turotorta from '/public/assets/images/turotorta.jpg'
import vanilias_fagylalt from '/public/assets/images/vanilias_fagylalt.jpg'
import vanilias_macaron from '/public/assets/images/vanilias_macaron.jpg'

const categories = [
  {
    id: 'desszertek',
    title: 'Desszertek',
    description:
      'Kézműves sütemények és torták széles választéka, minden alkalomra tökéletes édességek.',
    href: '/desszertek',
    image: desszertek,
    products: [
      {
        id: 'csokitorta',
        name: 'Csokitorta',
        price: 4900,
        description:
          'Gazdag csokoládés torta, három rétegű piskótával és selymes csokoládékrémmel.',
        options: '8, 16 szeletes',
        image: csokitorta,
        imageAlt: 'Három rétegű csokoládétorta, csokoládé bevonattal.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'tiramisu',
        name: 'Tiramisu',
        price: 5200,
        description:
          'Klasszikus olasz desszert mascarpone krémmel és kávéval átitatott piskótával.',
        options: '8 szeletes',
        image: tiramisu,
        imageAlt: 'Tiramisu desszert.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'gyumolcsos-pavlova',
        name: 'Gyümölcsös Pavlova',
        price: 4500,
        description:
          'Ropogós habcsók alap friss gyümölcsökkel és tejszínhabbal díszítve.',
        options: '6-8 szeletes',
        image: gyumolcsos_pavlova,
        imageAlt: 'Gyümölcsös pavlova.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'almas-pite',
        name: 'Almás Pite',
        price: 3900,
        description:
          'Házi készítésű omlós tésztával és fahéjas almatöltelékkel.',
        options: '8 szeletes',
        image: almas_pite,
        imageAlt: 'Almás pite.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'turotorta',
        name: 'Túrótorta',
        price: 4700,
        description: 'Krémes túrótorta mazsolával és vaníliás ízesítéssel.',
        options: '8, 16 szeletes',
        image: turotorta,
        imageAlt: 'Túrótorta.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
    ],
  },
  {
    id: 'macaronok',
    title: 'Macaronok',
    description:
      'Francia stílusú macaronok különleges ízekben, tökéletes textúrával és színekkel.',
    href: '/macaronok',
    image: macaronok,
    products: [
      {
        id: 'epres-macaron',
        name: 'Epres Macaron',
        price: 490,
        description:
          'Francia stílusú macaron friss eperkrémmel töltve, könnyű és légies textúrával.',
        options: 'Minimum rendelés: 6db',
        image: epres_macaron,
        imageAlt: 'Rózsaszín macaron epres töltelékkel.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/macaronok',
        },
      },
      {
        id: 'csokolades-macaron',
        name: 'Csokoládés Macaron',
        price: 490,
        description:
          'Intenzív csokoládés ízű macaron belga csokoládé ganache-sal.',
        options: 'Minimum rendelés: 6db',
        image: csokis_macaron,
        imageAlt: 'Csokoládés macaron.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/macaronok',
        },
      },
      {
        id: 'pisztacias-macaron',
        name: 'Pisztáciás Macaron',
        price: 520,
        description: 'Valódi pisztáciával készült macaron, krémes töltelékkel.',
        options: 'Minimum rendelés: 6db',
        image: pisztacias_macaron,
        imageAlt: 'Pisztáciás macaron.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/macaronok',
        },
      },
      {
        id: 'vanilias-macaron',
        name: 'Vaníliás Macaron',
        price: 490,
        description:
          'Bourbon vaníliával ízesített macaron fehér csokoládés krémmel.',
        options: 'Minimum rendelés: 6db',
        image: vanilias_macaron,
        imageAlt: 'Vaníliás macaron.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/macaronok',
        },
      },
    ],
  },
  {
    id: 'sos-sutemenyek',
    title: 'Sós Sütemények',
    description:
      'Ropogós pogácsák és sós aprósütemények, tökéletes választás partikra és rendezvényekre.',
    href: '/sos-sutemenyek',
    image: sos_sutemenyek,
    products: [
      {
        id: 'sajtos-pogacsa',
        name: 'Sajtos Pogácsa',
        price: 150,
        description:
          'Omlós, házi készítésű pogácsa valódi sajttal, tökéletes választás partikra.',
        options: 'Minimum rendelés: 5db',
        image: sajtos_pogacsa,
        imageAlt: 'Aranybarnára sült sajtos pogácsa.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/sos-sutemenyek',
        },
      },
      {
        id: 'tepertos-pogacsa',
        name: 'Tepertős Pogácsa',
        price: 180,
        description: 'Hagyományos tepertős pogácsa, omlós tésztával.',
        options: 'Minimum rendelés: 5db',
        image: tepertos_pogacsa,
        imageAlt: 'Tepertős pogácsa.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/sos-sutemenyek',
        },
      },
      {
        id: 'sos-rud',
        name: 'Sós Rúd',
        price: 130,
        description: 'Ropogós sós rúd köménymaggal szórva.',
        options: 'Minimum rendelés: 5db',
        image: sos_rud,
        imageAlt: 'Sós rúd.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/sos-sutemenyek',
        },
      },
      {
        id: 'sajtos-croissant',
        name: 'Sajtos Croissant',
        price: 650,
        description: 'Leveles tésztából készült croissant sajttal töltve.',
        options: 'Minimum rendelés: 5db',
        image: sajtos_croissant,
        imageAlt: 'Sajtos croissant.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/sos-sutemenyek',
        },
      },
      {
        id: 'medvehagymas-pogacsa',
        name: 'Medvehagymás Pogácsa',
        price: 190,
        description: 'Szezonális medvehagymás pogácsa, friss fűszernövénnyel.',
        options: 'Minimum rendelés: 5db',
        image: medvehagymas_pogacsa,
        imageAlt: 'Medvehagymás pogácsa.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/sos-sutemenyek',
        },
      },
    ],
  },
  {
    id: 'fagylaltok',
    title: 'Fagylaltok',
    description:
      'Kézműves fagylaltkülönlegességek természetes alapanyagokból, szezonális ízekben.',
    href: '/fagylaltok',
    image: fagylaltok,
    products: [
      {
        id: 'malnas-fagylalt',
        name: 'Málnás Fagylalt',
        price: 590,
        description:
          'Kézműves málna fagylalt friss gyümölcsből, természetes alapanyagokból.',
        options: 'Tölcséres vagy poharas',
        image: malnas_fagylalt,
        imageAlt: 'Málna fagylalt tölcsérben.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/fagylaltok',
        },
      },
      {
        id: 'csokolades-fagylalt',
        name: 'Csokoládés Fagylalt',
        price: 450,
        description: 'Belga csokoládéból készült krémes fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: csokis_fagylalt,
        imageAlt: 'Csokoládés fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/fagylaltok',
        },
      },
      {
        id: 'vanilias-fagylalt',
        name: 'Vaníliás Fagylalt',
        price: 450,
        description: 'Madagaszkári vaníliával készült klasszikus fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: vanilias_fagylalt,
        imageAlt: 'Vaníliás fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/fagylaltok',
        },
      },
      {
        id: 'pisztacias-fagylalt',
        name: 'Pisztáciás Fagylalt',
        price: 590,
        description: 'Szicíliai pisztáciából készült prémium fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: pisztacias_fagylalt,
        imageAlt: 'Pisztáciás fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/fagylaltok',
        },
      },
      {
        id: 'citromos-fagylalt',
        name: 'Citromos Fagylalt',
        price: 450,
        description: 'Frissítő citrom sorbet, tökéletes nyári hűsítő.',
        options: 'Csak poharas kiszerelés',
        image: citromos_fagylalt,
        imageAlt: 'Citromos fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/fagylaltok',
        },
      },
    ],
  },
  {
    id: 'bejglik',
    title: 'Bejglik',
    description:
      'Hagyományos diós és mákos bejgli, az ünnepek elengedhetetlen édessége.',
    href: '/bejglik',
    image: bejglik,
    products: [
      {
        id: 'dios-bejgli',
        name: 'Diós bejgli',
        price: 3900,
        description: 'Tradicionális karácsonyi bejgli gazdag diós töltelékkel.',
        options: '30cm-es tekercs',
        image: dios_bejgli,
        imageAlt: 'Diós bejgli szelet.',
        breadcrumb: {
          name: 'Bejglik',
          href: '/bejglik',
        },
      },
      {
        id: 'makos-bejgli',
        name: 'Mákos Bejgli',
        price: 3900,
        description: 'Klasszikus mákos bejgli házi készítésű máktöltelékkel.',
        options: '30cm-es tekercs',
        image: makos_bejgli,
        imageAlt: 'Mákos bejgli.',
        breadcrumb: {
          name: 'Bejglik',
          href: '/bejglik',
        },
      },
    ],
  },
]

export default categories
