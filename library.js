var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
   printPlaylists: function () {
      for (var list in this.playlists) {
      console.log(this.playlists[list].id + ": " + this.playlists[list].name + " - " + this.playlists[list].tracks.length);
      }
    }
    printTracks: function () {
      for (var list in this.tracks) {
      console.log(this.tracks[list].id + ": " + this.tracks[list].name + " by " + this.tracks[list].artist + " (" + this.tracks[list].album + ")");
      }
    }
    printPlaylist: function (playlistId) {
      console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
      var trackNames = this.playlists[playlistId].tracks;
      for (tracks in trackNames) {
      var i = tracks[0]
      var track = this.tracks[trackNames[i]];
      console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
      }
    }
    addTrackToPlaylist: function (trackId, playlistId) {
      this.playlists[playlistId].tracks.push(trackId);
    }
    uid: function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    addTrack: function (name, artist, album) {
    var trackId = uid()
    this.tracks[trackId] = {id: trackId, name: name, artist: artist, album: album};
    console.log(this.tracks)
    }
    addPlaylist: function (name) {
    var playListId = uid()
    this.playlists.p03 = {id: playListId, name: name}
    console.log(this.playlists);
    }

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var printPlaylists = function () {
// for (var list in library.playlists) {
// console.log(library.playlists[list].id + ": " + library.playlists[list].name + " - " + library.playlists[list].tracks.length);
// }
// }
// printPlaylists();



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
// for (var list in library.tracks) {
// console.log(library.tracks[list].id + ": " + library.tracks[list].name + " by " + library.tracks[list].artist + " (" + library.tracks[list].album + ")");
// }
// }
// printTracks();




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {
//   console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
//   var trackNames = library.playlists[playlistId].tracks;
//   for (tracks in trackNames) {
//     var i = tracks[0]
//    var track = library.tracks[trackNames[i]];
//   console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ")");
//   }
// }
// printPlaylist("p01")

// adds an existing track to an existing playlist

// var addTrackToPlaylist = function (trackId, playlistId) {
//    library.playlists[playlistId].tracks.push(trackId);
// }
// addTrackToPlaylist("t03", "p01");


// generates a unique id
// (use this for addTrack and addPlaylist)

// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// }


// adds a track to the library

// var addTrack = function (name, artist, album) {
// var trackId = uid()
// library.tracks[trackId] = {id: trackId, name: name, artist: artist, album: album};
// console.log(library.tracks)
// }
// addTrack("Sugah", "Erykah Badu", "Mamas Gun");



// adds a playlist to the library

// var addPlaylist = function (name) {
// var playListId = uid()
// library.playlists.p03 = {id: playListId, name: name}
// console.log(library.playlists);
// }
// addPlaylist("funfun");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}