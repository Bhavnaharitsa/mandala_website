# Mandala Website

A beautiful, modern website built with Next.js, featuring a Home page, Gallery, About, and Contact pages.

## Features

- 🏠 **Home Page** - Hero section with call-to-action and feature highlights
- 🖼️ **Gallery** - Beautiful grid layout showcasing artwork
- ℹ️ **About** - Information about the website and values
- 📧 **Contact** - Contact form and information
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful gradients and smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mandala_website/
├── app/
│   ├── about/
│   ├── contact/
│   ├── gallery/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Footer.module.css
│   ├── Navigation.tsx
│   └── Navigation.module.css
└── package.json
```

## Customization

- Replace placeholder images in the Gallery with your actual images
- Update contact information in the Contact page
- Modify colors in `globals.css` by changing CSS variables
- Edit content in each page component

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS Modules

