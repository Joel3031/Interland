import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled     = false;
  openDropdown: string | null = null;
  mobileMenuOpen = false;

  constructor(private router: Router, private el: ElementRef) {}

  ngOnInit(): void {}

  /* ── Scroll ── */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  /* ── Click outside the entire header component ── */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.openDropdown  = null;
      this.mobileMenuOpen = false;
    }
  }

  /* ── Escape key closes everything ── */
  @HostListener('document:keydown.escape', [])
  onEscapeKey() {
    this.openDropdown  = null;
    this.mobileMenuOpen = false;
  }

  /* ── Toggle a named dropdown (clicking the same one closes it) ── */
  toggleDropdown(name: string): void {
    this.openDropdown = this.openDropdown === name ? null : name;
  }

  /* ── Mobile hamburger ── */
  toggleMobile(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) { this.openDropdown = null; }
  }

  /* ── Close everything (called on nav-link clicks) ── */
  closeAll(): void {
    this.openDropdown  = null;
    this.mobileMenuOpen = false;
  }

  /* ── Route helpers ── */
  navigateToCareers() {
    this.closeAll();
    this.router.navigate(['./Interland/landing/careers']);
  }

  navigateToPsh() {
    this.closeAll();
    this.router.navigate(['./Interland/landing/psh']);
  }

  navigateToVa() {
    this.closeAll();
    this.router.navigate(['./products/virtual-account']);
  }

  navigateToEscrow() {
    this.closeAll();
    this.router.navigate(['./products/escrow']);
  }

  navigateToHome() {
    this.closeAll();
    this.router.navigate(['./Interland/landing/home']).then(() => {
      const homeElement = document.querySelector('app-home');
      if (homeElement && (homeElement as any)['scrollToTop']) {
        (homeElement as any)['scrollToTop']();
      }
    });
  }
}