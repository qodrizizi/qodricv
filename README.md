# 🎯 Qodri CV - Professional Portfolio Website

> Modern, responsive CV website with terminal-inspired design

![Version](https://img.shields.io/badge/version-2.0.4-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- ✨ **Premium Dark Theme** with glassmorphism effects
- 🎨 **Terminal-Style UI** for a unique developer aesthetic
- 📱 **Fully Responsive** - works on all devices
- ⚡ **Fast Performance** - optimized with Vite
- 🔄 **Smooth Animations** throughout the site
- 🎯 **Interactive Skill Filter** with 3 categories
- 📊 **Dynamic Content** loaded from TypeScript data
- 🗺️ **Google Maps Integration** in contact section
- 🔝 **Scroll-to-Top Button** for easy navigation

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
qodricv/
├── src/
│   ├── main.ts              # Application entry point
│   ├── data/
│   │   └── content.ts       # All content data
│   ├── types/
│   │   └── index.ts         # TypeScript interfaces
│   ├── components/
│   │   ├── SectionRenderer.ts
│   │   ├── SkillFilter.ts
│   │   └── ...
│   └── styles/
│       └── main.css         # Main stylesheet
├── assets/
│   └── img/                 # All images
├── dist/                    # Production build output
├── index.html               # Main HTML file
├── vite.config.ts           # Vite configuration
└── .htaccess                # Apache configuration
```

## 🎨 Tech Stack

- **Build Tool**: Vite 5.0
- **Language**: TypeScript 5.2
- **Styling**: Vanilla CSS with CSS Variables
- **Fonts**: JetBrains Mono, Outfit (Google Fonts)
- **Icons**: Font Awesome 6.0

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to my.id domain.

### Quick Deploy Steps:

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your server
3. Upload `.htaccess` file to root
4. Done! 🎉

## 🎯 Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Professional background and expertise
3. **Skills** - Technical competencies with filtering
4. **Projects** - Featured projects showcase
5. **Certifications** - Professional certifications
6. **Experience** - Work history and community involvement
7. **Contact** - Contact information with map

## 🔧 Configuration

### Update Content

Edit `src/data/content.ts` to update:
- Personal information
- Skills and categories
- Certifications
- Experience
- Projects
- Contact details

### Update Styling

Edit `src/styles/main.css` to customize:
- Color scheme (CSS variables)
- Typography
- Animations
- Layout

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

MIT License - feel free to use this template for your own CV!

## 👨‍💻 Author

**Ahmad Al Qodri Azizi Dalimunthe**
- Software Engineer | System Administrator | Digital Forensic Investigator
- Email: ahmadalqodridalimunthe@gmail.com
- LinkedIn: [Ahmad Al Qodri](https://www.linkedin.com/in/ahmad-al-qodri-azizi-dalimunthe-8628072b8)

---

**Built with ❤️ using Vite + TypeScript**