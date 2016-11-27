้เด<template>

  <div class="hello">
    <div id="app">
      <div v-if="ready" class="">

        <button v-if="authorized" @click="logout()" class="btn btn-default">Logout</button>
        <button v-else="authorized" @click="login()" class="btn btn-default">Login</button>

        <h1>Warp 18+</h1>
        <h2>Hi!! {{ profile.name }} Welcome</h2>

        <router-link to="/">ไปหน้าแรก</router-link>
        <router-view :id="id"></router-view>

        <div v-if="authorized" class="">
          <div class="row">
            <div class="col-md-8">
              <div v-for="album in albums" v-if="album.cover_photo" class="box">
                <h1>{{ album.name }}</h1>
                <router-link to="/imagepage"><img width = '100%' @click="setIdAlbum(album.id)" :src="'https://graph.facebook.com/' + album.cover_photo.id + '/picture'" alt=""></img></router-link>
                <h1>{{album.id }}</h1>
              </div>
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
  name: 'albumpage',
  props: ['id', 'setIdAlbum', 'page', 'setIdPage'],
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
      re: true,
      authorized: false
    }
  },
  methods: {
    getAlbums () {
      let vm = this
      FB.api('/' + this.page + '/albums', {fields: ['cover_photo', 'name']}, function (response) {
        console.log(response)
        vm.$set(vm, 'albums', response.data)
      })
    },
    getPhotosByAlbumId (albumId) {
      let vm = this
      FB.api('/' + albumId + '/photos', {fields: ['images']}, function (response) {
        console.log(response)
        vm.$set(vm, 'photos', response.data)
        console.log(albumId)
        return albumId
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
      vm.re = false
      console.log('statusChangeCallback')
      console.log(response)
      console.log(vm.re)
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
