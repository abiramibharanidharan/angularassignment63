import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   FirstName:string
   LastName:string
   title="Welcome"
  constructor(){}
  ngOnInit()
  {
    this.FirstName='Abirami'
    this.LastName='Bharanidharan'
    
  }
   displaytitle(first,last)
   {
     this.FirstName=first
     this.LastName=last
     var tit= first + " " + last
     this.title=this.title + " " + tit
    
   }
  
  
}