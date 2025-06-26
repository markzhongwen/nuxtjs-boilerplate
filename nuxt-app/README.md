# Mark - Professional Chinese Interpreter Services

A professional NuxtJS website showcasing Mark's 15 years of interpreter services experience with Great Wall background and enhanced SEO.

## Features

- 🏔️ **Great Wall Background**: Stunning atmospheric image as hero background
- 🗣️ **Professional Services**: Conference, Business & Sourcing, Travel Interpretation
- 📱 **WhatsApp Integration**: Direct chat with +8613838276878
- 💬 **WeChat Integration**: Copy WeChat ID 13838276878
- 🚀 **Enhanced SEO**: Better optimization than reference site
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Full-Stack**: NuxtJS frontend with FastAPI backend integration

## Deployment

### For Vercel

1. Push the `/nuxt-app` folder to your GitHub repository
2. Connect to Vercel
3. Use these settings:
   - **Build Command**: `yarn build`
   - **Output Directory**: `.output/public`
   - **Install Command**: `yarn install`
   - **Dev Command**: `yarn dev`

### Environment Variables

Set these in Vercel dashboard:

```
NUXT_API_URL=https://your-backend-api-url.com
NUXT_PUBLIC_API_URL=https://your-backend-api-url.com
```

## Backend Integration

The NuxtJS app includes API routes that proxy to your FastAPI backend:

- `/api/` - Health check
- `/api/contact` - Contact form submission
- `/api/status` - Status checks

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## SEO Features

- **Meta Tags**: Comprehensive title, description, keywords
- **Structured Data**: JSON-LD for interpreter services
- **Open Graph**: Perfect social media sharing
- **Twitter Cards**: Enhanced Twitter preview
- **Canonical URLs**: SEO-friendly URLs
- **Geographic SEO**: China-focused optimization

## Contact Methods

- **WhatsApp**: +86 138 3827 6878 (click-to-chat)
- **WeChat**: 13838276878 (copy-to-clipboard)
- **Contact Form**: Integrated with backend API
- **Floating WhatsApp**: Always accessible

## Technology Stack

- **Frontend**: NuxtJS 3 + Vue 3 + Tailwind CSS
- **Backend**: FastAPI + MongoDB (separate deployment)
- **Deployment**: Vercel Edge Functions
- **Images**: Unsplash (Great Wall background)
- **SEO**: Enhanced meta tags and structured data

## File Structure

```
nuxt-app/
├── assets/css/main.css          # Global styles
├── components/                  # Vue components
│   ├── HeaderNav.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── ExperienceSection.vue
│   ├── ContactSection.vue
│   ├── FooterSection.vue
│   └── FloatingWhatsApp.vue
├── pages/index.vue              # Main page
├── server/api/                  # Backend API proxy
│   ├── index.get.ts
│   ├── contact.post.ts
│   └── status.get.ts
├── nuxt.config.ts               # NuxtJS configuration
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
└── vercel.json                  # Vercel deployment config
```