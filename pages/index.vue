<template>
  <div>
    <p v-for="(item, index) in computedList" :key="index">  {{ item.name }}  </p>
  </div>
</template>

<script>
  export default {
    async fetch() {
      const response = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=151')
      this.$store.commit('mytest/adicionar', response.results)
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