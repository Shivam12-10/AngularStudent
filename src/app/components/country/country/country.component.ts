import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/Models/country';
import { CountryService } from 'src/app/services/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countryform!: FormGroup;
  countrydata: any;
  country!: any;

  isloanding: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  Country = {
    id: 0,
    name: ''
  };
  countries!: Country[];
  constructor(private fb: FormBuilder, private countryservice: CountryService) { }

  ngOnInit() {
    this.countryform = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.countryservice.getAllCountries().subscribe(
      (data: Country[]) => {
        this.countrydata = data;
        console.log('Countries fetched successfully', data);
      },
      error => {
        console.error('Error fetching countries', error);
      }
    );
  }

  deleteCountry(id: number) {
    this.countryservice.deleleCountry(id).subscribe(res => {
      console.log("Data delete Su..", res);
      window.location.reload();
    })
  }

  EditCountryById(country: any) {
    debugger;
    this.countryform.patchValue({
      id: country.id,
      name: country.name
    });

  }

  SubmitCountry() {
    debugger
    if (this.countryform.valid) {
      const formData = this.countryform.value;
      console.log('Form Data:', formData);

      if (formData.id > 0) {
        this.UpdateCountry(formData);
      } else {

        this.PostCountry({ name: formData.name });
      }
    } else {
      console.error('Form is invalid');
    }
  }

  PostCountry(formData: any) {
    debugger
    console.log('Posting data:', formData);
    this.countryservice.PostCountry(formData).subscribe(
      (response) => {
        console.log('Data posted successfully:', response);
        window.location.reload(); //reloag page
        this.fetchCountries();
      },
      (error) => {
        console.error('Error occurred while posting country:', error);
      }

    );
  }
 
  UpdateCountry(formData: any) {
    console.log('Updating data:', formData);
    this.countryservice.updateCountry(formData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
        this.fetchCountries();
      },
      (error) => {
        console.error('Error occurred while updating country:', error);
      }
    );
  }

}
