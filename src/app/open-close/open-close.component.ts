import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { fadeInAnimation } from '../animation-module';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [fadeInAnimation]
//     trigger("openClose", [

//       state('open', style({
//         border: "2px solid green",
//         backgroundColor: "green",
//         opacity: "0"
        
//       })),
//       state('close', style({
//         border: "2px dashed red",
//         backgroundColor: "blue",
//         opacity: "1"
  
//       })),
//       transition('open => close', animate(2000)),
//       // transition('open => close', animate("2s")),
//       transition('close => open', animate(2000)),
//     ]),
//     // transition('close => open', animate("2s")),
//   ],
})
export class OpenCloseComponent {
  isOpen: boolean = true;

  toggle(){
    this.isOpen= !this.isOpen;
  }

}


