import { Artist } from "./Artist";

export class Album {
    id! : number;
    name! : string;
    artistId! : number;
    artist! : Artist;
}