import citromos_fagylalt from '/public/assets/images/citromos_fagylalt.jpg'
import csokis_fagylalt from '/public/assets/images/csokis_fagylalt.jpg'
import csokis_macaron from '/public/assets/images/csokis_macaron.jpg'
import cakepop from '/public/assets/images/desserts/cakepop.webp'
import etcsokis_malnas_torta from '/public/assets/images/desserts/etcsokis_malnas_torta.webp'
import fehercsokis_malnas_torta from '/public/assets/images/desserts/fehercsokis_malnas_torta.webp'
import genovai_csokolademousse from '/public/assets/images/desserts/genovai_csokolademousse.webp'
import paleo_gesztenyes_meggyes_sutemeny from '/public/assets/images/desserts/paleo_gesztenyes_meggyes_sutemeny.webp'
import halloween_muffinok from '/public/assets/images/desserts/halloweeni_muffinok.webp'
import karamellas_sajttorta from '/public/assets/images/desserts/karamellas_sajttorta.webp'
import mangos_sajttorta from '/public/assets/images/desserts/mangos_sajttorta.webp'
import narancsos_csokolades_torta from '/public/assets/images/desserts/narancsos_csokolades_torta.webp'
import nutellas_sutemeny from '/public/assets/images/desserts/nutellas_sutemeny.webp'
import paleo_citromos_sutemeny from '/public/assets/images/desserts/paleo_citromos_sutemeny.webp'
import paleo_golyo from '/public/assets/images/desserts/paleo_golyo.webp'
import paleo_rumos_dios_sutemeny from '/public/assets/images/desserts/paleo_rumos_dios_sutemeny.webp'
import paleo_somloi_galuska from '/public/assets/images/desserts/paleo_somloi_galuska.webp'
import pisztacias_sajttorta from '/public/assets/images/desserts/pisztacias_sajttorta.webp'
import rumos_gesztenyemousse_torta from '/public/assets/images/desserts/rumos_gesztenyemousse_torta.webp'
import rumos_gesztenyes_tekercs from '/public/assets/images/desserts/rumos_gesztenyes_tekercs.webp'
import triplacsokolades_mousse_torta from '/public/assets/images/desserts/triplacsokolades_mousse_torta.webp'
import vegan_malnas_pisztacias_torta from '/public/assets/images/desserts/vegan_malnas_pisztacias_torta.webp'
import vegan_sutotokos_pite from '/public/assets/images/desserts/vegan_sutotokos_pite.webp'
import dios_bejgli from '/public/assets/images/dios_bejgli.jpg'
import epres_macaron from '/public/assets/images/epres_macaron.jpg'
import makos_bejgli from '/public/assets/images/makos_bejgli.jpg'
import malnas_fagylalt from '/public/assets/images/malnas_fagylalt.jpg'
import bejglik from '/public/assets/images/offers/bejglik.jpg'
import desszertek from '/public/assets/images/offers/desszertek_1.jpeg'
import fagylaltok from '/public/assets/images/offers/fagylaltok_1.png'
import macaronok from '/public/assets/images/offers/macaronok.png'
import pisztacias_fagylalt from '/public/assets/images/pisztacias_fagylalt.jpg'
import pisztacias_macaron from '/public/assets/images/pisztacias_macaron.jpg'
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
        id: 'cakepop',
        name: 'Cakepop',
        price: 990,
        description: 'Különleges cake pop válogatás különböző ízekben.',
        options: '1 db',
        image: cakepop,
        imageAlt: 'cake pop válogatás',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'etcsokis-malnas-torta',
        name: 'Étcsokoládés-málnás torta',
        price: 4900,
        description:
          'Étcsokoládés torta friss málnával díszítve és málnás töltelékkel.',
        options: '8, 10, 16 szeletes',
        image: etcsokis_malnas_torta,
        imageAlt: 'étcsokoládés-málnás torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'fehercsokis-malnas-torta',
        name: 'Fehércsokoládés-málnás torta',
        price: 4900,
        description:
          'Fehércsokoládés torta friss málnával és málnás töltelékkel.',
        options: '8, 10, 16 szeletes',
        image: fehercsokis_malnas_torta,
        imageAlt: 'fehércsokoládés-málnás torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'genovai-csokolademousse',
        name: 'Genovai csokoládémousse',
        price: 4900,
        description:
          'Genovai jellegű csokoládés mousse torta, selymes csokoládékrémmel.',
        options: '8, 10, 16 szeletes',
        image: genovai_csokolademousse,
        imageAlt: 'genovai csokoládémousse torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'gesztenyes-meggyes-paleo-sutemeny',
        name: 'Gesztenyés-meggyes paleo sütemény',
        price: 4500,
        description:
          'Paleo gesztenyés-meggyes sütemény, természetes összetevőkből.',
        options: '8, 10, 16 szeletes',
        image: paleo_gesztenyes_meggyes_sutemeny,
        imageAlt: 'Paleo gesztenyés-meggyes sütemény.',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'halloween-muffinok',
        name: 'Halloween muffinok',
        price: 990,
        description: 'Szezonális Halloween témájú muffinok egyedi díszítéssel.',
        options: '1 db',
        image: halloween_muffinok,
        imageAlt: 'halloween témájú muffinok',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'karamellas-sajttorta',
        name: 'Karamellás sajttorta',
        price: 4900,
        description: 'Krémes karamellás sajttorta',
        options: '8, 10, 16 szeletes',
        image: karamellas_sajttorta,
        imageAlt: 'krémes karamellás sajttorta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'mangos-sajttorta',
        name: 'Mangós sajttorta',
        price: 4900,
        description: 'Krémes mangós sajttorta',
        options: '8, 10, 16 szeletes',
        image: mangos_sajttorta,
        imageAlt: 'krémes mangós sajttorta',

        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'narancsos-csokis-torta',
        name: 'Narancsos-csokoládés torta',
        price: 4900,
        description: 'Csokoládés torta narancs ízű krémmel.',
        options: '8, 10, 16 szeletes',
        image: narancsos_csokolades_torta,
        imageAlt: 'narancsos-csokoládés torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'nutellas-sutemeny',
        name: 'Nutellás sütemény',
        price: 990,
        description: 'Nutellás sütemény, gazdag mogyorókrém ízzel.',
        options: '1 db',
        image: nutellas_sutemeny,
        imageAlt: 'nutellás sütemény',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'paleo-citromos-sutemeny',
        name: 'Paleo citromos sütemény',
        price: 4500,
        description: 'Paleo citromos sütemény, természetes édesítőszerrel.',
        options: '1 db',
        image: paleo_citromos_sutemeny,
        imageAlt: 'paleo citromos sütemény',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'paleo-golyo',
        name: 'Paleo golyó',
        price: 4500,
        description: 'Paleo golyó, természetes összetevőkből.',
        options: '1 db',
        image: paleo_golyo,
        imageAlt: 'paleo golyó',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'paleo-somloi-galuska',
        name: 'Paleo somlói galuska',
        price: 990,
        description: 'Paleo somlói galuska, természetes összetevőkből.',
        options: '1 adag',
        image: paleo_somloi_galuska,
        imageAlt: 'paleo somlói galuska',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'pisztacias-sajttorta',
        name: 'Pisztáciás sajttorta',
        price: 4900,
        description: 'Krémes pisztáciás sajttorta',
        options: '8, 10, 16 szeletes',
        image: pisztacias_sajttorta,
        imageAlt: 'krémes pisztáciás sajttorta',

        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'paleo-rumos-dios-sutemeny',
        name: 'Paleo rumos-diós sütemény',
        price: 4500,
        description: 'Paleo rumos-diós sütemény, természetes összetevőkből.',
        options: '1 db',
        image: paleo_rumos_dios_sutemeny,
        imageAlt: 'paleo rumos-diós sütemény',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'rumos-gesztenye-mousse',
        name: 'Rumos gesztenyemousse',
        price: 4900,
        description: 'Rumos gesztenyemousse torta, selymes gesztenyekrémmel.',
        options: '8, 16 szeletes',
        image: rumos_gesztenyemousse_torta,
        imageAlt: 'rumos gesztenyemousse torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'rumos-gesztenyes-tekercs',
        name: 'Rumos gesztenyés tekercs',
        price: 990,
        description: 'Rumos gesztenyés tekercs, krémes gesztenyetöltelékkel.',
        options: '1 szelet',
        image: rumos_gesztenyes_tekercs,
        imageAlt: 'rumos gesztenyés tekercs',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'triplacsokis-mousse',
        name: 'Triplacsokoládés mousse',
        price: 4900,
        description:
          'Triplacsokoládés mousse torta három különböző csokoládérétegből.',
        options: '8, 16 szeletes',
        image: triplacsokolades_mousse_torta,
        imageAlt: 'triplacsokoládés mousse torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'vegan-malnas-pisztacias-torta',
        name: 'Vegán málnás pisztáciás torta',
        price: 4900,
        description:
          'Vegán málnás-pisztáciás torta, növényi alapú összetevőkből.',
        options: '8, 16 szeletes',
        image: vegan_malnas_pisztacias_torta,
        imageAlt: 'vegán málnás-pisztáciás torta',
        breadcrumb: {
          name: 'Desszertek',
          href: '/desszertek',
        },
      },
      {
        id: 'vegan-sutotokos-pite',
        name: 'Vegán sütőtökös pite',
        price: 4500,
        description: 'Vegán sütőtökös pite, növényi alapú összetevőkből.',
        options: '8 szeletes',
        image: vegan_sutotokos_pite,
        imageAlt: 'vegán sütőtökös pite',
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
  // {
  //   id: 'sos-sutemenyek',
  //   title: 'Sós Sütemények',
  //   description:
  //     'Ropogós pogácsák és sós aprósütemények, tökéletes választás partikra és rendezvényekre.',
  //   href: '/sos-sutemenyek',
  //   image: sos_sutemenyek,
  //   products: [
  //     {
  //       id: 'sajtos-pogacsa',
  //       name: 'Sajtos Pogácsa',
  //       price: 150,
  //       description:
  //         'Omlós, házi készítésű pogácsa valódi sajttal, tökéletes választás partikra.',
  //       options: 'Minimum rendelés: 5db',
  //       image: sajtos_pogacsa,
  //       imageAlt: 'Aranybarnára sült sajtos pogácsa.',
  //       breadcrumb: {
  //         name: 'Sós Sütemények',
  //         href: '/sos-sutemenyek',
  //       },
  //     },
  //     {
  //       id: 'tepertos-pogacsa',
  //       name: 'Tepertős Pogácsa',
  //       price: 180,
  //       description: 'Hagyományos tepertős pogácsa, omlós tésztával.',
  //       options: 'Minimum rendelés: 5db',
  //       image: tepertos_pogacsa,
  //       imageAlt: 'Tepertős pogácsa.',
  //       breadcrumb: {
  //         name: 'Sós Sütemények',
  //         href: '/sos-sutemenyek',
  //       },
  //     },
  //     {
  //       id: 'sos-rud',
  //       name: 'Sós Rúd',
  //       price: 130,
  //       description: 'Ropogós sós rúd köménymaggal szórva.',
  //       options: 'Minimum rendelés: 5db',
  //       image: sos_rud,
  //       imageAlt: 'Sós rúd.',
  //       breadcrumb: {
  //         name: 'Sós Sütemények',
  //         href: '/sos-sutemenyek',
  //       },
  //     },
  //     {
  //       id: 'sajtos-croissant',
  //       name: 'Sajtos Croissant',
  //       price: 650,
  //       description: 'Leveles tésztából készült croissant sajttal töltve.',
  //       options: 'Minimum rendelés: 5db',
  //       image: sajtos_croissant,
  //       imageAlt: 'Sajtos croissant.',
  //       breadcrumb: {
  //         name: 'Sós Sütemények',
  //         href: '/sos-sutemenyek',
  //       },
  //     },
  //     {
  //       id: 'medvehagymas-pogacsa',
  //       name: 'Medvehagymás Pogácsa',
  //       price: 190,
  //       description: 'Szezonális medvehagymás pogácsa, friss fűszernövénnyel.',
  //       options: 'Minimum rendelés: 5db',
  //       image: medvehagymas_pogacsa,
  //       imageAlt: 'Medvehagymás pogácsa.',
  //       breadcrumb: {
  //         name: 'Sós Sütemények',
  //         href: '/sos-sutemenyek',
  //       },
  //     },
  //   ],
  // },
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
  // {
  //   id: 'bejglik',
  //   title: 'Bejglik',
  //   description:
  //     'Hagyományos diós és mákos bejgli, az ünnepek elengedhetetlen édessége.',
  //   href: '/bejglik',
  //   image: bejglik,
  //   products: [
  //     {
  //       id: 'dios-bejgli',
  //       name: 'Diós bejgli',
  //       price: 3900,
  //       description: 'Tradicionális karácsonyi bejgli gazdag diós töltelékkel.',
  //       options: '30cm-es tekercs',
  //       image: dios_bejgli,
  //       imageAlt: 'Diós bejgli szelet.',
  //       breadcrumb: {
  //         name: 'Bejglik',
  //         href: '/bejglik',
  //       },
  //     },
  //     {
  //       id: 'makos-bejgli',
  //       name: 'Mákos Bejgli',
  //       price: 3900,
  //       description: 'Klasszikus mákos bejgli házi készítésű máktöltelékkel.',
  //       options: '30cm-es tekercs',
  //       image: makos_bejgli,
  //       imageAlt: 'Mákos bejgli.',
  //       breadcrumb: {
  //         name: 'Bejglik',
  //         href: '/bejglik',
  //       },
  //     },
  //   ],
  // },
]

export default categories
