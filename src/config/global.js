export default {
  global: {
    Name: 'Patronaje de bases superiores femeninas',
    Description:
      'El patronaje es un proceso técnico que permite crear moldes para la confección, apoyado en metodologías como el manual de patronaje del SENA y convenciones gráficas. Incluye el trazo de patrones base femeninos, como corpiño, blusa y manga, así como piezas complementarias como cuellos y bolsillos. En el ámbito industrial, el escalado adapta estos moldes a distintas tallas. Este conocimiento es clave en la producción técnica y creativa de prendas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de patronaje y líneas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento y entorno',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodología y manual de patronaje SENA',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Metodología y convenciones',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patrones base de prendas femeninas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trazo de corpiño básico femenino',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Traslado de pinzas de corpiño',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Análisis y trazo de sistema de ajuste (pinzas y cortes)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazo básico de manga',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Piezas complementarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cuellos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Bolsillos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Comprobación del patrón base',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Trazo de bitácora de formas. ',
      referencia:
        'Aprende y Emprende. (2022, 3 de diciembre). Clase 1: Toma de medidas – Patronaje femenino paso a paso.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ppEdTvy94eU&t=1102s',
    },
    {
      tema: 'Técnicas de achurados y acabados de la prenda',
      referencia:
        'Aprende y Emprende. (2022, 4 de diciembre). Clase 2: Trazo del patrón delantero – Patronaje femenino paso a paso.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Di4R3jHoNkQ',
    },
    {
      tema: 'Reconocimientos de las prendas',
      referencia:
        'Aprende y Emprende. (2022, 6 de diciembre). Clase 3: Trazo del patrón posterior – Patronaje femenino paso a paso. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FHhqkd0h4Kw',
    },
  ],
  glosario: [
    {
      termino: 'Estándar',
      significado:
        'sirve de patrón, modelo o punto de referencia para medir o valorar cosas de la misma especie.',
    },
    {
      termino: 'Talla',
      significado:
        'expresión normalizada que permite identificar a las personas para el uso de prendas de vestir.',
    },
    {
      termino: 'Trazo de un plano',
      significado:
        'en lo referente al oficio del patronista, el trazo de un plano hace referencia a la estructura de los patrones básicos que posteriormente se convertirán en moldes.',
    },
    {
      termino: 'Patronaje',
      significado:
        'oficio dedicado a la creación de patrones en la línea de vestuario que permitan la construcción de prendas de vestir.',
    },
    {
      termino: 'Molde',
      significado:
        'termino usado en el patronaje para señalar que después del trazo de planos se llegan a abstraer los elementos que permiten proceder con el corte del textil.',
    },
    {
      termino: 'Cabeza de manga',
      significado:
        'curvatura superior de la manga que se adapta a la sisa. su altura varía según el tipo de prenda y afecta el movimiento y estructura.',
    },
    {
      termino: 'Crecimiento de talla',
      significado:
        'incremento aplicado a un patrón para generar tallas superiores a partir de una base, manteniendo proporciones anatómicas.',
    },
    {
      termino: 'Diferencia de talla',
      significado:
        'valor numérico que indica la variación entre tallas en una medida específica, base para calcular proporciones de escalado.',
    },
    {
      termino: 'Escalado',
      significado:
        'técnica que permite aumentar o reducir un patrón base para obtener múltiples tallas manteniendo forma y ajuste.',
    },
    {
      termino: 'Plano',
      significado:
        'superficie gráfica compuesta por ejes x e y que se usa para ubicar puntos y aplicar proporciones en el trazo y escalado de patrones.',
    },
    {
      termino: 'Proporción',
      significado:
        'unidad de medida que representa el crecimiento o reducción aplicado a un punto del patrón según el tipo de plano.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldrich, W. (2008). Metric pattern cutting for womens wear (5th ed.). Wiley-Blackwell.',
      link: '',
    },
    {
      referencia:
        'Hall, S. J. (2021). Basic biomechanics (9th ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Norton, K. (2019). Anthropometry and biomechanics: Foundations for human movement analysis. Routledge.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (1995). El estado físico: uso e interpretación de la antropometría.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. SENA. (2011). Manual de patronaje básico e interpretación de diseños. Centro de Manufactura en Textiles y Cuero, Regional Distrito Capital.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. SENA. (2020). Equipo de diseño curricular. Técnico en patronaje industrial de prendas de vestir.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. SENA. (2021). Equipo de diseño curricular.  Técnico en Elaboración de prendas de vestir sobre medidas. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez ',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrolladora <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
