import {trigger, transition, animate, style} from '@angular/animations'

export const fadeInAnimation = trigger("fadeInAnimation", [
  transition(':entrer', [
    style({ opacity: 0 }),
    animate("50ms", style({ opacity: 1 })),
  ]),
])