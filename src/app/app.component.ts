import { Component, Renderer2, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) { }
  title = 'InterlandWeb';

  ngOnInit() {
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
}

