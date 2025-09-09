# Inzamam Sandhu - Personal Portfolio

A modern and creative personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion, showcasing the skills and services of Inzamam Sandhu, a creative professional in Design, Marketing & Development.

## 🚀 Features

- **Modern Design**: Dark theme with red and white accent colors
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, animated progress bars, and smooth scrolling
- **Professional Sections**:
  - Hero Section with animated background and particles
  - About Section with profile showcase
  - Skills Section with animated progress indicators
  - Projects Portfolio with grid layout and hover effects
  - Services Section with detailed service cards
  - Testimonials Slider with client feedback
  - Contact Form with validation and social links

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Email Service**: EmailJS for contact form
- **TypeScript**: Full type safety
- **Icons**: Custom SVG icons and emoji

## 🎨 Design Features

- **Dark Theme**: Professional dark background with custom color palette
- **Typography**: Clean and modern Geist font family
- **Color Scheme**: 
  - Primary: Red (#ef4444)
  - Background: Dark (#0a0a0a)
  - Cards: Darker gray (#171717)
  - Text: White with muted variants

## 📱 Sections Overview

### Hero Section
- Animated particle background
- Interactive mouse-follow effect
- Call-to-action buttons with smooth animations
- Scroll indicator

### About Section
- Profile picture placeholder with decorative elements
- Professional introduction text
- Achievement statistics cards
- Smooth reveal animations

### Skills Section
- Four main skill categories:
  - 🎨 Graphic Designing (95%)
  - 📈 Digital Marketing (90%)
  - 🔍 SEO Optimization (85%)
  - 💻 Web Development (92%)
- Animated progress bars
- Icon-based visual representation

### Projects Section
- Grid-based portfolio showcase
- Hover animations and effects
- Tag-based categorization
- Placeholder for project images

### Services Section
- Detailed service cards with:
  - Service descriptions
  - Feature lists
  - Call-to-action buttons
- Hover effects and animations

### Testimonials Section
- Auto-rotating testimonial slider
- Manual navigation controls
- Star ratings display
- Client avatars and information

### Contact Section
- Form validation for:
  - Name (required)
  - Email (required, format validation)
  - Message (required, minimum length)
- Social media links:
  - LinkedIn
  - GitHub
  - Instagram
  - WhatsApp
- Contact information display

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up EmailJS for Contact Form**
   - Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
   - Create a new service (Gmail recommended)
   - Create an email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (Info.inzisandhu@gmail.com)
   - Get your Service ID, Template ID, and Public Key
   - Create `.env.local` file in the root directory with:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Main portfolio page
├── components/
│   ├── Navigation.tsx     # Responsive navigation bar
│   ├── HeroSection.tsx    # Hero section with animations
│   ├── AboutSection.tsx   # About section with profile
│   ├── SkillsSection.tsx  # Skills with progress bars
│   ├── ProjectsSection.tsx # Portfolio showcase
│   ├── ServicesSection.tsx # Services offered
│   ├── TestimonialsSection.tsx # Client testimonials
│   └── ContactSection.tsx # Contact form and info
```

## 🎨 Customization

### Colors
The color scheme can be customized in `globals.css`:
- Primary color: `--primary`
- Background: `--background`
- Cards: `--card`
- Text colors: `--foreground`, `--muted-foreground`

### Content
Update the content in each component file:
- Personal information in `HeroSection.tsx`
- Skills and percentages in `SkillsSection.tsx`
- Projects data in `ProjectsSection.tsx`
- Services information in `ServicesSection.tsx`
- Testimonials in `TestimonialsSection.tsx`
- Contact details in `ContactSection.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

All components adapt their layout and styling for optimal viewing on any device.

## 📧 EmailJS Setup Guide

### Step-by-Step Configuration:

1. **Create EmailJS Account**
   - Visit [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to "Email Services" section
   - Click "Add New Service"
   - Choose "Gmail" (recommended)
   - Connect your Gmail account: `Info.inzisandhu@gmail.com`

3. **Create Email Template**
   - Go to "Email Templates" section
   - Click "Create New Template"
   - Subject: `New Contact Form Message from {{from_name}}`
   - Content template:
     ```
     Hello Inzamam,

     You have received a new message from your portfolio contact form:

     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     
     Best regards,
     Portfolio Contact Form
     ```

4. **Get Configuration Keys**
   - Service ID: From your Gmail service
   - Template ID: From your created template
   - Public Key: From Account settings

5. **Add Environment Variables**
   Create `.env.local` in root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
   ```

## 🔧 Build for Production

```bash
npm run build
npm start
```

## 📄 License

This project is created for Inzamam Sandhu's personal portfolio. All rights reserved.

---

**Created with ❤️ using Next.js, Tailwind CSS, and Framer Motion**