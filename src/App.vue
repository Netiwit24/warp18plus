<template lang="html">
  <div id="app">
    <router-view :id="id" :set-id-album="setIdAlbum" :page="page" :set-id-page="setIdPage"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      page: ''
    }
  },
  computed: {},
  mounted () {
    this.$router.push('/')
  },
  methods: {
    setIdAlbum (id) {
      this.id = id
      console.log(id)
    },
    setIdPage (page) {
      this.page = page
      console.log(page)
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
