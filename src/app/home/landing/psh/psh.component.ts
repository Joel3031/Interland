import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psh',
  templateUrl: './psh.component.html',
  styleUrls: ['./psh.component.css']
})
export class PshComponent implements OnInit {

  activeBundle: 'domestic' | 'crossborder' = 'domestic';

  heroStats = [
    { value: '100+', label: 'Payment Submodules' },
    { value: '99%+', label: 'Auto-Match Reconciliation' },
    { value: 'Days', label: 'Not Months to Deploy' },
    { value: 'ISO 20022', label: 'Native Message Standard' }
  ];

  constructor() { }
  ngOnInit(): void { }

  setBundle(bundle: 'domestic' | 'crossborder'): void {
    this.activeBundle = bundle;
  }
}