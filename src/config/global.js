export default {
  global: {
    componenteFormativo:
      'Simulación clínica, enseñanza y aprendizaje en el proceso de formación',
    descripcionCurso:
      'El reconocimiento del nacimiento u origen de la simulación y sus beneficios, los cuales se encuentran en las diferentes áreas de la salud, permite desarrollar estrategias para enfrentar los problemas encontrados en eventos clínicos derivados de la creciente demanda de la formación práctica, por medio de ambientes que imitan la realidad y la orientación requerida y ofrecida por el instructor.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
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
        titulo: 'Historia de la simulación clínica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de simulación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '¿Qué es simulación clínica?',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Teorías de la simulación clínica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Teoría social cognitiva (Bandura)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Teoría de carga cognitiva (Sweller)',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Etapas para el aprendizaje',
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
      tema: 'Concepto de simulación',
      referencia:
        'Agency for Healthcare, Research and Quality [AHRQ]. (2016). <em>Diccionario de Simulación en Salud.</em> Fundación Garrahan.',
      tipo: 'PDF',
      link:
        'http://medicina.uach.cl/wp-content/uploads/2020/08/diccionario_simulacion_spanish_v1_0.pdf',
    },
    {
      tema: '¿Qué es simulación clínica?',
      referencia:
        'Universidad Tecnológica de Pereira. (2021). <em>Laboratorio de simulación clínica UTP</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E6Y5hZAj4To',
    },
    {
      tema: '¿Qué es simulación clínica?',
      referencia:
        'UIC Barcelona. (2016). <em>Centro Integral de Simulación Avanzada | UIC Barcelona</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XnaTqRjuKC4',
    },
    {
      tema: 'Teorías de la simulación clínica',
      referencia:
        'Armijo, S. (2021). <em>Teorías para la inserción curricular de la Simulación Clínica.</em> Universidad del Desarrollo.',
      tipo: 'PDF',
      link:
        'https://medicina.udd.cl/files/2021/05/C3-Teorias-para-insercion-curricular-de-simulacion-clinica.pdf',
    },
    {
      tema: 'Etapas para el aprendizaje',
      referencia:
        'Departamento de Integración de Ciencias Médicas. (2020). <em>Etapas de la Simulación Clínica</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5Nng3DX3fTY',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'proceso a través del cual el comportamiento y la conducta son alterados o desarrollados por medio de la práctica y la experiencia.',
    },
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover y mantener la salud.',
    },
    {
      termino: 'Escenario',
      significado:
        'descripción de simulación que incluye metas, objetivos, puntos de debriefing, descripción narrativa de la simulación clínica, requisitos de personal, configuración de la sala de simulación, simuladores, operación del simulador e instrucciones.',
    },
    {
      termino: 'Escenario clínico',
      significado:
        'plan esperado del potencial desarrollo de eventos en una experiencia clínica simulada. Incluye el contexto para la simulación (salas hospitalarias, salas de urgencias, reanimación, consultorios, etc.).',
    },
    {
      termino: 'Fidelidad',
      significado:
        'grado en que la simulación replica el evento real y/o lugar de trabajo. Esto incluye elementos físicos, psicológicos y ambientales.',
    },
    {
      termino: 'Guía en simulación',
      significado:
        'una recomendación sobre las cualidades para la fidelidad en simulación, la validez en simulación, el programa de simulación o la evaluación formativa o sumativa.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de procedimientos que siguen en una investigación científica, estudio o una exposición doctrinal.',
    },
    {
      termino: 'Modalidad',
      significado:
        'referente al o los tipos de simulación que se usan como parte de la actividad de simulación, por ejemplo, entrenadores de habilidades, simulación basada en maniquí, computadoras, realidad virtual, etc.',
    },
    {
      termino: 'Modelo interactivo',
      significado:
        'simulador de situación, práctica o conjunto de acciones que varía de acuerdo con la participación humana.',
    },
    {
      termino: 'Realidad Virtual',
      significado:
        'uso de la tecnología informática para crear un mundo tridimensional interactivo en el que los objetos tienen una sensación de presencia espacial; ambiente/entorno virtual y mundo virtual son sinónimos de realidad virtual.',
    },
    {
      termino: 'Simulación',
      significado:
        'proviene del latín simulare, y significa "representar algo, fingiendo o imitando lo que no es".',
    },
    {
      termino: 'Simulación en salud',
      significado:
        'técnica que crea una situación o ambiente para permitir que las personas experimenten una representación de un evento de atención en salud real, con el propósito de practicar, aprender y evaluar.',
    },
    {
      termino: 'Riesgo',
      significado: 'contingencia o proximidad de un daño o peligro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrade-Lotero, L. (2012). Teoría de la carga cognitiva, diseño multimedia y aprendizaje: un estado del arte. <em>Magis. Revista Internacional de Investigación en Educación</em>, 5(10), p. 75-92.',
      link: 'https://www.redalyc.org/pdf/2810/281024896005.pdf',
    },
    {
      referencia:
        'Armijo, S. (2021). <em>Teorías para la inserción curricular de la Simulación Clínica.</em> Universidad del Desarrollo.',
      link:
        'https://medicina.udd.cl/files/2021/05/C3-Teorias-para-insercion-curricular-de-simulacion-clinica.pdf',
    },
    {
      referencia:
        'Cabacas, T. (2013). <em>Historia del fórceps de Obstetricia.</em> Blog de Tomás Cabacas.',
      link: 'http://tomascabacas.com/historia-del-forceps-de-obstetricia/',
    },
    {
      referencia:
        'Comunidad FacMed. (2020). SIMex 2020: <em>Acreditación y certificación en simulación clínica para la seguridad del paciente.</em> Gaceta Facultad de Medicina.',
      link:
        'https://gaceta.facmed.unam.mx/index.php/2020/11/23/simex-2020-acreditacion-y-certificacion-en-simulacion-clinica-para-la-seguridad-del-paciente/',
    },
    {
      referencia:
        'Dieckmann, P. (s. f.). <em>Simulation is more than Technology - The Simulation Setting.</em> Danish Institute for Medical Simulation.',
      link:
        'https://laerdalcdn.blob.core.windows.net/downloads/f1199/AEVMXBWM/Simulation-is-spreading-around-the-world---FINAL-WEB-Version-LA-Brazil.pdf',
    },
    {
      referencia:
        'Digital Museums Canada. (s. f.). <em>Mrs. Chase: A Model Patient.</em> Community Stories.',
      link:
        'https://www.communitystories.ca/v2/womens-college-nursing_ecole-infirmieres-womens-college/story/the-preclinical-term-the-probies/',
    },
    {
      referencia:
        'Grange, J. (2013). <em>El encanto de la mujer más besada de la historia.</em> BBC News Mundo.',
      link:
        'https://www.bbc.com/mundo/noticias/2013/10/131023_mujer_besada_resusci_anne_finde',
    },
    {
      referencia: 'Herrejón, P. (s. f.). <em>Simulación.</em> Timetoast.',
      link:
        'https://www.timetoast.com/timelines/simulacion-01d9262b-e5a0-4c49-b4ef-14c01071d343',
    },
    {
      referencia:
        'Neri-Vela, R. (2017). <em>El origen del uso de simuladores en Medicina.</em> Primer Encuentro Internacional de Simulación | Simex 2017.',
      link: 'https://www.medigraphic.com/pdfs/facmed/un-2017/uns171c.pdf',
    },
    {
      referencia:
        'Psiqueviva. (s. f.). <em>Teoría cognitivo-social de Albert Bandura./em>',
      link: 'https://psiqueviva.com/teoria-cognitivo-social-de-albert-bandura/',
    },
    {
      referencia:
        'Puga, M. y Torres, C. (2014). Perspectiva Andragógica de la Simulación Clínica. <em>Revista Ciencia Unemi</em>, 7(12), p. 37-46.',
      link: 'https://www.redalyc.org/pdf/5826/582663859006.pdf',
    },
    {
      referencia:
        'Rodríguez, D. (2021). <em>Definición de Simulación.</em> ConceptoDefinición.',
      link: 'https://conceptodefinicion.de/simulacion/',
    },
    {
      referencia:
        'Smith, C. y Peng, Y. (2021). La evolución y el papel de la simulación en la enseñanza de la medicina. <em>APSF Boletín Informativo</em>, 4(2), p. 85-87.',
      link:
        'https://www.apsf.org/es/article/la-evolucion-y-el-papel-de-la-simulacion-en-la-ensenanza-de-la-medicina/',
    },
    {
      referencia:
        'Universidad Manuela Beltrán. (s. f.). <em>La Cámara de Gesell.</em>',
      link: 'https://umb.edu.co/programa/camara-de-gesell/',
    },
    {
      referencia:
        'Vigotsky, L. (1978). <em>El desarrollo de los procesos psicológicos superiores.</em> Editorial Crítica.',
      link:
        'https://www.bibliopsi.org/docs/carreras/obligatorias/CFP/educacional/erausquin/Unidad%202/Vigotsky%20-%20el%20desarrollo%20de%20los%20p.%20cap%204.pdf',
    },
    {
      referencia:
        'Zeigen Microscopios. (2021). <em>Los simuladores médicos: ¿Cuál es su historia?</em> Zeigen.',
      link:
        'https://www.zeigenmx.com/los-simuladores-m%C3%A9dicos-cu%C3%A1l-es-su-historia',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
