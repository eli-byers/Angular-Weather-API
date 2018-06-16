import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  cityName = "dallas"
  fullName = "Dallas, TX"
  weather:object = null;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getWeatherFor('dallas,us').subscribe(data => {
      this.weather = data;
      console.log(data['main']['humidity']);
      console.log(data);
    })
  }

}
