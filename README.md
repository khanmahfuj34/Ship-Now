# ShipNow — Logistics & Shipment Management Dashboard

A responsive logistics and shipment management frontend built with **Next.js, TypeScript, and Tailwind CSS**, based on the provided high-fidelity ShipNow Figma design.

This project was developed as the **Frontend Developer Intern Assignment for Trends Bird Limited**.

The implementation focuses on accurate Figma reproduction, responsive behaviour across desktop, tablet, and mobile, reusable component architecture, functional interactions using local mock data, and a clean codebase that is easy to understand and maintain.

---

## Live Demo & Repository

**Live Demo:** https://shipnow-chi.vercel.app/

**GitHub Repository:** https://github.com/khanmahfuj34/Ship-Now

> The production deployment URL will be added here before final submission.

---

## Assignment Overview

ShipNow is a logistics and shipment management platform designed around shipment operations, analytics, billing, warehouse management, and delivery monitoring.

The assignment required implementing the supplied Figma design as a responsive frontend application while reproducing its:

- layout
- typography
- spacing
- colours
- icons
- component styling
- content
- interactions
- responsive behaviour

The application is intentionally **frontend-only**.

There is no backend, database, server API, or external data source. Application data is maintained locally as typed mock data, as required by the assignment specification.

---

## Implementation Status

| Screen / Feature | Status |
| --- | :---: |
| Login | ✅ Complete |
| Dashboard | ✅ Complete |
| Shipments — Table View | ✅ Complete |
| Shipments — Grid View | ✅ Complete |
| Shipments — View Switcher | ✅ Complete |
| Create New Shipment | ✅ Complete |
| Invoices & Billing | ✅ Complete |
| Warehouse | ✅ Complete |
| Responsive Desktop Layout | ✅ Complete |
| Responsive Tablet Layout | ✅ Complete |
| Responsive Mobile Layout | ✅ Complete |
| Shared Application Shell | ✅ Complete |
| Placeholder / Coming Soon Navigation | ✅ Complete |

> Status reflects the current implementation. A final responsive and functional QA pass should be completed before submission.

---

## Core Features

### Authentication

The Login screen implements the authentication experience from the supplied design.

Implemented behaviour includes:

- email input validation
- required field validation
- password length validation
- show/hide password control
- validation error states
- simulated client-side authentication
- navigation to the dashboard after successful submission
- logout flow back to the Login screen

No real authentication service or backend is used.

---

### Dashboard

The Dashboard acts as the main overview of the ShipNow platform and uses the shared authenticated application shell.

It includes:

- active shipment metrics
- delivery performance
- revenue overview
- shipment statistics
- profit summary
- shipment type distribution
- product category breakdown
- live shipment tracking
- shipment alerts
- recent shipments
- recent activity

Charts are rendered from local data using a charting library rather than static chart images.

Interactive chart states provide data feedback while maintaining the supplied visual design.

The **Add New Shipping** action connects the Dashboard directly to the Create New Shipment flow.

---

### Shipments

The Shipments module supports both required presentation modes on the same feature:

#### Table View

Includes:

- shipment summary metrics
- status filtering
- shipment search
- filter controls
- date controls
- sortable columns
- row selection
- pagination
- page-size selection
- shipment status indicators

#### Grid View

Includes:

- responsive shipment cards
- shipment status
- company information
- shipment type
- origin
- destination
- carrier
- shipment progress
- search
- filters
- sorting
- pagination

---

### Shipment View Switching

The assignment defines Table and Grid as **two views of the same Shipments feature**, rather than separate application pages.

A dedicated view switcher allows users to move between:

**Table View ↔ Grid View**

without requiring a full page reload.

Both modes use the same underlying shipment data rather than maintaining duplicated datasets.

The switcher remains available across supported responsive layouts.

---

### Create New Shipment

The Create New Shipment screen contains a structured multi-section form covering the shipment creation workflow.

The form includes:

#### Sender Information

- company
- email
- phone number
- pickup address

#### Recipient Information

- company
- email
- phone number
- delivery address

#### Package Details

- item description
- quantity
- value
- weight
- units
- dimensions

#### Shipping Details

- freight type
- carrier
- shipping method
- shipment ID
- shipment date
- notes

Additional options include shipment services and tracking/status preferences where represented by the design.

The form implements client-side validation and displays validation errors for invalid input. Error states clear when the corresponding values are corrected.

The implementation is frontend-only and does not submit shipment data to a backend.

---

### Invoices & Billing

The Invoices & Billing screen implements the required **master-detail interface**.

It includes:

