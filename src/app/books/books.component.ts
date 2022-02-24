import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private http : HttpClient,
    private route:Router) { }

  ngOnInit(): void {
     }
navigate(str:string)
{
  
  if(str=='Fiction')
  this.route.navigate(['/app-fiction',{genre:'fiction'}]);
  if(str=='Drama')
  this.route.navigate(['/app-fiction',{genre:'drama'}]);
  if(str=='History')
  this.route.navigate(['/app-fiction',{genre:'history'}]);
  if(str=='Humour')
  this.route.navigate(['/app-fiction',{genre:'humour'}]);
  if(str=='Politics')
  this.route.navigate(['/app-fiction',{genre:'politics'}]);
  if(str=='Adventure')
  this.route.navigate(['/app-fiction',{genre:'adventure'}]);
  if(str=='Philosophy')
  this.route.navigate(['/app-fiction',{genre:'philosophy'}]);
}
}