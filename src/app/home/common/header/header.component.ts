import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  openDropdown: string | null = null;
  mobileMenuOpen = false;

  // Injected Renderer2 to safely manipulate the DOM
  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void { }

  /* ── Scroll ── */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 5;
  }

  /* ── Click outside the entire header component ── */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.closeAll();
    }
  }

  /* ── Escape key closes everything ── */
  @HostListener('document:keydown.escape', [])
  onEscapeKey() {
    this.closeAll();
  }

  /* ── Toggle a named dropdown (Modified for Mobile Accordion) ── */
  toggleDropdown(name: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  /* ── Mobile hamburger ── */
  toggleMobile(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.openDropdown = null;
    }
    this.manageBodyScroll();
  }

  /* ── Close everything (called on nav-link clicks) ── */
  closeAll(): void {
    this.openDropdown = null;
    this.mobileMenuOpen = false;
    this.manageBodyScroll();
  }

  /* ── Lock/Unlock Background Scrolling ── */
  manageBodyScroll(): void {
    if (this.mobileMenuOpen) {
      // Disables scrolling on the main page
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      // Re-enables scrolling
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  /* ── Route helpers ── */
  navigateToCareers() {
    this.closeAll();
    this.router.navigate(['/careers']);
  }

  navigateToPsh() {
    this.closeAll();
    this.router.navigate(['/psh']);
  }

  navigateToVa() {
    this.closeAll();
    this.router.navigate(['/virtual-account']);
  }

  navigateToEscrow() {
    this.closeAll();
    this.router.navigate(['/escrow']);
  }

  navigateToHome() {
    this.closeAll();
    this.router.navigate(['/home']).then(() => {
      const homeElement = document.querySelector('app-home');
      if (homeElement && (homeElement as any)['scrollToTop']) {
        (homeElement as any)['scrollToTop']();
      }
    });
  }
}