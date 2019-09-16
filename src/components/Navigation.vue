<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"><i class="material-icons navbar-icon">home</i>Home</router-link>
      <a id="hamburger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="ubeatNav" v-on:click="hamburgerClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>


    <div id="ubeatNav" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/album" class="navbar-item">
          <i class="material-icons navbar-icon">album</i>
          Albums
        </router-link>
        <router-link to="/artist" class="navbar-item">
          <i class="material-icons navbar-icon">person</i>
          Artists
        </router-link>
      </div>
      <div class="navbar-end">


        <div class="navbar-item">
          <div class="field is-grouped">
            <p id="globalSearchContainer" class="control has-icons-left">
              <input id="globalSearch" class="input is-small is-rounded" type="text" placeholder="Search..."/>
              <span class="icon is-small is-left is-black">
                <i class="material-icons">search</i>
              </span>
            </p>
          </div>
        </div>


        <router-link to="/playlist" class="navbar-item">
          <i class="material-icons navbar-icon">play_circle_outline</i>
          Playlists
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <i class="material-icons navbar-icon">account_box</i>
          Rafael Galan
        </a>

        <div class="navbar-dropdown">
          <router-link to="/settings" class="navbar-item">
            <i class="material-icons navbar-icon">build</i>
            Settings
          </router-link>
          <router-link to="/logout" class="navbar-item">
            <i class="material-icons navbar-icon">lock</i>
            Logout
          </router-link>
        </div>
      </div>
      </div>
    </div>
  </nav>
</template>

<style>
  #globalSearchContainer{
    width: 100%;
  }

  .navbar-icon{
    display: none;
  }

  @media (min-width: 1025px) {
    #ubeatNav .navbar-item{
      padding:15px;
    }

    .navbar-brand .navbar-item{
      padding:15px;
    }

    .navbar-icon{
      display: inline-block;
    }
  }
</style>

<script>
export default {
  methods: {
    hamburgerClick: function (event){
        if(event.target.tagName === 'SPAN')
        {
          let hamburger = event.target.parentNode;
        }
        else
        {
          let hamburger = event.target;
        }

        const target = hamburger.dataset.target;
        const $target = document.getElementById(target);
        
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        hamburger.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    },
  }
}
</script>