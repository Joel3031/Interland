import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// NOTE: If using module-based Angular (not standalone), remove standalone & imports
// here and add CommonModule to your AppModule imports array instead.

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

interface BudgetItem {
  type: string;
  description: string;
  uses: string[];
}

@Component({
  selector: 'app-virtualaccount',
  templateUrl: './virtualaccount.component.html',
  styleUrls: ['./virtualaccount.component.css']
})
export class VirtualaccountComponent {

  activeTab: 'cobo' | 'pobo' = 'cobo';
  activeBudgetTab: 'limit' | 'allocation' = 'limit';

  stats = [
    { value: '30–40%', label: 'Reduction in banking costs through account consolidation' },
    { value: '2.3T', label: 'Global non-cash transactions projected by 2027' },
    { value: '98%', label: 'Banking executives adopting AI-powered reconciliation' },
    { value: '<1 min', label: 'Time to spin up a virtual account vs days for a real one' }
  ];

  drivers = [
    {
      icon: 'savings',
      emoji: '💸',
      title: 'Lower Banking Costs',
      description: 'Replace dozens of physical accounts with a single real account hosting unlimited virtual sub-accounts — cutting overhead drastically.'
    },
    {
      icon: 'radar',
      emoji: '📡',
      title: 'Live Cash Visibility',
      description: 'A real-time view of cash positions across all geographies, departments, and partners — in one dashboard, not twenty portals.'
    },
    {
      icon: 'bolt',
      emoji: '⚡',
      title: 'Instant Onboarding',
      description: 'Assign a unique virtual payment account to any vendor or customer in real time — via API, business rules, or manual configuration.'
    },
    {
      icon: 'psychology',
      emoji: '🤖',
      title: 'AI-Driven Automation',
      description: 'Smart reconciliation, predictive exception handling, and automated settlement alerts — so your team focuses on decisions, not data entry.'
    }
  ];

  industries = [
    { name: 'FMCG & Retail', emoji: '🛒' },
    { name: 'Manufacturing', emoji: '🏭' },
    { name: 'eCommerce', emoji: '🛍️' },
    { name: 'NBFCs & Fintech', emoji: '🏦' },
    { name: 'Public Sector', emoji: '🏛️' },
    { name: 'Logistics', emoji: '🚚' }
  ];

  features = [
    {
      title: 'Centralized Cash Flow Visibility',
      description: 'Think of it as a live command center for your treasury. One parent account supports unlimited virtual child accounts — each tagged by region, customer, or business unit. Structured, real-time data flows let your team monitor inflows and outflows across the entire organization without switching systems.',
      points: [
        'Single parent account, unlimited virtual children',
        'Region, entity, or department-level cash monitoring',
        'Live dashboards with drill-down by geography or partner',
        'Structured data feeds for ERP and reporting systems'
      ]
    },
    {
      title: 'Automated Reconciliation',
      description: 'Every transaction carries a unique tag — so you always know who paid, for what, and when. AI-powered exception routing surfaces anomalies before they snowball. Say goodbye to spreadsheet chases and manual matching at month-end.',
      points: [
        'Auto-tag customer IDs, invoice numbers, and policy IDs',
        'AI reconciliation with predictive exception routing',
        'Supports retail collections, corporate payments, and ERP',
        'Closes books in minutes, not days'
      ]
    },
    {
      title: 'Real-Time Transaction Tracking',
      description: 'Stop relying on end-of-day batch reports. Track payments by geography, vertical, or partner as they happen. Time-sensitive collections — EMIs, utility bills, insurance premiums — are managed automatically without any manual intervention.',
      points: [
        'Live transaction feeds by geography and partner',
        'Instant ERP confirmations and settlement triggers',
        'Automated alerts for overdue or high-value collections',
        'No need to log into multiple bank portals'
      ]
    }
  ];

