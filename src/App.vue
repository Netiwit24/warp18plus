<template lang="html">
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {
    this.$router.push('/index')
  },
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
