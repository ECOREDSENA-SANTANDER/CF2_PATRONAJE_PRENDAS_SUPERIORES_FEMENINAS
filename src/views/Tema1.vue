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
              img(src='@/assets/curso/t1/img2.png', alt='').d-none.d-lg-block
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

      p.mb-4 Este tipo de patronaje se caracteriza por su precisión en la adaptación ergonómica y funcional de la prenda al cuerpo del cliente. Está diseñado para crear piezas exclusivas, ajustadas a medidas específicas, y es comúnmente utilizado por marcas orientadas a un público exigente con perfiles definidos de consumo.
      p.mb-4 El proceso incluye la toma de medidas antropométricas, la elaboración de una prenda de prueba (generalmente en un textil diferente), y una sesión de ajuste para corregir posibles fallos antes de confeccionar la prenda final.
        
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
        .col-lg-6.col-md-12.col-sm-12.bgfondotar.p-5
          .row.align-items-center.mb-4.mt-2
            .col-auto
              img(src='@/assets/curso/t1/tar1-1.png', alt='')
            .col-7.mt-5
              p.bgmorado.px-2.mt-5 Se aplican dos técnicas principales:
          .row.mt-4
            ul.lista-ul--color.fa-al
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-4 #[b Levantamiento en plano:] similar al industrial, aunque el patronista tiene libertad para aplicar fórmulas y ajustes específicos.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 #[b Patronaje sobre maniquí:] utilizado en prendas con drapeados, plisados o acabados complejos. Este método, también conocido como #[em moulage], permite trabajar directamente sobre el maniquí para construir moldes únicos con alto nivel de detalle. Es frecuente en la confección de vestidos de fiesta, trajes de matrimonio, prendas infantiles o de sastrería.

        .col-lg-6.col-md-12.col-sm-12(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            | Patronaje sobre maniquí 
          figure
            img.mb-2(src='@/assets/curso/t1/fig5.png', alt='Proceso de construcción de una prenda directamente sobre un maniquí. Se trabaja con una pieza de tela fijada con alfileres, marcando líneas guía que siguen las proporciones del cuerpo.')
          figcaption Fuente: https://skarlett.es/algunos-consejos-para-embarcarse-por-primera-vez-en-la-tecnica-del-modelaje-en-el-diseno-de-moda/

      .row.justify-content-center.align-items-center.mb-4.mt-4(data-aos="fade-right")
        .col-lg-4.col-md-6.col-6
          img(src='@/assets/curso/t1/img6.png', alt='')
        .col-lg-8.col-md-12.col-sm-12
          p.mb-4.mt-4 El patronaje sobre medidas abarca:
          ul.lista-ul--color.fa-al
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Trazado de básicos delanteros y posteriores.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Desarrollo de prendas superiores e inferiores.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Creación de moldes para componentes como cuellos, escotes, mangas, puños, ribetes, bolsillos, charreteras, entre otros.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Aplicación en todas las líneas: infantil, femenina y masculina.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Diseño según universos de vestuario y ocasiones de uso.
      
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
        .col-lg
          p En los procesos productivos de la industria de la confección, las fichas técnicas son herramientas clave que guían el trabajo de cada integrante del equipo. Estas fichas detallan de forma clara las especificaciones, materiales, secuencia de ensamblaje y requerimientos técnicos de cada prenda, garantizando uniformidad y precisión en la producción.
        .col-auto
          img(src='@/assets/curso/t1/img7.png', alt='')

      .row.justify-content-center.align-items-center(data-aos="fade-left")
        .col-lg-10.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 2.
            | Comparativo entre patronaje industrial y sobre medidas
          figure
            img.mb-2(src='@/assets/curso/t1/tabla2.png', alt='Comparación del patronaje industrial y el patronaje sobre medidas en distintas dimensiones. El industrial se enfoca en producción masiva con tablas estandarizadas, holguras por percentil, gradación sistemática, y una o ninguna prueba; usa tecnologías como CAD, plotters y nesting, se desarrolla en días o semanas, con costos bajos por economía de escala y control por lotes; es típico en fast fashion y uniformes. En contraste, el patronaje sobre medidas es exclusivo, con entre 25 y 40 medidas por cliente, sin gradación, con 2 a 4 pruebas, herramientas manuales, desarrollo más largo, costo alto, revisión pieza a pieza y aplicaciones en alta costura y vestuario escénico.')
          figcaption Fuente: SENA, (2025).

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.2 Procedimiento y entorno

      p.mb-4 Para lograr un producto que responda a las necesidades del cliente, es fundamental seguir una secuencia de pasos que aseguren el cumplimiento de los criterios técnicos y de calidad en la confección de prendas sobre medidas. Por tanto, se recomienda el siguiente procedimiento:

      .tarjeta.color-primario.p-3(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/t1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Se invita a explorar el PDF – Pasos para definir  el patronaje.
                p.mb-0 Pasos que se deben seguir para realizar el procedimiento de patronaje.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.3 Metodología y manual de patronaje SENA

      p.mb-4 El manual de patronaje del SENA fue elaborado por expertos con el respaldo de profesionales especializados en el área, con el objetivo de ofrecer una metodología clara para comprender el patronaje a partir del análisis del cuerpo humano. Si se desea consultar el contenido completo, se puede acceder al manual en su versión oficial.

      .tarjeta.color-primario.p-3(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/t1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1  Se invita a explorar el PDF – Pasos para definir el patronaje.
                p.mb-0 Manual de patronaje del SENA.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 1.4 Metodología y convenciones

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-8.col-md-12.col-sm-12
          p.mb-4 En el patronaje, es esencial conocer y aplicar una serie de símbolos que facilitan la interpretación técnica de los patrones y el proceso de corte. Estas convenciones gráficas permiten leer los planos sin necesidad de textos extensos o referencias alfanuméricas, además de indicar cómo deben posicionarse las piezas al momento del corte. Al despiezar un patrón, cada pieza debe estar claramente identificada con:
          .row.align-items-center.justify-content-center
            .col-auto
              img(src='@/assets/curso/t1/img8.png', alt='')
            .col-lg
              ul.lista-ul--color.fa-al.mt-2
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Nombre de la pieza.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Referencia.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Talla.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Nombre del patronista.
            .col-lg
              ul.lista-ul--color.fa-al.mt-2
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Simbología de corte.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Cantidad de veces a cortar.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Piquetes de confección.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Líneas de aplome.
        .col-lg-4.col-md-6.col-sm-12
          img(src='@/assets/curso/t1/img9.png', alt='')

      p.mb-2 También pueden añadirse otras especificaciones, como detalles de estampación, cambios de color o material, acabados especiales y ubicación de elementos como bolsillos.
      p.mb-5 En cuanto al trazo, se utilizan formas geométricas básicas como horizontal, vertical, perpendicular, rectángulo, cuadrado, paralelo, ángulo recto, diagonal, vértice, radio, curva, cóncava, convexa, entre otras. Toda construcción parte de un rectángulo base, considerando el contorno y el largo del patrón principal. Las escalas permiten representar piezas a tamaño real o reducido. Las más comunes son:

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-3.col-md-6.col-sm-12.mx-2.my-1
          .row.bgmoradoclaro.align-items-center.p-1.borde-redondo.justify-content-center
            .col-auto
              img(src='@/assets/curso/t1/tar2-1.png', alt='')
            .col-lg
              p.mt-3.text-center Escala 1:1 (tamaño real).
        .col-lg-3.col-md-6.col-sm-12.mx-2.my-1
          .row.bgmoradoclaro.align-items-center.p-1.borde-redondo.justify-content-center
            .col-auto
              img(src='@/assets/curso/t1/tar2-1.png', alt='')
            .col-lg
              p.mt-3.text-center Escala 1:2 (mitad).
        .col-lg-3.col-md-6.col-sm-12.mx-2.my-1
          .row.bgmoradoclaro.align-items-center.p-1.borde-redondo.justify-content-center
            .col-auto
              img(src='@/assets/curso/t1/tar2-1.png', alt='')
            .col-lg
              p.mt-3.text-center Escala 1:4 (cuarta parte).
      
      p.mb-5.text-center El trazo a escala es útil para construir patrones base en versiones reducidas y facilitar su análisis.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-12.col-sm-12
          .row.sobrecuadro
            .col-auto
              h3.bgmorado.py-2.px-3.borde-redondo Materiales recomendados para trabajar el manual:
          .row.bgamarillo
            ul.lista-ul--color.fa-al.px-4.mt-5
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Regla mágica (60 x 5 cm con cuadrícula y ángulo de 45°).
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Curvígrafo para curvas específicas.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Cinta métrica en centímetros.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Esfero de tinta negra para marcar en papel o tela.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Lápiz o portaminas (HB, 2H, 0.5 mm, 0.7 mm, 0.2 mm).
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Cinta invisible para montaje sobre papel.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Tijeras de papel, preferiblemente de titanio.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Papel blanco tipo #[em manifold] para mayor claridad en el trazo.
              li.mb-0 
                i.fas.fa-check-circle
                span.mb-2 Juego de reglas de patronaje, incluyendo sisómetro, curvas y escuadra.
        .col-lg-6.col-md-12.col-sm-12
          img(src='@/assets/curso/t1/img10.png', alt='')

      p.text-center.mb-5 Estas convenciones y herramientas son fundamentales para garantizar precisión, claridad y estandarización en el desarrollo técnico de los patrones.

      .tarjeta.color-primario.p-3(data-aos="fade")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/t1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Se invita a explorar el PDF
                p.mb-0 Manual de patronaje básico e interpretación  de diseños
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download


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
