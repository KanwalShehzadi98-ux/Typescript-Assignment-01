interface Album{
    artist_name : string,
    album_title : string,
    track? : number
}

function make_album(artist_name : string ,album_title : string,track? : number) : Album{
    const album : Album = {
        artist_name : artist_name,
        album_title : album_title
    }
    if(track !== undefined){
        album.track = track;
    }
    return album;
}

const album1 = make_album('Artist1','Album1');
const album2 = make_album('Artist2','Album2');
const album3 = make_album('Artist3','Album3',19);

console.log(album1);
console.log(album2);
console.log(album3);