import { Component, HostListener, OnInit, Renderer2, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { trigger, style, animate, keyframes, state, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css'],
  animations: [
    // Scatter Gather Animations (Mandatory Comments only)
    trigger('scatterAndGather1', [
      transition('0 <=> 1', [
        animate(
          '15s',
          keyframes([
            style({ transform: 'translate(0, 0)' }),
            ...Array.from({ length: 15 }, (_, i) => {
              const randomX = Math.floor(Math.random() * 100);
              const randomY = Math.floor(Math.random() * 100);
              return style({
                transform: `translate(${randomX}%, ${randomY}%)`,
              });
            }),
            style({ transform: 'translate(0, 0)' }),
          ])
        ),
      ]),
    ]),
    trigger('scatterAndGather2', [
      transition('0 <=> 1', [
        animate(
          '15s',
          keyframes([
            style({ transform: 'translate(0, 0)' }),
            ...Array.from({ length: 15 }, (_, i) => {
              const randomX = Math.floor(Math.random() * 100);
              const randomY = Math.floor(Math.random() * 100);
              return style({
                transform: `translate(${randomX}%, ${randomY}%)`,
              });
            }),
            style({ transform: 'translate(0, 0)' }),
          ])
        ),
      ]),
    ]),
    trigger('scatterAndGather3', [
      transition('0 <=> 1', [
        animate(
          '15s',
          keyframes([
            style({ transform: 'translate(0, 0)' }),
            ...Array.from({ length: 15 }, (_, i) => {
              const randomX = Math.floor(Math.random() * 100);
              const randomY = Math.floor(Math.random() * 100);
              return style({
                transform: `translate(${randomX}%, ${randomY}%)`,
              });
            }),
            style({ transform: 'translate(0, 0)' }),
          ])
        ),
      ]),
    ]),
    trigger('pushLeft', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('reduced', style({ transform: 'translateX(-220%)', display: 'none' })),
      transition('normal <=> reduced', animate('500ms ease-in-out')),
    ]),
    trigger('pushRight', [
      state('normal', style({ transform: 'translateX(0)' })),
      state('reduced', style({ transform: 'translateX(+220%)', display: 'none' })),
      transition('normal <=> reduced', animate('500ms ease-in-out')),
    ])
  ],
})
export class HomeLandingComponent implements OnInit, AfterViewInit, OnDestroy {

  // --- Form & Existing Variables ---
  contactForm!: FormGroup;
  isSubmitting = false;
  submitError = '';
  submitSuccess = false;

  isCardEnlarged: boolean = false;
  isPsh: boolean = false;
  isPayRoll: boolean = false;
  isWebSecurity: boolean = false;
  isFutureBucks: boolean = false;
  isBlockChain: boolean = false;
  isPennyBank: boolean = false;
  isiTServiceManagement: boolean = false;
  isBulkSMSGateway: boolean = false;
  isCustomerSupport: boolean = false;
  isBanking: boolean = false;
  isFinancial: boolean = false;
  isAITechnology: boolean = false;
  isCardVisible = false;
  productTab: boolean = false;
  Logos: { url: string, alt: string }[] = [];
  currentIndex: number = 0;
  slideWidth: number = 0;
  pages: number[] = [];

  activeCategory: 'Core' | 'Banking' | 'Ecosystem' = 'Core';
  selectedService: string = 'PSH';

  scatterAndGather1: boolean = true;
  scatterAndGather2: boolean = true;
  scatterAndGather3: boolean = true;

  logos = [
    { src: 'assets/img/Kotlin_Icon.png', alt: 'Logo 1' },
    { src: 'assets/img/Angular-logo.png', alt: 'Logo 2' },
    { src: 'assets/img/openapi-logo.png', alt: 'Logo 3' },
    { src: 'assets/img/docker-logo.png', alt: 'Logo 4' },
    { src: 'assets/img/kubern-container.png', alt: 'Logo 5' },
    { src: 'assets/img/keycloak-icon.png', alt: 'Logo 6' },
    { src: 'assets/img/flutter-logo.png', alt: 'Logo 6' },
    { src: 'assets/img/java-logo.png', alt: 'Logo 6' },
    { src: 'assets/img/springBoot-icon.png', alt: 'Logo 7' },
  ];

  // --- Parallax & Light Trail Variables ---
  @ViewChild('trailCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  private points: { x: number, y: number, age: number }[] = [];
  private animationFrameId!: number;
  private resizeListener!: () => void;
  private mouseMoveListener!: (e: any) => void;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private parallaxElements: HTMLElement[] = [];

  constructor(private renderer: Renderer2, private fb: FormBuilder, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });

    setInterval(() => {
      this.scatterAndGather1 = !this.scatterAndGather1;
      this.scatterAndGather2 = !this.scatterAndGather2;
      this.scatterAndGather3 = !this.scatterAndGather3;
    }, 17000);

