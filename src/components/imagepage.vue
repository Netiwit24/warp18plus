<template>
  <div class="hello">
    <div id="app">
      <div v-if="ready" class="">

        <button v-if="authorized" @click="logout()" class="btn btn-default">Logout</button>
        <button v-else="authorized" @click="login()" class="btn btn-default">Login</button>

        <h1>Warp</h1>
          <router-link to="/albumpage">Back</router-link>
        <router-view></router-view>
        <br><br>

        <div v-if="authorized" class="">
          <div class="row">
            <div class="col-md-6">
              <img v-for="photo in photos" :src="photo.images[5].source" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div v-else="ready" class="">
        <center>
          <img src="/static/warp.gif" alt="" width="200px" onClick="location.reload()"/>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
/* global FB */
import Hello from './Hello'

export default {
  name: 'imagepage',
  props: ['id'],
  components: {
    Hello
  },
  data () {
    return {
      albums: [],
      photos: [],
      pagename: [],
      profile: {},
      ready: false,
      authorized: false
    }
  },
  methods: {
    getAlbums () {
      let vm = this
      FB.api('/cupamag/albums', {fields: ['cover_photo', 'name']}, function (response) {
        console.log(response)
        vm.$set(vm, 'albums', response.data)
      })
    },
    getPhotosByAlbumId (albumId) {
      let vm = this
      FB.api('/' + albumId + '/photos', {fields: ['images']}, function (response) {
        console.log(response)
        vm.$set(vm, 'photos', response.data)
      })
    },
    getProfile () {
      let vm = this
      FB.api('/me', function (response) {
        console.log(response)
        vm.$set(vm, 'profile', response)
      })
    },
    login () {
      let vm = this
      FB.login(function (response) {
        vm.statusChangeCallback(response)
      }, {scope: 'publish_actions'})
    },
    logout () {
      let vm = this
      FB.logout(function (response) {
        vm.statusChangeCallback(response)
      })
    },
    statusChangeCallback (response) {
      let vm = this
      vm.ready = true
      console.log('statusChangeCallback')
      console.log(response)
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile()
        vm.getAlbums()
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    }
  },
  mounted () {
    this.getPhotosByAlbumId(this.id)
    let vm = this
    // window.fbAsyncInit = () => {
    FB.init({
      appId: '365137310495361',
      cookie: true,
      xfbml: true,
      version: 'v2.8'
    })
    FB.getLoginStatus(function (response) {
      vm.statusChangeCallback(response)
    })
    // }
  }
}
</script>

<style>
html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #EDF7FF;
  text-align: center;
  padding: 30px;
}
.box {
  background-color: #B6E3F6;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
}/*
img {
  width: 100%;
}*/
</style>
