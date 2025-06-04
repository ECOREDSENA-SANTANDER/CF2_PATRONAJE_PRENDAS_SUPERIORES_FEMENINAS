<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta un esquema que sintetiza los elementos clave del  componente formativo Patronaje de Bases Superiores Femeninas. El proceso inicia con el reconocimiento de las herramientas y del entorno necesarios para el levantamiento de moldes, guiado por la metodología del manual de patronaje del SENA. Para ello, es fundamental contar con un cuadro de tallas definido, acorde con la talla base que se va a trabajar. Luego, se abordan las piezas complementarias, esenciales para comprender las dimensiones y proporciones de la prenda en relación con el cuerpo.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.png", alt="Esquema de contenido sobre patronaje de bases superiores femeninas, dividido en cuatro grandes bloques: Patronaje, que abarca tipos, procedimientos y metodologías; Patronaje base de prendas femeninas, que incluye el trazo de corpiño, traslado de pinzas, sistema de ajuste y manga básica; Piezas complementarias, como cuellos y bolsillos; y Comprobación del patrón base, donde se consideran materiales, insumos y el ensamblaje final para su verificación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
