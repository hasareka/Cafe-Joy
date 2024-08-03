import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backgrounds = [
    { class: 'home1', text: 'Freshly Brewed Coffee' },
    { class: 'home2', text: 'A Cozy Ambiance' },
    { class: 'home3', text: 'Delicious Pastries' }
  ];

  currentBackgroundIndex = 0;
  previousBackgroundIndex = -1;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => {
      this.changeBackground(1);
    }, 6000);

    // Scroll to the fragment if available
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  changeBackground(direction: number) {
    this.previousBackgroundIndex = this.currentBackgroundIndex;
    this.currentBackgroundIndex = (this.currentBackgroundIndex + direction + this.backgrounds.length) % this.backgrounds.length;
    
    // Set animation based on direction
    if (this.previousBackgroundIndex < this.currentBackgroundIndex || (this.previousBackgroundIndex === 2 && this.currentBackgroundIndex === 0)) {
      this.setBackgroundAnimation('forward');
    } else {
      this.setBackgroundAnimation('backward');
    }
  }

  setBackgroundAnimation(animationType: string) {
    switch (this.backgrounds[this.currentBackgroundIndex].class) {
      case 'home1':
        this.backgrounds[this.currentBackgroundIndex].class = animationType === 'forward' ? 'home1' : 'home1';
        break;
      case 'home2':
        this.backgrounds[this.currentBackgroundIndex].class = animationType === 'forward' ? 'home2' : 'home2';
        break;
      case 'home3':
        this.backgrounds[this.currentBackgroundIndex].class = animationType === 'backward' ? 'home3' : 'home3';
        break;
    }
  }
}
