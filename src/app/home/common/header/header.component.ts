import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // If we scroll down more than 50 pixels, apply the background
    this.isScrolled = window.scrollY > 50;
  }

  navigateToCareers() {
    this.router.navigate(['./Interland/landing/careers']);
  }

  navigateToPsh() {
    this.router.navigate(['./Interland/landing/psh']);
  }

  navigateToHome() {
    this.router.navigate(['./Interland/landing/home']).then(() => {
      const homeElement = document.querySelector('app-home');
      if (homeElement && homeElement['scrollToTop']) {
        homeElement['scrollToTop']();
      }
    });
  }
}

