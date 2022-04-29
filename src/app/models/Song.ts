import { Album } from "./Album";
import { Artist } from "./Artist";
import { Genre } from "./Genre";
import { User } from "./user";

export class Song {
    id! : number;
    title! : string;
    artist_id! : number;
    artist_name!: string;
    album_id! : number;
    album_name! : string;
    genre_id! : number;
    genre_label! : string;
    track_number! : number;
    length! : number;
    user_id! : number;
    username! : string;
    file_link! : string;
}