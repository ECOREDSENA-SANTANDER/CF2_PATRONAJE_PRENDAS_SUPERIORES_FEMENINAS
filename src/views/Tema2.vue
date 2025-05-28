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
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/2_Anexo.pdf')" target="_blank")
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
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/3_Anexo.pdf')" target="_blank")
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
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=encNXGtE15Y" target="_blank")
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
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=Tq_3F32nynw&t=1759s" target="_blank")
                span Ver Video
                i.fas.fa-link

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Trazo básico de manga

    p El conocimiento de la anatomía del brazo es esencial para trazar correctamente las mangas, especialmente en el caso de mangas ceñidas o básicas, donde el ajuste y la movilidad dependen directamente de una construcción precisa. Comprender la forma, proporción y movilidad del brazo permite lograr un entalle adecuado y evitar tensiones o deformaciones en la prenda.

    .row.justify-content-center.align-items-start.mb-5(data-aos="fade-right")
      .col-lg-6.col-md-12.col-sm-12
        .row.bgamarillo.p-4
          p.mt-5 Los tipos de brazos más comunes, que deben tenerse en cuenta en el patronaje, son:
          ul.lista-ul--color.fa-al.mt-2
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Brazo recto.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Brazo curvado hacia adelante (natural).
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Brazo con volumen en bíceps o tríceps.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Brazo delgado.
            li.mb-0 
              i.fas.fa-check-circle
              span.mb-2 Brazo corto o largo en proporción al torso.
          .row.align-items-center.justify-content-center.mt-3.mb-4
            .col-auto
              img(src='@/assets/curso/t2/img10.png', alt='')
            .col
              p Identificar estas variaciones es clave para adaptar el diseño de la manga y lograr un calce funcional y estético.
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          | Tipos de brazos  
        figure
          img.mb-2(src='@/assets/curso/t2/fig8.png', alt='Cuatro tipos de brazos observados de perfil, clasificados por su volumen. De izquierda a derecha: brazos regulares, delgados, gruesos y muy gruesos.')
        figcaption Fuente: SENA, (2021).
    

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-lg-6.col-md-12.col-sm-12
        img(src='@/assets/curso/t2/img11.png', alt='')
        p.mt-3 Evaluar la posición del brazo en relación con el cuerpo es fundamental para asegurar una caída correcta de la manga. La ubicación de la manga en el centro del hombro debe ajustarse según la constitución corporal y la postura del usuario.
        p Existen dos defectos comunes en la posición del brazo que afectan directamente el entalle de la manga:
        ul.lista-ul--color.fa-al.mt-2
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-2 Brazo adelantado, que requiere mayor capacidad en la parte posterior de la manga.
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-2 Brazo atrasado, que exige ajustes en el delantero para evitar tensión o exceso de tela.
        p Este análisis permite lograr una manga funcional, bien entallada y sin deformaciones.
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          | Posición de brazos 
        figure
          img.mb-2(src='@/assets/curso/t2/fig9.png', alt='Tres posiciones del brazo en vista lateral: regular, adelantado y atrasado. Cada una muestra cómo varía la alineación del brazo respecto al centro del hombro, lo cual afecta el trazo y ajuste de la manga en el patronaje.')
        figcaption Fuente: SENA, (2021).

    .subt2.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Tipos de posición del brazo y su impacto en el trazado de la manga

    p La base superior es el molde que representa la forma del cuerpo desde el cuello hasta la cintura. Esta plantilla sirve como punto de partida para desarrollar prendas como blusas, camisetas, chaquetas, chalecos, corpiños e incluso vestidos. Su correcta elaboración garantiza un buen ajuste y facilita su transformación posterior según el diseño deseado.

    .row.justify-content-center.align-items-center.mt-5.mb-5(data-aos="fade-left")
      TabsB.color-acento-contenido.escala-grises
        .py-4.py-md-5(titulo="Brazo regular" :icono="require('@/assets/curso/t2/tab1-1.png')")
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
              p #[b Brazo regular:] 
              p El brazo se alinea con el centro del cuerpo. En este caso, ubicar el centro de la manga en el centro del hombro garantiza una caída equilibrada y sin ajustes adicionales.
            .col-sm-12.col-md-6.col-lg-3
              img(src='@/assets/curso/t2/img12.png', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Brazo adelantado" :icono="require('@/assets/curso/t2/tab1-2.png')")
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
              p #[b Brazo adelantado:]
              p Esta postura desplaza el brazo hacia adelante, arrastrando el omóplato y generando mayor volumen en la espalda. La parte posterior del torso se amplía, mientras que la delantera se acorta y aplana. En estos casos, el centro de la manga debe moverse hacia atrás respecto al hombro del corpiño, y también es necesario ajustar el patrón base, aumentando el largo posterior y reduciendo el anterior.
            .col-sm-12.col-md-6.col-lg-3
              img(src='@/assets/curso/t2/img13.png', alt='Texto que describa la imagen')
        .py-4.py-md-5(titulo="Brazo atrasado" :icono="require('@/assets/curso/t2/tab1-3.png')")
          .row.align-items-center.justify-content-center
            .col-sm-12.col-md-12.col-lg-8.mb-4.mb-md-0
              p #[b Brazo atrasado:]
              p Cuando el brazo se retrasa, se incrementa el hueco en el centro de la espalda, se reduce la prominencia del omóplato y disminuye la inclinación del hombro. Esto genera un aumento en el volumen del busto y una disminución del sector posterior del torso. El centro de la manga debe desplazarse hacia adelante respecto al centro del hombro del corpiño, y el patrón debe adaptarse cuidadosamente a estas proporciones para mantener el equilibrio en la prenda.
            .col-sm-12.col-md-6.col-lg-3
              img(src='@/assets/curso/t2/img14.png', alt='Texto que describa la imagen')

    .subt.mb-5(data-aos="fade-right")
      .row.align-items-center
        .col-md-auto.col-3
          img(src='@/assets/curso/t1/ico.png', alt='')
        .col-md-auto.col-9.ps-0
          h3.mb-0.text-black Análisis y comportamiento del patrón de manga

    p.mb-4 La manga es una pieza que envuelve el brazo y puede variar en diseño, forma y ajuste, pero su construcción siempre parte de un principio anatómico básico. Dos elementos clave en su desarrollo son el largo de manga y la altura o cabeza de manga.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color1.p-4.p-md-4.p-lg-5(data-aos="fade-right")
        .row.align-items-center
          img.mb-4(src='@/assets/curso/t2/img15.png', alt='Imagen decorativa.')
          .col-lg-5
            h2.mb-4.bgmorado Largo de manga: 
          p.mb-0 Se mide desde el punto acromio hasta la muñeca y se mantiene constante sin importar el tipo de prenda o estilo de la manga.
      .col-md.tarjeta.color2.p-4.p-md-4.p-lg-5(data-aos="fade-left")
        .row.align-items-center
          img.mb-4(src='@/assets/curso/t2/img16.png', alt='Imagen decorativa.')
          .col-lg-7
            h2.mb-4.bgmorado Cabeza de manga (altura): 
          p.mb-0 Puede calcularse a partir de una tabla de tallas, por deducción técnica o por valores estandarizados. Su altura influye directamente en el comportamiento de la prenda sobre el cuerpo.

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.col-md-12.col-sm-12
        .row.mb-4
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo Comportamiento de la cabeza de manga:
        ul.lista-ul--color.fa-al
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-4 Una cabeza de manga más alta aporta mayor estructura y definición al contorno del brazo, pero limita el movimiento, por lo que se asocia a prendas ajustadas o formales.
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-4 Una cabeza de manga más baja ofrece mayor comodidad y libertad de movimiento, aunque con menos estructura, lo cual es característico de prendas holgadas o deportivas.
        .row.justify-content-center.align-items-center.mb-5
          .col-auto
            img(src='@/assets/curso/t2/img17.png', alt='')
          .col
            .row.bgamarillo.px-3
              p.mt-4 En términos de uso:
              ul.lista-ul--color.gris.fa-al
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Cabeza de manga corta → prendas deportivas.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-2 Cabeza de manga alta → prendas formales.
                li.mb-0 
                  i.fas.fa-check-circle
                  span.mb-4 Altura intermedia → prendas casuales.
      .col-lg-6.col-md-12.col-sm-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          | Tipos de mangas
        figure
          img.mb-2(src='@/assets/curso/t2/fig10.png', alt='Esquema corporal con referencias a distintos largos de manga. Desde el hombro hacia la muñeca se indican las siguientes variantes: sin manga, coqueta, corta, hasta el codo y tres cuartos. Cada una corresponde a una longitud específica del brazo.')
        figcaption Fuente: SENA, (2021).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9.col-md-12.col-sm-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Cabeza de manga según cuadro de tallas")
            .row.align-items-center
              .col-lg-12
                p.mb-4 La altura de cabeza de manga definida por cuadros de tallas corresponde generalmente a prendas casuales. Esta medida es estandarizada y no considera el comportamiento específico de la prenda sobre el cuerpo, ni el ajuste requerido según el diseño o funcionalidad del modelo.
            .row
              .col-lg-5           
                .titulo-sexto.color-acento-contenido
                  h5 Figura 11.
                  | Cabeza de mangas
                figure
                  img.mb-2(src='@/assets/curso/t2/fig11.png', alt='Prenda superior de manga larga. La parte inferior de la manga está dividida en dos secciones que resaltan los puños y una zona adicional decorativa o funcional.')
                figcaption Fuente: SENA, (2021).
          .row.col-xl-11.m-auto(titulo="Cabeza de manga por medida deducida")
            .row.justify-content-center.align-items-center
              .col-lg-12
                p.mb-4 La altura de la cabeza de manga puede determinarse a partir del plano trabajado y del tipo de prenda. Para ello, se suman las medidas de recorrido de la sisa delantera y posterior, y el resultado se divide según el estilo de la prenda, lo que permite adaptar el patrón al nivel de ajuste requerido.
                .row.justify-content-center.align-items-center
                  .col-lg-8.col-md-12.col-sm-12
                    ul.lista-ul--color.fa-al
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Prenda deportiva: (sisa delantera + sisa posterior) ÷ 5.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-0 Prenda casual: (sisa delantera + sisa posterior) ÷ 4.
                      li.mb-0 
                        i.fas.fa-check-circle
                        span.mb-2 Prenda formal o sastre: (sisa delantera + sisa posterior) ÷ 3.
                    p.mb-2 Por otro lado, las cabezas de manga estandarizadas son medidas predefinidas utilizadas sin justificación técnica específica, comunes en procesos simplificados o automatizados.
                    p Aunque existen múltiples métodos y fórmulas para trazar la cabeza de manga, el enfoque descrito corresponde a la metodología del manual y puede aplicarse a cualquier línea. Lo esencial es entender la lógica de comportamiento de la manga en función del diseño.
                  .col-lg-4.col-md-6.col-12
                    img(src='@/assets/curso/t2/img19.png', alt='')
      .col-lg-3.col-md-5.col-12
        img(src='@/assets/curso/t2/img18.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row.mb-4
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo Medidas clave para mangas
        ul.lista-ul--color.fa-al
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-3 Circunferencia de brazo: alrededor de la parte más ancha, cerca de la axila.
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-3 Circunferencia de codo: alrededor del centro del codo.
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-4 Circunferencia de muñeca: justo por encima de la mano.
        p.mb-5 Estas medidas aseguran un trazo funcional, cómodo y coherente con el tipo de prenda a desarrollar.
        .row.justify-content-center.align-items-center
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
            .row.col-xl-11.m-auto(titulo="Largo total del brazo")
              .row.align-items-center
                p Se mide desde el punto de unión del hombro (donde también se toma el ancho de hombros), pasando por el codo ligeramente flexionado, hasta la articulación donde el antebrazo se une con la mano.                
            .row.col-xl-11.m-auto(titulo="Altura del codo")
              .row.align-items-center
                p Corresponde a la distancia entre la costura del hombro y el hueso del codo, siguiendo la línea natural del brazo.       
      .col-lg-5.col-md-12.col-sm-12.bgamarillomas
        SlyderF.circl-arrow.mb-4(columnas="col-lg-12 col-xl-12")
          .tarjeta.amarilla.py-3.px-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              | Medida de contornos en brazo 
            figure
              img.mb-1(src='@/assets/curso/t2/fig12.png', alt='Proceso de toma de medidas del brazo. Se utiliza una cinta métrica para registrar el contorno en la parte superior, el codo y la muñeca, así como el largo total desde el hombro hasta la muñeca, con el brazo ligeramente flexionado.')
            figcaption Fuente: SENA, (2021).
          .tarjeta.amarilla.py-3.px-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 13.
              | Figura 13. Medida de largo en brazo 
            figure
              img.mb-1(src='@/assets/curso/t2/fig13.png', alt='Medición del largo total del brazo. La cinta métrica se posiciona desde el punto alto del hombro, pasa por el codo y termina en el puño, con el brazo ligeramente flexionado.')
            figcaption Fuente: SENA, (2021).

    .row.mb-5(data-aos="fade-left")
      .col-lg-7.col-md-12.col-sm-12
        .row
          .col-auto
            h3.bgmorado.py-2.px-3.borde-redondo Trazo de cabeza de manga
    
    .row.justify-content-center.align-items-center.mb-4
      .col-auto
        img(src='@/assets/curso/t2/img20.png', alt='')
      .col
        p Aunque existen múltiples métodos y fórmulas para desarrollar la cabeza de manga, la clasificación presentada corresponde a la metodología utilizada en el manual y puede aplicarse a cualquier línea de diseño. Lo fundamental es comprender el comportamiento de la manga según el tipo de prenda, ya que esto define su forma, ajuste y funcionalidad.
    
    p.mb-4 En el desarrollo de curvas y líneas para la cabeza de manga, hay distintas formas de trazado. El enfoque mostrado en los videos del manual ofrece una visión general que reúne los trazos más comunes aplicados en diferentes diseños. Es importante recordar que el trazo de la manga está directamente relacionado con el diseño base de la prenda; por tanto, se considera un complemento dentro del proceso de patronaje.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-12.col-sm-12
        p.mb-4  Medidas necesarias para trazar la cabeza de manga:
        ul.lista-ul--color.fa-al
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-2 Recorrido de sisa delantera (obtenido del plano).
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-2 Recorrido de sisa posterior (obtenido del plano).
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-2 Tipo de cabeza de manga (según la prenda: deportiva, casual, formal).
          li.mb-0 
            i.fas.fa-check-circle
            span.mb-2 Largo total de la manga.
      .col-lg-6.col-md-8.col-12
        img(src='@/assets/curso/t2/img21.png', alt='')

    p.mb-5.text-center Estas variables aseguran un trazo técnico adecuado, adaptado al diseño y a la morfología del usuario.

    .tarjeta.color-primario.p-3.mb-4(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t2/img7.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Video – Trazo de manga y cabezas de manga.
              p.mb-0 Paso a paso para conocer el trazo de manga y cabezas de manga. 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=EAl_FBfkYUE" target="_blank")
                span Ver Video
                i.fas.fa-link

    .tarjeta.color-primario.p-3.mb-5(data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/t1/pdf.png")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1  Se invita a explorar el  PDF – Manual de patronaje básico para interpretación de diseños.
              p.mb-0 Otras formas para sacar o deducir la altura de cabeza de manga. Ver páginas 26 a la 44.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://repositorio.sena.edu.co/bitstream/handle/11404/4725/Manual_patronaje_basico_interpretacion_disenos.PDF;jsessionid=CDC8FDE9468D98E37FFD127332113A29?sequence=1" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.mt-5

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/t2/img22.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Cada una de estas fórmulas corresponde a medidas deducidas, lo que implica que antes de trazar una cabeza de manga, es fundamental analizar su comportamiento y funcionalidad sobre el cuerpo. Lo más importante es que la forma y altura de la cabeza de manga se ajusten al tipo de prenda y diseño a desarrollar, garantizando comodidad, movilidad y coherencia con el propósito de uso.




      

        






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
