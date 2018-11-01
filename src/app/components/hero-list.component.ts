import { Component, OnInit } from '@angular/core';
import { CharacterItem, MarvelService } from '../marvel.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  characters: CharacterItem[] = []

  constructor(private marvelSvc: MarvelService) { }

  ngOnInit() { 
    this.marvelSvc.getCharacterList()
      .then(result => {
        console.log('result:', result);
        this.characters = result}
        )
      .catch(error => {
        console.error('error: ', error);
      });
  }

}
