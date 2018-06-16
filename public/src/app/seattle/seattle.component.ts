import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  cityName = "seattle"
  fullName = "Seattle, WA"
  weather:object = null;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getWeatherFor('seattle,us').subscribe(data => {
      this.weather = data;
      console.log(data['main']['humidity']);
      console.log(data);
    })
  }

}
