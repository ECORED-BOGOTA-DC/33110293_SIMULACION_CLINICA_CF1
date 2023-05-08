<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Historia de la simulación clínica 
    
    p.mb-5 Los momentos históricos atribuidos a la simulación aplicada a las ciencias de la salud han venido evolucionando con cambios y adelantos representativos y favorables para este importante sector. Existe un importante antecedente en el área general situado en la década de los veinte del siglo pasado, por el ingeniero Edwin Albert Link, quien, para el año de 1929, desarrolló simuladores de vuelo con el fin de darle entrenamiento a los pilotos en la comercialización del llamado Blue Box o Link Trainer. 
    
    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 1
          p.mb-0.text-small Simulador Link Trainer
        .col-lg-10.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-1.jpg" style="max-width: 878px")
          span.text-small Fuente Nasflmuseum (2010).
    
    p.mb-5 En la siguiente línea de tiempo, es posible apreciar la evolución de la simulación antes de iniciar con los primeros modelos aplicados en la ciencia clínica:
    
    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      h4 Línea de tiempo
      LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
    
    p.mb-5 La simulación es una técnica que, en su evolución y desde su nacimiento, permite de manera amplia y real llegar a experimentar de una u otra manera aspectos claves de eventos y escenarios reales de una manera interactiva. En las ciencias de la salud, la historia se remonta a los primeros simuladores, los cuales no eran tan tecnológicos como ahora, sino, más bien, se conformaban por modelos de seres humanos elaborados en barro y piedra, los cuales se caracterizaban por tener rasgos clínicos de patologías y sus signos en el hombre. Las diferentes culturas presentaban distintos simuladores, a los cuales tenía acceso cada médico con el fin de diagnosticar, en muchos casos, a mujeres, pues muchas sociedades, y a razón de la moral, tenían prohibiciones a la exposición de ciertas partes del cuerpo humano. 

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 2
          p.mb-0.text-small Antiguos modelos de arcilla
        .col-lg-6.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-5.jpg" style="max-width: 602px")
          span.text-small Smith y Peng (2021).
        
    p.mb-5 A continuación, se presentan los principales hechos para la simulación clínica en el mundo:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      h4 Línea de tiempo
      LineaTiempoD.color-secundario.col-xl-9.mx-auto
        .d-flex.flex-wrap(numero="1" titulo="Edad media")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-1.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 En esta época, se hacía uso de animales, los cuales se empleaban para el entrenamiento y el desarrollo de habilidades quirúrgicas en los procesos de enseñanza en medicina.
        .d-flex.flex-wrap(numero="2" titulo="Siglo III A.C.")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-2.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 En India, el uso del melón fue recomendado para el aprendizaje de incisiones por el médico Súsruta, e igual se usaba una muñeca de lLino de tamaño natural en la aplicación de vendajes. (Medigraphic, 2017).

        .d-flex.flex-wrap(numero="3" titulo="Siglo XVIII")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-3.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 Se desarrolla un maniquí para obstetricia por Grégoire padre e hijo, elaborado con una pelvis humana y un niño fallecido (Timetoast,. 2022).
            br
            |Este maniquí, fue habilitado para los profesionales en obstetricia en los procesos de enseñanza y aprendizaje aplicados como técnicas en el nacimiento, reduciendo las tasas de mortalidad materno infantil.

        .d-flex.flex-wrap(numero="4" titulo="1960")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-4.jpg" style="max-width: 295px")
          .col-12.col-lg.ps-md-3
            p Primer momento trascendental: con la propuesta encontrada en la obra de Asmund Laerdal, quien con un grupo de médicos de especialidad en anestesiología y en conjunto con una fábrica de juguetes, desarrollaron el primer modelo de reanimación cardiopulmonar, nombrado: Resusci Anne. (BBC, 2013)
            a(href="https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2013/10/23/131023154936_besada_grande.jpg" target="_blank" style="overflow-wrap: anywhere") https://ichef.bbci.co.uk/news/624/amz/worldservice/live/assets/images/2013/10/23/131023154936_besada_grande.jpg

        .d-flex.flex-wrap(numero="5" titulo="1960")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-5.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 “Abrahamson y Denson desarrollan el simulador SimOne, con la Universidad de Harvard, este simulador contaba con características que lo harían único, al presentar ruidos respiratorios y cardíacos, pulso carotídeo, temporal, que daban respuesta fisiológica a las maniobras aplicadas en tiempo real, usando programas desde un sistema de computo” (Zeigen, 2021).

        .d-flex.flex-wrap(numero="6" titulo="Desde los años 70")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-6.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 Para la especialidad en oftalmología, se ha encontrado el uso de ojos esquemáticos para el aprendizaje con la exploración del ojo, está aplicada no solo en oftalmoscopia directa sino también, en la indirecta.

        .d-flex.flex-wrap(numero="7" titulo="Siglo XIX")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-7.jpg" style="max-width: 295px")
          .col-12.col-lg.ps-md-3
            p “Una de las especialidades con mayor número de simuladores, es la obstetricia, sus procedimientos, como: amniocentesis bajo ultrasonografía, los fórceps, la distocia de hombros, atención de emergencias obstétricas y trauma, son claros ejemplos en la historia; además, de la evolución marcada en la actualidad” (Tomascabacas, 2013).
            a(href="http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg " target="_blank" style="overflow-wrap: anywhere") http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg 

        .d-flex.flex-wrap(numero="8" titulo="Mediados de los 80")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-8.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 Investigadores de las Universidades de Stanford y de Florida, de manera independiente, iniciaron con el trabajo de la nueva generación de maniquíes como simuladores de pacientes a los cuales denominan Stanford CASE (Comprehensive Anaesthesia Simulation Environment), siendo el primer recurso que se comercializara en ese entonces.

        .d-flex.flex-wrap(numero="9" titulo="En los años 90")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-9.jpg" style="max-width: 295px")
          .col-12.col-lg.ps-md-3
            p En Europa, también por la rama de anestesiología, se investiga en el área de la simulación, con el fin de desarrollar simuladores más sofisticados que los encontrados en Estados Unidos, consiguiendo destacar el simulador de anestesia de Leiden, PAT Sim, y el simulador de anestesia SOPHUS.
            a(href="http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg " target="_blank" style="overflow-wrap: anywhere") http://tomascabacas.com/wp-content/uploads/2014/01/Forceps-romano.jpg 

        .d-flex.flex-wrap(numero="10" titulo="Años 90")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-10.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 La simulación virtual continuaba sus estudios, ahora en el campo quirúrgico con el desarrollo del dextroscopio, siendo un prototipo que, a través del uso de un espejo, reflejaba la imagen de un monitor, usando los anteojos estereoscópicos que formaban una imagen tridimensional y que era combinado con el software llamado VizDexter.

        .d-flex.flex-wrap(numero="11" titulo="1999")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-11.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 En Estados Unidos, el gobierno de la década se vio en la tarea de ordenar un comité que vigilara la calidad del médico tratante, debido a los problemas encontrados en las antiguas prácticas de las ciencias de la salud, que llevaron a encontrar múltiples errores, los cuales dejaban muertes inesperadas de seres humanos.

        .d-flex.flex-wrap(numero="12" titulo="A principios del siglo XXI")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-12.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 Nace el primer maniquí llamado Mrs. Chase, en Connecticut, del Hospital Hartford, por solicitud de una enfermera que laboraba para una escuela de formación, el cual fue usado en las prácticas clínicas. Las características de este simulador estaban marcadas por el tamaño de un adulto, además, su parecido al ser humano le daba mucho realismo y estaba constituido por materiales resistentes que lo mantenían en condiciones adecuadas. 

        .d-flex.flex-wrap(numero="13" titulo="2001")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-13.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 En Israel se funda el Centro de Simulación Médica, “Center for Medical Simulation”, reconocido como líder internacional en los campos de la simulación médica y la capacitación continua en seguridad del paciente.

        .d-flex.flex-wrap(numero="14" titulo="2004")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-14.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 El Centro de Desarrollo de Destrezas Médicas (CEDDEM) y el Instituto Nacional de Ciencias Médicas y Nutrición “Salvador Zubirán” inauguran formalmente el primer centro de sus características en América Latina; presenta un enfoque multidisciplinario, el cual, para las ramas de la medicina, se convertiría en un avance para las ciencias de la salud. (INCMNSZ, 2011).

        .d-flex.flex-wrap(numero="15" titulo="2019")
          img.mx-auto.mx-lg-0.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/ltd-15.jpg" style="max-width: 295px")
          p.col-12.col-lg.ps-md-3 Alemania crea el simulador NeuroSim, simulador virtual que permite las intervenciones quirúrgicas donde se requiere abrir el cerebro humano, e incluso el manejo con “clipaje” para aneurismas.

    p.mb-5 La transformación en procesos educativos a nivel mundial es el pilar de la innovación hacia las nuevas estrategias que permiten que, por medio de la tecnología y aplicación de sistemas de información, la enseñanza sea más eficaz cuando se busca el aprendizaje en habilidades y destrezas clínicas; también, de la comunicación, el entrenamiento y la formación en las diferentes instituciones en ciencias de la salud, las cuales están continuamente en cambio y requieren seguir en la búsqueda de fortalecer su experiencia en escenarios y eventos médicos.

    p.mb-5 Hay un avance en el gran crecimiento encontrado en el desarrollo de los simuladores clínicos, evidenciado en las ramas de especialidades médicas que realizan actividades simuladas con métodos para examen propios, como:

    ul.mb-5
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px")
        p.ps-4.mb-0 Técnicas de venopunción.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px")
        p.ps-4.mb-0 Cateterismo vesical.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px")
        p.ps-4.mb-0 Oftalmoscopia.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px")
        p.ps-4.mb-0 Tacto rectal, entre otros procedimientos.

    
    p.mb-5 La siguiente figura expone un ejemplo de un ejercicio de venopunción:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 3
          p.mb-0.text-small Simulador para venopunción.
        .col-lg-11.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-6.jpg" style="max-width: 925px")
          span.text-small Meri-Vela (2017).
    .d-flex.flex-wrap.mb-5
      .col-lg-6.me-lg-4
        p.mb-4 Un hecho importante, generado por el uso de simuladores y experiencias afines, permite la aparición de “la bioética” y, desde su disciplina, ha establecido que la simulación debe ser aplicada con el fin educativo y que garantice la seguridad de cada ser humano, denominado paciente.
        .cajon.color-acento-contenido.p-4.mb-4
          p Desde ese momento, se proponen postulados con la necesidad de integrar en la formación de las ciencias de la salud la enseñanza y los conceptos de seguridad para el paciente.
      img.col-lg-5(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 505px")

    p.mb-5 En la historia de la simulación clínica, la enfermería desarrolló uno de los primeros espacios simulados, el cual fue llamado "salas de arte", en estas se propició mejorar los procesos de aprendizaje de los estudiantes de enfermería. Estos lugares servían como sitios de entrenamiento y apropiación de conocimientos, en los que, además, se integraban algunos equipos médicos, con el fin de, una vez desarrolladas las habilidades y las destrezas de los aprendices, aplicarlas en la atención segura de pacientes. 

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 4
          p.mb-0.text-small Simulador de enfermería
        .col-lg-8.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema1/img-8.jpg" style="max-width: 820px")
          span.text-small Digital Museums Canada (s. f.). 

    p.mb-5 Las actividades encontradas en la práctica de la enfermería estaban conformadas por cambios de posición de acuerdo con la condición clínica de la persona, esto con el objetivo de apoyar casos con limitación o pérdida de extremidades, brindando el apoyo con el uso de sillas o elementos para el movimiento en cama o aquellos que se requerían para evitar lesiones secundarias por la incapacidad de movimiento, higiene, toma de constantes vitales, entre otras. 
      br
      br
      |El entrenamiento recibido por medio de esta experiencia previa daba como resultado el desarrollo y fortalecimiento de habilidades técnicas y la apropiación de conocimientos para el adecuado manejo de equipos, así como la aplicación de técnicas necesarias en el acompañamiento de las actividades de la vida diaria del paciente ejecutados en las acciones propias de la enfermería y sus cuidados.

    .d-flex.flex-wrap.flex-xl-nowrap.mb-5.img-text-edit
      .container-bg.col-12.col-xl-9.order-2.order-xl-1
        p No hay una manera de comparar las prácticas realizadas y mencionadas anteriormente frente a lo que es hoy en día la simulación clínica, pero, sin duda, hacen parte de su evolución como un valioso antecedente que permite el análisis, promoción y solución frente a las necesidades que se presentan como riesgo al paciente. En la actualidad, se siguen generando estrategias de seguridad a los usuarios, y es un objetivo vigente, el cual debe ser garantizado por toda institución de salud.
      img.col-xl-5.order-1.order-xl-2(src="@/assets/curso/temas/tema1/img-9.png" style="max-width: 592px")



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.img-text-edit
  align-content: center
  .container-bg
    background-color: #13C4FF
    padding: 2.87rem 4rem
    margin-top: auto
    margin-bottom: 2.6rem
    p
      max-width: 505px
  img
    margin-left: -22%
  @media (max-width: 1400px)
    .container-bg
      max-width: 975px
      padding: 1.5rem 4rem
      margin-bottom: 2.2rem
    img
      margin-left: -17%
  @media (max-width: 1200px)
    img
      margin-left: auto
      margin-right: auto
      margin-bottom: 1.5rem
    .container-bg
      p
        max-width: 100%
</style>
