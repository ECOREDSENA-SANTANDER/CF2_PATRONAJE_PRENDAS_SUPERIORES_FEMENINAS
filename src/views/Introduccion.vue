<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-start.mb-3
      .col-auto
        img(src='@/assets/curso/portada/ico.png', alt='')
      .col
        p En la confección de moda casual femenina, el patronaje de prendas superiores representa  una de las competencias más estratégicas del proceso de diseño y producción. Traducir una idea en un molde técnico requiere más que creatividad: exige precisión, dominio de la técnica y comprensión de la morfología femenina. El trazo correcto de patrones base, como el corpiño, la manga o la blusa, es la base para desarrollar prendas funcionales, estéticas y adaptables a diferentes estilos. A esto se suman las piezas complementarias como cuellos, bolsillos y botoneras, elementos clave en la construcción de prendas versátiles para el uso diario. Así mismo, el conocimiento del escalado industrial permite transformar un solo diseño en un sistema de tallas coherente, optimizando recursos y garantizando consistencia en la producción.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.col-md-12.col-sm-12
        p El objetivo de abordar estas temáticas es desarrollar en los aprendices la capacidad técnica para analizar, interpretar, construir y ajustar patrones de prendas superiores femeninas con enfoque en la moda casual, aplicando criterios de proporción, comodidad, tendencia y escalabilidad. 
        p Este componente aporta las herramientas prácticas y conceptuales necesarias para que los participantes se desempeñen con solvencia en entornos reales de diseño y confección. A través de metodologías aplicadas, guías técnicas actualizadas y acompañamiento especializado, el componente permite adquirir habilidades sólidas en patronaje, convirtiéndose en una base fundamental para el desarrollo profesional en el sector textil y de la moda en Colombia.
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/portada/img-intro.png', alt='')

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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
