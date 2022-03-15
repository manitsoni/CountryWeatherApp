import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';
class countryDataList {
  name: string = "";
  capital: string = "";
  flag: string = "";
  lat: string = "";
  long: string = "";
  population: string = "";
}
class weatherDetails {
  capital: string = "";
  icon: string = "";
  temprature: string = "";
  windSpeed: string = "";
  precipitation: string = "";
}
enum PageData {
  url = "http://api.weatherstack.com/current?",
  accessKey = "access_key=ab5b41803847073de010a51f4e95d17f"
}
@Component({
  selector: 'app-display-country-data',
  templateUrl: './display-country-data.component.html',
  styleUrls: ['./display-country-data.component.css']
})
export class DisplayCountryDataComponent implements OnInit {
  countryData: countryDataList[] = [];
  displayStyle: string = "none";
  isSpinning: boolean = false;
  isVisible: boolean = false;
  weatherInfo: weatherDetails[] = [];
  constructor(private _cs: ServicesService,
    private route: Router) { }

  ngOnInit(): void {
    if (this._cs.countryDetails) {
      console.log(this._cs.countryDetails);
      this.isSpinning = true;
      this._cs.countryDetails.forEach((element: any, index: number) => {
        var data = {
          name: element.name ? element.name.common : "",
          capital: element.capital ? element.capital[0].toString() : "",
          flag: element.flags ? element.flags.png : "",
          lat: element.latlng ? element.latlng[0].toString() : "",
          long: element.latlng ? element.latlng[1].toString() : "",
          population: element.population ? element.population.toString() : ""
        }
        this.countryData.push(data);
      });;
      this.isSpinning = false;
    } else {
      this.countryData.length = 0;
    }
  }
  showWeather(value: string) {
    this.weatherInfo = [];
    this._cs.getData(PageData.url + PageData.accessKey + "&query=" + value).subscribe((response: any) => {
      let data = response;
      var weatherInfo: weatherDetails = {
        capital: data.location.name,
        icon: data.current.weather_icons[0],
        precipitation: data.current.precip,
        windSpeed: data.current.visibility,
        temprature: data.current.temperature
      }
      this.weatherInfo.push(weatherInfo);
      this.isVisible = true;
    })
  }
  closeModal() {
    this.isVisible = false;
  }
}
