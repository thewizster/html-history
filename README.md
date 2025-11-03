# HTML History Timeline

A stunning, interactive timeline showcasing the evolution of HTML from its inception to the modern day. Built with [Lume](https://lume.land/) static site generator and [Deno](https://deno.land/), this project demonstrates how to create elegant, data-driven websites using cutting-edge web technologies and modern CSS features.

[View Static Site Build (Github Pages)](https://thewizster.github.io/html-history/)

## 🌟 Features

### **🎨 Visual Experience**
- **Immersive Hero Section**: Full-screen animated hero with code rain effects, floating HTML elements, and gradient animations
- **Modern 3-Column Layout**: Responsive grid with sticky left navigation and scrollable content
- **Interactive Timeline Cards**: Beautiful cards with avatars, categories, and hover animations
- **Tailwind CSS Design System**: Utility-first CSS framework for consistent, maintainable styling
- **Tech-Focused Theme**: Blue-themed color palette with custom design tokens
- **Glassmorphism Effects**: Modern backdrop-blur and transparency effects

### **⚡ Advanced Animations**
- **CSS-Only Animations**: No JavaScript required for stunning visual effects
- **Code Rain Matrix Effect**: Falling HTML tags in the background
- **Floating Elements**: HTML5 tags that gently float around the hero
- **Gradient Text Animation**: Rainbow gradient effect on main title
- **Smooth Transitions**: Hardware-accelerated animations throughout

### **📱 User Experience**
- **Responsive Design**: Looks perfect on desktop, tablet, and mobile
- **Sticky Navigation**: Left sidebar stays visible while scrolling
- **Visual Hierarchy**: Clear information architecture and content flow
- **Type-Safe**: Built with TypeScript for better development experience
- **Hot Reloading**: Live updates during development
- **Data Separation**: Clean architecture with separated data and presentation layers

## 🏗️ Architecture

This project showcases best practices for building static sites with Lume:

- **JSX Templates**: Modern component-based templating with type safety
- **Tailwind CSS Integration**: Utility-first styling with Play CDN approach
- **Separated Data Layer**: Timeline data stored in external TypeScript files
- **Modular Layouts**: Reusable layout components with consistent styling
- **Component-Based Architecture**: Easily extensible with additional JSX components
- **Modern CSS Approach**: Zero build step required for CSS processing

## 📂 Project Structure

```
timeline-site/
├── _config.ts                    # Lume configuration
├── deno.json                     # Deno configuration & dependencies
├── pages/
│   ├── _components/              # Reusable JSX components
│   │   ├── Hero.tsx             # Animated hero section
│   │   ├── Sidebar.tsx          # HTML milestones navigation
│   │   ├── TimelineCard.tsx     # Individual timeline cards
│   │   └── RightSidebar.tsx     # Stats and resources sidebar
│   ├── _data/
│   │   └── site.ts              # Timeline data, milestones, and stats
│   ├── _includes/
│   │   └── layout.tsx           # Base HTML layout with modern CSS
│   └── index.page.tsx           # Main timeline page
└── docs/                        # Generated static files (auto-created)
```

## 🚀 Getting Started

### Prerequisites

- [Deno](https://deno.land/) installed on your system

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/thewizster/html-history
   cd html-history
   ```

2. **Start the development server**
   ```bash
   deno task serve
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000` to view the site

### Building for Production

```bash
deno task build
```

The generated static files will be in the `_site/` directory.

## 🛠️ Available Scripts

- `deno task serve` - Start development server with hot reloading
- `deno task build` - Build the site for production
- `deno task lume` - Run Lume CLI directly

## 📝 Customization

### Adding Timeline Events

Edit `pages/_data/site.ts` to add new events to the timeline:

```typescript
export default {
  timeline: [
    {
      year: 2024,
      title: "Your New HTML Feature",
      desc: "Description of the new feature or milestone.",
      category: "Future",
      icon: "https://picsum.photos/48?random=9",
      image: "https://picsum.photos/400/200?random=9"
    },
    // ... existing events
  ]
};
```

### Adding HTML Milestones

Update the milestones array for sidebar navigation:

```typescript
milestones: [
  {
    id: "new-era",
    title: "New Era",
    year: 2024
  }
]
```

### Styling & CSS Framework

This project uses **Tailwind CSS v4** with the Play CDN for styling:
- **Tailwind CSS Play CDN**: Latest v4 implementation with `@tailwindcss/browser`
- **Custom Theme Configuration**: Extended color palette and font family via `@theme` directive
- **Utility-First Approach**: All components styled with Tailwind utility classes
- **Custom Animations**: Preserved hero animations (code rain, gradient text, floating elements)
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Performance**: Minimal CSS bundle with only used utilities

### Component Customization

Modify individual components in `pages/_components/`:
- **Hero.tsx**: Update animations, add new floating elements
- **TimelineCard.tsx**: Customize card layout and interactions  
- **Sidebar.tsx**: Modify navigation and milestone display
- **RightSidebar.tsx**: Add new statistics or resources

### Tailwind CSS Customization

#### Theme Configuration
Modify the `@theme` directive in `pages/_includes/layout.tsx`:
```css
@theme {
  --font-family-inter: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --color-primary-blue: #1e40af;
  --color-secondary-blue: #3b82f6;
  --color-light-blue: #eff6ff;
  --color-dark-blue: #1e3a8a;
}
```

#### Component Styling
All components use Tailwind utility classes:
- **Responsive Design**: `sm:`, `md:`, `lg:`, `xl:` prefixes
- **Custom Colors**: Standard palette + custom theme colors
- **Spacing System**: Consistent spacing with Tailwind's scale
- **Typography**: Font weights, sizes, and line heights

#### Layout Structure
- **Grid System**: `grid-cols-1 xl:grid-cols-[280px_1fr_320px]`
- **Sticky Positioning**: Left sidebar only (`xl:sticky xl:top-8`)
- **Responsive Behavior**: Stacked on mobile, three-column on desktop

## 🎨 Design Philosophy

This project demonstrates several key principles:

1. **Content First**: Data is separated from presentation, making it easy to update
2. **Performance**: Hardware-accelerated CSS animations and optimized rendering
3. **Modern Standards**: Showcases cutting-edge HTML5 and CSS features
4. **Accessibility**: Semantic HTML structure, proper ARIA labels, and keyboard navigation
5. **Developer Experience**: Type safety, hot reloading, and modular component architecture
6. **Visual Storytelling**: Each animation and effect serves the narrative of HTML's evolution

## 🔧 Technologies Used

### **Core Framework**
- **[Lume](https://lume.land/)** - Static site generator for Deno
- **[Deno](https://deno.land/)** - Modern JavaScript/TypeScript runtime
- **[JSX](https://lume.land/plugins/jsx/)** - Component-based templating
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[SSX](https://github.com/oscarotero/ssx)** - Server-side JSX rendering

### **CSS Framework & Styling**
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework with Play CDN
- **Custom Theme Configuration** - Extended color palette and design tokens via `@theme`
- **Responsive Design System** - Mobile-first approach with consistent breakpoints
- **Custom Animations** - Preserved hero effects with CSS keyframes
- **Modern CSS Features** - Grid, Flexbox, transforms, and filters
- **Utility Classes** - Maintainable styling with atomic CSS approach
- **Performance Optimized** - Only used utilities included in final bundle

### **Visual Assets**
- **[Picsum Photos](https://picsum.photos/)** - Beautiful placeholder images
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern typography
- **Custom CSS Animations** - Bespoke visual effects and micro-interactions

## 📚 Learning Resources

- [Lume Documentation](https://lume.land/docs/)
- [Deno Manual](https://docs.deno.com/)
- [JSX Plugin Guide](https://lume.land/plugins/jsx/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
- [Tailwind Play CDN Guide](https://tailwindcss.com/docs/installation/play-cdn)
- [Deno Deploy](https://deno.com/deploy) - Optional for hosting

## 🤝 Contributing

This is a sample project designed to demonstrate Lume capabilities. Feel free to:

1. Fork the repository
2. Add new features or timeline events
3. Improve the styling or animations
4. Create additional pages or components
5. Submit pull requests with your enhancements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Modern CSS & Tailwind Showcase

This project demonstrates the power of combining Tailwind CSS with custom animations:

### **Tailwind CSS Features**
- **Utility-First Approach**: All components styled with atomic CSS utilities
- **Custom Theme Integration**: Extended color palette and design tokens
- **Responsive Design System**: Mobile-first breakpoints and responsive utilities
- **Play CDN Implementation**: Latest Tailwind v4 with zero build step
- **Component Consistency**: Unified spacing, typography, and color systems

### **Preserved Custom Animations**
- **Hero Effects**: Matrix-style code rain, floating elements, gradient text
- **Glassmorphism**: Backdrop blur effects and translucent surfaces
- **Hardware Acceleration**: Transform-based animations for 60fps performance
- **Visual Effects**: Multi-layer gradients, animated meshes, and dynamic backgrounds

### **Performance Benefits**
- **Optimized Bundle**: Only used utilities included in final CSS
- **CDN Delivery**: Fast loading with Tailwind's browser runtime
- **Zero Build Step**: No CSS compilation required for development
- **Modern Architecture**: Best practices for maintainable styling

## 🎯 Use Cases

This project template is perfect for:

- **Historical Timelines**: Any chronological content presentation
- **Company Milestones**: Corporate history and achievement showcases  
- **Technology Evolution**: Product roadmaps and feature development
- **Educational Content**: Interactive learning experiences
- **Portfolio Showcases**: Creative project timelines
- **Documentation Sites**: Feature release histories
- **CSS Learning**: Modern web development technique demonstration

## 🌟 Live Demo

Experience the full visual impact at your local development server:
```bash
deno task serve
# Visit http://localhost:3000
```

Features to explore:
- **Hero Animations**: Code rain, floating HTML tags, gradient text
- **Smooth Scrolling**: Sticky navigation and timeline progression  
- **Interactive Cards**: Hover effects and micro-animations
- **Responsive Design**: Test across different screen sizes
- **Performance**: Silky-smooth 60fps animations

---

**Built with ❤️ using Lume, Deno, and Modern CSS**

*Showcasing the evolution of HTML through the power of modern web technologies*