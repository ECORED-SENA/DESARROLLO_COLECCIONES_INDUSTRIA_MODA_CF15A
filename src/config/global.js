export default {
  global: {
    componenteFormativo: 'Taller básico de máquinas',
    descripcionCurso:
      'Debido a las tendencias, la globalización y competitividad de las empresas, se ha incrementado la demanda de prendas de vestir, lo que genera la necesidad de personal con competencias técnicas en mecánica de confección industrial, enfocados en ejecutar labores cada vez más integrales dentro de la empresa, de tal manera que aporten al aumento de la productividad dando respuesta oportuna y eficaz a las necesidades de tipo técnico y de costura, optimizando sus equipos, procesos y recursos en la solución de problemas y necesidades del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Fundamentos básicos para aprender el manejo de máquinas de confección',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de máquinas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La máquina y sus partes: ajustes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Generaciones de máquinas: primera, segunda, tercera, ultrasonido',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Concepto de eslabones de confección',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Actividades básicas manejo de máquinas de confección',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        'COATS. (s. f.). Seleccionando los Hilos de Coser | Guía - Coats.',
      link:
        'https://coats.com/es/information-hub/Selecting-Your-Sewing-Threads',
    },
    {
      referencia: 'Colombia S.A. (1982). Las puntadas. SENA',
      link: 'https://repositorio.sena.edu.co/handle/11404/3998',
    },
    {
      referencia:
        'Importaciones Santafe. (s. f.). Importaciones Santafe - Tienda.',
      link: 'https://www.sewking.com.co/tienda/',
    },
    {
      referencia:
        'P. (2020, 16 septiembre). 4 problemas con tu máquina de coser relacionados con la tensión del hilo y cómo resolverlos. Ulalatela.',
      link: 'https://www.ulalatela.com/2016/09/23/resolver-problemas-tension/',
    },
    {
      referencia:
        'Pachkevitch, S. (2019, 17 noviembre). 5 principales tipos de costuras. Coser es un placer.',
      link: 'https://coseresunplacer.com/principales-tipos-de-costuras/',
    },
    {
      referencia: 'PEGASUS. (2007). W1500N Quick Guide.',
      link:
        'https://irp-cdn.multiscreensite.com/f88f9a97//files/uploaded/image1d61.pdf',
    },
    {
      referencia: 'PEGASUS. (2015). W3000P Series Quick Guide.',
      link:
        'https://irp-cdn.multiscreensite.com/f88f9a97/files/uploaded/PEGASUS%20W3600P%20%281%29.pdf',
    },
    {
      referencia:
        'Profe Suescún. (2020, 8 mayo). Ajuste de máquina plana | Analizando repuestos [Vídeo]. YouTube',
      link: 'https://youtu.be/rbhZjRQwRsg',
    },
    {
      referencia:
        'S. (2012, 19 abril). Los diferentes tipos de puntada. Máquinas de coser.',
      link:
        'http://lasmaquinasdecoser.blogspot.com/2012/04/los-diferentes-tipos-de-puntada.html',
    },
    {
      referencia:
        'SENA. (s.f). Modistería. La máquina de coser. Módulo básico. Unidad 1.',
      link:
        'https://repositorio.sena.edu.co/sitios/modisteria_conocimientos_basicos/hilos_maquina/maquina_coser.html#',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste',
      significado:
        'Elementos mecánicos que se ajustan a cada tipo de material o tejido, bien sea liviano, semipesado o pesado.',
    },
    {
      termino: 'Alimentación o transporte',
      significado:
        'En la maquinaria de confección, se refiere al desplazamiento del material a coser.',
    },
    {
      termino: 'Barra de aguja',
      significado:
        'Elemento mecánico. Su movimiento es rectilíneo vertical, sostiene la aguja en posición.',
    },
    {
      termino: 'Barra prensatela',
      significado:
        'Elemento mecánico. Barra que sujeta el prensatela o pie de la máquina.',
    },
    {
      termino: 'Calibre de aguja',
      significado: 'Es el que determina el tipo o grosor del material a coser.',
    },
    {
      termino: 'Corchete',
      significado:
        'Elemento mecánico utilizado para producir la puntada de cadeneta a un hilo.',
    },
    {
      termino: 'Costura',
      significado: 'Unión de dos o más materiales o tejidos.',
    },
    {
      termino: 'Diente',
      significado:
        'Este dispositivo mecánico es el encargado de desplazar el material a coser.',
    },
    {
      termino: 'Extensor',
      significado:
        'Elemento mecánico utilizado, la mayoría de las veces, como auxiliar de los looper, corchetes para formar la puntada.',
    },
    {
      termino: 'Gancho rotatorio',
      significado:
        'Elemento mecánico que, junto con la aguja, sirve para formar la puntada, dando revoluciones completas.',
    },
    {
      termino: 'Guía hilos',
      significado:
        'Elemento mecánico que sirve para guiar el hilo durante todo su recorrido.',
    },
    {
      termino: 'Lanzadera',
      significado:
        'Elemento mecánico que, junto con la aguja, sirve para formar la puntada, su movimiento es oscilatorio.',
    },
    {
      termino: 'Looper',
      significado:
        'Elemento mecánico que tiene hilo propio, o sea, se puede enhebrar como las agujas, es decir, tiene ojo.',
    },
    {
      termino: 'Máquinas familiares o domésticas',
      significado:
        'Máquinas que poseen una versatilidad para realizar diferentes tipos de puntadas decorativas, pero no tienen las características para tener un rendimiento óptimo en la industria.',
    },
    {
      termino: 'Máquinas semi-industriales',
      significado:
        'Máquinas cuyas características se acercan más a la industria, pero todavía no alcanzan el rendimiento productivo.',
    },
    {
      termino: 'Máquinas industriales',
      significado:
        'Máquinas con rendimiento productivo, calidad, optimización de recursos, en todas las líneas de producción.',
    },
    {
      termino: 'Máquinas de ciclo',
      significado:
        'Máquinas construidas para cumplir una función específica en un ciclo, como hacer un ojal, pegar un botón o un aplique, hacer una presilla, entre otras. En este tipo de máquina, el operador solo tiene que ubicar el material, accionar un mando y la máquina, en un ciclo, realiza la operación.',
    },
    {
      termino: 'Mercerizado',
      significado:
        'Es un acabado que se le da al hilo, consistente en bañarlo en una solución de soda cáustica, con la intención de dotarlo de brillo, suavidad y resistencia.',
    },
    {
      termino: 'Palanca tira hilo',
      significado:
        'Mecanismo que permite la cantidad de hilo justa de la aguja desde su suministro. Suelta la cantidad necesaria para la formación de la puntada y saca el hilo sobrante para fijar las puntadas.',
    },
    {
      termino: 'Planchuela',
      significado:
        'Elemento mecánico que sirve de apoyo al material cuando el diente se encuentra regresando.',
    },
    {
      termino: 'Poliéster',
      significado:
        'La fibra que va por el centro o es el núcleo del hilo. Aporta elasticidad, es decir, la capacidad de aumentar considerablemente su dimensión sin romperse.',
    },
    {
      termino: 'Prensatelas',
      significado:
        'Elemento mecánico encargado de apoyar el material contra el diente para que pueda ser transportado.',
    },
    {
      termino: 'Punta de aguja',
      significado:
        'Determina el tipo de tejido a coser, desde el más fino hasta el más pesado.',
    },
    {
      termino: 'Puntada',
      significado: 'Entrelazamiento de uno o más hilos',
    },
    {
      termino: 'Recubridor',
      significado:
        'Elemento mecánico que, sin llevar ojo guía para el hilo, sí lleva hilo, el cual extiende sobre la tela superior al formar la puntada de cadeneta con recubridor.',
    },
    {
      termino: 'Regulador de puntada',
      significado:
        'Elemento mecánico que regula el tamaño de la puntada. Mientras menor es el número, más pequeña es la puntada.',
    },
    {
      termino: 'Tensores',
      significado:
        'Mecanismo que tiene como función regular la tensión del hilo de la aguja y controlar la alimentación del hilo para la formación de la puntada.',
    },
    {
      termino: 'Tejido',
      significado: 'Una tela. Es una estructura formada por fibras textiles.',
    },
    {
      termino: 'Tejido plano',
      significado:
        'Se define como la forma de entrelazar dos hilos normalmente formando un ángulo recto. Uno de los hilos es la urdimbre y el otro es la trama.',
    },
    {
      termino: 'Tejido de punto',
      significado:
        'Se define como la forma de entrelazar por mallas, bucles o puntos.',
    },
    {
      termino: 'Tomador de lazada',
      significado:
        'Elemento mecánico que, junto con la aguja, se encarga de formar la puntada.',
    },
    {
      termino: 'Tornillo regulador presión prensatelas',
      significado:
        'Elemento mecánico que sirve para regular la presión que hay entre el prensatelas y la alimentación.',
    },
    {
      termino: 'Sistema o referencia de aguja',
      significado: 'Indica la aguja que se necesita para el tipo de máquina.',
    },
  ],
  complementario: [
    {
      texto:
        'Profe Suescún. (2020, 8 mayo). Ajuste de máquina plana | Analizando repuestos [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/rbhZjRQwRsg',
    },
    {
      texto: 'Colombia S.A. (1982). Las puntadas. SENA.',
      tipo: 'PDF',
      descarga: '/downloads/CF15_A_3978_las puntadas.pdf',
    },
    {
      texto: 'PEGASUS. (2007). W1500N Quick Guide.',
      tipo: 'PDF',
      descarga: '/downloads/CF15_A_image1d61.pdf',
    },
    {
      texto:
        'SENA. (s.f). Modistería. La máquina de coser. Módulo básico. Unidad 1.',
      tipo: 'PDF',
      descarga: '/downloads/CF15_A_maquina_coser.pdf',
    },
    {
      texto: 'PEGASUS. (2015). W3000P Series Quick Guide. ',
      tipo: 'PDF',
      descarga: '/downloads/CF15_A_PEGASUS W3600P (1).pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Alexander Durango',
        cargo: 'Instructor',
        centro: 'Centro de diseño confección y moda, Itagüí, Antioquia.',
      },
      {
        nombre: 'María Luisa Yepes Sierra',
        cargo: 'Instructora',
        centro: 'Centro de diseño confección y moda, Itagüí, Antioquia.',
      },
      {
        nombre: 'Marisol Osorio Beltrán',
        cargo: 'Líder Sennova',
        centro: 'Centro de diseño confección y moda, Itagüí, Antioquia.',
      },
      {
        nombre: 'Jhon Fernando Jaramillo Taborda',
        cargo: 'Investigador – Grupo de investigación INAMOD',
        centro: 'Centro de diseño confección y moda, Itagüí, Antioquia.',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
