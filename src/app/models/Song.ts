import { Album } from "./Album";
import { Artist } from "./Artist";
import { Genre } from "./Genre";
import { User } from "./user";

export class Song {
    id! : number;
    title! : string;
    artistId! : number;
    artist!: Artist;
    albumId! : number;
    album! : Album;
    genreId! : number;
    genre! : Genre;
    trackNumber! : number;
    length! : number;
    userId! : number;
    user! : User;
    fileLink! : string;
}