import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Album from "@/components/Album";
import Artist from "@/components/Artist";
import Playlists from "@/components/Playlists";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import SearchResult from "../components/SearchResult";
import ArtistSearch from "../components/ArtistSearch";
import AlbumSearch from "../components/AlbumSearch";
import TrackSearch from "../components/TrackSearch";
import UserSearch from "../components/UserSearch";
import User from "../components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/artist",
      redirect: "/",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/artist/:id?",
      name: "Artist",
      component: Artist,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/album",
      redirect: "/",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/album/:id?",
      name: "Album",
      component: Album,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/playlists",
      name: "Playlists",
      component: Playlists,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/searchResult/:query?",
      name: "SearchResult",
      component: SearchResult,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/artistSearch/:query?",
      name: "ArtistSearch",
      component: ArtistSearch,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/albumSearch/:query?",
      name: "AlbumSearch",
      component: AlbumSearch,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/trackSearch/:query?",
      name: "TrackSearch",
      component: TrackSearch,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/userSearch/:query?",
      name: "UserSearch",
      component: UserSearch,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/users/:id?",
      name: "User",
      component: User,
      meta: {
        requiresAuth: true
      }
    },
  ]
});