  creationMethods = [
    {
      type: 'Auto-Generated',
      tag: 'Rule-Based',
      tagColor: '#00D4B8',
      description: 'Virtual accounts are created the moment a defined business event fires — a dealer signs up, a policy is issued, or a loan is approved. Zero manual effort, fully automated.',
      useCases: [
        'Dealer agreement triggers instant VA creation',
        'Unique VA per loan customer or insurance policy',
        'Supports high-churn models like BNPL and marketplaces'
      ]
    },
    {
      type: 'Manual Creation',
      tag: 'High-Value',
      tagColor: '#A78BFA',
      description: 'Purpose-built for scenarios that need careful configuration — major vendors, sensitive enterprise divisions, or specialized one-off project accounts with custom rules.',
      useCases: [
        'Custom reconciliation rules for large vendors',
        'Budget allocation per department or business unit',
        'Special-case government or enterprise project accounts'
      ]
    },
    {
      type: 'API-Based',
      tag: 'Real-Time',
      tagColor: '#F59E0B',
      description: 'Designed for speed and deep integration with your existing platforms — ERP, CRM, customer portals, or mobile onboarding journeys. Trigger VA creation programmatically at any step.',
      useCases: [
        'Real-time VA assignment during ERP vendor onboarding',
        'Customer-facing portals trigger VAs on demand',
        'Syncs with invoice generation and loan distribution flows'
      ]
    }
  ];

  tableRows = [
    { feature: 'Nature', va: 'Digital sub-ledger of a real account', real: 'Actual bank account at a financial institution' },
    { feature: 'Opening Process', va: 'Instant — rule-based or API-triggered', real: 'KYC, documentation, and bank approval required' },
    { feature: 'Maintenance Cost', va: 'Zero to minimal', real: 'High ongoing fees and compliance costs' },
    { feature: 'Reconciliation', va: 'Automated and segmented per entity', real: 'Manual, time-consuming, and error-prone' },
    { feature: 'Scalability', va: 'Thousands under one real account', real: 'One account per entity or business need' }
  ];

  coboPoints = [
    'Every payer — customer, dealer, or branch — gets a dedicated virtual account',
    'All collections route into one physical account with clean, labeled transaction trails',
    'Finance gets structured reports by territory, channel, or partner type',
    'Automatic payment-to-invoice mapping removes manual reconciliation entirely'
  ];

  poboPoints = [
    'All disbursements go out from one central physical treasury account',
    'Each payment carries a virtual tag identifying the source entity or department',
    'External counterparties see the right origin; internally, everything is traceable',
    'Ideal for NBFCs, logistics groups, and large retail chains with shared treasuries'
  ];

  budgetTypes: Record<'limit' | 'allocation', BudgetItem[]> = {
    limit: [
      {
        type: 'Basic Limit',
        description: 'A flat spending cap on a single virtual account. Once the ceiling is reached, transactions are automatically blocked or queued for manual review.',
        uses: ['Department travel or event budgets', 'Fixed one-time disbursements', 'Expense capping for new business units']
      },
      {
        type: 'Entity Limit',
        description: 'A shared cap defined at the entity level — multiple virtual accounts under one entity pool from the same ceiling. Collective usage is monitored in real time.',
        uses: ['Regional offices with multiple departments', 'Franchise groups under one legal entity', 'Project teams under a central cost center']
      },
      {
        type: 'VA Limit',
        description: 'The most granular control — each individual virtual account carries its own isolated spend ceiling. Ideal for highly specific budget enforcement.',
        uses: ['Marketing spend per campaign', 'Disbursements to individual field staff', 'Fixed expense allocation per vendor account']
      }
    ],
    allocation: [
      {
        type: 'Top-Down Distribution',
        description: 'A central budget is split and distributed to child virtual accounts. Each sub-account draws from its allocated share while the platform tracks total utilization in real time.',
        uses: ['Government ministries distributing to state bodies', 'HQ assigning yearly budgets to branches', 'NGOs managing multiple projects from one fund']
      },
      {
        type: 'Payment Enablement',
        description: 'Virtual accounts can only initiate payments when sufficient budget remains. The system validates each transaction, blocks overruns, and alerts finance teams automatically.',
        uses: ['Pre-approved government disbursements', 'Controlled franchise payment workflows', 'Project-based financing with approval gates']
      }
    ]
  };

