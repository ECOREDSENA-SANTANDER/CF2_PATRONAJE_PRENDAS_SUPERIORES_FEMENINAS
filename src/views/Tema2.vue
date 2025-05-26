<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Patrones base de prendas femeninas

    .row.bgfondo21(data-aos="fade")
      .col-lg-4.col-md-6.col-12
        img.mt-0.mover21(src='@/assets/curso/t2/img1.png', alt='').d-none.d-lg-block
      .col-lg-8.col-md-12.col-sm-12
        p.pt-4.mt-5 Para la construcción del patronaje en prendas de vestir femeninas, se aplican conceptos y técnicas orientadas a la elaboración de bases o básicos, utilizando medidas anatómicas y criterios de escalado para ajustar tallas. Las bases funcionan como representación directa del cuerpo en moldes para prendas superiores e inferiores. Sin embargo, no son aptas para ser cortadas en tela ni usadas directamente en producción, ya que requieren adaptaciones como desahogos, amplitudes o cortes según el diseño. La precisión en su desarrollo garantiza la estabilidad dimensional del patrón y un buen calce de la prenda final. Los patrones base se elaboran según el tipo de prenda a confeccionar.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Trazo de corpiño básico femenino
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-auto
        img(src='@/assets/curso/t2/img2.png', alt='')
      .col
        p.mt-2 El manejo de volúmenes en las prendas se logra principalmente a través de pinzas y sistemas de ajuste, elementos clave en el desarrollo técnico del patronaje. Estos recursos permiten modelar la prenda al cuerpo y son fundamentales en esta unidad. Independientemente de la línea trabajada, la metodología propuesta en el manual y su secuencia de pasos se mantiene constante, lo que facilita una comprensión clara y estructurada del proceso.

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Trazo de la base superior: descripción y medidas

    p.mb-4 La base superior es el molde que representa la forma del cuerpo desde el cuello hasta la cintura. Esta plantilla sirve como punto de partida para desarrollar prendas como blusas, camisetas, chaquetas, chalecos, corpiños e incluso vestidos. Su correcta elaboración garantiza un buen ajuste y facilita su transformación posterior según el diseño deseado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.col-md-12.col-sm-12
        .row.bgamarillo
          p.mt-4 Medidas necesarias para el trazo de la base superior:
          .col-lg-6
            ul.lista-ul--color.fa-al.mt-2
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Contorno de cintura.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Contorno de cadera.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Contorno de busto.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Contorno de cuello.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Largo de hombro.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Caída de hombro.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Centro atrás.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Talle espalda.
          .col-lg-6
            ul.lista-ul--color.fa-al.mt-4
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Ancho de espalda.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Separación de busto.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Ancho de pecho.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Centro frente.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Talle frente.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Costado.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Profundidad de sisa.
      .col-lg-6.col-md-12.col-sm-12
        img(src='@/assets/curso/t2/img3.png', alt='')

    p.text-center.mb-5 Estas medidas permiten construir un patrón técnico ajustado al cuerpo, que servirá de base para distintas prendas superiores femeninas.

    .tarjeta.color-primario.p-3.mb-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1/pdf.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Se invita a explorar el PDF – Manual de patronaje básico e interpretación de diseños.
              p.mb-0 Patrón base superior femenino. Leer de la página 20 a 25.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .tarjeta.color-primario.p-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1/pdf.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Se invita a explorar el PDF
              p.mb-0 Pasos para el trazo de la base superior .
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Traslado de pinzas de corpiño

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/t2/img4.png', alt='')
      .col-lg-8.col-md-12.col-sm-12
        p.mb-3 Cuando se unen los básicos delantero y posterior por la línea de cintura, se evidencia un desnivel anatómico natural. A partir de esta diferencia surge la pinza de busto, una referencia clave para generar volúmenes o ajustes en la prenda. Esta pinza puede trasladarse a distintas zonas del patrón sin alterar su ajuste, lo que permite crear siluetas, estructuras o efectos de diseño. Dependiendo de la interpretación, puede quedar oculta o usarse como recurso visible.
        p.mb-4 Las pinzas pueden trasladarse alrededor del punto de busto (punto giratorio) sin modificar el entalle del molde. El exceso de la pinza también puede aprovecharse como pliegues, frunces, cortes o pinzas decorativas según el diseño.
        .row.align-items-center.justify-content-center.bgamarillo
          .col-auto
            img.p-3(src='@/assets/curso/t2/img5.png', alt='')
          .col
            p #[b Nota técnica:] toda pinza debe finalizar antes de llegar al punto de busto; nunca debe traspasarlo.

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-9.col-md-12.col-sm-12
        TabsA.color-acento-botones
          .tarjeta.color-primario-claro.p-4(titulo="Técnicas para trasladar pinzas")
            p.mb-3.px-3 #[b Técnicas para trasladar pinzas:]
            ul.lista-ul--color.fa-al.px-3
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-3 #[b Cortar y unir:] se corta el patrón base y se reubica la pinza en otra posición.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 #[b Pivoteo:] se gira el patrón desde el punto de busto, trasladando la pinza sin necesidad de cortar.
          .tarjeta.color-primario-claro.p-4(titulo="Posiciones comunes de pinzas")
            p.mb-3.px-3 #[b Posiciones comunes de pinzas:]
            .row
              .col-lg-6
                ul.lista-ul--color.fa-al.px-3
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Centro delantero.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Altura del busto.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Punta de escote.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Medio hombro.
              .col-lg-6
                ul.lista-ul--color.fa-al.px-3
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Punto del hombro.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Medio sisa.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Costado.
                  li.mb-0 
                    i.fas.fa-check-circle
                    span.mb-2 Francesa.
      .col-lg-3.col-md-5.col-5
        img(src='@/assets/curso/t2/img6.png', alt='')

    p.text-center.mb-5 Estas técnicas permiten transformar el patrón base según criterios estéticos, funcionales o de ajuste.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-5.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          | Puntos de traslados de pinza
        figure
          img.mb-2(src='@/assets/curso/t2/fig6.png', alt='Proceso técnico del patronaje. Inicia con la estructura del cuerpo humano, continúa con su representación en plano y finaliza con el molde, que permite construir una prenda ajustada al cuerpo. El esquema relaciona cuerpo, geometría y diseño como etapas conectadas.')
        figcaption Fuente: SENA, (2021).
      .col-lg-1
      .col-lg-8.col-md-12.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          | Traslados de pinza en base  
        figure
          img.mb-2(src='@/assets/curso/t2/fig7.png', alt='Proceso de transformación del cuerpo humano en prenda. Parte de una figura tridimensional, que se traduce a un plano en dos dimensiones, luego a un molde técnico, y finalmente a una prenda confeccionada. Representa el paso de la estructura al diseño terminado.')
        figcaption Fuente: SENA, (2021).

    .tarjeta.color-primario.p-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t2/img7.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Video - Traslados de pinza correctiva de talles.
              p.mb-0 Explorar video explicativo sobre cómo se hacen traslados de pinza correctiva de talles.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Ver Video
                i.fas.fa-link

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Análisis y trazo de sistema de ajuste (pinzas y cortes)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-7.col-12
        img(src='@/assets/curso/t2/img8.png', alt='')
      .col-lg-7.col-md-12.col-sm-12
        p.mb-4 En el desarrollo de moldes y patrones, el uso de pinzas es fundamental, tanto como sistema de ajuste como herramienta para controlar volúmenes. En el caso de prendas femeninas, las pinzas representan un punto de partida esencial que debe comprenderse desde su función estructural, matemática y técnica.
        .row.mb-4  
          .col-auto
            img(src='@/assets/curso/t2/img9.png', alt='')
          .col
            p.mb-0 Para estudiar su aplicación, se trabajará exclusivamente sobre la parte superior femenina, considerando los contornos de busto, cintura y cadera. Estos contornos definen las zonas con mayor variación de volumen y constituyen los puntos clave en la construcción de patrones base, marcando la división entre la parte superior e inferior del cuerpo.
        p Independientemente del tipo de prenda, el nivel de desahogo o la interpretación de diseño, las pinzas siempre se aplican sobre estos tres contornos, ya que son la base sobre la cual se estructura el molde y se logra un ajuste preciso al cuerpo.

    .tarjeta.color-primario.p-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t2/img7.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Video - Análisis y trazo de sistema de ajuste pinzas y cortes.
              p.mb-0 Video explicativo sobre cómo se hace el trazo de sistemas de ajuste de pinzas y cortes.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Ver Video
                i.fas.fa-link

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Trazo básico de manga



</template>

<script>
export default {
  name: 'Tema2',
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
