import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  cityName = "washington"
  fullName = "Washington D.C."
  weather:object = null;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getWeatherFor('washington,us').subscribe(data => {
      this.weather = data;
      console.log(data['main']['humidity']);
      console.log(data);
    })
  }

}
