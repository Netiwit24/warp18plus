<template lang="html">
  <div class="">
    <div class="boxBar">
      <h1>Index(มีรายชื่อเพจ)</h1>
      <router-link to="/index">Go to Index</router-link>
      <router-link to="/albumpage">Go to album</router-link>
      <router-link to="/imagepage">Go to imagepage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
.boxBar {
  border: 2px solid #36d053;
  width: 50vh;
}
</style>
