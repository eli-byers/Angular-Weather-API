import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  cityName = "burbank"
  fullName = "Burbank, CA"
  weather:object = null;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getWeatherFor('burbank,us').subscribe(data => {
      this.weather = data;
      console.log(data['main']['humidity']);
      console.log(data);
    })
  }

}
