import { Component, OnInit } from '@angular/core';
import { AuthService } from '../swagger/api/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private httpClient: HttpClient) { }
  title = 'klad-client';

  ngOnInit() {
    //   this.authService.authLoginPost({username: 'organatik', password: 'password'})
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // }
    this.httpClient.post('http://localhost:3000/api/auth/login', { username: 'organatik', password: 'password' })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
