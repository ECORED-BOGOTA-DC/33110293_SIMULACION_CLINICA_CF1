<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Historia de la simulación clínica 
    
    p.mb-5(data-aos="fade-right") Los momentos históricos atribuidos a la simulación aplicada a las ciencias de la salud han venido evolucionando con cambios y adelantos representativos y favorables para este importante sector. Existe un importante antecedente en el área general situado en la década de los veinte del siglo pasado, por el ingeniero Edwin Albert Link, quien, para el año de 1929, desarrolló simuladores de vuelo con el fin de darle entrenamiento a los pilotos en la comercialización del llamado Blue Box o Link Trainer. 
    
    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 1
          p.mb-0.text-small Simulador Link Trainer
        .col-lg-10.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-1.jpg" style="max-width: 878px" data-aos="fade-left" alt="Muestra el Simulador Link Trainer")
          span.text-small Fuente Nasflmuseum (2010).
    
    p.mb-5(data-aos="fade-right") En la siguiente línea de tiempo, es posible apreciar la evolución de la simulación antes de iniciar con los primeros modelos aplicados en la ciencia clínica:
    
    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;" data-aos="fade-left")
      h4 Línea de tiempo
      LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
    
    p.mb-5(data-aos="fade-right") La simulación es una técnica que, en su evolución y desde su nacimiento, permite de manera amplia y real llegar a experimentar de una u otra manera aspectos claves de eventos y escenarios reales de una manera interactiva. En las ciencias de la salud, la historia se remonta a los primeros simuladores, los cuales no eran tan tecnológicos como ahora, sino, más bien, se conformaban por modelos de seres humanos elaborados en barro y piedra, los cuales se caracterizaban por tener rasgos clínicos de patologías y sus signos en el hombre. Las diferentes culturas presentaban distintos simuladores, a los cuales tenía acceso cada médico con el fin de diagnosticar, en muchos casos, a mujeres, pues muchas sociedades, y a razón de la moral, tenían prohibiciones a la exposición de ciertas partes del cuerpo humano. 

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 2
          p.mb-0.text-small Antiguos modelos de arcilla
        .col-lg-6.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-5.jpg" style="max-width: 602px" data-aos="fade-left" alt="Muestra los Antiguos modelos de arcilla.")
          span.text-small Smith y Peng (2021).
        
    p.mb-5(data-aos="fade-right") A continuación, se presentan los principales hechos para la simulación clínica en el mundo:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      h4 Línea de tiempo
      LineaTiempoD.color-secundario.col-xl-9.mx-auto
        .d-flex.flex-wrap(numero="1" titulo="Edad media")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-1.jpg" style="max-width: 295px" data-aos="fade-right" alt="imagen ilustrativa para la edad media")
          p.col-12.col-lg.ps-md-3(data-aos="fade-left") En esta época, se hacía uso de animales, los cuales se empleaban para el entrenamiento y el desarrollo de habilidades quirúrgicas en los procesos de enseñanza en medicina.
        .d-flex.flex-wrap(numero="2" titulo="Siglo III a.C.")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-2.jpg" style="max-width: 295px" alt="imagen ilustrativa para Siglo III a.C.")
          p.col-12.col-lg.ps-md-3 En India, el uso del melón fue recomendado para el aprendizaje de incisiones por el médico Súsruta, e igual se usaba una muñeca de lino de tamaño natural en la aplicación de vendajes. (Medigraphic, 2017).

        .d-flex.flex-wrap(numero="3" titulo="Siglo XVIII")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-3.jpg" style="max-width: 295px" alt="imagen ilustrativa para Siglo XVIII")
          p.col-12.col-lg.ps-md-3 Se desarrolla un maniquí para obstetricia por Grégoire padre e hijo, elaborado con una pelvis humana y un niño fallecido (Timetoast,. 2022).
            br
            |Este maniquí, fue habilitado para los profesionales en obstetricia en los procesos de enseñanza y aprendizaje aplicados como técnicas en el nacimiento, reduciendo las tasas de mortalidad materno infantil.

        .d-flex.flex-wrap(numero="4" titulo="1960")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-4.jpg" style="max-width: 295px" alt="imagen ilustrativa para el año 1960")
          .col-12.col-lg.ps-md-3
            p Primer momento trascendental: con la propuesta encontrada en la obra de Asmund Laerdal, quien con un grupo de médicos de especialidad en anestesiología y en conjunto con una fábrica de juguetes, desarrollaron el primer modelo de reanimación cardiopulmonar, nombrado: Resusci Anne. (BBC, 2013)
            a(href="https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2013/10/23/131023154936_besada_grande.jpg" target="_blank" style="overflow-wrap: anywhere") https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2013/10/23/131023154936_besada_grande.jpg

        .d-flex.flex-wrap(numero="5" titulo="Década de los 70")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-5.jpg" style="max-width: 295px" alt="imagen ilustrativa para Década de los 70")
          p.col-12.col-lg.ps-md-3 “Abrahamson y Denson desarrollan el simulador SimOne, con la Universidad de Harvard, este simulador contaba con características que lo harían único, al presentar ruidos respiratorios y cardíacos, pulso carotídeo, temporal, que daban respuesta fisiológica a las maniobras aplicadas en tiempo real, usando programas desde un sistema de computo” (Zeigen, 2021).

        .d-flex.flex-wrap(numero="6" titulo="Desde los años 70")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-6.jpg" style="max-width: 295px" alt="imagen ilustrativa para los años 70")
          p.col-12.col-lg.ps-md-3 Para la especialidad en oftalmología, se ha encontrado el uso de ojos esquemáticos para el aprendizaje con la exploración del ojo, está aplicada no solo en oftalmoscopia directa sino también, en la indirecta.

        .d-flex.flex-wrap(numero="7" titulo="Siglo XIX")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-7.jpg" style="max-width: 295px" alt="imagen ilustrativa para Siglo XIX")
          .col-12.col-lg.ps-md-3
            p “Una de las especialidades con mayor número de simuladores, es la obstetricia, sus procedimientos, como: amniocentesis bajo ultrasonografía, los fórceps, la distocia de hombros, atención de emergencias obstétricas y trauma, son claros ejemplos en la historia; además, de la evolución marcada en la actualidad” (Cabacas, 2013).
            a(href="http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg " target="_blank" style="overflow-wrap: anywhere") http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg 

        .d-flex.flex-wrap(numero="8" titulo="Mediados de los 80")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-8.jpg" style="max-width: 295px" alt="imagen ilustrativa para los 80")
          p.col-12.col-lg.ps-md-3 Investigadores de las Universidades de Stanford y de Florida, de manera independiente, iniciaron con el trabajo de la nueva generación de maniquíes como simuladores de pacientes a los cuales denominan Stanford CASE (Comprehensive Anaesthesia Simulation Environment), siendo el primer recurso que se comercializara en ese entonces.

        .d-flex.flex-wrap(numero="9" titulo="En los años 90")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-9.jpg" style="max-width: 295px" alt="imagen ilustrativa para los 90")
          .col-12.col-lg.ps-md-3
            p En Europa, también por la rama de anestesiología, se investiga en el área de la simulación, con el fin de desarrollar simuladores más sofisticados que los encontrados en Estados Unidos, consiguiendo destacar el simulador de anestesia de Leiden, PAT Sim, y el simulador de anestesia SOPHUS.
            a(href="http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg " target="_blank" style="overflow-wrap: anywhere") http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg 

        .d-flex.flex-wrap(numero="10" titulo="Años 90")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-10.jpg" style="max-width: 295px" alt="imagen ilustrativa para el año 90")
          p.col-12.col-lg.ps-md-3 La simulación virtual continuaba sus estudios, ahora en el campo quirúrgico con el desarrollo del dextroscopio, siendo un prototipo que, a través del uso de un espejo, reflejaba la imagen de un monitor, usando los anteojos estereoscópicos que formaban una imagen tridimensional y que era combinado con el <em>software</em> llamado VizDexter.

        .d-flex.flex-wrap(numero="11" titulo="1999")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-11.jpg" style="max-width: 295px" alt="imagen ilustrativa para el año 1999")
          p.col-12.col-lg.ps-md-3 En Estados Unidos, el gobierno de la década se vio en la tarea de ordenar un comité que vigilara la calidad del médico tratante, debido a los problemas encontrados en las antiguas prácticas de las ciencias de la salud, que llevaron a encontrar múltiples errores, los cuales dejaban muertes inesperadas de seres humanos.

        .d-flex.flex-wrap(numero="12" titulo="A principios del siglo XXI")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-12.jpg" style="max-width: 295px" alt="imagen ilustrativa para siglo XXI")
          p.col-12.col-lg.ps-md-3 Nace el primer maniquí llamado Mrs. Chase, en Connecticut, del Hospital Hartford, por solicitud de una enfermera que laboraba para una escuela de formación, el cual fue usado en las prácticas clínicas. Las características de este simulador estaban marcadas por el tamaño de un adulto, además, su parecido al ser humano le daba mucho realismo y estaba constituido por materiales resistentes que lo mantenían en condiciones adecuadas. 

        .d-flex.flex-wrap(numero="13" titulo="2001")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-13.jpg" style="max-width: 295px" alt="imagen ilustrativa para el año 2001")
          p.col-12.col-lg.ps-md-3 En Israel se funda el Centro de Simulación Médica, “Center for Medical Simulation”, reconocido como líder internacional en los campos de la simulación médica y la capacitación continua en seguridad del paciente.

        .d-flex.flex-wrap(numero="14" titulo="2004")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-14.jpg" style="max-width: 295px" alt="imagen ilustrativa para el año 2004")
          p.col-12.col-lg.ps-md-3 El Centro de Desarrollo de Destrezas Médicas (CEDDEM) y el Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán” inauguran formalmente el primer centro de sus características en América Latina; presenta un enfoque multidisciplinario, el cual, para las ramas de la medicina, se convertiría en un avance para las ciencias de la salud. (INCMNSZ, 2011).

        .d-flex.flex-wrap(numero="15" titulo="2019")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-15.jpg" style="max-width: 295px" alt="imagen ilustrativa para el año 2004")
          p.col-12.col-lg.ps-md-3 Alemania crea el simulador NeuroSim, simulador virtual que permite las intervenciones quirúrgicas donde se requiere abrir el cerebro humano, e incluso el manejo con “clipaje” para aneurismas.

    p.mb-5(data-aos="fade-right") La transformación en procesos educativos a nivel mundial es el pilar de la innovación hacia las nuevas estrategias que permiten que, por medio de la tecnología y aplicación de sistemas de información, la enseñanza sea más eficaz cuando se busca el aprendizaje en habilidades y destrezas clínicas; también, de la comunicación, el entrenamiento y la formación en las diferentes instituciones en ciencias de la salud, las cuales están continuamente en cambio y requieren seguir en la búsqueda de fortalecer su experiencia en escenarios y eventos médicos.

    p.mb-5(data-aos="fade-right") Hay un avance en el gran crecimiento encontrado en el desarrollo de los simuladores clínicos, evidenciado en las ramas de especialidades médicas que realizan actividades simuladas con métodos para examen propios, como:

    ul.mb-5
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Técnicas de venopunción.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Cateterismo vesical.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Oftalmoscopia.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Tacto rectal, entre otros procedimientos.

    
    p.mb-5(data-aos="fade-right") La siguiente figura expone un ejemplo de un ejercicio de venopunción:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 3
          p.mb-0.text-small Simulador para venopunción.
        .col-lg-11.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-6.jpg" style="max-width: 925px" data-aos="fade-left" alt="Expone un ejemplo de un ejercicio de venopunción")
          span.text-small Meri-Vela (2017).
    .d-flex.flex-wrap.mb-5
      .col-lg-6.me-lg-4
        p.mb-4(data-aos="fade-right") Un hecho importante, generado por el uso de simuladores y experiencias afines, permite la aparición de “la bioética” y, desde su disciplina, ha establecido que la simulación debe ser aplicada con el fin educativo y que garantice la seguridad de cada ser humano, denominado paciente.
        .cajon.color-acento-contenido.p-4.mb-4
          p(data-aos="fade-right") Desde ese momento, se proponen postulados con la necesidad de integrar en la formación de las ciencias de la salud la enseñanza y los conceptos de seguridad para el paciente.
      img.col-lg-5(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 505px" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") En la historia de la simulación clínica, la enfermería desarrolló uno de los primeros espacios simulados, el cual fue llamado "salas de arte", en estas se propició mejorar los procesos de aprendizaje de los estudiantes de enfermería. Estos lugares servían como sitios de entrenamiento y apropiación de conocimientos, en los que, además, se integraban algunos equipos médicos, con el fin de, una vez desarrolladas las habilidades y las destrezas de los aprendices, aplicarlas en la atención segura de pacientes. 

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 4
          p.mb-0.text-small Simulador de enfermería
        .col-lg-8.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-8.jpg" style="max-width: 820px" data-aos="fade-left" alt="Muestra simulador de enfermería, cuatro enfermeras con un maniquí.")
          span.text-small Digital Museums Canada (s. f.). 

    p.mb-5(data-aos="fade-right") Las actividades encontradas en la práctica de la enfermería estaban conformadas por cambios de posición de acuerdo con la condición clínica de la persona, esto con el objetivo de apoyar casos con limitación o pérdida de extremidades, brindando el apoyo con el uso de sillas o elementos para el movimiento en cama o aquellos que se requerían para evitar lesiones secundarias por la incapacidad de movimiento, higiene, toma de constantes vitales, entre otras. 
      br
      br
      |El entrenamiento recibido por medio de esta experiencia previa daba como resultado el desarrollo y fortalecimiento de habilidades técnicas y la apropiación de conocimientos para el adecuado manejo de equipos, así como la aplicación de técnicas necesarias en el acompañamiento de las actividades de la vida diaria del paciente ejecutados en las acciones propias de la enfermería y sus cuidados.

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5.img-text-edit
      .container-bg.col-12.col-xl-9.order-2.order-xl-1
        p(data-aos="fade-right") No hay una manera de comparar las prácticas realizadas y mencionadas anteriormente frente a lo que es hoy en día la simulación clínica, pero, sin duda, hacen parte de su evolución como un valioso antecedente que permite el análisis, promoción y solución frente a las necesidades que se presentan como riesgo al paciente. En la actualidad, se siguen generando estrategias de seguridad a los usuarios, y es un objetivo vigente, el cual debe ser garantizado por toda institución de salud.
      img.col-xl-5.order-1.order-xl-2.img-maxwidth-movil-1(src="@/assets/curso/temas/tema1/img-9.png")

    p.mb-5(data-aos="fade-right") Algunos usos de la simulación clínica que han venido evolucionando a través del tiempo, permitiendo la mejora y optimización de su función, se presentan en áreas especializadas como:

    .tarjeta.p-4.mb-5(style="background-color: #EDFAFF")
      PasosB.color-acento-botones
        .row.col-lg-10.mx-auto(titulo="En procesos previos <br> para  neurocirugía")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/ltc-1.jpg')
          .col-md-6.mb-4.mb-md-0.ms-md-auto(data-aos="fade-left")
            p En neurocirugía, la simulación por medio de la virtualización se vio enriquecida con el uso de imágenes diagnósticas por medio de la tomografía computarizada (TC) y la imagen en resonancia magnética, permitiendo la creación de modelos con imágenes de doble dimensión, utilizados en navegación intraoperatoria y cirugía estereotáctica, creando modelos interactivos tridimensionales con gran realismo, los cuales, en simulación aplicada a la neurocirugía, posibilitan la navegación en la comprensión de la compleja anatomía del cráneo, de la base y de los contenidos que lo conforman. 
        .row.col-lg-10.mx-auto(titulo="Para intervenciones <br> de neurocirugía ")
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/ltc-2.jpg')
          .col-md-6.mb-4.mb-md-0.ms-md-auto
            p El modelo virtual llamado Temporal Bone inicialmente, y luego de seguir con las pruebas, se desarrolla el modelo ROBO – SIM, seguido del NEUROBOT, usado en cirugías realizadas en vivo. Los adelantos mencionados en neurocirugía han ido evolucionando, tanto así que generaron más seguridad en el “clipaje” para tratar aneurismas, también la descompresión microvascular, tratamiento con cirugía para tumores, procedimientos endovasculares e instrumentación espinal.  
        .row.col-lg-10.mx-auto(titulo="Para el <br>área de <br>ventriculostomía")
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/ltc-3.jpg')
          .col-md-6.mb-4.mb-md-0.ms-md-auto
            p Los modelos virtuales, intentando superar la limitada interacción sensorial, desarrollan el ImmersiveTouch para la ventriculostomía, método que, como entrenamiento, permitía al profesional experimentar una sensación táctil recreando la percepción de circulación, “pulso propio”, como si el catéter entrara en el revestimiento ventricular del epéndimo.
        .row.col-lg-10.mx-auto(titulo="Para microcirugía")
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/ltc-4.jpg')
          .col-md-6.mb-4.mb-md-0.ms-md-auto
            p El NeuroTouch, simulador virtual de los más recientes para su desarrollo, fue creado por neurocirujanos canadienses que trabajaron en el National Research Council of Canada, el cual podía acceder en el entrenamiento de la microcirugía craneal.

    .row.mb-5.align-items-center
      img.col-lg-5.col-md-6.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-10.svg" style="max-width: 505px;" data-aos="fade-right")
      .col-lg-7.col-md-6
        .cajon.color-primario.p-4(style="background-color: #F1FEFD")
          p(data-aos="fade-left") Debido a la gran necesidad de fortalecer las competencias en el entrenamiento del personal que conforma las ciencias de la salud, en el mundo se encuentran fundados muchos centros de simulación y laboratorios que mejoran las habilidades clínicas por medio de equipos y programas que, de la mano con programadores de <em>software</em> y otros elementos, hacen reales estos escenarios. 
    p.mb-5(data-aos="fade-right") En la actualidad, la simulación clínica viene en un proceso de evolución de constante perfeccionamiento y excelentes resultados, y, por medio de los programas encontrados en la formación del talento humano en salud y la aplicación de conocimientos en las ciencias de la salud, la transformación digital, las tecnologías en salud aplicadas en combinación con herramientas informáticas, busca un continuo relacionamiento, teniendo como objetivo la gestión del riesgo y la seguridad del paciente. Todo esto con el propósito de obtener como resultados la sensibilización, beneficios y alcances en los grandes y llamados actualmente “desafíos en conectividad”. 


    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 5
          p.mb-0.text-small Simulador de enfermería
        .mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-11.png" style="max-width: 1030px" data-aos="fade-left" alt="Muestra diferentes figuras de simuladores actuales.")
          span.text-small Comunidad FacMed (2020).

    Separador 

    .titulo-segundo.color-secundario
      h2#t_1_1 1.1 Concepto de simulación
    p.mb-5(data-aos="fade-right") En el siguiente video, se describe el concepto de simulación, su uso y su importancia.

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    h4 Tipos de simuladores

    p.mb-5(data-aos="fade-right") La clasificación, o tipos de simuladores, está basada no solo en su definición, sino también en características de acuerdo con sus competencias o finalidades, las cuales permiten adquirir conocimientos más objetivos y datos más fidedignos para el logro de imitar el entorno en el porcentaje más cercano de la realidad. 
      br
      br
      |Los tipos pueden estar de acuerdo con las necesidades no solo de una persona, sino de comunidades o sectores y con fines específicos, como: capacitación, entrenamiento, prácticas, previsión de posibilidades, proyecciones y posibilidades; los más usados son:


    ul.mb-5.ps-md-5
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador clínico médico
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de conducción
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de carreras
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de vuelos o de aviones
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de trenes
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de vida o de dinámica familiar
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de espacios o ambientes
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de negocios
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador político
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de redes
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Simulador de juegos

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5.img-text-edit
      .container-bg.col-12.col-xl-9.order-2.order-xl-1
        p(data-aos="fade-right") Dentro de los procesos de enseñanza y aprendizaje, se dio la incorporación de las TIC para facilitar la adquisición de conocimientos, donde los contenidos, medios de enseñanza, recursos sociales mejoran cada vez más y se adaptan a las culturas y entornos; por ello, con el ánimo de mejorar los procesos de aprendizaje, aparece la simulación donde la necesidad de proyectar posibles realidades se requiere, pero para esto es importante el desarrollo tecnológico y personas capacitadas para no solo usar simuladores, sino para proponer, diseñar, desarrollar y probar simuladores. 
      img.col-xl-6.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-12.png" style="max-width: 610px")  

    p.mb-5(data-aos="fade-right") Gracias al ejercicio documental realizado con la revisión y aplicación de métodos, tanto en artículos como en revistas de simulación, especialmente las de medicina y ramas especializadas, se realiza la planificación de cómo serán organizados los escenarios simulados, su análisis, de acuerdo con las propuestas que surjan e influyen en la metodología y las experiencias adquiridas en los docentes, instructores en simulación; de igual forma, las teorías y los procesos en los modelos académicos que explican el aprendizaje con el abordaje de dicha investigación realizada desde un enfoque más sistémico, donde son integrados los elementos necesarios en los procesos formativos y su metodología. 
      br
      br
      |Los siguientes son videos que ejemplifican y ayudan a complementar los conocimientos:
    
    .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto(style="background: linear-gradient(0deg, rgba(99,242,228,1) 0%, rgba(71,71,255,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-13.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Uso de simuladores de Cloudlabs
              p.text-small(style="color: #262626") En el siguiente video, se puede ver un tutorial para el uso de simuladores de Cloudlabs, dispuestos por el SENA en Sofia Plus para las diferentes áreas de conocimiento:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=qi7GQFDJBAQ" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")
    
    .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto(style="background: linear-gradient(0deg, rgba(99,242,228,1) 0%, rgba(71,71,255,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-13.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Biblioteca de simuladores
              p.text-small(style="color: #262626") En el siguiente video, se puede conocer el uso de la Biblioteca de Simuladores del SENA de las 15 áreas de conocimiento:
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=j9z0XrlfxvY" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")

    Separador 

    .titulo-segundo.color-secundario
      h2#t_1_2 1.2 ¿Qué es la simulación clínica?
    
    p.mb-5(data-aos="fade-right") Para tener claridad al respecto, antes de dar una respuesta y sabiendo ya a nivel general lo que representa la simulación, en el siguiente video, se explica lo que significa simulación clínica:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade-right") Es importante aclarar que con la simulación clínica no se pretende el reemplazo de la práctica en la vida real con el paciente, antes, procura aplicar diferentes metodologías de manera organizada y con objetivos específicos para fortalecer las habilidades y prácticas de tipo motriz, y cualificar competencias que se encuentran en cada escenario médico. 
      br
      br
      |Aunque es relevante atribuir que el éxito de la simulación clínica no solo se debe a la tecnología, sino también a la investigación e implementación que ejecutan los centros o instituciones que se dedican a la construcción de estos modelos. En definitiva, no solo se trata de la conformación de equipos con avanzada tecnología, sino a la enseñanza del instructor y prácticas del aprendiz. 
      br
      br
      |Partiendo de lo anterior, el siguiente esquema menciona el ciclo de la simulación clínica:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 6
          p.mb-0.text-small Ciclo simulación clínica
        .col-md-10.col-xl-6.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-14.svg" style="max-width: 820px" data-aos="fade-left" alt="Muestra el ciclo de la simulación clínica: actividades, simulación clínica, planificar, organizar, metodología y plan de estudios.")
          span.text-small SENA (2022).

    p.mb-5(data-aos="fade-right") Ahora, observe en la siguiente tabla los beneficios y limitaciones que pueden presentar los procesos de simulación clínica:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Tabla 1
          p.mb-0.text-small Beneficios / limitaciones
        .col-11.mx-auto
          .tabla-b.color-acento-contenido(data-aos="fade-left")
            table
              tr(style="background-color: #F6F6F6")
                td.col-5.text-center.fw-bold(style="background-color: #2C04BF; border: none; color: white") Beneficios
                td.col-7.text-center.fw-bold(style="background-color: #2C04BF; border: none; color: white") Limitaciones
              tr(style="background-color: #F6F6F6")
                td.col-5(style="border-right: 1px solid #AFAFAF") No sustituye escenarios clínicos reales.
                td.col-7 Grupos pequeños para mayor interacción.
              tr(style="background-color: white")
                td.col-5(style="border-right: 1px solid #AFAFAF") Similitud en patologías y signos del paciente.
                td.col-7 Acceder a más datos del paciente.
              tr(style="background-color: #F6F6F6")
                td.col-5(style="border-right: 1px solid #AFAFAF") Puede equivocarse en varias oportunidades, sin repercusión real.
                td.col-7 Exceso de seguridad frente a procedimientos a ejecutar.
              tr(style="background-color: white")
                td.col-5(style="border-right: 1px solid #AFAFAF") Disminuye las emociones de miedo a equivocarse.
                td.col-7 No percibir en su paciente estados como ansiedad o estrés causados por su patología.
              tr(style="background-color: #F6F6F6")
                td.col-5(style="border-right: 1px solid #AFAFAF") Desarrollo de habilidades comunicativas.
                td.col-7 Actualización constante de los programas simulados.
              tr(style="background-color: white")
                td.col-5(style="border-right: 1px solid #AFAFAF") Destrezas en campos de difícil acceso.
                td.col-7 Acceso por costos de simuladores o mantenimiento de los mismos.
              tr(style="background-color: #F6F6F6")
                td.col-5(style="border-right: 1px solid #AFAFAF") Reflexión de su praxis y <em>feedback</em>.
                td.col-7 Falta de entrenamiento a instructores en manejo de simuladores.
              tr(style="background-color: white")
                td.col-5(style="border-right: 1px solid #AFAFAF") Registros guardados.
                td.col-7 Constantes vitales no programadas.
              tr(style="background-color: #F6F6F6")
                td.col-5(style="border-right: 1px solid #AFAFAF") Tiempos cortos para su aprendizaje.
                td.col-7 Tiempos extensos para el aprendizaje.
          p.text-small SENA (2022).

    .tarjeta.color-primario.p-3.mb-5.col-lg-10.mx-auto(style="background: linear-gradient(0deg, rgba(99,242,228,1) 0%, rgba(71,71,255,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-15.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Diccionario de simulación en salud
              p.text-small(style="color: #262626") En el siguiente documento de la entidad The Society for Simulation in Healthcare (SSH), podrá consultar los términos más usados en simulación en salud, donde podrá contextualizarse de manera más clara sobre los conceptos y definiciones encontradas en la formación para esta área del conocimiento.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Diccionario_de_Simulacion_en_Salud.pdf')" target="_blank")
                span Descargar 
                i.ms-4.fas.fa-file-download

</template>

<script>
import PasosB from '@/components/PasosB.vue'
export default {
  name: 'Tema1',
  components: { PasosB },
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '1929',
        texto:
          'Link Trainer, también conocido como Blue Box y Pilot Trainer, fue un simulador de vuelo producido a principios de la década de 1930, basado en la tecnología iniciada en 1929 por Edwin Albert Link.',
        icono: require('@/assets/curso/temas/tema1/img-2.svg'),
      },
      {
        titulo: 'Años 70',
        texto:
          'Siguen con el desarrollo de simuladores, los cuales daban respuesta a situaciones de crisis, trabajo en equipo y cómo liderar en el campo de la aviación',
        icono: require('@/assets/curso/temas/tema1/img-3.svg'),
      },
      {
        titulo: 'Durante la Segunda Guerra Mundial - Siglo XX',
        texto:
          'Los simuladores para pilotos fueron importantes en la evolución de la aviación, con un crecimiento importante, con alto porcentaje en entrenamiento y con nuevos modelos de aeronaves de uso exclusivo en simulación.',
        icono: require('@/assets/curso/temas/tema1/img-4.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
