import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links : Array<Link> = [
    { title : "Home", url : "/"},
    { title : "Users", url : "/user"},
    { title : "Songs", url : "/song"},
    { title : "Artists", url : "/artist"},
    { title : "Albums", url : "/album"},
    { title : "Playlist", url : "/playlist"}
  ]

  constructor() { }

  ngOnInit(): void {
  }
    toggleChildren(indice : number) : void{
      this.links[indice].isVisible = !this.links[indice].isVisible;
  }
}
