import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-escrow',
  templateUrl: './escrow.component.html',
  styleUrls: ['./escrow.component.css']
})
export class EscrowComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('snapContainer') snapContainer!: ElementRef;
  activeAccountIndex = 0;
  private isScrolling = false;

  private observer!: IntersectionObserver;

  // --- New Interactive Steps Logic ---
  activeStepIndex = 0;
  private autoPlayTimer: any;

  // Array containing all the step data
  steps = [
    {
      title: 'Onboarding',
      description: 'Existing Riyad Bank customers can onboard using their CIS number. A new CIS is generated for the real estate project, under which the Escrow Account is created.',
      lottiePath: 'assets/animations/Onboarding.json' // Replace with your actual Lottie path
    },
    {
      title: 'Project Setup',
      description: 'Developers create real estate units within the system. Each unit is assigned a unique Virtual IBAN.',
      lottiePath: 'assets/animations/project-setup.json'
    },
    {
      title: 'Buyer Payments',
      description: 'Buyers make payments directly to the assigned Virtual IBAN. Payments are securely credited to the escrow account.',
      lottiePath: 'assets/animations/buyer-payments.json'
    },
    {
      title: 'Fund Allocation',
      description: 'All incoming funds are automatically distributed into three sub-accounts as per WAFI rules: Construction Account - 76%, Marketing Account - 20%, Retention Account - 4%.',
      lottiePath: 'assets/animations/fund-allocation.json'
    },
    {
      title: 'Fund Release',
      description: 'Developers request fund disbursement by submitting required documents. Funds are released only after verification and compliance with WAFI regulations.',
      lottiePath: 'assets/animations/fund-release.json'
    }
  ];

  accountFeatures = [
    {
      title: 'Construction Account',
      icon: 'bx bx-hammer',
      desc: 'Supports ongoing development and construction activities[cite: 5].',
      detailTitle: 'Centralized Management',
      detailText: 'Manage all project payments in one place[cite: 5]. Enjoy full transparency alongside developer security, which ensures steady cash flow for project execution[cite: 5].'
    },
    {
      title: 'Marketing Account',
      icon: 'bx bx-news',
      desc: 'Covers promotional and sales-related expenses[cite: 5].',
      detailTitle: 'Dedicated Promotional Funds',
      detailText: 'Marketing capital is securely tracked and separated from construction costs, providing transparent auditing for promotional and sales-related expenses[cite: 5].'
    },
    {
      title: 'Retention Account',
      icon: 'bx bx-lock-alt',
      desc: 'Ensures quality assurance and project completion obligations[cite: 5].',
      detailTitle: 'Guaranteed Completion',
      detailText: 'A percentage of funds is held securely to ensure all quality assurance checks and project completion obligations are met before final release[cite: 5].'
    },
    {
      title: 'Buyer Protection',
      icon: 'bx bx-shield-check',
      desc: 'Funds are only released when agreed conditions are fulfilled[cite: 5].',
      detailTitle: 'Milestone-Based Release',
      detailText: 'Funds are strictly regulated and only released when agreed conditions are fulfilled[cite: 5], protecting buyer investments throughout the development lifecycle.'
    }
  ];

  onSectionWheel(event: WheelEvent) {
    const scrollingDown = event.deltaY > 0;
    if (scrollingDown && this.activeAccountIndex < this.accountFeatures.length - 1) {
      event.preventDefault();
      this.triggerInternalScroll(1);
    }
    else if (!scrollingDown && this.activeAccountIndex > 0) {
      event.preventDefault();
      this.triggerInternalScroll(-1);
    }
  }

  triggerInternalScroll(direction: number) {
    if (this.isScrolling) return;
    this.isScrolling = true;

    this.activeAccountIndex += direction;
    if (this.snapContainer) {
      const container = this.snapContainer.nativeElement;
      const cardHeight = container.clientHeight;
      container.scrollTo({
        top: this.activeAccountIndex * cardHeight,
        behavior: 'smooth'
      });
    }
    setTimeout(() => {
      this.isScrolling = false;
    }, 600);
  }

  // --- Sticky Scroll Logic ---
  onInternalScroll(event: Event) {
    if (this.isScrolling) return;
    const target = event.target as HTMLElement;
    const index = Math.round(target.scrollTop / target.clientHeight);
    if (this.activeAccountIndex !== index) {
      this.activeAccountIndex = index;
    }
  }

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.title.setTitle('Secure Escrow Management | Interland');
    this.startAutoPlay();
  }

  startAutoPlay(): void {
    // Clear any existing timer to prevent duplicates
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }

    // Set a new 3-second interval
    this.autoPlayTimer = setInterval(() => {
      this.activeStepIndex = (this.activeStepIndex + 1) % this.steps.length;
    }, 3000);
  }

  // Handles manual clicks on a step
  selectStep(index: number): void {
    this.activeStepIndex = index;
    // Reset the timer so it doesn't instantly change right after the user clicks
    this.startAutoPlay();
  }

  ngAfterViewInit(): void {
    // 1. Configure the Observer
    const options = {
      root: null,       // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.15   // Trigger when 15% of the element is visible
    };

    // 2. Create the Observer logic
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the 'show' class to trigger the CSS transition
          entry.target.classList.add('show');

          // Optional: Stop observing once revealed (so it only animates once)
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // 3. Find all elements with the reveal class and observe them
    const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
    hiddenElements.forEach((el) => this.observer.observe(el));
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }
}