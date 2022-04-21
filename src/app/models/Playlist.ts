import { User } from "./user";

export class Playlist {
    id! : number;
    name! : string;
    description! : string;
    userId! : number;
    user! : User;
}