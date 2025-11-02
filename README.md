# HTML History Timeline

A stunning, interactive timeline showcasing the evolution of HTML from its inception to the modern day. Built with [Lume](https://lume.land/) static site generator and [Deno](https://deno.land/), this project demonstrates how to create elegant, data-driven websites using cutting-edge web technologies and modern CSS features.

## 🌟 Features

### **🎨 Visual Experience**
- **Immersive Hero Section**: Full-screen animated hero with code rain effects, floating HTML elements, and gradient animations
- **Modern 3-Column Layout**: Sticky sidebars with main timeline content
- **Interactive Timeline Cards**: Beautiful cards with avatars, categories, and hover animations
- **Tech-Focused Design**: Blue-themed color scheme perfect for technical content
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
- **Separated Data Layer**: Timeline data stored in external TypeScript files
- **Modular Layouts**: Reusable layout components with proper HTML structure
- **Component-Based**: Easily extensible with additional JSX components

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
└── _site/                       # Generated static files (auto-created)
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

### Styling & Animations

The main styles are located in `pages/_includes/layout.tsx`. The design features:
- **Modern CSS Features**: Custom properties, CSS Grid, Flexbox
- **Advanced Animations**: Keyframe animations, transitions, transforms
- **Responsive Design**: Clamp functions, viewport units, media queries
- **Visual Effects**: Backdrop filters, gradients, shadows
- **Performance**: Hardware-accelerated animations, efficient selectors

### Component Customization

Modify individual components in `pages/_components/`:
- **Hero.tsx**: Update animations, add new floating elements
- **TimelineCard.tsx**: Customize card layout and interactions  
- **Sidebar.tsx**: Modify navigation and milestone display
- **RightSidebar.tsx**: Add new statistics or resources

### Layout Customization

Modify `pages/_includes/layout.tsx` to:
- Add additional meta tags or external resources
- Customize CSS custom properties and color scheme
- Modify responsive breakpoints and layout structure
- Add new animation effects or visual elements

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

### **Modern CSS Features**
- **CSS Custom Properties** - Dynamic theming and consistent design tokens
- **CSS Grid & Flexbox** - Advanced layout systems
- **CSS Animations** - Hardware-accelerated keyframe animations
- **Backdrop Filter** - Modern glassmorphism effects
- **CSS Gradients** - Dynamic background effects and text styling
- **CSS Transforms** - 3D animations and smooth transitions
- **CSS Filters** - Visual effects and image processing
- **Container Queries** - Context-aware responsive design

### **Visual Assets**
- **[Picsum Photos](https://picsum.photos/)** - Beautiful placeholder images
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Modern typography
- **Custom CSS Animations** - Bespoke visual effects and micro-interactions

## 📚 Learning Resources

- [Lume Documentation](https://lume.land/docs/)
- [Deno Manual](https://docs.deno.com/)
- [JSX Plugin Guide](https://lume.land/plugins/jsx/)
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

## 🚀 Modern CSS Showcase

This project serves as a comprehensive demonstration of modern web technologies:

### **CSS Features Demonstrated**
- **Advanced Animations**: Matrix-style code rain, floating elements, gradient shifts
- **Glassmorphism**: Backdrop blur effects and translucent surfaces
- **Responsive Typography**: Fluid type scaling with `clamp()`
- **Custom Properties**: CSS variables for maintainable theming
- **Hardware Acceleration**: Transform-based animations for 60fps performance
- **Visual Effects**: Multi-layer gradients, animated meshes, and dynamic backgrounds

### **Performance Optimizations**
- **Zero JavaScript**: All animations powered by CSS
- **Efficient Selectors**: Optimized CSS for fast rendering
- **Lazy Loading**: Strategic image loading for faster initial paint
- **Modern Fonts**: Variable fonts with optimal loading strategies

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