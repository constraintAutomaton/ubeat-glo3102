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
import User from "../components/User";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
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
      redirect: "/"
    },
    {
      path: "/artist/:id?",
      name: "Artist",
      component: Artist
    },
    {
      path: "/album",
      redirect: "/"
    },
    {
      path: "/album/:id?",
      name: "Album",
      component: Album
    },
    {
      path: "/playlists",
      name: "Playlists",
      component: Playlists
    },
    {
      path: "/searchResult/:query?",
      name: "SearchResult",
      component: SearchResult
    },
    {
      path: "/artistSearch/:query?",
      name: "ArtistSearch",
      component: ArtistSearch
    },
    {
      path: "/albumSearch/:query?",
      name: "AlbumSearch",
      component: AlbumSearch
    },
    {
      path: "/trackSearch/:query?",
      name: "TrackSearch",
      component: TrackSearch
    },
    {
      path: "/users/:id?",
      name: "User",
      component: User
    },
  ]
});