    this.Logos = [
      // --- Newly Added Clients ---
      { url: `../../../../assets/img/Customers & Partners/customers/INDEAL.png`, alt: `Ministry of Industry – INDEAL` },
      { url: `../../../../assets/img/Customers & Partners/customers/Banque Saudi Fransi.jpg`, alt: `Banque Saudi Fransi` },
      { url: `../../../../assets/img/Customers & Partners/customers/SNB.jpg`, alt: `Saudi National Bank (SNB)` },
      { url: `../../../../assets/img/Customers & Partners/customers/Ezdihar.jpg`, alt: `Ezdihar Digital Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/SAIB.png`, alt: `The Saudi Investment Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/Banque Misr.png`, alt: `Banque Misr` },
      { url: `../../../../assets/img/Customers & Partners/customers/Bank of Jordan.jpg`, alt: `Bank of Jordan` },
      { url: `../../../../assets/img/Customers & Partners/customers/Ajlan.png`, alt: `Ajlan & Bros` },

      // --- Existing Clients (Including overlaps) ---
      { url: `../../../../assets/img/Customers & Partners/customers/Saudi Central Bank.png`, alt: `SAMA (Saudi Central Bank)` },
      { url: `../../../../assets/img/Customers & Partners/customers/Al Rajhi.png`, alt: `Al Rajhi Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/SABB.png`, alt: `Saudi Awwal Bank (SAB)` },
      { url: `../../../../assets/img/Customers & Partners/customers/anb.png`, alt: `Arab National Bank (ANB)` },
      { url: `../../../../assets/img/Customers & Partners/customers/Vision Digital Bank.png`, alt: `Vision Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/D360.png`, alt: `D360 Digital Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/riyad bank.png`, alt: `Riyad Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/Albilad.png`, alt: `Bank AlBilad` },
      { url: `../../../../assets/img/Customers & Partners/customers/Banb-X.png`, alt: `BANB-X Digital Bank` },
      { url: `../../../../assets/img/Customers & Partners/customers/derayah.png`, alt: `Derayah` },
      { url: `../../../../assets/img/Customers & Partners/customers/GOSI.png`, alt: `GOSI` },
      { url: `../../../../assets/img/Customers & Partners/customers/HSBC.png`, alt: `HSBC Saudi Arabia` },
      { url: `../../../../assets/img/Customers & Partners/customers/Ibdar.png`, alt: `Ibdar` },
      { url: `../../../../assets/img/Customers & Partners/customers/Modon.png`, alt: `Modon` },
      { url: `../../../../assets/img/Customers & Partners/customers/NBK.png`, alt: `National Bank of Kuwait (NBK)` },
      { url: `../../../../assets/img/Customers & Partners/customers/Sabic.png`, alt: `Sabic` },
      { url: `../../../../assets/img/Customers & Partners/customers/Samba.png`, alt: `Samba` },
      { url: `../../../../assets/img/Customers & Partners/customers/Saudi Aramco.png`, alt: `Saudi Aramco` },
      { url: `../../../../assets/img/Customers & Partners/customers/SBI.png`, alt: `State Bank of India (SBI)` },
      { url: `../../../../assets/img/Customers & Partners/customers/STC.png`, alt: `Saudi Telecom Company (STC)` },
      { url: `../../../../assets/img/Customers & Partners/customers/Tadawul.png`, alt: `Tadawul` },
    ];

