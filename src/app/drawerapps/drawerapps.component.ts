import { Component, OnInit } from '@angular/core';
import { AppIcon } from '../models/AppIcon';

@Component({
  selector: 'app-drawerapps',
  templateUrl: './drawerapps.component.html',
  styleUrls: ['./drawerapps.component.css']
})
export class DrawerappsComponent implements OnInit {
  public appicons = APPICONS;

  constructor() {
    }

  ngOnInit() {
    
  }

}

var APPICONS: AppIcon[] = [
  { "title": "MUF App 1", "url": "assets/app/app1.png" },
  { "title": "MUF App 2", "url": "assets/app/app2.png" },
  { "title": "MUF App 3", "url": "assets/app/app3.png" },
  { "title": "MUF App 4", "url": "assets/app/app4.png" },
  { "title": "MUF App 5", "url": "assets/app/app5.png" },
  { "title": "MUF App 6", "url": "assets/app/app6.png" },
  { "title": "MUF App 7", "url": "assets/app/app7.png" },
  { "title": "MUF App 8", "url": "assets/app/app8.png" },
  { "title": "MUF App 9", "url": "assets/app/app9.png" },
  { "title": "MUF App 10", "url": "assets/app/app1.png" },
  { "title": "MUF App 11", "url": "assets/app/app2.png" },
  { "title": "MUF App 12", "url": "assets/app/app3.png" },
  { "title": "MUF App 13", "url": "assets/app/app4.png" },
  { "title": "MUF App 14", "url": "assets/app/app5.png" },
  { "title": "MUF App 15", "url": "assets/app/app6.png" },
  { "title": "MUF App 16", "url": "assets/app/app7.png" },
  { "title": "MUF App 17", "url": "assets/app/app8.png" },
  { "title": "MUF App 13", "url": "assets/app/app4.png" },
  { "title": "MUF App 14", "url": "assets/app/app5.png" },
  { "title": "MUF App 15", "url": "assets/app/app6.png" },
  { "title": "MUF App 16", "url": "assets/app/app7.png" },
  { "title": "MUF App 17", "url": "assets/app/app8.png" },
  { "title": "MUF App 15", "url": "assets/app/app6.png" },
  { "title": "MUF App 16", "url": "assets/app/app7.png" },
  { "title": "MUF App 17", "url": "assets/app/app8.png" },
  { "title": "MUF App 13", "url": "assets/app/app4.png" },
  { "title": "MUF App 14", "url": "assets/app/app5.png" },
  { "title": "MUF App 15", "url": "assets/app/app6.png" },
  { "title": "MUF App 16", "url": "assets/app/app7.png" },
  { "title": "MUF App 17", "url": "assets/app/app8.png" },
  { "title": "MUF App 18", "url": "assets/app/app9.png" }
];