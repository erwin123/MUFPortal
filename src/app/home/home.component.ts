import { Component, OnInit } from '@angular/core';
import { DrawerappsComponent } from '../drawerapps/drawerapps.component';
import { LoginService } from '../login.service';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,public loginService:LoginService,) { }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
