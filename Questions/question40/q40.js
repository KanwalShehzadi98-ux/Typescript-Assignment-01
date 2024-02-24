function make_album(artist_name, album_title, track) {
    var album = {
        artist_name: artist_name,
        album_title: album_title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2');
var album3 = make_album('Artist3', 'Album3', 19);
console.log(album1);
console.log(album2);
console.log(album3);
