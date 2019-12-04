<template>
  <div>
    <div class="navbar-fixed">
      <nav class="grey darken-3">
        <div class="nav-wrapper navContainer">
          <router-link :to="homePage" class="navLogo">
            UBeat
          </router-link>
          <ul class="right">
            <li class="hide-on-small-only">
              <div class="customNavItem">
                <a href="#" v-on:click="toggleSearch">
                  <i class="material-icons">
                    search
                  </i>
                </a>
                <div id="navSearchContainer" class="input-field hide">
                  <input
                    id="navSearchInput"
                    v-model="searchText"
                    v-on:keydown.enter="search"
                    v-on:blur="toggleSearch"
                    type="search"
                    placeholder="Search..."
                    required
                  />
                </div>
              </div>
            </li>
            <li
              class="hide-on-small-only"
              v-on:mouseenter="showDropdown"
              v-on:mouseleave="hideDropdown"
              v-on:click="toggleDropdown"
            >
              <a class="dropdown-trigger" href="#">
                {{ user.name }}
                <i class="material-icons right">
                  arrow_drop_down
                </i>
              </a>

              <ul id="navDropdown" class="dropdown-content">
                <li>
                  <router-link :to="playlistsPage">
                    <i class="material-icons navbar-icon">
                      play_circle_outline
                    </i>
                    Playlists
                  </router-link>
                </li>
                <li class="divider"></li>
                <li>
                  <router-link :to="settingsPage" class="navbar-item">
                    <i class="material-icons navbar-icon">
                      build
                    </i>
                    Settings
                  </router-link>
                </li>
                <li>
                  <router-link :to="userPage" class="navbar-item">
                    <i class="material-icons navbar-icon">
                      account_circle
                    </i>
                    Profile
                  </router-link>
                </li>
                <li>
                  <router-link :to="signupPage" class="navbar-item">
                    <i class="material-icons navbar-icon">
                      build
                    </i>
                    Sign Up
                  </router-link>
                </li>
                <li>
                  <router-link :to="loginPage" class="navbar-item">
                    <i class="material-icons navbar-icon">
                      build
                    </i>
                    Login
                  </router-link>
                </li>
                <li>
                  <router-link :to="logoutPage" class="navbar-item">
                    <i class="material-icons navbar-icon">
                      lock
                    </i>
                    Logout
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="hide-on-med-and-up">
              <a href="#" data-target="sideNav" class="sidenav-trigger ">
                <i class="material-icons">menu</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <ul id="sideNav" class="sidenav">
      <li>
        <router-link class="sidenav-close" :to="homePage">
          <i class="material-icons">
            home
          </i>
          Home
        </router-link>
      </li>
      <li>
        <a class="customNavItem">
          <i class="material-icons">
            search
          </i>
          <input
            id="sideNavSearchInput"
            type="text"
            v-model="searchText"
            v-on:keydown.enter="search"
            placeholder="Search..."
          />
        </a>
      </li>
      <li class="divider"></li>
      <li>
        <router-link class="sidenav-close" :to="playlistsPage">
          <i class="material-icons">
            play_circle_outline
          </i>
          Playlists
        </router-link>
      </li>
      <li class="divider"></li>
      <li>
        <router-link class="sidenav-close" :to="settingsPage">
          <i class="material-icons">
            build
          </i>
          Settings
        </router-link>
      </li>
      <li>
        <router-link class="sidenav-close" :to="userPage">
          <i class="material-icons">
            account_circle
          </i>
          Profile
        </router-link>
      </li>
      <li>
        <router-link class="sidenav-close" :to="signupPage">
          <i class="material-icons">
            lock
          </i>
          Sign Up
        </router-link>
      </li>
      <li>
        <router-link class="sidenav-close" :to="loginPage">
          <i class="material-icons">
            lock
          </i>
          Login
        </router-link>
      </li>
      <li>
        <router-link class="sidenav-close" :to="logoutPage">
          <i class="material-icons">
            lock
          </i>
          Logout
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdownOpen {
  display: block;
  opacity: 1;
  position: relative;
}
.navLogo {
  font-weight: bold;
  font-size: 2.1rem;
}

#sideNavSearchInput {
  font-size: 100%;
}

.customNavItem {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 699px) and (min-width: 600px) {
  .navContainer {
    padding-left: 20px;
  }

  #navSearchContainer {
    width: 130px;
  }
}

@media only screen and (max-width: 993px) and (min-width: 700px) {
  .navContainer {
    padding-left: 20px;
  }

  #navSearchContainer {
    width: 200px;
  }
}

@media only screen and (min-width: 993px) {
  #navSearchContainer {
    width: 130px;
  }

  .navContainer {
    width: 70%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1093px) {
  #navSearchContainer {
    width: 200px;
  }
}

@media only screen and (max-width: 600px) {
  .navContainer {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
  }
}

.nav-wrapper .input-field input[type="search"] {
  width: calc(100% - 1rem);
  margin: 0 0 0 0;
  padding: 5px 5px 5px 1rem;
  border-radius: 5rem;
  height: 2rem;
}
</style>

<script>
import router from './../router/index.js'

export default {
  methods: {
    toggleDropdown: () => {
      document.getElementById("navDropdown").classList.toggle("dropdownOpen");
    },
    showDropdown: () => {
      document.getElementById("navDropdown").classList.add("dropdownOpen");
    },
    hideDropdown: () => {
      document.getElementById("navDropdown").classList.remove("dropdownOpen");
    },
    search: async function() {
      const query = this.searchText.replace(new RegExp(" ", "g"), "%20");
      router.push({ name: 'SearchResult', params: { query: query }});
      this.searchText = "";
      this.toggleSearch();
    },
    toggleSearch: () => {
      if (
        !document.getElementById("navSearchContainer").classList.toggle("hide")
      )
        document.getElementById("navSearchInput").focus();
    }
  },
  mounted() {
    // eslint-disable-next-line
    M.Sidenav.init(document.getElementById("sideNav"));
  },
  data() {
    return {
      homePage: "/",
      albumPage: "/album",
      loginPage: "/login",
        signupPage: "/signup",
      artistPage: "/artist",
      playlistsPage: "/playlists",
      settingsPage: "/settings",
      logoutPage: "/logout",
      userPage: "/users/5aad63e11a50230004d038c2",
      user: {
        id: 1,
        name: "Robin Desbois"
      },
      searchText: ""
    };
  }
};
</script>
