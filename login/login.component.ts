import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DetectService} from '../detect.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  src  = null;
  constructor(private http:HttpClient, private detect:DetectService) { }
  file:File = null;
  sendB = true;
  ngOnInit() {
  }
  uploaded(event){
    this.file = <File>event.target.files[0];
    this.sendB = false;
  }

  hide = false;
  send(){
    this.hide=true;  
    const fd = new FormData();

    fd.append("File",this.file,this.file.name)
     this.detect.Detect(fd).subscribe(res=>{
       this.hide = false;
       document.getElementById("card").style.display="";
       var img= <HTMLImageElement>document.getElementById("img");
       const reader = new FileReader();
       reader.onload = e => this.src = reader.result;
       reader.readAsDataURL(this.file);
       img.onload = function(){
         var c=  <HTMLCanvasElement> document.getElementById("blah");
         var ctx=c.getContext("2d");
         c.height = 500*(img.height/img.width)
         c.width = 500*(img.height/img.width)
         ctx.drawImage(img ,0,0 ,500*(img.height/img.width), 500 *(img.height/img.width));
         var canvas = <HTMLCanvasElement> document.getElementById("blah"); 
         var context = canvas.getContext('2d');
          res['Items'].forEach(element => {
          var BottomRight= element['BndBox']['BottomRight'] 
          var TopLeft= element['BndBox']['TopLeft'] 
        
          context.beginPath();
          context.rect(500*(img.height/img.width)*TopLeft[0], 500*(img.height/img.width)*TopLeft[1], 500*(img.height/img.width)*BottomRight[0] - 500*(img.height/img.width)*TopLeft[0], 500*(img.height/img.width)*BottomRight[1] - 500*(img.height/img.width)*TopLeft[1]);
          context.font = "20px Georgia";
          var width = ctx.measureText(element['Type']).width;
          ctx.fillStyle = 'yellow'
          ctx.fillRect( 500*(img.height/img.width)*TopLeft[0], 500*(img.height/img.width)*TopLeft[1] - parseInt("20px Georgia", 20), width, parseInt("20px Georgia", 20));
          ctx.fillStyle = 'black'
          context.fillText(element['Type'], 500*(img.height/img.width)*TopLeft[0], 500*(img.height/img.width)*TopLeft[1]-5);
          context.lineWidth = 7;
          context.strokeStyle = 'yellow';
          context.stroke();
        });
        //  console.log(element);
       }
      })
  }


}



