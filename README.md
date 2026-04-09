# MOWE Global - Ministry of Workforce Engagement

A modern web application built with Next.js 16 and Tailwind CSS, providing comprehensive workforce engagement solutions for organizations seeking to transform their people and performance systems.

## 🚀 About

MOWE Global is a premier workforce engagement consultancy with over 15 years of experience in Human Capital Management. Led by Fredrick Okeagu ("Fred Rabbi"), we specialize in:

- **Leadership Development** - P.A.S.T Leadership™, R-CAP Executive Certification™
- **Workforce Intelligence** - AURA™ Framework, MoWE-BIS™ Survey, Workforce Republic™
- **Performance Systems** - 2E2P Value Matrix™, Enterprise Guidance & Management™
- **Capability Building** - Business As Game™, CBAM Mini-MBA

## 🎯 Services

### Core Service Categories

#### Leadership & Executive Development
- **P.A.S.T Leadership™** - Psychology, Art, Science & Technology of Leadership
- **Reputational Capital (R-CAP)** - Executive reputation building program
- **Understanding Self & Managing Others** - Personality and emotional intelligence training

#### Workforce Intelligence & Diagnostics  
- **Workforce Republic™** - Employee experience governance framework
- **AURA™ Framework** - Workforce capacity alignment system
- **MoWE-BIS™ Survey** - Belonging & engagement intelligence
- **ECAP** - Employee competency assessment platform

#### Performance & Organizational Systems
- **2E2P Value Matrix™** - Performance evaluation framework
- **Enterprise Guidance & Management™** - Strategy alignment system

#### Capability Development Programmes
- **Business As Game™** - Experiential team management training
- **Bringing Your A-Game to Work** - Ownership and responsibility building
- **CBAM Mini-MBA** - Practical business administration certification

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui for consistent design patterns
- **Icons**: Lucide React for modern, consistent iconography
- **State Management**: React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Typography**: Playfair Display (serif) + Inter (sans-serif)

## 🎨 Design System

### Color Palette
- **Primary Red**: Bright, vibrant red for CTAs and interactive elements
- **Previous Red**: Deeper red for stats and key sections
- **Navy Blue**: Professional dark backgrounds
- **Gold**: Accent color for highlights and premium elements

### Typography
- **Headings**: Playfair Display - Elegant, professional serif
- **Body**: Inter - Clean, readable sans-serif

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager


## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx     # About page
│   ├── services/
│   │   └── page.tsx     # Services page
│   ├── contact/
│   │   └── page.tsx     # Contact page
│   └── not-found.tsx       # 404 error page
├── components/              # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── ServiceCard.tsx     # Service display card
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── assets/                 # Static assets (images, etc.)
```

## 📱 Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Optimized layouts for all screen sizes
- Touch-friendly navigation and interactions

### Performance Optimizations
- Image optimization with WebP format
- Lazy loading for images
- Code splitting with Next.js
- Optimized bundle sizes

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

## 🔐 Security

- Environment variable management
- Input validation and sanitization
- Secure headers configuration
- XSS protection built-in

