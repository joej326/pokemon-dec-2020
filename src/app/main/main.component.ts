import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Observable } from 'rxjs';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'titleee';
  start = true;
  urls = new Array();
  pokemon = new Array();
  obsArray: Observable<any>[] = new Array();

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    this.fetchPokemon();
  }

  fetchPokemon(): void {
    console.log('comp method');
    this.fetchService.fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=900').subscribe(
      (data) => {
        // console.log(data.results);
        this.urls = data.results.map((r: any) => r.url);
        this.fetchDetails();
      }
    );
  }

  fetchDetails(): void {
    this.urls.map(url => {
      this.obsArray.push(this.fetchService.fetchPokemon(url));
    });
    forkJoin(this.obsArray).subscribe(
      data => {
        console.log(data);
        this.pokemon = data;
      }
    );
  }

  handleSwitch(): void {
    this.start = !this.start;
    console.log(this.start);
  }

}
