<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Patronaje
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-md-7.col-12
          img(src='@/assets/curso/t1/img1.png', alt='')
        .col-lg-7.col-md-12.col-sm-12
          .row
            .col-auto
              img(src='@/assets/curso/t1/img2.png', alt='')
            p.mt-2 El patronaje traduce las formas tridimensionales del cuerpo a superficies bidimensionales, de modo que la arquitectura de la prenda quede trazada sobre planos precisos. Este proceso constituye la fase estructural del diseño de moda: a partir de líneas, contornos y ejes de aplome se generan los moldes que, al cortarse y ensamblarse, recuperan el volumen original con exactitud. Un buen patronaje no solo garantiza ajuste y comodidad, sino que también optimiza el consumo de material, facilita el escalado de tallas y sienta las bases para cualquier transformación creativa posterior.
        
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-5.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            | Plano en 3D 
          figure
            img.mb-2(src='@/assets/curso/t1/fig1.png', alt='Un cubo en dos enfoques. El primero indica su forma tridimensional usando líneas continuas y segmentadas. El segundo lo ubica dentro de un sistema de coordenadas con tres ejes: X (horizontal), Y (vertical) y Z (profundidad), facilitando su comprensión espacial.')
          figcaption Fuente: SENA, (2021).
        .col-lg-3.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            | Plano en 2D
          figure
            img.mb-2(src='@/assets/curso/t1/fig2.png', alt='Plano de un cubo. Se compone de seis cuadrados unidos entre sí formando una cruz, con pestañas en algunos bordes. Estas pestañas indican zonas de unión al armar la figura tridimensional.')
          figcaption Fuente: SENA, (2021).
        .col-lg-4.col-md-12.col-sm-12
          img(src='@/assets/curso/t1/img3.png', alt='')

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        p.mb-5 El patronaje cumple una función estratégica en todo el ciclo de diseño, desarrollo y producción de indumentaria. Su utilidad va mucho más allá de “pasar el cuerpo a planos técnicos”; constituye el puente operativo entre la idea creativa y la prenda terminada. A continuación, se detallan sus principales aportes:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          | Aportes del patronaje en la elaboración de prendas
        figure
          img.mb-2(src='@/assets/curso/t1/tabla1.png', alt='Ocho dimensiones del patronaje con sus respectivos aportes y beneficios. En ajuste y ergonomía, permite traducir medidas anatómicas en moldes que garantizan comodidad y buen calce. La eficiencia productiva define márgenes y secuencias, reduciendo errores y desperdicios. El escalado de tallas actúa como matriz para adaptar medidas. La creatividad controlada brinda libertad técnica sin perder estructura. La comunicación interdisciplinar estandariza símbolos, facilitando el trabajo en equipo. La viabilidad económica optimiza el uso de materiales y reduce retrabajos. La sustentabilidad apoya sistemas de corte eficiente y menor residuo. Finalmente, la digitalización y archivo acelera procesos y asegura trazabilidad.')
        figcaption Fuente: SENA, (2021).
        
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            | De la estructura al molde 
          figure
            img.mb-2(src='@/assets/curso/t1/fig3.png', alt='Proceso técnico del patronaje. Inicia con la estructura del cuerpo humano, continúa con su representación en plano y finaliza con el molde, que permite construir una prenda ajustada al cuerpo. El esquema relaciona cuerpo, geometría y diseño como etapas conectadas.')
          figcaption Fuente: SENA, (2021).
        .col-lg-4.col-md-6.col-sm-12
          img.mt-5(src='@/assets/curso/t1/img4.png', alt='')

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-10.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            | Interpretación en plano y molde 
          figure
            img.mb-2(src='@/assets/curso/t1/fig4.png', alt='Proceso de transformación del cuerpo humano en prenda. Parte de una figura tridimensional, que se traduce a un plano en dos dimensiones, luego a un molde técnico, y finalmente a una prenda confeccionada. Representa el paso de la estructura al diseño terminado.')
          figcaption Fuente: SENA, (2021).

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.1 Tipos de patronaje y líneas

      p.mb-5 El patronaje se divide en dos grandes categorías: el industrial, orientado a la producción masiva de prendas, y el sobre medidas, que se enfoca en la personalización y exclusividad para cada cliente. A continuación, se describe cada uno:

      .subt.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/t1/ico.png', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-black A. Patronaje industrial

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        p.mb-3 Este tipo de patronaje parte del análisis antropométrico de la figura humana en 3D y se desarrolla en 2D, ya sea en papel o mediante software especializado como Audaces 360, Optitex, Gerber o Lectra. Su metodología precisa permite trazar básicos, desarrollar patrones y realizar transformaciones de forma eficiente.
        p.mb-4 Se basa en tablas de medidas definidas según regiones y tipos de prenda, lo que facilita el escalado. A partir de una talla base, se aplican incrementos estandarizados para generar múltiples tallas sin necesidad de crear nuevos moldes, optimizando así la producción en serie.

        .col-lg-7.col-md-12.col-sm-12.bgamarillo.px-5(data-aos="fade-right")
          p.mb-4.mt-4 El patronaje industrial incluye:
          ul.lista-ul--color.fa-al
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Trazado de básicos delanteros y posteriores.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Desarrollo de patrones para prendas superiores e inferiores.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Creación de moldes para componentes como cuellos, escotes, mangas, puños, ribetes, bolsillos, charreteras, entre otros.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Aplicación en todas las líneas: infantil, femenina y masculina.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-4 Desarrollo de colecciones según universos de vestuario y ocasiones de uso.   
        .col-lg-5.col-md-7.col-sm-12
          img(src='@/assets/curso/t1/img5.png', alt='')

        
      .subt.mb-5(data-aos="fade-right")
        .row.align-items-center
          .col-md-auto.col-3
            img(src='@/assets/curso/t1/ico.png', alt='')
          .col-md-auto.col-9.ps-0
            h3.mb-0.text-black B. Patronaje sobre medidas
        








  </template>

<script>
export default {
  name: 'Tema1',
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
