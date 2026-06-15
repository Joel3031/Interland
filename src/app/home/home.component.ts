import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.loadAllScripts();
    this.scrollToTop();
  }

  loadAllScripts() {
    this.loadScript('assets/vendor/purecounter/purecounter_vanilla.js');
    this.loadScript('assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
    this.loadScript('assets/vendor/glightbox/js/glightbox.min.js');
    this.loadScript('assets/vendor/isotope-layout/isotope.pkgd.min.js');
    this.loadScript('assets/vendor/swiper/swiper-bundle.min.js');
    this.loadScript('assets/vendor/php-email-form/validate.js');
    this.loadScript('assets/js/main.min.js');
    this.loadScript('assets/js/main.js');

  }
  //Injecting the assests directly using TS ; Author : AMAL JEEV
  private loadScript(scriptUrl: string) {
    const script = this.renderer.createElement('script');
    script.src = scriptUrl;
    this.renderer.appendChild(document.body, script);
  }
  scrollToTop() {
    // Use Renderer2 to scroll to the top
    const headerElement = document.querySelector('app-header');
    if (headerElement) {
      const headerOffset = headerElement.getBoundingClientRect().top;
      this.renderer.setProperty(document.scrollingElement || document.documentElement, 'scrollTop', headerOffset);
    }
  }
}
