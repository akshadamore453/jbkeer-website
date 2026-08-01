# J B KEER Adhesive Consultant — Landing Page PRD

## Original Problem Statement
Build a landing page inspired by https://www.pidilite.com/, rebranded as **J B KEER Adhesive Consultant**, with the provided logo, fully responsive, and lead-generating features: a "Book Consultancy" button in the top navbar and a detailed consultation form at the bottom of the page.

## User Choices (locked in via ask_human)
- Lead form fields: **Name, Email, Phone, Company, Project Type, Message**
- Lead destination: **Database only** (email integration deferred — user opted out)
- Services: **Generic adhesive consultancy** (industrial adhesives, construction chemicals, waterproofing, wood bonding, sealants, expert consultancy)
- Contact: +91 9850858558 · www.jbkeer.com · Krishna Tulsi, Nr Ramkrishna Garden, Dhayari Village, Dhayari, Pune, Maharashtra 411041
- Stats: 40+ years of experience, 1200+ projects delivered

## User Personas
- **Plant heads / operations managers** at furniture, automotive, footwear, packaging OEMs looking for objective adhesive advice.
- **Project directors / civil contractors** evaluating construction chemicals and waterproofing systems.
- **Procurement leads** seeking independent supplier evaluation across multiple brands.

## Architecture
- **Backend** (FastAPI + MongoDB): `/api/leads` POST/GET endpoints with Pydantic `LeadCreate`/`Lead` models (uuid id, ISO datetime, EmailStr validation).
- **Frontend** (React + Tailwind + shadcn/ui): single-page landing at `/` composed of modular sections under `/app/frontend/src/components/landing/`.
- **Design system**: Outfit (display) + Manrope (body), brand-navy `#1A172B` + brand-teal `#0E9F98`, Swiss high-contrast B2B layout (per design_guidelines.json).

## What's Implemented (2025-12)
- [x] Sticky responsive Navbar with utility strip + "Book Consultancy" CTA (desktop + mobile drawer)
- [x] Hero with stat callout card, two CTAs, trust strip
- [x] Stats bar (40+ yrs, 1200+ projects, 18+ industries, 100% independent)
- [x] Services grid (6 practice areas with imagery)
- [x] Industries served grid (8 industries)
- [x] 4-step Process section (dark)
- [x] About / Why-choose-us pillars
- [x] Testimonials (3 client voices)
- [x] Detailed Contact form (Name, Email, Phone, Company, Project Type select, Message) with inline validation, Sonner toast, and success state
- [x] Footer with full contact info + nav links
- [x] Backend POST/GET `/api/leads` with MongoDB persistence
- [x] End-to-end testing passed (6/6 backend, full frontend coverage)

## Backlog
- **P1**: Email notification on new lead (Resend/SendGrid — needs API key from user)
- **P1**: Admin view to browse leads (currently exposed only via `GET /api/leads`)
- **P2**: Real client logos / case-study section
- **P2**: Blog / insights section (SEO)
- **P2**: WhatsApp click-to-chat floating button
- **P3**: Multi-language (Marathi/Hindi)
- **P3**: Pagination on `GET /api/leads` once volume grows
