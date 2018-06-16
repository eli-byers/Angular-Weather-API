import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  cityName = "sanjose";
  fullName = "San Jose, CA";
  weather:object = null;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getWeatherFor('san%20jose,us').subscribe(data => {
      this.weather = data;
      console.log(data['main']['humidity']);
      console.log(data);
    })
  }

}
