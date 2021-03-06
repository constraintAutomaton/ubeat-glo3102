<template>
    <div id='addToPlaylistBox'>
        <i id="addToPlaylistButton" class="material-icons playIcon" @click="addSongToPlaylist">playlist_add</i>
        <!--font-awesome-icon id="addToPlaylistButton" class="playIcon" v-on:click="addSongToPlaylist" :icon="['fas', 'plus-circle']" /-->
        <font-awesome-icon id="addSongIcon" class="addButton" :icon="['fas', 'plus-circle']" />
        <font-awesome-icon id="addSongSuccessIcon" class="addResult" :icon="['fas', 'check-circle']" />
        <font-awesome-icon id="addSongErrorIcon" class="addResult" :icon="['fas', 'times-circle']" />
        <ul id="addToPlaylistBoxUl" v-on-clickaway="hideAddSongUI"></ul>
    </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import { getPlaylistsByUserId, addTrackToPlaylist } from "../../lib/util/utilPlaylist";

export default {
    mixins: [ clickaway ],
    name: "AddToPlaylistBox",
    props: {
        playingTrackObj : {
        default: undefined
        }
    },
    methods: {
        async addSongToPlaylist() {
        const addToPlaylistBoxUl = document.getElementById('addToPlaylistBoxUl');
        const addSongToPlaylistButton = document.getElementById('addSongIcon');
        let playlists = await getPlaylistsByUserId(this.$cookie.get("id"));
        playlists.forEach((e) => {
            const li = document.createElement('li');
            li.classList.add('playlistElem');

            let name = e.name;
            li.title = name;
            if(name.length > 23) {
            name = name.substring(0, 23) + "...";
            }
            li.innerHTML = name;
            
            const addButton = addSongToPlaylistButton.cloneNode(true);
            addButton.id = addButton.id + ":" + e.id;

            addButton.addEventListener("click", (sender) => {
                const listElem = sender.target.parentNode;
                listElem.removeChild(sender.target);
                this.addSongToSpecifiedPlaylist(listElem, e.id)
            });

            li.append(addButton);

            addToPlaylistBoxUl.appendChild(li);

        });

        addToPlaylistBoxUl.style.visibility = "visible";
        addToPlaylistBoxUl.classList.add("showing");
        },

        async addSongToSpecifiedPlaylist(listElem, id) {
            const successImageElem = document.getElementById('addSongSuccessIcon');
            const errorImageElem = document.getElementById('addSongErrorIcon');

            const playlistId = id;
            const playingTrack = this.playingTrackObj;
            if(playingTrack != undefined) {
                const response = await addTrackToPlaylist(playlistId, playingTrack);

                if (response.status == 200) {
                    const successImage = successImageElem.cloneNode(true);
                    successImage.style.visibility = "visible";
                    listElem.appendChild(successImage);
                }
                else {
                    const errorImage = errorImageElem.cloneNode(true);
                    errorImage.style.visibility = "visible";
                    listElem.appendChild(errorImage);
                }
            }
            else
            {
                    const errorImage = errorImageElem.cloneNode(true);
                    errorImage.style.visibility = "visible";
                    listElem.appendChild(errorImage);
            }
            
            this.$songEvent.$emit("playlistUpdated");
        },

        hideAddSongUI() {
            const list = document.getElementById('addToPlaylistBoxUl');
            if(list.classList.contains("showing"))
            {
                while(list.firstChild){
                    list.removeChild(list.firstChild);
                }
                list.classList.remove("showing")
            }
        }
    }
};
</script>

<style scoped>
    #addToPlaylistBox {
    position: relative;
    width: 0;
    height: auto;
    display: flex;
    align-items: center;
    }

    #addToPlaylistBox ul {
    visibility: hidden;
    position: absolute;
    width: 200px;
    background-color: #2d2d2d;
    bottom: 40px;
    right: 0px;
    border-radius: 10px;
    }

    #addToPlaylistButton {
        cursor: pointer;
    }

    .playlistElem {
        padding: 0 10px 0 10px;
        cursor: default;
        width: 200px;
        margin: 3px 0 0 5px;
        overflow: hidden;
    }

    .addButton {
        cursor: pointer;
        margin-left: 10px;
        margin-right: 0;
    }

    .addResult
    {
        cursor: default;
        margin-left: 10px;
        margin-right: 0;
        visibility: hidden;
    }

    #addSongIcon {
        visibility: hidden;
    }

    .showing {
        padding: 5px;
    }
</style>