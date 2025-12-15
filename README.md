# PanditForPujaBooking.com

Online pandit booking platform for Pune - Built according to the masterplan specification.

## Project Status

**Phase A - Week 1: COMPLETED** ✅

- ✅ Design System (Button, Header, Footer components)
- ✅ Tailwind CSS configuration with saffron/gold theme
- ✅ Homepage with conversion hub, hero section, services grid
- ✅ Booking form component with validation
- ✅ API route scaffold for bookings
- ✅ 10 priority puja page templates with SEO structure

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Backend**: Next.js API routes (FastAPI pattern scaffold for future integration)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
/
├── components/          # Reusable React components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── BookingForm.tsx
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── api/            # API routes
│   └── puja-services/  # Puja service pages
├── styles/             # Global styles
└── logs/               # Generation logs
```

## Next Steps (Phase B - Week 2-4)

- Generate remaining Tier 1 pages
- Create Contact, FAQ, About, Testimonials pages
- Scaffold admin and vendor dashboards

## Notes

- All content is marked as "draft - from masterplan" and requires human copywriting review
- Puja pages use dynamic routing: `/puja-services/[puja-name]`
- SEO metadata and JSON-LD schema implemented on all pages
- Booking API is scaffolded and ready for backend integration

## Reference

This project follows the specifications outlined in `pandit_booking_masterplan.pdf`.

