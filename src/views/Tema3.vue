<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 Etapas para el aprendizaje

    p.mb-5(data-aos="fade-right") Peter Dieckmann define un ambiente de simulación como aquel donde, al reunirse varias personas en un espacio o tiempo, pueden realizar actividades que se asemejan a la realidad en torno a un simulador. Esta práctica social tiene como fin dar cumplimiento a los objetivos propuestos para el aprendizaje. 
      br
      br
      |En el siguiente video, se puede apreciar el modelo que Peter Dieckmann propone para el ambiente de simulación:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade-right") Las etapas, según Peter Dieckmann, están conformadas por tres momentos: <em>prebriefing</em>, momento en el escenario y <em>debriefing</em>. Para entender mejor esta definición, a continuación encontrará la siguiente imagen:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden; position: relative; z-index: 2;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 12
          p.mb-0.text-small Diagrama etapas de simulación 
        .col-lg-8.mx-auto
          img.mb-2(src="@/assets/curso/temas/tema3/img-1.svg" style="max-width: 818px" data-aos="fade-left")
          span.text-small Dieckmann (s. f.).
    p.mb-5(data-aos="fade-right") El alcanzar y desarrollar las capacidades propias en las etapas del aprendizaje y lograr vincularlas a experiencias motrices debe permitir la exploración de las posibilidades de realizar o ejecutar una actividad donde se exprese no solo de manera verbal, sino que sus habilidades de comunicación sean diversas y se integren, siendo el caso del conocimiento corporal mediante el movimiento; además, favorecer la forma de ser consciente, de cómo es su sentir y cuáles son las formas de mostrar, por medio de su propio cuerpo, esta habilidad de comunicación, generando destrezas y dando respuesta a sus necesidades haciendo uso de cada parte del cuerpo humano. 

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.col-lg-10.mx-auto(style="background-color: #13C4FF")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0.text-change-color El aprendizaje motor
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-left") Los procesos de enseñanza y aprendizaje basados en modelos descritos por Fitts y Posner invitan a seguir tres etapas, en las cuales se propone que el aprendizaje motor sea un procedimiento con aspectos que dirijan de forma cognitiva el conocimiento adquirido, siendo este un elemento en la competencia motriz, la cual fortalece al aprendiz en querer apropiarse más conocimientos, siendo así más efectivo. 

    p.mb-5(data-aos="fade-right") Partiendo de lo anterior, la siguiente figura extrae las etapas del aprendizaje motor según Fitts y Posner:

    .tarjeta.p-4.mb-5(style="background-color: #F4F4FF; overflow: hidden; position: relative; z-index: 2;")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 13
          p.mb-0.text-small Teoría del aprendizaje motor 
        .col-lg-10.mx-auto
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 611px" data-aos="fade-left")
          span.text-small SENA (2022).

    .row.mb-5
      AcordionA.order-2.order-lg-1.col-lg-8.pe-lg-3(tipo="b" @select="selectimg = $event")
        .row(titulo="Etapa uno")
          p(data-aos="fade-right") Entendimiento de la naturaleza mediante la acción, a través de la atención, observación, desarrollando estrategias, tomando conciencia de los procesos motores a realizar. 
          ul.mb-5
            li.d-flex.align-items-start
              img.pt-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
              p.ps-4.mb-0(data-aos="fade-left") Realiza y comprende la tarea motriz, construyendo su programa sobre lo que tiene que hacer, y aprende cómo hacerlo de manera técnica.
            li.d-flex.align-items-start
              img.pt-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
              p.ps-4.mb-0(data-aos="fade-left") Identifica el o los objetivos de la actividad o tarea propuesta, no solo reconociendo los movimientos, sino los gestos que debe encontrarse en la ejecución de las actividades, permitiendo la construcción de programas de acción que sean adecuados para cumplir y aprender de ellos.
        .row(titulo="Etapa dos")
          p Perfecciona las estrategias encontradas. El aprendiz crea ajustes en torno a las estrategias obtenidas teniendo en cuenta los estímulos recibidos y experimentados en cada una de ellas. 
            br
            br
            |La identificación de errores mejora los movimientos y se ven caracterizados por la mayor coordinación y fluidez, clasificación de la información y pérdida de los errores con más relevancia. 
        .row(titulo="Etapa tres")
          p Hay apropiación de conocimientos y análisis de la información, esto genera que los movimientos corporales sean más autónomos y sus ganas de prestar atención se vean, siempre explorando hacia su entorno o ambiente. 
            br
            br
            |Los movimientos en esta etapa son más automáticos o autónomos, no es necesario centrar la atención en las gesticulaciones o expresiones más técnicas, sino en aquellos aspectos más complejos que requieran de acompañamiento en una tarea.
      img.order-1.order-lg-2.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema3/img-3.svg" v-if="selectimg == 0" style="max-width: 400px" data-aos="fade-left")
      img.order-1.order-lg-2.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema3/img-4.svg" v-if="selectimg == 1" style="max-width: 400px")
      img.order-1.order-lg-2.mx-auto.mb-4.mb-lg-auto.col-lg-4(src="@/assets/curso/temas/tema3/img-5.svg" v-if="selectimg == 2" style="max-width: 400px")



</template>

<script>
import AcordionA from '../components/AcordionA.vue'
export default {
  name: 'Tema3',
  components: { AcordionA },
  data: () => ({
    selectimg: 0,
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
.acordion-edit
</style>
