class Adapter {


    static getTracks() {  
        return fetch('http://localhost:3000/tracks')
        .then(resp => resp.json())
    }

    static getProfile(token, setUser) { 
 
        return fetch('https://api.spotify.com/v1/me', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        .then(resp => resp.json())
        .then(data => setUser(data))
    }

    static searchItem(token, input) {  

        return fetch(`https://api.spotify.com/v1/search?q=${input}&type=album`, 
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        .then(resp => resp.json())
    }
    // 
    static getPlaylistTracks(owner, playlist) {
        let token = localStorage.getItem("accessToken");

        return fetch(`https://api.spotify.com/v1/users/${owner}/playlists/${playlist}/tracks`, 
        {
            method:'GET',
            headers: {
    
                "Authorization": "Bearer " + token
            }
        })
        .then(resp => resp.json())
    }

    static playAlbum(album) {
        let token = localStorage.getItem("accessToken");
        return fetch(`https://api.spotify.com/v1/me/player/play`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({context_uri: album})
        })
    }

    

    static getCurrentlyPlaying(){
        let token = localStorage.getItem("accessToken")
        return fetch(`https://api.spotify.com/v1/me/player`,{
            method: "get", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }).then(resp => resp.json())
    }

    static pausePlayback(){
        let token = localStorage.getItem("accessToken")

        return fetch('https://api.spotify.com/v1/me/player/pause', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            } 
        })
    
    }

    static getArtist (id){

        let token = localStorage.getItem("accessToken")

        return fetch(`https://api.spotify.com/v1/artists/${id}`,{
            headers: {
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }

    static getArtistAlbums (id){

        let token = localStorage.getItem("accessToken")

        return fetch(`https://api.spotify.com/v1/artists/${id}/albums`,{
            headers: {
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }


    static browseCategories (){
        let token = localStorage.getItem("accessToken")

        return fetch("https://api.spotify.com/v1/browse/categories", {
            headers: {
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }

    static getCategory (category){
        let token = localStorage.getItem("accessToken")

        return fetch(`https://api.spotify.com/v1/browse/categories/${category}/playlists`, {
            headers: {
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }

    // static getPlaylistTracks(id){

    //     let token = localStorage.getItem("accessToken")

    //     return fetch(`https://api.spotify.com/v1/users/{user_id}/playlists/${id}/tracks`, {
    //         headers: {
    //             "Authorization": "Bearer " + token
    //         } 
    //     }).then(resp => resp.json())

    // }

    static getRecentlyPlayed(){
        let token = localStorage.getItem("accessToken")

        return fetch("https://api.spotify.com/v1/me/player/recently-played", {
            headers: {
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }

    static getNewReleases(){
        let token = localStorage.getItem("accessToken")

        return fetch('https://api.spotify.com/v1/browse/new-releases', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }

    static featuredPlaylists(){
        let token = localStorage.getItem("accessToken")

        return fetch('https://api.spotify.com/v1/browse/featured-playlists', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            } 
        }).then(resp => resp.json())
    }


    static getTracks(id) {  
        let token = localStorage.getItem("accessToken")
        return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`,
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }).then(resp => resp.json())
    }
    static playTrack(uri){
        console.log(uri)
        let token = localStorage.getItem("accessToken")
        return fetch(`https://api.spotify.com/v1/me/player/play`,
        {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({uris: [uri]})
        }).then(console.log("done"))

    }

    static resumePlay(){
        let token = localStorage.getItem("accessToken")
        return fetch(`https://api.spotify.com/v1/me/player/play`,
        {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })

    }

    static nextTrack(){
        let token = localStorage.getItem("accessToken")
        return fetch(`https://api.spotify.com/v1/me/player/next`,
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }).then("next")

    }


    static lastTrack(){
        let token = localStorage.getItem("accessToken")
        return fetch(`https://api.spotify.com/v1/me/player/previous`,
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        }).then("last")

    }

}

export default Adapter;
