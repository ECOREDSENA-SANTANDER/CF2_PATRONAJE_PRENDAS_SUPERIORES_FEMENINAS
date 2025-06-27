<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Piezas complementarias

    p.mb-5 Estas piezas aportan tanto al diseño estético como a la funcionalidad de la prenda, y su forma varía según la interpretación del modelo.

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Botones y ojales

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-12.col-sm-12
        p.mb-4 Cumplen una función de cierre, pero también influyen en el diseño y acabado final de la prenda. El tamaño de los botones puede requerir ajustes en los moldes originales. Existen distintos tipos: planos, semirredondos, semiesféricos y esféricos, y su clasificación se da por línea y diámetro. Su elección debe responder tanto a criterios funcionales como de estilo.
        .titulo-sexto.color-acento-contenido
          h5 Figura 14.
          | Líneas en botones
        figure  
          img.mb-1(src='@/assets/curso/t3/fig14.svg', alt='Guía de tamaños de botones según su línea y diámetro, desde 7 mm hasta 5 cm. También se incluyen tipos de botones: planos, con oreja y de distintas formas, así como variaciones de ojales rectos, con ojo y con pestañas. La información está representada con formas y medidas proporcionales.')
        figcaption Fuente: SENA, (2021)
      .col-lg-6.col-md-8.col-12
        img(src='@/assets/curso/t3/img1.png', alt='')

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black El ojal

    .row.mb-5(data-aos="fade")
      .col-lg-1.col-md-2.col-2
        img(src='@/assets/curso/t3/img2.png', alt='').d-none.d-lg-block
      .col-lg-5.col-md-12.col-sm-12
        p Es una abertura en la tela diseñada para permitir el paso del botón. Su tamaño debe calcularse cuidadosamente según el diámetro del botón utilizado. Por ejemplo, para un botón de línea 40 (2,5 cm), el ojal debe medir entre 2,75 y 3 cm para facilitar el cierre sin comprometer la estética ni la funcionalidad. Un ojal demasiado grande puede dejar visibles zonas no deseadas del cuerpo, afectando el acabado de la prenda. Por eso, el ajuste debe ser preciso para lograr un cierre cómodo y seguro. 
        img(src='@/assets/curso/t3/img4.png', alt='')
      .col-lg-3.col-md-6.col-12
        .row.align-items-center
          .titulo-sexto.color-acento-contenido
            h5 Figura 15.
            | Aumento para ojal
          figure
            img.mb-1(src='@/assets/curso/t3/fig15.png', alt='Trazo técnico de prenda con indicación de ubicación para botones línea 40. Se señalan las distancias desde el borde y entre sí, así como la línea central y la línea de botonera. Las medidas están dadas en centímetros para garantizar precisión en la confección.')
          figcaption Fuente: SENA, (2021)
      .col-lg-3.col-md-5.col-12
        img.mt-5(src='@/assets/curso/t3/img3.png', alt='').d-none.d-lg-block

    p.mb-5 Pasos para realizar el aumento según ejemplo: 

    .row.mb-5
      .col-lg-8.col-md-12.col-sm-12
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Extensión de delantero")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 En el centro frente de la prenda se ubica un ojal de 0,3 cm que atraviesa la línea central. Los botones se colocan sobre esa misma línea, asegurando un cierre alineado y funcional. Esta disposición mantiene la simetría y estabilidad del diseño.  
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 16.
                    | Extensión de delantero  
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig16.png', alt='Patrón técnico del delantero derecho e izquierdo de una prenda. Se indican la línea del centro, la extensión para cruce y la ubicación de los botones. El cruce del delantero derecho avanza 0,3 cm sobre el izquierdo, formando la base de la botonera.')
                  figcaption Fuente: SENA, (2021)
          .row(numero="2" titulo="Montado de delanteros")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 Cuando los ojales están dispuestos de forma vertical, el primer y último botón deben colocarse alineados con el tope superior e inferior de sus respectivos ojales. Los botones intermedios se ubican centrados dentro de cada ojal, lo que garantiza una distribución uniforme y un cierre funcional y estético. 
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 17.
                    | Montado de delanteros 
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig17.png', alt='Trazo técnico del delantero de una prenda con ubicación de ojales y botones. El primero se coloca al tope superior del ojal, los siguientes al centro, y el último al tope inferior del ojal, siguiendo una distribución vertical simétrica.')
                  figcaption Fuente: SENA, (2021)
          .row(numero="3" titulo="Falsos")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 Falsos o vueltas, son piezas adicionales utilizadas para rematar bordes como dobladillos, escotes o puños, aportando limpieza y estructura al acabado final. Para crearlos, se traza su forma directamente sobre el patrón base y luego se copia como pieza independiente, con un ancho máximo recomendado de 5 a 6 cm.  
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 18.
                    | Falsos
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig18.png', alt='Moldes técnicos de una prenda sin mangas, con sus respectivas vueltas o falsos para escote y sisa en delantero y espalda. Cada pieza está diseñada para encajar con precisión en las curvas correspondientes, asegurando un acabado limpio en el borde.')
                  figcaption Fuente: SENA, (2021)
          .row(numero="4" titulo="Falsos continuos ")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 Este tipo de vueltas continuas se recomienda especialmente en prendas con hombros angostos, ya que permiten un acabado limpio y uniforme sin añadir volumen innecesario, facilitando el ajuste y la estructura en zonas reducidas. 
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 19.
                    | Falsos continuos 
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig19.png', alt='Moldes del delantero y la espalda de una prenda, junto con sus respectivas vueltas de escote. Se indica el sentido del hilo y la ubicación de una pinza en el delantero, así como la instrucción de cerrar la pinza en la vuelta de espalda.')
                  figcaption Fuente: SENA, (2021)
      .col-lg-4.col-md-6.col-12
        img(src='@/assets/curso/t3/img5.png', alt='')

    p.mb-5 #[b Carteras, perillas, martingala o plaquetas:] son piezas independientes que se utilizan para abotonar. A continuación, se presentan los pasos que se deben seguir para su realización:

    .row
      .col-lg-4.col-md-6.col-12
        img(src='@/assets/curso/t3/img6.png', alt='')

      .col-lg-8.col-md-12.col-sm-12
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Perilla")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 Son piezas independientes aplicadas a las prendas con el fin de permitir el cierre mediante botones. Su diseño y ubicación varían según el tipo de prenda y la función que cumplen.  
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 20.
                    | Perilla
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig20.png', alt='Dos variaciones del molde delantero de una prenda. Ambas incluyen pinzas de busto y detalles marcados en línea punteada para indicar cortes o aberturas. La figura de la derecha incorpora una abertura central con doblez y marcas de referencia.')
                  figcaption Fuente: SENA, (2021)
          .row(numero="2" titulo="Pieza perilla")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2.mb-4 Para realizar correctamente el rectángulo de la perilla, realizar estos pasos: 
              ol.lista-ol--cuadro.lista-ol--separador.fa-ol.px-3
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 1
                  | Definir las medidas base de la perilla según el diseño (largo y ancho).
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 2
                  | Aumentar el dobladillo: agregar aproximadamente 3 cm en el borde inferior o superior, dependiendo de la orientación.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-black 3
                  | Añadir los márgenes de costura: sumar 1 cm a cada lado del rectángulo para facilitar el montaje.
              .row.px-3.mt-4
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 21.
                    | Pieza perilla 
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig21.png', alt='Tres elementos relacionados con un diseño de prenda superior. A la izquierda, un molde delantero con abertura vertical central y tres botones alineados. En el centro, una pieza rectangular que funciona como perilla o plaqueta. A la derecha, el mismo molde con la abertura integrada de forma limpia, sin botones visibles.')
                  figcaption Fuente: SENA, (2021)
          .row(numero="3" titulo="Extensión en frente")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 Para crear una perilla para camisa o blusa, se debe dibujar directamente sobre el patrón base en el centro frente. Luego, se calcula el margen de costura necesario (generalmente 1 cm a cada lado) y se recorta el exceso de patrón si es necesario, dejando solo la línea de referencia donde se unirá la perilla como pieza aparte. Este método asegura un montaje limpio, preciso y alineado con el diseño de la prenda.
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 22.
                    | Extensión en frente 
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig22.png', alt='Molde delantero de prenda superior con indicación del hilo de la tela en dirección vertical. En el costado derecho se incluyen líneas punteadas y marcadas, que corresponden a una extensión para formar una cartera interna o perilla.')
                  figcaption Fuente: SENA, (2021)
          .row(numero="4" titulo="Perilla separada")
            .col-md-12.mb-4.mb-md-0
              p.px-3.mt-2 Para crear el patrón de la perilla aplicada al escote, se traza siguiendo la forma curva del escote sobre el patrón base. Una vez definida la silueta, se copia como pieza independiente respetando esa curvatura. Luego, se agregan los márgenes de costura necesarios (generalmente 1 cm en todo el contorno), asegurando un ajuste limpio y preciso al unirla con la prenda. Esta perilla permite un acabado funcional y estético en escotes redondeados o en V.
              .row.px-3
                .col-auto
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 23.
                    | Perilla separada
                  figure
                    img.mb-1(src='@/assets/curso/t3/fig23.png', alt='Tres piezas relacionadas con una prenda superior. A la izquierda, el molde delantero sin margen de abertura. Al centro, una pieza adicional que funciona como perilla. A la derecha, el molde completo con la perilla integrada y una fila vertical de botones sobre el centro frente. Cada parte incluye la indicación del hilo en sentido vertical.')
                  figcaption Fuente: SENA, (2021)

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1 Cuellos

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Escotes, cuellos y solapas

    .row.fondo31

      .row.align-items-end.mb-5(data-aos="fade-left").px-3.mx-3
        .col-lg-4.col-md-6.col-12
          img(src='@/assets/curso/t3/img7.png', alt='')
        .col-lg-4.col-md-12.col-12
          .row
            .col-auto
              img(src='@/assets/curso/t3/img8.png', alt='').d-none.d-lg-block
            p.mt-4 Al diseñar cuellos, lo primero que se debe considerar es la base y forma del escote, ya que el cuello funciona como una extensión que se une a ese escote, tanto en el delantero como en la espalda. Los escotes se trazan como modificaciones del patrón base, ajustados según el diseño, y se definen por dos dimensiones: ancho y largo.
            p El ancho del escote se mide desde el punto cuello-hombro hacia el acromio o siguiendo el recorrido del hombro, según la estructura de la prenda. Estas medidas determinan la forma final del escote y, en consecuencia, la forma y montaje del cuello o solapa.
        .col-lg-4.col-md-6.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 24.
            | Cuello hombro
          figure
            img.mb-1(src='@/assets/curso/t3/fig24.png', alt='Prenda sin mangas vista de frente y de espalda, con cuello camisero resaltado en color. El cuello está compuesto por pie y pala, ajustado alrededor del cuello de la figura. Las líneas punteadas indican proporciones del cuerpo y ejes de referencia.')
          figcaption Fuente: SENA, (2021)

      p.mb-4.text-center Los largos, son aquellos que se dan por centros, bien sea centro frente o centro atrás.

      .row.justify-content-center.align-items-end.mb-5(data-aos="fade-right")
        .col-lg-5.col-md-7.col-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 25.
            | Curva disímil  
          figure
            img.mb-1(src='@/assets/curso/t3/fig25.png', alt='Trazo del escote delantero con la indicación de una curva para el cuello. Se observa un detalle superior con dos piezas marcadas como D (dobladillo) y P (pie del cuello), donde se señala que la curva de unión es diferente a la del escote base.')
          figcaption Fuente: SENA, (2021)
        .col-lg-5.col-md-7.col-12
          img(src='@/assets/curso/t3/img9.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-6.col-12
        .row.bgamarillo.borde-esquina.align-items-end
          .row.mb-5.mt-5
          .row.mb-4
          .col-auto.mt-5
            img.mt-5.px-4(src='@/assets/curso/t3/img10.png', alt='')
          p.mt-4.mb-4.px-4 Los escotes toman su nombre según la forma que se genera al unir los puntos de ancho y largo en el trazo del delantero o posterior. Esta unión define visual y estructuralmente el tipo de escote, lo que permite clasificarlo y nombrarlo de acuerdo con su silueta final.
      .col-lg-4.col-md-6.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 26.
          | Escotes
        figure
          img.mb-1(src='@/assets/curso/t3/fig26.png', alt='Prenda con capucha, vista desde el frente y la espalda. La capucha está señalada en la parte superior de la cabeza, cubriendo desde el cuello hasta el cráneo, adaptándose a la forma de la cabeza y unida al escote de la prenda.')
        figcaption Fuente: SENA, (2021)
      .col-lg-4.col-md-6.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 27.
          | Escote cuadrado
        figure
          img.mb-1(src='@/assets/curso/t3/fig27.png', alt='Prenda sin mangas, vista de frente y de espalda. Se destaca una capucha amplia que cubre la cabeza y cae hacia los lados del cuello, unida al escote. Las líneas punteadas indican ejes de proporción en la prenda.')
        figcaption Fuente: SENA, (2021)


    .row.justify-content-center.align-items-center.mb-5.fondo32(data-aos="fade")
      .col-lg-4.col-md-6.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 28.
          | Escotes
        figure
          img.mb-2.mt-4(src='@/assets/curso/t3/fig28.png', alt='Molde de prenda superior con capucha. Se identifican dos piezas: una base con escote profundo al centro y una pieza superior que corresponde a la capucha. Ambas se conectan a través de curvas complementarias para permitir el ensamble adecuado. Se usan líneas guía para marcar las uniones entre las partes.')
        figcaption Fuente: SENA, (2021)
      .col-lg-5.col-md-6.col-sm-12.bgmoradonuevo
        SlyderF.circl-arrow.mb-4(columnas="col-lg-12 col-xl-12")
          .tarjeta.clara.py-2.px-0.pb-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 29.
              | Escote redondo 
            figure
              img.mb-1(src='@/assets/curso/t3/fig29.png', alt='Prenda sin mangas con canesú en la parte superior delantera y trasera. Estas piezas, ubicadas en los hombros y parte alta del pecho y espalda, permiten cortes estructurales o decorativos. Se marcan sobre una figura de cuerpo completo con líneas de proporción.')
            figcaption Fuente: SENA, (2021)
          .tarjeta.clara.py-2.px-0.pb-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 30.
              | Escote en “V”
            figure
              img.mb-1(src='@/assets/curso/t3/fig30.png', alt='Prenda sin mangas con cuello decorativo tipo babero. Este cuello rodea el escote delantero y trasero, adaptándose al contorno del cuello de la figura. Se posiciona sobre la parte superior del torso, resaltando la zona del cuello con una forma redondeada.')
            figcaption Fuente: SENA, (2021)
          .tarjeta.clara.py-2.px-0.pb-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 31.
              | Escote en “U”
            figure
              img.mb-1(src='@/assets/curso/t3/fig31.png', alt='Prenda sin mangas con cuello tipo solapa. La parte delantera tiene una abertura central con solapas que se doblan hacia afuera desde el escote, dando forma estructurada al cuello. Incluye un botón decorativo en el centro frontal. El diseño cubre el torso hasta la línea de la cintura.')
            figcaption Fuente: SENA, (2021)
      p.pt-5.px-5 Los nombres de los escotes y cuellos pueden variar según el entorno comercial o de moda, pero lo más relevante en patronaje es comprender su funcionamiento técnico y cómo deben comportarse sobre el cuerpo.
      p.px-5 En el trazo de cuellos, se trabaja desde una lógica funcional, no comercial. Por eso, en patronaje técnico, todos los cuellos se clasifican en tres grandes grupos según su forma de construcción:

    .row.mb-5
      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bgrosada.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t3/tar1-ia.png', alt='Texto que describa la imagen')
          p.px-3.mb-4.mt-3.text-center #[b Cuellos por medida de contorno:] se desarrollan a partir del recorrido completo del escote (delantero y posterior).

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bgrosada.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t3/tar1-ia.png', alt='Texto que describa la imagen')
          p.px-3.mb-4.mt-3.text-center #[b Cuellos por unión de hombro:] se construyen a partir del punto de unión entre el escote y la línea de hombro.

      .col-sm-6.col-md-12.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.bgrosada.p-4
          .row.justify-content-center.mb-4
            .col-auto
              img(src='@/assets/curso/t3/tar1-ia.png', alt='Texto que describa la imagen')
          p.px-3.mb-0.mt-3.text-center #[b Cuellos por extensión:] surgen como prolongación del mismo patrón, sin pieza adicional, y se pliegan o doblan sobre la prenda.

    .tarjeta.color-primario.p-3(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t2/img7.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1  Video – Trazo de escotes y tipo de cuellos.
              p.mb-0 Paso a paso para el trazo de escotes y tipos de cuellos. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Fd19HkRegQQ" target="_blank")
                span Ir al sitio
                i.fas.fa-link

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Bolsillos

    p.mb-5 Existen diferentes clases de bolsillos y unas variantes que dependen del diseño requerido. A continuación, se relacionan los más representativos:

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-12.col-md-12.col-sm-12
        TabsA.color-acento-botones
          .tarjeta.color-primario-claro.p-4(titulo="Bolsillo básico")
            .row.justify-content-center
              .col-lg-6.col-md-6.col-sm-12
                p Este tipo de bolsillo es versátil y puede aplicarse en prendas como blusas, vestidos o camisetas. Para su construcción, lo primero es definir el tamaño según el diseño. Por ejemplo, se puede iniciar con un rectángulo de 6 x 12 cm.
                p Desde el centro del borde inferior, se prolongan 2,5 cm hacia abajo, y luego se unen ambos extremos inferiores con ese punto, formando una base ligeramente en pico. Finalmente, se agregan márgenes de costura en todo el contorno y dobladillo en el borde superior para su acabado.
              .col-lg-5.col-md-5.col-sm-12
                .titulo-sexto.color-acento-contenido
                  h5 Figura 32.
                  | Escote redondo 
                figure
                  img.mb-1(src='@/assets/curso/t3/fig32.png', alt='Bolsillo de forma rectangular con una terminación en punta en la parte inferior. Sus medidas son 6 cm de ancho por 12 cm de largo, con un ángulo inferior de 2,5 cm. Está ubicado en el lado izquierdo del delantero de una prenda superior, y se sugiere incluir márgenes para costura y dobladillo.')
                figcaption Fuente: SENA, (2021)
          .tarjeta.color-primario-claro.p-4(titulo="Bolsillo con pliegue")
            .row.justify-content-center
              .col-lg-6.col-md-6.col-sm-12
                p Este tipo de bolsillo se construye a partir de un rectángulo base, cuyo tamaño debe definirse según el diseño de la prenda. Por ejemplo, se puede iniciar con un rectángulo de 6 cm x 12 cm.
                p A continuación, se corta el rectángulo por la mitad en sentido vertical y se inserta el espacio necesario para el pliegue en esa división, de acuerdo con el volumen deseado. Una vez ajustada la forma, se agregan los márgenes de costura alrededor del contorno y el dobladillo en el borde superior.
              .col-lg-5.col-md-5.col-sm-12
                .titulo-sexto.color-acento-contenido
                  h5 Figura 33.
                  | Escote redondo 
                figure
                  img.mb-1(src='@/assets/curso/t3/fig33.png', alt='Diferentes tipos de bolsillos decorativos diseñados para prendas superiores. Incluye bolsillos rectangulares y con terminaciones en ángulo. Algunos modelos tienen detalles verticales marcados al centro, y uno de ellos incorpora una tapa. Las dimensiones varían entre 3 y 6 cm de ancho, y entre 3,5 y 5 cm de alto, con sugerencias de costura indicadas por líneas punteadas.')
                figcaption Fuente: SENA, (2021)





</template>

<script>
export default {
  name: 'Tema3',
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
