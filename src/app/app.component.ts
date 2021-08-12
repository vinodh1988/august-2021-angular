import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 programmer="Johnson"
 team=["Peter","Nicholas","Jackie","Mohith","Jerry"]
 text=">>>>"
 visibility=false
 index=2
 themes=[
   {backgroundColor: "Yellow", fontFamily:"Agency FB", color: "green"}, 
   {backgroundColor: "lightblue", fontFamily:"Arial", color: "darkred"},
   {backgroundColor: "lightgreen", fontFamily:"Consolas", color: "darkblue"}
 ]

 manipulate() {
     this.visibility=this.visibility?false:true;
     this.text=this.text===">>>>"?"^^^^":">>>>";
 }
}
