<template lang="pug">
  div
    .row.justify-content-center.mb-4(v-if="img === null")
      .col-12.mb-3(v-for="item in items" :key="item.id" :class="columns")
        .button-sv.gris.color-acento-botones.p-2(:class="item.id === selectedItem.id ? 'active' : ''" @click="clickElement(item)")
          span {{ item.title }}
    .row.justify-content-center.mb-4(v-if="img !== null")
      .col-9
        .row.justify-content-center
          .col-12.mb-3(v-for="item in items" :key="item.id"  :class="columns")
            .button-sv.gris.color-acento-botones.p-2(:class="item.id === selectedItem.id ? 'active' : ''" @click="clickElement(item)")
              span {{ item.title }}
      .col-3
        figure
          img(:src="img")
    .row
      .col
        .p-4.w-100.text-center(:style="{ backgroundColor: selectedItem.color }")
          p.mb-0(v-html="selectedItem.text")

</template>

<script>
export default {
  name: 'SliderCajas',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    img: {
      type: String,
      default: null,
    },
    columns: {
      type: String,
      default: 'col-lg-3',
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
