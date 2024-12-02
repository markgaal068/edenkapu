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
        href: '#',
        price: 4900,
        description:
          'Gazdag csokoládés torta, három rétegű piskótával és selymes csokoládékrémmel.',
        options: '8, 16 szeletes',
        image: csokitorta,
        imageAlt: 'Három rétegű csokoládétorta, csokoládé bevonattal.',
      },
      {
        id: 102,
        name: 'Tiramisu',
        href: '#',
        price: 5200,
        description:
          'Klasszikus olasz desszert mascarpone krémmel és kávéval átitatott piskótával.',
        options: '8 szeletes',
        image: tiramisu,
        imageAlt: 'Tiramisu desszert.',
      },
      {
        id: 103,
        name: 'Gyümölcsös Pavlova',
        href: '#',
        price: 4500,
        description:
          'Ropogós habcsók alap friss gyümölcsökkel és tejszínhabbal díszítve.',
        options: '6-8 szeletes',
        image: gyumolcsos_pavlova,
        imageAlt: 'Gyümölcsös pavlova.',
      },
      {
        id: 104,
        name: 'Almás Pite',
        href: '#',
        price: 3900,
        description:
          'Házi készítésű omlós tésztával és fahéjas almatöltelékkel.',
        options: '8 szeletes',
        image: almas_pite,
        imageAlt: 'Almás pite.',
      },
      {
        id: 105,
        name: 'Túrótorta',
        href: '#',
        price: 4700,
        description: 'Krémes túrótorta mazsolával és vaníliás ízesítéssel.',
        options: '8, 16 szeletes',
        image: turotorta,
        imageAlt: 'Túrótorta.',
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
        href: '#',
        price: 490,
        description:
          'Francia stílusú macaron friss eperkrémmel töltve, könnyű és légies textúrával.',
        options: 'Minimum rendelés: 6db',
        image: epres_macaron,
        imageAlt: 'Rózsaszín macaron epres töltelékkel.',
      },
      {
        id: 202,
        name: 'Csokoládés Macaron',
        href: '#',
        price: 490,
        description:
          'Intenzív csokoládés ízű macaron belga csokoládé ganache-sal.',
        options: 'Minimum rendelés: 6db',
        image: csokis_macaron,
        imageAlt: 'Csokoládés macaron.',
      },
      {
        id: 203,
        name: 'Pisztáciás Macaron',
        href: '#',
        price: 520,
        description: 'Valódi pisztáciával készült macaron, krémes töltelékkel.',
        options: 'Minimum rendelés: 6db',
        image: pisztacias_macaron,
        imageAlt: 'Pisztáciás macaron.',
      },
      {
        id: 204,
        name: 'Vaníliás Macaron',
        href: '#',
        price: 490,
        description:
          'Bourbon vaníliával ízesített macaron fehér csokoládés krémmel.',
        options: 'Minimum rendelés: 6db',
        image: vanilias_macaron,
        imageAlt: 'Vaníliás macaron.',
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
        href: '#',
        price: 150,
        description:
          'Omlós, házi készítésű pogácsa valódi sajttal, tökéletes választás partikra.',
        options: 'Minimum rendelés: 5db',
        image: sajtos_pogacsa,
        imageAlt: 'Aranybarnára sült sajtos pogácsa.',
      },
      {
        id: 302,
        name: 'Tepertős Pogácsa',
        href: '#',
        price: 180,
        description: 'Hagyományos tepertős pogácsa, omlós tésztával.',
        options: 'Minimum rendelés: 5db',
        image: tepertos_pogacsa,
        imageAlt: 'Tepertős pogácsa.',
      },
      {
        id: 303,
        name: 'Sós Rúd',
        href: '#',
        price: 130,
        description: 'Ropogós sós rúd köménymaggal szórva.',
        options: 'Minimum rendelés: 5db',
        image: sos_rud,
        imageAlt: 'Sós rúd.',
      },
      {
        id: 304,
        name: 'Sajtos Croissant',
        href: '#',
        price: 650,
        description: 'Leveles tésztából készült croissant sajttal töltve.',
        options: 'Minimum rendelés: 5db',
        image: sajtos_croissant,
        imageAlt: 'Sajtos croissant.',
      },
      {
        id: 305,
        name: 'Medvehagymás Pogácsa',
        href: '#',
        price: 190,
        description: 'Szezonális medvehagymás pogácsa, friss fűszernövénnyel.',
        options: 'Minimum rendelés: 5db',
        image: medvehagymas_pogacsa,
        imageAlt: 'Medvehagymás pogácsa.',
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
        href: '#',
        price: 590,
        description:
          'Kézműves málna fagylalt friss gyümölcsből, természetes alapanyagokból.',
        options: 'Tölcséres vagy poharas',
        image: malnas_fagylalt,
        imageAlt: 'Málna fagylalt tölcsérben.',
      },
      {
        id: 402,
        name: 'Csokoládés Fagylalt',
        href: '#',
        price: 450,
        description: 'Belga csokoládéból készült krémes fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: csokis_fagylalt,
        imageAlt: 'Csokoládés fagylalt.',
      },
      {
        id: 403,
        name: 'Vaníliás Fagylalt',
        href: '#',
        price: 450,
        description: 'Madagaszkári vaníliával készült klasszikus fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: vanilias_fagylalt,
        imageAlt: 'Vaníliás fagylalt.',
      },
      {
        id: 404,
        name: 'Pisztáciás Fagylalt',
        href: '#',
        price: 590,
        description: 'Szicíliai pisztáciából készült prémium fagylalt.',
        options: 'Tölcséres vagy poharas',
        image: pisztacias_fagylalt,
        imageAlt: 'Pisztáciás fagylalt.',
      },
      {
        id: 405,
        name: 'Citromos Fagylalt',
        href: '#',
        price: 450,
        description: 'Frissítő citrom sorbet, tökéletes nyári hűsítő.',
        options: 'Csak poharas kiszerelés',
        image: citromos_fagylalt,
        imageAlt: 'Citromos fagylalt.',
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
        href: '#',
        price: 3900,
        description: 'Tradicionális karácsonyi bejgli gazdag diós töltelékkel.',
        options: '30cm-es tekercs',
        image: dios_bejgli,
        imageAlt: 'Diós bejgli szelet.',
      },
      {
        id: 502,
        name: 'Mákos Bejgli',
        href: '#',
        price: 3900,
        description: 'Klasszikus mákos bejgli házi készítésű máktöltelékkel.',
        options: '30cm-es tekercs',
        image: makos_bejgli,
        imageAlt: 'Mákos bejgli.',
      },
    ],
  },
]

export default categories
