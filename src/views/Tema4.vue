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
      .tabla-a.color-acento-contenido.estilo1
        table(alt="Materiales y herramientas necesarias para el proceso de confección, organizados por áreas: en patronaje se usan patrones en cartulina, reglas, curvas, escuadra, ruleta y lápiz para crear moldes rotulados; en el corte, se emplea tela rígida como muselina o popelina sin elastano, tijeras, alfileres y marcadores para facilitar ajustes; la confección requiere máquina recta, hilo contrastante, plancha, almohadilla y descosedor, incluyendo guía para márgenes; en la prueba, se utilizan maniquí o modelo con medidas estándar, espejo y cámara para registrar vistas; y en la documentación, se archivan fichas técnicas, lista de chequeo y fotografías como evidencia del proceso.")
          caption Fuente: SENA, (2025)
          thead
              tr
                th.text-center(style="width:18%") Área
                th.text-center Elementos
                th.text-center Observaciones
          tbody
              tr
                td.text-bold Patronaje
                td Patrones en cartulina (cuerpo delantero espalda, manga), papel manila, regla recta 60 cm, curva francesa, curva sastre, escuadra, ruleta dentada, lápiz HB, cinta adhesiva.
                td Rotular piezas con nombre, talla y versión.
              tr
                td.text-bold Corte
                td Muselina o popelina 100 % algodón sin elastano (≈ 1,8 m), tijeras de sastre 9 - 10”, alfileres finos o pesos, marcador textil soluble, cinta métrica.
                td Tela rígida facilita la lectura de ajustes.
              tr
                td.text-bold Confección
                td Máquina recta (punzada 2,5 - 3 mm), hilo poliéster contraste, plancha de vapor, almohadilla sastre, descosedor.
                td Colocar guía magnética en placa para márgenes.
              tr
                td.text-bold Prueba
                td Maniquí regulable talla 8 o modelo vivo (busto 88 cm, cintura 68 cm), espejo de cuerpo entero, cámara / móvil.
                td Fotos frontales, laterales y posteriores.
              tr
                td.text-bold Documentación
                td Fichas técnicas impresas, #[em checklist], marcador de datos digitales (PDF).
                td Archivar patrones y evidencias fotográficas.


    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo B. Requerimientos previos necesarios

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.col-md-8.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          | Parámetros de las dimensiones del patrón base
        .tabla-a.color-acento-contenido.estilo1
          table(alt="Medidas base para la talla 8, esenciales en el patronaje de prendas superiores. El busto mide 88 cm con una holgura inicial recomendada de +4 cm; la cintura es de 68 cm con +2 cm de holgura; la altura de busto está entre 19 y 20 cm sin holgura adicional. La cabeza de manga mide 15 cm y el puño de manga, 24 cm, sin indicación de holgura inicial, ya que estas medidas dependen del diseño específico de la prenda.")
            caption Fuente: SENA, (2025)
            thead
              tr
                th.text-center(style="width:32%") Parámetro
                th.text-center Valor talla 8
                th.text-center Holgura inicial
            tbody
              tr
                td Busto
                td.text-center 88 cm
                td.text-center + 4 cm
              tr
                td Cintura
                td.text-center 68 cm
                td.text-center + 2 cm
              tr
                td Altura de busto
                td.text-center 19 – 20 cm
                td.text-center 0 cm
              tr
                td Cabeza de manga
                td.text-center 15 cm
                td.text-center --- 
              tr
                td Altura de busto
                td.text-center 24 cm
                td.text-center --- 

      .col-lg-7.col-md-12.col-sm-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-md-12.col-sm-12
            .tarjeta.peq.borde-redondo.p-4
              img(src='@/assets/curso/t4/img1.png', alt='')
              h3.mt-4.mb-4 Márgenes de costura estándar
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Costados 1 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Sisas y hombros 1,5 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Escote 1 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cintura 2 cm.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Bajo manga 3 cm.
          .col-lg-6.col-md-12.col-sm-12
            .tarjeta.peq.borde-redondo.px-4.pt-4.pb-1
              img(src='@/assets/curso/t4/img2.png', alt='')
              h3.mt-4.mb-4 Verificación inicial
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Confrontar la longitud de sisa frente + espalda con la curva de la manga (diferencia ≤ 0,3 cm).
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Confirmar perpendicularidad de “centro frente” y “centro atrás” respecto a la línea de cintura.

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
            .tarjeta.peq.borde-redondo.px-4.py-3
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
            .tarjeta.peq.borde-redondo.px-4.py-3
              img.px-2(src='@/assets/curso/t4/img5.png', alt='')
              h3.mt-3.mb-3 Manga
              ul.lista-ul--color.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Cabeza: altura 15 cm; piquete central (hombro).
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-0 Piquetes: 1 delantero, 2 espalda; largo de sisa frente / posterior rotulado.
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
        .tabla-a.color-acento-contenido.estilo1
          table(alt="Cinco pasos básicos para cortar una prenda en muselina. Primero, se plancha la tela y se coloca recta sobre la mesa. Luego, se alinean las líneas centrales del patrón y la dirección del hilo de la manga paralelos al borde de la tela. Se dibujan los contornos y líneas internas como busto, cintura y sisa, y se marcan pequeñas señales de corte. Después, se agregan márgenes de costura. Finalmente, se cortan las piezas sin levantar la tela y se identifican con etiquetas para frente, espalda y manga.")
            caption Fuente: SENA, (2025)
            thead
              tr
                th.text-center(style="width:10%") Paso
                th.text-center Descripción
            tbody
              tr
                td.text-bold.text-center 1
                td Planchar la muselina; colocar al hilo sobre la mesa.
              tr
                td.text-bold.text-center 2
                td Alinear centro frente, centro atrás y la línea de #[em grainline] de la manga paralelos al orillo.
              tr
                td.text-bold.text-center 3
                td Trazar contornos, líneas internas (busto, cintura, sisa) y piquetes (cortes de 2 mm).
              tr
                td.text-bold.text-center 4
                td Añadir márgenes estándar.
              tr
                td.text-bold.text-center 5
                td Cortar con tijeras sin levantar la tela. Etiquetar cada pieza (F, B, Manga).
        
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
              span.mb-2 Hilvanar manga al cuerpo: piquete hombro → piquetes, delantero / espalda → repartir embebido.
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
          | Orden del proceso de ensamblaje del prototipo
        .tabla-a.color-acento-contenido.estilo1
          table(alt="El orden de operaciones para confeccionar una prenda superior. Se inicia con una costura de refuerzo en las sisas usando puntada de 2,5 mm, seguida de la costura de pinzas con puntadas entre 2,5 y 3 mm y remates. Luego se unen los hombros y costados con apertura y planchado de costuras. Se realiza frunce en la corona de la manga con puntadas de 4 mm a 0,7 y 1 cm. Después se cierra el bajomanga y se plancha hacia atrás. Se monta la manga ajustando piquetes y frunces con puntadas de 2,5 a 3 mm. Finalmente, se plancha la cabeza de la manga con vapor medio sobre una almohadilla.")
            caption Fuente: SENA, (2025)
            thead
              tr
                th.text-center(style="width:12%") Orden
                th.text-center Operación
                th.text-center(style="width:35%") Observaciones
            tbody
              tr
                td.text-bold.text-center 0
                td #[em Stay-stitch] en sisas (1 cm)
                td Puntada 2,5 mm
              tr
                td.text-bold.text-center 1
                td Coser pinzas
                td Puntada 2,5 – 3 mm, remates
              tr
                td.text-bold.text-center 2
                td Hombros (1,5 cm)
                td Abrir y planchar
              tr
                td.text-bold.text-center 3
                td Costados (1 cm)
                td Abrir y planchar
              tr
                td.text-bold.text-center 4
                td Frunce en corona (0,7 cm y 1 cm)
                td Puntada 4 mm
              tr
                td.text-bold.text-center 5
                td Cerrar bajo manga (1 cm)
                td Planchar hacia atrás
              tr
                td.text-bold.text-center 6
                td Montar manga (casar piquetes, distribuir frunce)
                td Puntada 2,5 – 3 mm
              tr
                td.text-bold.text-center 7
                td Planchar cabeza de manga sobre almohadilla
                td Vapor medio




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
          .tabla-a.color-acento-contenido.estilo1
            table(alt="Lista de ítems para verificación del calce con sus respectivos criterios: la línea de busto horizontal debe estar paralela al suelo; la pinza de busto con vértice a 2 cm del busto; holgura de busto de +4 cm ± 0,5 cm y de cintura de +2 cm ± 0,5 cm; caída de hombro entre 12 y 15 grados; sisa con despegue de 1 cm sin pellizcar; escote plano y sin aberturas; y costado perpendicular al piso.")
              caption Fuente: SENA, (2025)
              thead
                tr
                  th.text-center(style="width:32%") Ítem
                  th.text-center Criterio
                  th.text-center(style="width:25%") OK / Ajustar
              tbody
                tr
                  td Línea busto horizontal
                  td Paralela al suelo
                  td OK / Ajustar
                tr
                  td Pinza busto
                  td Vértice a 2 cm del busto
                  td OK / Ajustar
                tr
                  td Holgura busto
                  td +4 cm ± 0,5 cm
                  td OK / Ajustar
                tr
                  td Holgura cintura
                  td +2 cm ± 0,5 cm
                  td OK / Ajustar
                tr
                  td Caída de hombro
                  td 12 – 15°
                  td OK/Ajustar
                tr
                  td Sisa
                  td Despegue 1 cm sin pellizcar
                  td OK / Ajustar
                tr
                  td Escote
                  td Plano, sin #[em gape]
                  td OK / Ajustar
                tr
                  td Costado
                  td Perpendicular al piso
                  td OK / Ajustar


        .col-lg-6.col-md-12.col-sm-12
          h3.mb-5 #[b Lista de chequeo del corpiño + manga]
          .titulo-sexto.color-acento-contenido
            h5 Tabla 8.
            | Lista de chequeo por ítems
          .tabla-a.color-acento-contenido.estilo1
            table(alt="Criterios de revisión para el montaje de la manga: la diferencia entre la longitud de la sisa y la curva de la manga debe ser igual o menor a 0,3 cm; el embebido en la corona debe verse liso, sin frunces; los piquetes deben coincidir con 1 delantero, 2 espalda y hombro alineados; el giro del brazo debe permitir una elevación de 90° sin tirantez; y la costura del costado al bajomanga debe formar una línea continua y fluida.")
              caption Fuente: SENA, (2025)
              thead
                tr
                  th.text-center(style="width:40%") Ítem
                  th.text-center Criterio
                  th.text-center(style="width:20%") OK / Ajustar
              tbody
                tr
                  td Longitud sisa vs. curva manga
                  td Diferencia ≤ 0,3 cm
                  td OK / Ajustar
                tr
                  td Embebido corona
                  td Liso, sin frunces visibles
                  td OK / Ajustar
                tr
                  td Piquetes
                  td 1 F, 2 B y hombro coinciden
                  td OK / Ajustar
                tr
                  td Giro de brazo
                  td Elevar 90° sin tintar
                  td OK / Ajustar
                tr
                  td Costura costado-bajo-manga
                  td 12 – 15°
                  td OK / Ajustar


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
        .tabla-a.color-acento-contenido.estilo1
          table(alt="Documentos requeridos al finalizar el proceso: la ficha técnica final debe incluir versión, medidas finales, holguras, fecha y responsable, en formato PDF etiquetado e impreso; las fotografías deben mostrar frente, costado y espalda con brazos relajados y elevados, presentadas como imagen con texto alternativo (alt-text); y los patrones definitivos deben ser el corpiño y la manga en talla 8 versión final, archivados en un cartapacio rígido rotulado.")
            caption Fuente: SENA, (2025)
            thead
              tr
                th.text-center(style="width:20%") Documentos
                th.text-center Contenido mínimo
                th.text-center(style="width:30%") Formato
            tbody
              tr
                td Ficha técnica final
                td Versión, medidas finales, holguras, fecha, responsable.
                td PDF etiquetado + impreso.
              tr
                td Fotografías
                td Frente, costado, espalda; brazos relajados y elevados.
                td Imagen + descripción #[em alt text].
              tr
                td Patrones definitivos
                td Corpiño T8 y final, Manga T8 y final.
                td Imagen + descripción #[em alt text].



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
          .tabla-a.color-acento-contenido.estilo2
            table(alt="Errores frecuentes en muestras de confección, organizados por zonas del cuerpo: corpiño (busto, cintura, hombro, sisa, escote, costado) y manga (corona, bíceps, puño). Para cada zona, se indica el error visible, la causa principal en el patrón y el ajuste sugerido. Los errores incluyen arrugas, bolsas, tirantez, huecos, escotes abiertos, inclinaciones, frunces, exceso o falta de ancho, entre otros, y los ajustes proponen modificaciones específicas en profundidad de pinzas, holguras, curvas, costuras y piezas del patrón.")
              caption Fuente: SENA, (2025)
              thead
                tr
                  th.text-center(style="width:10%") Zona
                  th.text-center(style="width:30%") Error frecuente 
                                                    br 
                                                    | (se presenta en el prototipo)
                  th.text-center(style="width:25%") Causa principal en el patrón
                  th.text-center Ajuste sobre el patrón
              tbody
                tr
                  td.text-bold(rowspan="2") Corpiño — busto
                  td Arrugas horizontales que tiran hacia el centro del busto.
                  td Falta de holgura o pinza de busto insuficiente.
                  td  
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Añadir 0,5 - 1 cm al costado en la línea de busto y redibujar sisa.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Profundizar la pinza busto 0,5 cm por cada lado.
                tr
                  td Bolsas verticales debajo del busto.
                  td Pinza de busto demasiado profunda o vértice llega al punto busto.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Reducir la profundidad de la pinza 0,5 - 1 cm.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Retrasar el vértice 1 - 1,5 cm hacia el costado.
                tr
                  td.text-bold(rowspan="2") Corpiño — cintura
                  td Exceso de tela (bolsa) en cintura espalda.
                  td Pinza de cintura poco profunda.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Aumentar la profundidad de la pinza cintura espalda 0,5 - 1 cm.
                tr
                  td Tirantez en cintura delantera.
                  td Falta de holgura o pinza busto muy grande.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Comprobar tabla de medidas; añadir 0,5 cm en cada costado a nivel cintura.
                tr
                  td.text-bold(rowspan="2") Corpiño — hombro / sisa
                  td Sisa pellizca o limita el movimiento.
                  td Sisa demasiado alta o curva muy cerrada.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Bajar la sisa 0,5 cm y suavizar la curva con regla francesa.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Añadir 0,3 cm de holgura en costado superior.                        
                tr
                  td Hueco / #[em gape] en sisa delantera.
                  td Sisa demasiado profunda o pinza busto insuficiente.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Subir la sisa 0,5 cm. 
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Profundizar pinza busto 0,3 - 0,5 cm.
                tr
                  td.text-bold Corpiño - escote
                  td Escote delantero se abre (#[em gape]).
                  td Escote demasiado recto o largo de hombro excesivo.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Reducir 0,5 cm en la línea de escote desde el hombro y redistribuir curva.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Ajustar inclinación de hombro si es necesario.                       
                tr
                  td.text-bold(rowspan="2") Corpiño — costado
                  td Costado inclinado hacia adelante.
                  td Exceso de ancho en espalda / falta en delantero.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Mover la costura costado 0,5 - 1 cm hacia la espalda en la línea de cintura y busto.
                tr
                  td Costado inclinado hacia atrás.
                  td Exceso de ancho en delantero / falta en espalda.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Mover la costura costado 0,5 - 1 cm hacia el delantero.
                tr
                  td.text-bold(rowspan="2") Manga - corona
                  td “Orejas” o puntas en la cima de la manga.
                  td Embebido insuficiente o corona demasiado alta.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Reducir altura de corona 0,5 - 1 cm y suavizar curva.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Añadir hilera de frunce para distribuir embebido.                      
                tr
                  td Frunces visibles o pliegues en corona.
                  td Exceso de embebido o corona muy baja.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Aumentar altura de corona 0,5 - 1 cm.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Disminuir frunce retirando 0,5 cm en la costura de manga desde piquete delantero a piquete espalda.
                tr
                  td.text-bold(rowspan="2") Manga — bíceps
                  td Tirantez al doblar el brazo.
                  td Ancho de manga insuficiente en bíceps.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Abrir la costura bajo manga 0,5 cm (total + 1 cm) y suavizar hacia puño.
                tr
                  td Exceso de tela en bíceps (arrugas horizontales).
                  td Ancho de manga excesivo.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Reducir 0,5 - 1 cm en cada lado de la costura bajo manga y suavizar hacia puño.
                tr
                  td.text-bold(rowspan="2") Manga — puño
                  td Puño muy ancho (CAE).
                  td Ancho de puño excesivo.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Reducir puño 0,5 cm por lado y comprobar longitud de costura bajo manga.
                tr
                  td Puño ajustado.
                  td Ancho de puño insuficiente.
                  td 
                    ul.lista-ul--color.gris.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Aumentar puño 0,5 cm por lado y prolongar costura bajo manga.



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
        .tabla-a.color-acento-contenido.estilo2
          table(alt="Abreviaturas y símbolos utilizados en el instructivo de patronaje, con su significado y contexto de uso. Incluye referencias como CF (Centro Frente), CB (Centro Espalda), F (Frente), B (Espalda), H (Hombro) y versiones de patrón (v1, v2...). También se explican símbolos técnicos como Stay-stitch para estabilizar costuras, piquetes para ensamblar, líneas de frunce, tolerancias de medida (±0,5 cm) y márgenes de costura estándar (1 cm, 1,5 cm, etc.), todos clave para guiar la manipulación y confección de las piezas.")
            caption Fuente: SENA, (2025)
            thead
              tr
                th.text-center(style="width:20%") Abreviatura / símbolo
                th.text-center(style="width:25%") Significado
                th.text-center Contexto dentro del instructivo
            tbody
              tr
                td CF
                td #[em Centre front] / centro frente.
                td Línea vertical de referencia en el patrón y en la prenda que divide el delantero en su eje medio; guía la colocación de cierres o botones.
              tr
                td CB
                td #[em Centre back] / centro espalda.
                td Línea vertical central de la espalda; se usa para alinear el patrón y para abrir la prenda en las pruebas.
              tr
                td F
                td #[em Front] / frente (manga).
                td Piquete simple que señala el lado delantero de la sisa de la manga.
              tr
                td B
                td #[em Back] / espalda (manga).
                td Dos piquetes que identifican el lado posterior de la sisa de la manga.
              tr
                td H
                td Hombro (manga).
                td Piquete central en la corona de la manga que coincide con la costura de hombro del corpiño.
              tr
                td v1, v2, v3...
                td Versión del patrón.
                td Indicador de iteraciones sucesivas tras cada ciclo de prueba y ajuste (ejemplo: “T - 8 v2”).
              tr
                td #[em Stay stitch]
                td Costura de estabilizado.
                td Línea de puntada recta a 1 cm del borde que evita que la sisa o el escote se deformen durante la manipulación.
              tr
                td ▲ / Corte de 2 mm
                td Piquete (#[em notch]).
                td Pequeño corte triangular o recto en los márgenes que ayuda a casar piezas al ensamblar.
              tr
                td ● ●
                td Líneas de frunce.
                td Dos hileras paralelas de puntada larga usadas para crear el embebido en la corona de la manga.
              tr
                td ± 0,5 cm
                td Tolerancia.
                td Margen de error aceptable al comparar las medidas finales con la tabla estándar.
              tr
                td 1 cm / 1,5 cm / 2 cm / 3 cm
                td Márgenes de costura.
                td Distancias agregadas al contorno del patrón según la zona (costados, sisas, cinturón, bajo de manga).          






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
