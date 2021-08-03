<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Actividades básicas manejo de máquinas de confección

    .row
      .col-12.col-md-4
        figure.mb-5
          img(src='@/assets/curso/tema4-imagen1.jpg')
          
      .col-12.col-md-8
        p.mb-5 A continuación, nos enfocaremos en el desarrollo y aplicación de conocimiento. Es por ello que se presentarán aspectos fundamentales para la puesta a punto de las máquinas. Y lo primero en que debemos centrar la atención es en los enhebrados y sus repercusiones.
          br
          br
          | Ahora se exponen mapas de enhebrado de cada tipo de máquina e instrucciones para la calibración de la puntada: 

        a.anexo.mb-4(:href="obtenerLink('/downloads/enebrados.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.
              |  Enhebrados de máquina plana, enhebrado caja bobina y ajuste de tensión de puntada.

        a.anexo.mb-4(:href="obtenerLink('/downloads/fileteadora.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.
              |  Enhebrado máquina fileteadora, ajuste de tensión.
        
        a.anexo.mb-4(:href="obtenerLink('/downloads/recubridora.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.
              |  Enhebrado máquina recubridora Collarín.

        a.anexo.mb-4(:href="obtenerLink('/downloads/puntadas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.
              |  Puntadas por pulgada.

        a.anexo.mb-4(:href="obtenerLink('/downloads/pespuntes.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p 
              strong Anexo.
              |  Ejercicios manejo y control de pedal.
  
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

<style lang="sass" scoped></style>