- invoice summary cards
- invoice list
- search and controls
- invoice status indicators
- row selection
- selected invoice highlighting
- invoice details
- sender/billing information
- recipient information
- package summary
- subtotal
- tax
- fees
- final total
- pagination

Selecting an invoice updates the Invoice Details panel with the corresponding invoice data.

Invoice totals are derived from invoice line-item data rather than being represented only as static display values.

---

### Warehouse

The Warehouse screen combines inventory analytics and operational information into a responsive dashboard.

Implemented sections include:

- total SKU
- quantity on hand
- capacity usage
- warehouse inventory
- capacity visualisation
- warehouse storage
- package status
- warehouse map
- floor controls
- warehouse activity log

The Warehouse interface uses the same responsive application shell as the other authenticated screens.

---

## Functional Behaviour

Although the project does not use a backend, the interface is not implemented as a static mockup.

The application includes functional client-side interactions such as:

- navigation between implemented screens
- mobile navigation drawer
- active navigation states
- tabs and status controls
- search
- filtering
- sorting
- row selection
- selected states
- pagination
- page-size controls
- Shipments Table/Grid switching
- chart rendering from mock data
- chart interactions
- form validation
- show/hide password
- invoice master-detail selection
- warehouse floor controls
- profile dropdown
- logout
- placeholder navigation for features outside the assignment scope

All applicable interactions operate against local application state and mock data.

---

## Responsive Design

The application implements the three responsive layouts provided by the Figma design.

| Breakpoint | Target | Behaviour |
| --- | ---: | --- |
| Desktop | 1440px | Expanded sidebar, labels and multi-column layouts |
| Tablet | 768px | Collapsed icon rail and reflowed content |
| Mobile | 375px | Mobile app bar, hamburger drawer and single-column layouts |

The implementation also accounts for widths between the provided design frames.

Responsive behaviour includes:

- expanded desktop navigation
- collapsible sidebar
- tablet navigation rail
- mobile hamburger drawer
- sticky mobile application header
- route-aware mobile page titles
- responsive dashboard grids
- mobile shipment cards
- responsive forms
- responsive invoice layouts
- responsive warehouse sections
- internal table overflow where necessary
- protection against page-level horizontal overflow

The mobile implementation follows the dedicated mobile Figma layouts rather than simply shrinking desktop components.

---

## Application Shell

The Dashboard and authenticated feature screens share a reusable application shell.

The shell contains:

- Sidebar
- Sidebar navigation
- Mobile Header
- Mobile navigation drawer
- User profile controls
- Page content area
- Footer

This avoids recreating the same layout independently for every feature.

Navigation items that do not correspond to a required assignment screen are still displayed and route to a reusable placeholder experience.

---

## Tech Stack

### Core

- **Next.js** — React framework using the App Router
- **React** — component-based UI
- **TypeScript** — static typing
- **Tailwind CSS** — styling and responsive design

### UI & Functionality

- **Recharts** — data-driven dashboard charts
- **React Hook Form** — form state and validation workflow
- **Zod** — form validation schemas
- **Lucide React** — utility icons where appropriate

Project-specific visual assets from the supplied design are stored locally under `public`.

No pre-styled dashboard/component framework is used.

---

## Project Architecture

The codebase follows a feature-oriented architecture designed to keep domain-specific components separate from globally reusable UI.

```text
shipnow/
│
├── public/
│   ├── icons/
│   ├── images/
│   └── logos/
│
├── src/
│   │
│   ├── app/
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
│   │   │   ├── shipments/
│   │   │   │   └── new/
│   │   │   ├── invoices/
│   │   │   └── warehouse/
│   │   │
│   │   ├── auth/
│   │   │   └── login/
│   │   │
│   │   ├── globals.css
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── charts/
│   │   ├── layout/
│   │   ├── shared/
│   │   └── ui/
│   │
│   ├── config/
│   │
│   ├── data/
│   │   ├── dashboard/
│   │   ├── shipments/
│   │   ├── invoices/
│   │   └── warehouse/
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   ├── shipments/
│   │   ├── invoices/
│   │   └── warehouse/
│   │
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   └── types/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

The exact internal structure may evolve as features are decomposed, but the primary principle is to keep:

**routing → feature logic → reusable components → domain data**

clearly separated.

---

## Architecture Decisions

### Feature-Based Organisation

Feature-specific components are grouped by domain rather than placing every component in one global directory.

For example:

```text
features/
├── dashboard/
├── shipments/
├── invoices/
└── warehouse/
```

This keeps feature ownership clear and prevents the shared component directory from becoming unnecessarily large.

---

### Shared UI Components

Generic components that can be reused across features live in shared/UI directories.

Examples include:

- buttons
- inputs
- layout primitives
- navigation components
- status presentation
- common controls

Feature-specific business presentation remains inside its corresponding feature.

---

### Single Shared Application Shell

The authenticated layout is implemented once and reused by Dashboard, Shipments, Invoices, Warehouse, and related routes.

This provides consistent:

- navigation
- spacing
- responsive behaviour
- mobile drawer behaviour
- page structure

without duplicating shell markup.

---

### Shared Data Across Responsive Views

Desktop and mobile presentations do not maintain separate copies of domain data.

For example:

```text
Shipment[]
      │
      ├── Table View
      │
      └── Grid / Mobile Card View
