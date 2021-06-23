<template>
  <div>
    <client-only>
      <!-- this component will only be rendered on client-side -->
      nada

      <!-- loading indicator, rendered on server-side -->
    </client-only>
    <!-- <p v-for="(item, index) in computedList" :key="index">  {{ item.name }}  </p> -->
    {{ $store.getters["mytest/myList"]  }}
  </div>
</template>

<script>
  export default {
    async fetch() {
      const response = await this.$axios.$get('https://api.json-generator.com/templates/RJ2IEMY493l2/data?delay=10000')
      this.$store.commit('mytest/adicionar', response)
    },
    data () {
      return {
        dados: undefined
      }
    },
    computed: {
      computedList() {
        return this.$store.getters["mytest/myList"]
      }
    }
  }
</script>