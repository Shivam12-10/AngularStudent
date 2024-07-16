import { HttpBackend, HttpClient, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
callWitInterceptor() {
  debugger;
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe();
 
}
callWithoutInterceptor() {
  debugger;
  this.httpBackend.handle(new HttpRequest('GET', 'https://dog.ceo/api/breeds/image/random'))
    .subscribe();
}

  constructor(private router: Router , private http:HttpClient,private httpBackend: HttpBackend) { }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