```

Both presentations consume the same shipment records.

This keeps responsive behaviour within the presentation layer instead of duplicating application data.

---

## Data Handling

All application data is stored locally within the project, separated by domain.

Example:

```text
data/
├── dashboard/
├── shipments/
├── invoices/
└── warehouse/
```

The project intentionally contains:

- no external API calls
- no backend API
- no Next.js server routes for application data
- no database
- no remote persistence requirement

Mock datasets use the content and values from the provided design wherever applicable.

Additional records may be used where necessary to demonstrate functionality such as pagination.

---

## State Management

The application uses local React state and component composition for UI interactions.

A global external state-management library is intentionally not introduced because the current assignment scope does not require one.

State is used for behaviour such as:

- selected shipment view
- search queries
- filters
- sorting
- pagination
- selected invoice
- sidebar state
- mobile drawer state
- form state

This keeps the implementation proportional to the requirements and avoids unnecessary architectural complexity.

---

## Accessibility

While accessibility is not the primary focus of the assignment, the implementation aims to follow fundamental accessibility practices.

These include:

- semantic HTML where appropriate
- labelled form fields
- image alternative text
- keyboard-accessible interactive controls
- visible focus states
- native form controls where suitable

---

## Getting Started

### Prerequisites

Before running the project locally, make sure the following are installed:

- Node.js
- npm
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/khanmahfuj34/Ship-Now.git
```

### 2. Navigate to the Project

