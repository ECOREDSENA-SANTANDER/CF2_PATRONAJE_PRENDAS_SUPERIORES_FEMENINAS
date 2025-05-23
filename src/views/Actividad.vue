<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje de bases superiores femeninas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b>Relacionar pasos y procedimientos del patronaje industrial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El patronaje industrial se caracteriza por su enfoque técnico y estandarizado, ¿cuál es una de sus principales ventajas frente al patronaje sobre medidas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite ajustes personalizados según el cuerpo de cada cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utiliza maniquíes en el proceso de construcción',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilita la producción masiva mediante escalado de tallas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se enfoca únicamente en prendas femeninas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 2,
          texto:
            'El trazo de básicos industriales se realiza generalmente en dos dimensiones, ¿cuál es el beneficio principal de trabajar en 2D en patronaje industrial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el margen de error.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permite ver la prenda desde todos los ángulos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilita la digitalización, transformación y escalado de moldes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo sirve para patrones de ropa interior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 3,
          texto:
            'En patronaje industrial, se utilizan programas CAD para mejorar la productividad, ¿cuál de los siguientes es un <em>software</em> especializado en patronaje?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Illustrator.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Audaces 360.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Lightroom.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Power Point.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 4,
          texto:
            'La prenda superior femenina incluye múltiples componentes técnicos, ¿qué elemento se considera parte del desarrollo de moldes en patronaje industrial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El maquillaje del modelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El forro de calzado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El cuello, el escote o el puño.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La etiqueta comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 5,
          texto:
            'Las tablas de medidas estandarizadas permiten agilizar el patronaje industrial, ¿en qué se basa una tabla de medidas para prendas femeninas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En la intuición del patronista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En medidas aleatorias tomadas en tienda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En estudios antropométricos regionales y específicos por tipo de prenda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'En el diseño gráfico de la prenda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 6,
          texto:
            'Las líneas de prendas superiores femeninas responden a contextos de uso diversos, ¿qué se entiende por “universo de vestuario” en patronaje industrial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema de costura internacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La colección exclusiva de una diseñadora.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El grupo de prendas según su función y ocasión de uso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un patrón base universal para todo tipo de cuerpos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 7,
          texto:
            'Uno de los objetivos del patronaje industrial es estandarizar procesos, ¿por qué es importante la estandarización en la confección de prendas superiores?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para evitar el uso de <em>software</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para garantizar uniformidad, control de calidad y producción a escala.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para reducir la creatividad del diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para eliminar el uso de moldes físicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 8,
          texto:
            'En el desarrollo técnico de prendas superiores, el despiece es una etapa clave, ¿qué se entiende por despiece en patronaje industrial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La destrucción de un molde defectuoso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La organización de los costos por prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La división de un patrón en sus diferentes piezas técnicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El corte manual sin guías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 9,
          texto:
            'El diseño técnico incluye la marcación de cada pieza, ¿cuál de los siguientes elementos debe incluirse en la marcación industrial de un molde?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre del comprador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La edad de la persona usuaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El número de piquetes, sentido del hilo y cantidad a cortar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El nombre comercial de la colección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
        {
          id: 10,
          texto:
            'El desarrollo de patrones industriales contempla diferentes líneas de vestuario, ¿qué caracteriza al patronaje industrial de prendas superiores femeninas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La precisión técnica para producir en masa diferentes modelos según tallas y estilos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El uso exclusivo de moldes rígidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El enfoque exclusivo en prendas de gala.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En el diseño gráfico de la prenda',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
          mensaje_incorrecto:
            'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has seleccionado la respuesta correcta.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