    for (let index = 0; index < 45; index++) {
      this.pages[index] = index;
    }
    this.slideWidth = 80 + 60;
    setInterval(() => {
      this.nextSlide();
    }, 1500);
  }

  ngAfterViewInit() {
    this.scatterAndGather1 = !this.scatterAndGather1;
    this.scatterAndGather2 = !this.scatterAndGather2;
    this.scatterAndGather3 = !this.scatterAndGather3;

    // --- Parallax & Canvas Initialization ---
    if (this.canvasRef && this.canvasRef.nativeElement) {
      const canvas = this.canvasRef.nativeElement;
      this.ctx = canvas.getContext('2d');

      this.resizeCanvas();

      this.resizeListener = this.resizeCanvas.bind(this);
      window.addEventListener('resize', this.resizeListener);

      // Cache the parallax wrappers so we don't query the DOM on every frame
      setTimeout(() => {
        this.parallaxElements = Array.from(document.querySelectorAll('.parallax-wrapper'));
      }, 100);

      this.mouseMoveListener = this.onMouseMove.bind(this);

      // Run the animation outside Angular to maintain 60fps performance
      this.ngZone.runOutsideAngular(() => {
        canvas.parentElement?.addEventListener('mousemove', this.mouseMoveListener);
        this.animate();
      });
    }
  }

  ngOnDestroy() {
    // Prevent memory leaks
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    if (this.resizeListener) window.removeEventListener('resize', this.resizeListener);

    if (this.canvasRef && this.canvasRef.nativeElement) {
      const canvas = this.canvasRef.nativeElement;
      canvas.parentElement?.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }

  // --- Parallax & Canvas Methods ---
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  }

  onMouseMove(e: MouseEvent) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    // 1. Trail Logic
    const mousePixelX = e.clientX - rect.left;
    const mousePixelY = e.clientY - rect.top;
    this.points.push({ x: mousePixelX, y: mousePixelY, age: 0 });

    // 2. Parallax Logic (Normalize mouse position from -1 to 1)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    this.targetX = (mousePixelX - centerX) / centerX;
    this.targetY = (mousePixelY - centerY) / centerY;
  }

  animate() {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Render Canvas Light Trail
    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i];
      p.age += 1;

      if (p.age > 40) {
        this.points.splice(i, 1);
        i--;
        continue;
      }

      const size = Math.max(0, 8 - p.age * 0.2);
      const opacity = 1 - p.age / 40;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(200, 76, 76, ${opacity})`; // Premium Novus Red
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = '#c84c4c';
      this.ctx.fill();
    }

    // Apply Smooth Lerp to Parallax elements
    this.currentX += (this.targetX - this.currentX) * 0.05;
    this.currentY += (this.targetY - this.currentY) * 0.05;

    // Shift the wrappers based on their HTML data-speed attributes
    this.parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed') || '0');
      // Transforms are stacked on top of existing inline styles
      el.style.transform = `translate(${this.currentX * speed}px, ${this.currentY * speed}px)`;
    });

    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  // --- Existing Methods ---
  isTrue(value: any) {
    this.isPsh = false;
    this.isPayRoll = false;
    this.isWebSecurity = false;
    this.isFutureBucks = false;
    this.isBlockChain = false;
    this.isPennyBank = false;
    this.isiTServiceManagement = false;
    this.isBulkSMSGateway = false;
    this.isCustomerSupport = false;
    this.isBanking = false;
    this.isFinancial = false;
    this.isAITechnology = false;

    if (value == 'PSH Systems') this.isPsh = true;
    if (value == 'Payroll System') this.isPayRoll = true;
    if (value == 'Web Security') this.isWebSecurity = true;
    if (value == 'BlockChain') this.isBlockChain = true;
    if (value == 'Penny Bank') this.isPennyBank = true;
    if (value == 'IT Service Management') this.isiTServiceManagement = true;
    if (value == 'Bulk SMS Gateway') this.isBulkSMSGateway = true;
    if (value == 'Customer Support') this.isCustomerSupport = true;
    if (value == 'Banking') this.isBanking = true;
    if (value == 'Financial') this.isFinancial = true;
    if (value == 'Future Bucks') this.isFutureBucks = true;
    if (value == 'AI Technology') this.isAITechnology = true;
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitError = '';
    this.submitSuccess = false;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    // TODO: replace with real HTTP call
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
    }, 1000);
  }

  setCategory(category: 'Core' | 'Banking' | 'Ecosystem') {
    this.activeCategory = category;
    if (category === 'Core') this.selectedService = 'PSH';
    else if (category === 'Banking') this.selectedService = 'PaymentSystems';
    else if (category === 'Ecosystem') this.selectedService = 'Finexus';
  }

  selectService(serviceId: string) {
    this.selectedService = serviceId;

    // On mobile screens, scroll down to the detail view automatically
    if (window.innerWidth < 992) {
      setTimeout(() => {
        document.getElementById('detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % (this.Logos.length - 9 + 1);
  }

  changeSlide(index: number) {
    this.currentIndex = index;
  }

  descCard(value: any) {
    if (value == 'PSH Systems') {
      this.isPsh = !this.isPsh;
      if (this.isPsh == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Payroll System') {
      this.isPayRoll = !this.isPayRoll;
      if (this.isPayRoll == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Web Security') {
      this.isWebSecurity = !this.isWebSecurity;
      if (this.isWebSecurity == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'BlockChain') {
      this.isBlockChain = !this.isBlockChain;
      if (this.isBlockChain == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Penny Bank') {
      this.isPennyBank = !this.isPennyBank;
      if (this.isPennyBank == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'IT Service Management') {
      this.isiTServiceManagement = !this.isiTServiceManagement;
      if (this.isiTServiceManagement == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Bulk SMS Gateway') {
      this.isBulkSMSGateway = !this.isBulkSMSGateway;
      if (this.isBulkSMSGateway == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Customer Support') {
      this.isCustomerSupport = !this.isCustomerSupport;
      if (this.isCustomerSupport == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Banking') {
      this.isBanking = !this.isBanking;
      if (this.isBanking == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Financial') {
      this.isFinancial = !this.isFinancial;
      if (this.isFinancial == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'Future Bucks') {
      this.isFutureBucks = !this.isFutureBucks;
      if (this.isFutureBucks == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    } else if (value == 'AI Technology') {
      this.isAITechnology = !this.isAITechnology;
      if (this.isAITechnology == true) {
        this.isCardEnlarged = true;
        this.isTrue(value);
      } else {
        this.isCardEnlarged = false;
      }
    }
  }
}