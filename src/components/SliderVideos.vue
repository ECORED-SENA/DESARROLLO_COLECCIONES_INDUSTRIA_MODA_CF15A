<template lang="pug">
  div
    .row.justify-content-center
      .col-9
        p.mb-4 Para ampliar el conocimiento sobre tipos de camas y tipos de máquinas, se recomienda ver los videos que se presentan a continuación:

    .row.justify-content-center.mb-4
      .col-11
        .row
          .col-12.col-lg(v-for="item in items" :key="item.id")
            .button-sv.p-2(:class="item.id === selectedItem.id ? 'active' : ''" @click="clickElement(item)")
              span {{ item.title }}
    .row
      .col
        figure.mb-5
          .video
            iframe.video-sv(width="560" height="315" :src="selectedItem.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'SliderVideos',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedItem: this.items[0],
    }
  },
  methods: {
    clickElement(element) {
      this.selectedItem = element
    },
  },
}
</script>
