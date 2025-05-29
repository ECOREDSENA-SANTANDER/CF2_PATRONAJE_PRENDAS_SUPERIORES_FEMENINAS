<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comprobación del patrón base

    .subt2.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Corte, ensamblaje y comprobación del patrón base femenino talla 8 (corpiño + manga básica)

    p.mb-5 Este proceso tiene por objetivo verificar que el corpiño y la manga básica en talla 8 reproducen fielmente las medidas antropométricas y holguras estándar, garantizando equilibrio, comodidad y viabilidad industrial antes de escalar o diseñar transformaciones. Por lo anterior, se partirá del patrón del corpiño y manga básica.

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo A. Materiales, insumos y herramientas

    .row.mb-5(data-aos="fade")
      .titulo-sexto.color-acento-contenido
        h5 Tabla 3.
        | Materiales, insumos y herramientas para el proceso de comprobación 
      figure
        img.mb-1(src='@/assets/curso/t4/tabla3.png', alt='Materiales y herramientas necesarias para el proceso de confección, organizados por áreas: en patronaje se usan patrones en cartulina, reglas, curvas, escuadra, ruleta y lápiz para crear moldes rotulados; en el corte, se emplea tela rígida como muselina o popelina sin elastano, tijeras, alfileres y marcadores para facilitar ajustes; la confección requiere máquina recta, hilo contrastante, plancha, almohadilla y descosedor, incluyendo guía para márgenes; en la prueba, se utilizan maniquí o modelo con medidas estándar, espejo y cámara para registrar vistas; y en la documentación, se archivan fichas técnicas, lista de chequeo y fotografías como evidencia del proceso.')
      figcaption Fuente: SENA, (2021).

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo B. Requerimientos previos necesarios.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          | Parámetros de las dimensiones del patrón base
        figure
          img.mb-1(src='@/assets/curso/t4/tabla4.png', alt='Medidas base para la talla 8, esenciales en el patronaje de prendas superiores. El busto mide 88 cm con una holgura inicial recomendada de +4 cm; la cintura es de 68 cm con +2 cm de holgura; la altura de busto está entre 19 y 20 cm sin holgura adicional. La cabeza de manga mide 15 cm y el puño de manga, 24 cm, sin indicación de holgura inicial, ya que estas medidas dependen del diseño específico de la prenda.')
        figcaption Fuente: SENA, (2021).
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-lg-6.col-md-12.col-sm-12
            .tarjeta.peq.borde-redondo.p-4
              img(src='@/assets/curso/t4/img1.png', alt='')
              h3.mt-4.mb-4 Márgenes de costura estándar
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Costados 1 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Sisas y hombros 1,5 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Escote 1 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Cintura 2 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Bajo manga 3 cm.
          .col-lg-6.col-md-12.col-sm-12
            .tarjeta.peq.borde-redondo.p-4
              img(src='@/assets/curso/t4/img2.png', alt='')
              h3.mt-4.mb-4 Verificación inicial
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Confrontar la longitud de sisa frente + espalda con la curva de la manga (diferencia ≤ 0,3 cm).
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Confirmar perpendicularidad de “centro frente” y “centro atrás” respecto a la línea de cintura.

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo C. Preparación del patrón base

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/t4/img3.png', alt='').d-none.d-lg-block
      .col-lg-8.col-md-12.col-sm-12
        .row
          .col-lg-6.col-md-12.col-sm-12
            .tarjeta.peq.borde-redondo.px-4.py-2
              img.px-2(src='@/assets/curso/t4/img4.png', alt='')
              h3.mt-3.mb-3 Corpiño
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Revisar líneas: ½ ancho de pecho, línea de sisa, línea de cintura.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Vértice de la pinza de busto a 2 cm del punto de busto.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cuello y escote limpios, sin quiebres.
          .col-lg-6.col-md-12.col-sm-12
            .tarjeta.peq.borde-redondo.px-4.py-2
              img.px-2(src='@/assets/curso/t4/img5.png', alt='')
              h3.mt-3.mb-3 Manga
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cabeza: altura 15 cm; piquete central (hombro).
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Piquetes: 1 delantero, 2 espalda; largo de sisa frente/posterior rotulado.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Puño 24 cm (12 cm cada lado) y bajo recto.

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo D. Proceso de corte

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          | Pasos del proceso de corte del patrón base
        figure
          img.mb-1(src='@/assets/curso/t4/tabla5.png', alt='Cinco pasos básicos para cortar una prenda en muselina. Primero, se plancha la tela y se coloca recta sobre la mesa. Luego, se alinean las líneas centrales del patrón y la dirección del hilo de la manga paralelos al borde de la tela. Se dibujan los contornos y líneas internas como busto, cintura y sisa, y se marcan pequeñas señales de corte. Después, se agregan márgenes de costura. Finalmente, se cortan las piezas sin levantar la tela y se identifican con etiquetas para frente, espalda y manga.')
        figcaption Fuente: SENA, (2021).
      .col-lg-5.col-md-7.col-sm-12
        img(src='@/assets/curso/t4/img6.png', alt='')

    .row(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo E. Construcción del prototipo

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade")
      .col-lg-8.col-md-12.col-sm-12
        .row.bgamarillo2
          h3.mb-4.mt-4.px-4 #[b Ensamblaje manual (alta costura)]
          ul.lista-ul--color.fa-al.px-4
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Hilvanar pinzas de busto y cintura espalda (puntada larga 6 mm).
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Hilvanar hombros y costados; dejar abierto el centro espalda hasta la cintura.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Cerrar costura bajo manga.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Hilvanar manga al cuerpo: piquete hombro→piquetes, delantero/espalda→repartir embebido.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-5 Planchar costuras abiertas y pinzas.
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/t4/img7.png', alt='')

    h3.mb-5 #[b Ensamblaje en máquina (método industrial)]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          | Orden del proceso de ensamblaje del protoitpo
        figure
          img.mb-1(src='@/assets/curso/t4/tabla6.png', alt='El orden de operaciones para confeccionar una prenda superior. Se inicia con una costura de refuerzo en las sisas usando puntada de 2,5 mm, seguida de la costura de pinzas con puntadas entre 2,5 y 3 mm y remates. Luego se unen los hombros y costados con apertura y planchado de costuras. Se realiza frunce en la corona de la manga con puntadas de 4 mm a 0,7 y 1 cm. Después se cierra el bajomanga y se plancha hacia atrás. Se monta la manga ajustando piquetes y frunces con puntadas de 2,5 a 3 mm. Finalmente, se plancha la cabeza de la manga con vapor medio sobre una almohadilla.')
        figcaption Fuente: SENA, (2021).


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-12.col-sm-12
        .row.p-5.bgamarillomas
          .col-auto
            img(src='@/assets/curso/t4/img8.png', alt='')
          .col
            p #[b Nota:] #[em Stay-stitch], es un término utilizado en el patronaje el cual hace referencia a línea de puntadas que se cosen en un margen de costura que comprende una sola capa de tela para evitar que los bordes curveados o al sesgo se estiren. 

    
    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo F. Prueba y evaluación

    .row.fondo41

      .row.justify-content-center.align-items-start.mb-5.px-5(data-aos="fade")
        .col-lg-6.col-md-12.col-sm-12
          h3.mb-5 #[b Lista de chequeo del corpiño básico]
          .titulo-sexto.color-acento-contenido
            h5 Tabla 7.
            | Lista de chequeo de los elementos del corpiño
          figure
            img.mb-1(src='@/assets/curso/t4/tabla7.png', alt='Lista de ítems para verificación del calce con sus respectivos criterios: la línea de busto horizontal debe estar paralela al suelo; la pinza de busto con vértice a 2 cm del busto; holgura de busto de +4 cm ± 0,5 cm y de cintura de +2 cm ± 0,5 cm; caída de hombro entre 12 y 15 grados; sisa con despegue de 1 cm sin pellizcar; escote plano y sin aberturas; y costado perpendicular al piso.')
          figcaption Fuente: SENA, (2021).
        .col-lg-6.col-md-12.col-sm-12
          h3.mb-5 #[b Lista de chequeo del corpiño + manga]
          .titulo-sexto.color-acento-contenido
            h5 Tabla 8.
            | Lista de chequeo por ítems
          figure
            img.mb-1(src='@/assets/curso/t4/tabla8.png', alt='Criterios de revisión para el montaje de la manga: la diferencia entre la longitud de la sisa y la curva de la manga debe ser igual o menor a 0,3 cm; el embebido en la corona debe verse liso, sin frunces; los piquetes deben coincidir con 1 delantero, 2 espalda y hombro alineados; el giro del brazo debe permitir una elevación de 90° sin tirantez; y la costura del costado al bajomanga debe formar una línea continua y fluida.')
          figcaption Fuente: SENA, (2021).

    .row.mb-3(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo G. Transferencia de ajustes

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
      .col-lg-8.col-md-12.col-sm-12
        .row.bgamarillo2.p-5
          ul.lista-ul--color.fa-al.px-4
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Descoser el prototipo y superponer sobre el patrón.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Calcar nuevas líneas con ruleta dentada.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Redibujar curvas con regla francesa; intercambiar costados.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Etiquetar versión (v2, v3).
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-0 Si hace un cambio mayor a 1 cm o que afecte la sisa, el escote o la copa de la manga, debe volver a cortar la tela y hacer otra prueba.
      .col-lg-4.col-md-6.col-sm-12
        img(src='@/assets/curso/t4/img9.png', alt='')

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo H. Criterios de aprobación final 

    .row.bgfondo41(data-aos="fade").mb-5
      .col-lg-5.col-md-7.col-12
        img.mt-0.mover21(src='@/assets/curso/t4/img10.png', alt='').d-none.d-lg-block
      .col-lg-7.col-md-12.col-sm-12
        .row.mt-5
          .col-auto
            img(src='@/assets/curso/t4/img11.png', alt='')
          ul.lista-ul--color.fa-al.mt-4
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Todas las mediciones dentro de ± 0,5 cm de la tabla.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Arrugas radiales eliminadas; embebido uniforme en corona.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Movilidad completa sin distorsión del corpiño.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Costuras verticales y horizontales equilibradas.


    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo I. Registro y archivo de las observaciones

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-10.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          | Registro de observaciones
        figure
          img.mb-1(src='@/assets/curso/t4/tabla9.png', alt='Documentos requeridos al finalizar el proceso: la ficha técnica final debe incluir versión, medidas finales, holguras, fecha y responsable, en formato PDF etiquetado e impreso; las fotografías deben mostrar frente, costado y espalda con brazos relajados y elevados, presentadas como imagen con texto alternativo (alt-text); y los patrones definitivos deben ser el corpiño y la manga en talla 8 versión final, archivados en un cartapacio rígido rotulado.')
        figcaption Fuente: SENA, (2021).

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo J. Recomendaciones

    .row.fondo43
    
      .row.justify-content-center.align-items-center.mb-5.px-5
        .col-lg-12.col-md-12.col-sm-12
          .titulo-sexto.color-acento-contenido
            h5 Tabla 10.
            | Recomendaciones en ajuste de errores comunes
          figure
            img.mb-1(src='@/assets/curso/t4/tabla10.png', alt='Errores frecuentes en muestras de confección, organizados por zonas del cuerpo: corpiño (busto, cintura, hombro, sisa, escote, costado) y manga (corona, bíceps, puño). Para cada zona, se indica el error visible, la causa principal en el patrón y el ajuste sugerido. Los errores incluyen arrugas, bolsas, tirantez, huecos, escotes abiertos, inclinaciones, frunces, exceso o falta de ancho, entre otros, y los ajustes proponen modificaciones específicas en profundidad de pinzas, holguras, curvas, costuras y piezas del patrón.')
          figcaption Fuente: SENA, (2021).


    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo K. Lista de abreviaturas y símbolos a tener en cuenta
  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          | Lista de abreviaturas y símbolos
        figure
          img.mb-1(src='@/assets/curso/t4/tabla11.png', alt='Abreviaturas y símbolos utilizados en el instructivo de patronaje, con su significado y contexto de uso. Incluye referencias como CF (Centro Frente), CB (Centro Espalda), F (Frente), B (Espalda), H (Hombro) y versiones de patrón (v1, v2...). También se explican símbolos técnicos como Stay-stitch para estabilizar costuras, piquetes para ensamblar, líneas de frunce, tolerancias de medida (±0,5 cm) y márgenes de costura estándar (1 cm, 1,5 cm, etc.), todos clave para guiar la manipulación y confección de las piezas.')
        figcaption Fuente: SENA, (2021).






</template>

<script>
export default {
  name: 'Tema4',
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
