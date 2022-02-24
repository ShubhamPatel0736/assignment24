import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit {

  constructor(private http:HttpClient,
    private route:ActivatedRoute,
    private router:Router
     ) { }
data:any;
mydata:any=[];
genre:any;
title:any;
  ngOnInit(): void {
     this.genre=this.route.snapshot.paramMap.get('genre');
     
     
    console.log(this.genre);
       this.http.get('http://skunkworks.ignitesol.com:8000/books?topic='+this.genre).subscribe(Response=>{
this.data=Response
this.mydata=this.data.results;
       console.log(this.mydata);
       console.log(this.mydata[0].formats['text/plain; charset=utf-8']);
  });
  }
Back(){
  this.router.navigate(['']);
}
change(e:any){
  console.log(e.target.value);
}

}
