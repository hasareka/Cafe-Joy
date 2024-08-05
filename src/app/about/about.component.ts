import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showBanner = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const navigation = event as NavigationEnd;
        this.route.fragment.subscribe(fragment => {
          this.showBanner = (fragment === 'about');
          if (this.showBanner) {
            const element = document.getElementById('about-us-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
  }
}
