import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Usermaster } from '../models/usermaster'
import { AppModule } from '../app.module';
import { LoginService } from '../login.service';
import { trigger,style,transition,animate,keyframes,query,stagger,state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('banner1', [
      transition('* => active',
        [query('.login-banner-mandiri',[ style({ opacity: 0, paddingRight:0 }), animate('3s', style({ opacity: 1, paddingRight:'50px' })) ])]
      )
    ]),
    trigger('banner2', [
      transition('* => active',
        [query('.login-banner-utama-finance',[ style({ opacity: 0, paddingRight:0 }), animate('3s', style({ opacity: 1, paddingRight:'20px' })) ])]
      )
    ]),
    trigger('form1', [
      transition('* => active',
        [query('.login-form',[ style({ opacity: 0 }), animate('3s', style({opacity: 1}) )])]
      ),
    ])
  ]
})
export class LoginComponent implements OnInit {

  user : Usermaster = new Usermaster();
  showing : string = 'active';
  loading : boolean = false;
  constructor(private route: ActivatedRoute, public loginService:LoginService,  public router: Router) { }
  message : string;
  returnUrl: string;
  ngOnInit() {
      if (localStorage.getItem('currentUser') ) {
        this.router.navigate(['/']);
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login()
  {
    
    this.loading = true;
      this.loginService.login(this.user.Username, this.user.Password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
            this.message=error.message;
            this.loading = false;
            setTimeout(()=>{
              this.message = "";
            },5000);
            console.log(error.message);
        });
  }
}
