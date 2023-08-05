import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('2s', style({ opacity: 0 }))
      ])
    ]),
  ],
})

export class HomeComponent implements OnInit {
  backgrounds = ['home1', 'home2', 'home3'];
  currentBackgroundIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeBackground(1);
    }, 6000);
  }

  changeBackground(direction: number) {
    this.currentBackgroundIndex = (this.currentBackgroundIndex + direction + this.backgrounds.length) % this.backgrounds.length;
  }
}
