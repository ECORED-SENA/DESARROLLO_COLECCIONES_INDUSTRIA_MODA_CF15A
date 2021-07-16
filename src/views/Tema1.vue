<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Fundamentos básicos para aprender el manejo de máquinas de confección

    figure.mb-5
      img(src='@/assets/curso/tema1-imagen1.jpg')

    p En este apartado del componente formativo, se abordarán las generalidades, aplicaciones e importancia de la fundamentación técnica básica que debe tener un diseñador en máquinas de confección; conceptos básicos en puntadas, costuras, agujas, tejidos, entre otros; criterios específicos de la relación aguja-hilo, aguja-tejido, hilo-tejido, preparación y puesta a punto de las máquinas, especificaciones técnicas y de calidad en las operaciones de costura.  De igual manera, se abordarán temas pertinentes al cuidado y seguridad de las diferentes máquinas utilizadas en el proceso de confección. Por último, el manejo del pedal y lograr la calidad adecuada en las costuras se realizará a través de ejercicios específicos en tela hasta lograrlo.
    
    
  
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

<style lang="sass" scoped></style>
