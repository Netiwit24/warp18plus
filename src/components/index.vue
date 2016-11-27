<template lang="html">
  <div class="">
    <div class="box">
      <h1>Warp</h1>
      <h5>Select PAGE</h5>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('cupamag')">Cup A</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('cupdmag')">Cup D</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('cupemag')">Cup E</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('Angels.mag2')">Sexy angel</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('1269999136383578')">18+</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('1677041912621580')">k-girl</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('1488731304764039')">Makrid</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('1647102408856768')">Leo1991 Studio	</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('812938462158071')">Intent Art Gallery</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('798627650219522')">Remembrance Life</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('136276129896856')">Chayang Vintage Photographer</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('203413816686770')">Guypic</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('Oatgrayshirt')">Oat Nattawut Jongutsah</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('820679761371818')">Wonderful Gallery</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('833137843460451')">anp.k</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('1666155086932470')">TuaTung Photographer</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('437871096289260')">ICEZ PHOTO</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('487003051473640')">Slotmxcn</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('820679761371818')">F/1352</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('695316487270076')">Wenge.</h5></router-link>
      </div>
      <div class="boxBar">
        <router-link to="/albumpage"><h5 @click="setIdPage('agirlmag')">a girl</h5></router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['setIdPage'],
  data () {
    return {}
  },
  components: {}
}
</script>

<style lang="css">
.boxBar {
  border: 2px solid #36d053;
}
</style>
