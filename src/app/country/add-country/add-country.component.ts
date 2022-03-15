import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  countryName!:string;
  btnDisable: boolean = true; 
  countryDataList: any;
  url: string = "https://restcountries.com/v3.1/name/"
  constructor(
    private _cs: ServicesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  CheckLength() {
    this.btnDisable = this.countryName.length > 0 ? false : true;
  }
  getCountryData() {
    if (this.countryName.length > 0) {
      const url = this.url + "" + this.countryName
      this._cs.getData(url).subscribe((response: any) => {
        this._cs.countryDetails = response;
        this.router.navigateByUrl("/displayCountry")
      }, (error: any) => {
        this._cs.countryDetails = null;
        this.router.navigateByUrl("/displayCountry")
      });
    }
  }
}
