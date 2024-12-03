import almas_pite from '@/images/almas_pite.jpg'
import citromos_fagylalt from '@/images/citromos_fagylalt.jpg'
import csokis_fagylalt from '@/images/csokis_fagylalt.jpg'
import csokis_macaron from '@/images/csokis_macaron.jpg'
import csokitorta from '@/images/csokitorta.jpg'
import dios_bejgli from '@/images/dios_bejgli.jpg'
import epres_macaron from '@/images/epres_macaron.jpg'
import gyumolcsos_pavlova from '@/images/gyumolcsos_pavlova.jpg'
import makos_bejgli from '@/images/makos_bejgli.jpg'
import malnas_fagylalt from '@/images/malnas_fagylalt.jpg'
import medvehagymas_pogacsa from '@/images/medvehagymas_pogacsa.jpg'
import pisztacias_fagylalt from '@/images/pisztacias_fagylalt.jpg'
import pisztacias_macaron from '@/images/pisztacias_macaron.jpg'
import sajtos_croissant from '@/images/sajtos_croissant.jpg'
import sajtos_pogacsa from '@/images/sajtos_pogacsa.jpeg'
import sos_rud from '@/images/sos_rud.jpg'
import tepertos_pogacsa from '@/images/tepertos_pogacsa.jpg'
import tiramisu from '@/images/tiramisu.jpg'
import turotorta from '@/images/turotorta.jpg'
import vanilias_fagylalt from '@/images/vanilias_fagylalt.jpg'
import vanilias_macaron from '@/images/vanilias_macaron.jpg'

