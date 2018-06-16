import { Injectable } from '@angular/core';

// to make http requests
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  root = "http://api.openweathermap.org/data/2.5/weather?units=Imperial&apiKey=b7c6619961746db9db56d9926218d8f2&q="

  // inject HttpClient
  constructor(private _http:HttpClient) { }

  getWeatherFor(city: string){
    return this._http.get(this.root+city)
  }

}