```bash
cd Ship-Now
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

in your browser.

---

## Production Build

Create an optimised production build with:

```bash
npm run build
```

After a successful build, start the production server with:

```bash
npm start
```

---

## Main Routes

| Route | Purpose |
| --- | --- |
| `/auth/login` | Login |
| `/dashboard` | Dashboard |
| `/shipments` | Shipment management |
| `/shipments/new` | Create New Shipment |
| `/invoices` | Invoices & Billing |
| `/warehouse` | Warehouse |

Other navigation entries represented by the product design may use a placeholder page because they do not have corresponding assignment screens.

---

## Design Implementation

The supplied Figma design is treated as the primary visual reference for the application.

Implementation focuses on matching:

- content hierarchy
- spacing
- typography
- colour palette
- icons
- cards
- borders
- status indicators
- controls
- responsive layout
- desktop/tablet/mobile behaviour

The application does not use a downloaded dashboard template or a pre-styled component framework.

Where supplied visual assets are available, they are reused directly from the project's local assets.

---

## Charts

Dashboard and Warehouse visualisations are rendered from data rather than reproduced as screenshots.

Chart components receive data through structured props, keeping presentation separate from the underlying mock datasets.

This makes charts reusable and keeps their behaviour consistent with the rest of the data-driven UI.

---

## Form Validation

Forms provide client-side validation and visual error feedback.

The Login screen validates:

- required fields
- email format
- password requirements

The Create New Shipment form validates required shipment information and displays corresponding error states.

Validation feedback is cleared as invalid fields are corrected.

---

## Code Quality Principles

The implementation follows several core principles:

1. **Readability over unnecessary abstraction**  
   Components and utilities are kept understandable rather than introducing complex patterns without a clear requirement.

2. **Reusable components**  
   Shared interface patterns are extracted where reuse provides meaningful value.

3. **Feature isolation**  
   Domain-specific code remains close to its feature.

4. **Type safety**  
   TypeScript interfaces/types define application data and component contracts.

5. **Single source of truth**  
   Responsive views reuse the same domain datasets.

6. **Consistent styling**  
   Tailwind CSS is used consistently for layout and component styling.

7. **Small component responsibilities**  
   Large screens are decomposed into focused components instead of maintaining monolithic page files.

---

## Known Issues

At the time of final submission, any remaining issue will be documented here explicitly.

Current target before submission:

- No known blocking issues.
- Final cross-browser and responsive QA should be completed against the supplied Figma frames.
- Production deployment should be verified in a private/incognito browser before submission.

> This section should be updated if any visual or functional discrepancy remains after final QA rather than presenting incomplete functionality as complete.

---

## Assumptions & Implementation Decisions

The following decisions were made within the boundaries of the assignment:

### Placeholder Navigation

Navigation items such as Analytics, Calendar, Tracking, Fleets, and Drivers are included because they are part of the application shell, but they do not have dedicated assignment screens.

They therefore use a placeholder/Coming Soon experience rather than implementing additional unsupported product features.

### Shipment View Switcher

The Table and Grid Figma frames are treated as two presentation modes of the same Shipments feature.

A client-side switcher is therefore used rather than implementing them as independent product pages.

### Map Presentation

A real mapping SDK is not required by the assignment.

Tracking/map presentation is implemented using static/custom visual elements matching the supplied interface instead of introducing an external mapping service.

### Authentication

Authentication is simulated on the client.

No real credentials, authentication API, database, or server-side session system is required for this assignment.

### Mock Data

All feature data is local and intentionally static.

Additional records may be included where required to demonstrate pagination and interactive states.

---

## Scope

This repository is specifically a frontend implementation exercise.

The following are intentionally outside the project scope:

- backend services
- database
- REST/GraphQL APIs
- real authentication
- external shipment provider integration
- real-time logistics infrastructure
- production billing/payment processing
- mapping SDK integration

Their absence is intentional and consistent with the assignment requirements.

---

## Final QA Checklist

Before submission, the following should be verified:

- [ ] Login validation works correctly
- [ ] Show/hide password works
- [ ] Successful login navigates to Dashboard
- [ ] Desktop navigation works
- [ ] Tablet sidebar behaves correctly
- [ ] Mobile drawer opens and closes correctly
- [ ] Dashboard charts render from data
- [ ] Shipment search works
- [ ] Shipment filters work
- [ ] Shipment sorting works
- [ ] Shipment row selection works
- [ ] Shipment pagination works
- [ ] Page-size selection works
- [ ] Table/Grid switcher works without page reload
- [ ] Create Shipment validation works
- [ ] Validation errors clear after correction
- [ ] Invoice selection updates Invoice Details
- [ ] Invoice totals are calculated from line items
- [ ] Warehouse floor controls work
- [ ] No page-level horizontal overflow
- [ ] 375px mobile design verified
- [ ] 768px tablet design verified
- [ ] 1440px desktop design verified
- [ ] Keyboard focus states are visible
- [ ] `npm run build` completes successfully
- [ ] Production deployment works
- [ ] Production URL tested in private/incognito mode
- [ ] README status and Known Issues reflect the actual final build

---

## Assignment Compliance Summary

| Requirement | Implementation |
| --- | --- |
| React / Next.js | Next.js |
| App Router preferred | Implemented |
| TypeScript preferred | Implemented |
| Consistent styling solution | Tailwind CSS |
| Data-driven charts | Recharts |
| Local mock data | Implemented |
| No backend/API/database | Followed |
| Desktop 1440px | Implemented |
| Tablet 768px | Implemented |
| Mobile 375px | Implemented |
| Shared application shell | Implemented |
| Navigation | Implemented |
| Mobile drawer | Implemented |
| Search & filtering | Implemented |
| Sorting | Implemented |
| Row selection | Implemented |
| Pagination | Implemented |
| Shipment view switcher | Implemented |
| Form validation | Implemented |
| Invoice master-detail behaviour | Implemented |
| Responsive layouts | Implemented |
| Public deployment | Implemented |
| README | Implemented |

---

## Deployment

The application will be deployed using a publicly accessible frontend hosting provider.

**Live URL:** Coming soon

The production URL will be verified without an authenticated browser session before final submission.

---

## Repository

Source code and development history are available here:

https://github.com/khanmahfuj34/Ship-Now

The project was developed incrementally with descriptive Git commits rather than submitted as a single final commit.

---

## Author

**Md Mahfuj Al Hossain Khan**

Computer Science & Engineering Graduate  
Frontend / Full Stack Developer

GitHub: https://github.com/khanmahfuj34

---

## Acknowledgement

This project was developed for the **Trends Bird Limited Frontend Developer Intern Assignment**.

The ShipNow interface and supplied design assets were used solely as the reference material for implementing the requested frontend assignment.

---

> **Note:** This project is a frontend assignment implementation using local mock data. It does not represent a production logistics backend or a commercially deployed ShipNow service.