  get currentBudgetItems(): BudgetItem[] {
    return this.budgetTypes[this.activeBudgetTab];
  }

  benefits = [
    {
      title: 'Scale Without Overhead',
      emoji: '🚀',
      metric: '∞',
      metricLabel: 'virtual accounts, one real account',
      points: [
        'Auto-generate VAs via business rules or APIs',
        'Bulk creation, editing, and deactivation in one action',
        'Real-time sync with ERPs, CRMs, and reconciliation engines',
        'No additional headcount needed as transaction volume grows'
      ]
    },
    {
      title: 'Real Cost Savings',
      emoji: '💰',
      metric: '40%',
      metricLabel: 'average reduction in banking costs',
      points: [
        'One physical account replaces dozens',
        'Automated reconciliation slashes closing cycle time',
        'Fewer misposts and payment errors mean less write-offs',
        'Smarter liquidity management reduces idle cash'
      ]
    },
    {
      title: 'Audit-Ready Control',
      emoji: '🛡️',
      metric: '100%',
      metricLabel: 'audit trail on every change',
      points: [
        'Every edit, approval, and action fully logged',
        'Role-based access across finance, ops, and IT teams',
        'Auto-blocking at budget thresholds — no manual policing',
        'Regulator-ready reporting and compliance integration built in'
      ]
    }
  ];

  faqs: FaqItem[] = [
    {
      question: 'What exactly is a virtual account?',
      answer: 'A virtual account is a digital sub-ledger linked to a physical bank account. It acts as a proxy account with a unique identifier, letting businesses track and segment transactions by customer, department, or region — without opening additional real bank accounts.',
      open: false
    },
    {
      question: 'How is a virtual account different from a real bank account?',
      answer: 'A physical bank account holds and moves real money. A virtual account is a tracking layer on top — it has its own identifier and ledger, but funds ultimately flow through the underlying real account. Virtual accounts open instantly, cost almost nothing to maintain, and thousands can exist under a single real account.',
      open: false
    },
    {
      question: 'What is the difference between COBO and POBO?',
      answer: 'COBO (Collection on Behalf Of) assigns a unique virtual account to each payer — so all incoming payments are automatically tagged and reconciled. POBO (Payment on Behalf Of) lets you disburse from one central account while tagging each payment to the correct internal entity — be it a department, branch, or project.',
      open: false
    },
    {
      question: 'How is a virtual account different from a digital wallet?',
      answer: 'A virtual account is a corporate treasury tool tied to a real bank account, designed for tracking high-volume B2B transactions. A wallet is a prepaid container for retail or individual payments. Virtual accounts support complex reconciliation and budget controls; wallets are built for convenience in small consumer payments.',
      open: false
    },
    {
      question: 'Can virtual accounts be created in bulk?',
      answer: 'Yes. The platform supports bulk VA creation via secure file uploads (CSV/XML), API-triggered generation based on business events, and rule-based auto-creation tied to workflow steps. All bulk actions are governed by configurable approval workflows with complete audit trails.',
      open: false
    },
    {
      question: 'What budget control models are available?',
      answer: 'Two models are available: limit-based budgeting (flat spend caps at the account, entity, or individual VA level with auto-blocking) and allocation-based budgeting (distributing a central budget across child accounts with balance-checked payment enablement). Both include real-time dashboards and low-balance alerts.',
      open: false
    }
  ];

  setTab(tab: 'cobo' | 'pobo'): void {
    this.activeTab = tab;
  }

  setBudgetTab(tab: 'limit' | 'allocation'): void {
    this.activeBudgetTab = tab;
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }
}