const categories = [
  {
    id: 'desszertek',
    title: 'Desszertek',
    products: [
      {
        id: 101,
        name: 'Csokitorta',
        price: 4900,
        description:
          'Gazdag csokoládés torta, három rétegű piskótával és selymes csokoládékrémmel.',
        options: '8, 16 szeletes',
        image: csokitorta,
        imageAlt: 'Három rétegű csokoládétorta, csokoládé bevonattal.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/kinalatunk#desszertek',
        },
      },
      {
        id: 102,
        name: 'Tiramisu',
        price: 5200,
        description:
          'Klasszikus olasz desszert mascarpone krémmel és kávéval átitatott piskótával.',
        options: '8 szeletes',
        image: tiramisu,
        imageAlt: 'Tiramisu desszert.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/kinalatunk#desszertek',
        },
      },
      {
        id: 103,
        name: 'Gyümölcsös Pavlova',
        price: 4500,
        description:
          'Ropogós habcsók alap friss gyümölcsökkel és tejszínhabbal díszítve.',
        options: '6-8 szeletes',
        image: gyumolcsos_pavlova,
        imageAlt: 'Gyümölcsös pavlova.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/kinalatunk#desszertek',
        },
      },
      {
        id: 104,
        name: 'Almás Pite',
        price: 3900,
        description:
          'Házi készítésű omlós tésztával és fahéjas almatöltelékkel.',
        options: '8 szeletes',
        image: almas_pite,
        imageAlt: 'Almás pite.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/kinalatunk#desszertek',
        },
      },
      {
        id: 105,
        name: 'Túrótorta',
        price: 4700,
        description: 'Krémes túrótorta mazsolával és vaníliás ízesítéssel.',
        options: '8, 16 szeletes',
        image: turotorta,
        imageAlt: 'Túrótorta.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/kinalatunk#desszertek',
        },
      },
    ],
  },
  {
    id: 'macaronok',
    title: 'Macaronok',
    products: [
      {
        id: 201,
        name: 'Epres Macaron',
        price: 490,
        description:
          'Francia stílusú macaron friss eperkrémmel töltve, könnyű és légies textúrával.',
        options: 'Minimum rendelés: 6db',
        image: epres_macaron,
        imageAlt: 'Rózsaszín macaron epres töltelékkel.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/kinalatunk#macaronok',
        },
      },
      {
        id: 202,
        name: 'Csokoládés Macaron',
        price: 490,
        description:
          'Intenzív csokoládés ízű macaron belga csokoládé ganache-sal.',
        options: 'Minimum rendelés: 6db',
        image: csokis_macaron,
        imageAlt: 'Csokoládés macaron.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/kinalatunk#macaronok',
        },
      },
      {
        id: 203,
        name: 'Pisztáciás Macaron',
        price: 520,
        description: 'Valódi pisztáciával készült macaron, krémes töltelékkel.',
        options: 'Minimum rendelés: 6db',
        image: pisztacias_macaron,
        imageAlt: 'Pisztáciás macaron.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/kinalatunk#macaronok',
        },
      },
      {
        id: 204,
        name: 'Vaníliás Macaron',
        price: 490,
        description:
          'Bourbon vaníliával ízesített macaron fehér csokoládés krémmel.',
        options: 'Minimum rendelés: 6db',
        image: vanilias_macaron,
        imageAlt: 'Vaníliás macaron.',
        breadcrumb: {
          name: 'Macaronok',
          href: '/kinalatunk#macaronok',
        },
      },
    ],
  },
  {
    id: 'sossutemenyek',
    title: 'Sós Sütemények',
    products: [
      {
        id: 301,
        name: 'Sajtos Pogácsa',
        price: 150,
        description:
          'Omlós, házi készítésű pogácsa valódi sajttal, tökéletes választás partikra.',
        options: 'Minimum rendelés: 5db',
        image: sajtos_pogacsa,
        imageAlt: 'Aranybarnára sült sajtos pogácsa.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/kinalatunk#sossutemenyek',
        },
      },
      {
        id: 302,
        name: 'Tepertős Pogácsa',
        price: 180,
        description: 'Hagyományos tepertős pogácsa, omlós tésztával.',
        options: 'Minimum rendelés: 5db',
        image: tepertos_pogacsa,
        imageAlt: 'Tepertős pogácsa.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/kinalatunk#sossutemenyek',
        },
      },
      {
        id: 303,
        name: 'Sós Rúd',
        price: 130,
        description: 'Ropogós sós rúd köménymaggal szórva.',
        options: 'Minimum rendelés: 5db',
        image: sos_rud,
        imageAlt: 'Sós rúd.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/kinalatunk#sossutemenyek',
        },
      },
      {
        id: 304,
        name: 'Sajtos Croissant',
        price: 650,
        description: 'Leveles tésztából készült croissant sajttal töltve.',
        options: 'Minimum rendelés: 5db',
        image: sajtos_croissant,
        imageAlt: 'Sajtos croissant.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/kinalatunk#sossutemenyek',
        },
      },
      {
        id: 305,
        name: 'Medvehagymás Pogácsa',
        price: 190,
        description: 'Szezonális medvehagymás pogácsa, friss fűszernövénnyel.',
        options: 'Minimum rendelés: 5db',
        image: medvehagymas_pogacsa,
        imageAlt: 'Medvehagymás pogácsa.',
        breadcrumb: {
          name: 'Sós Sütemények',
          href: '/kinalatunk#sossutemenyek',
        },
      },
    ],
  },
  {
    id: 'fagylaltok',
    title: 'Fagylaltok',
    products: [
      {
        id: 401,
        name: 'Málnás Fagylalt',
        price: 590,
        description:
          'Kézműves málna fagylalt friss gyümölcsből, természetes alapanyagokból.',
        options: 'Tölcséres vagy poharas',
        image: malnas_fagylalt,
        imageAlt: 'Málna fagylalt tölcsérben.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/kinalatunk#fagylaltok',
        },
      },
      {
        id: 402,
        name: 'Csokoládés Fagylalt',
        price: 450,
        description: 'Belga csokoládéból készült krémes fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: csokis_fagylalt,
        imageAlt: 'Csokoládés fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/kinalatunk#fagylaltok',
        },
      },
      {
        id: 403,
        name: 'Vaníliás Fagylalt',
        price: 450,
        description: 'Madagaszkári vaníliával készült klasszikus fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: vanilias_fagylalt,
        imageAlt: 'Vaníliás fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/kinalatunk#fagylaltok',
        },
      },
      {
        id: 404,
        name: 'Pisztáciás Fagylalt',
        price: 590,
        description: 'Szicíliai pisztáciából készült prémium fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: pisztacias_fagylalt,
        imageAlt: 'Pisztáciás fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/kinalatunk#fagylaltok',
        },
      },
      {
        id: 405,
        name: 'Citromos Fagylalt',
        price: 450,
        description: 'Frissítő citrom sorbet, tökéletes nyári hűsítő.',
        options: 'Csak poharas kiszerelés',
        image: citromos_fagylalt,
        imageAlt: 'Citromos fagylalt.',
        breadcrumb: {
          name: 'Fagylaltok',
          href: '/kinalatunk#fagylaltok',
        },
      },
    ],
  },
  {
    id: 'bejglik',
    title: 'Bejglik',
    products: [
      {
        id: 501,
        name: 'Diós bejgli',
        price: 3900,
        description: 'Tradicionális karácsonyi bejgli gazdag diós töltelékkel.',
        options: '30cm-es tekercs',
        image: dios_bejgli,
        imageAlt: 'Diós bejgli szelet.',
        breadcrumb: {
          name: 'Bejglik',
          href: '/kinalatunk#bejglik',
        },
      },
      {
        id: 502,
        name: 'Mákos Bejgli',
        price: 3900,
        description: 'Klasszikus mákos bejgli házi készítésű máktöltelékkel.',
        options: '30cm-es tekercs',
        image: makos_bejgli,
        imageAlt: 'Mákos bejgli.',
        breadcrumb: {
          name: 'Bejglik',
          href: '/kinalatunk#bejglik',
        },
      },
    ],
  },
]

export default categories
