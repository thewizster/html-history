# HTML History Timeline

A beautiful, interactive timeline showcasing the evolution of HTML from its inception to the modern day. Built with [Lume](https://lume.land/) static site generator and [Deno](https://deno.land/), this project demonstrates how to create elegant, data-driven websites using modern web technologies.

## 🌟 Features

- **Interactive Timeline**: Chronological display of HTML's major milestones
- **Responsive Design**: Looks great on desktop and mobile devices
- **Hover Effects**: Smooth animations and visual feedback
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
├── _config.ts                 # Lume configuration
├── deno.json                  # Deno configuration & dependencies
├── pages/
│   ├── _data/
│   │   └── site.ts            # Timeline data
│   ├── _includes/
│   │   └── layout.tsx         # Base HTML layout
│   └── index.page.tsx         # Main timeline page
└── _site/                     # Generated static files (auto-created)
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
      desc: "Description of the new feature or milestone."
    },
    // ... existing events
  ]
};
```

### Styling

The main styles are located in `pages/_includes/layout.tsx`. The design features:
- Clean, modern card-based layout
- Smooth hover animations
- Responsive typography
- System font stack for optimal performance

### Layout Customization

Modify `pages/_includes/layout.tsx` to:
- Add additional meta tags
- Include external stylesheets or scripts
- Modify the base HTML structure

## 🎨 Design Philosophy

This project demonstrates several key principles:

1. **Content First**: Data is separated from presentation, making it easy to update
2. **Performance**: Minimal CSS, system fonts, and static generation for fast loading
3. **Accessibility**: Semantic HTML structure and proper contrast ratios
4. **Developer Experience**: Type safety, hot reloading, and clear project structure

## 🔧 Technologies Used

- **[Lume](https://lume.land/)** - Static site generator for Deno
- **[Deno](https://deno.land/)** - Modern JavaScript/TypeScript runtime
- **[JSX](https://lume.land/plugins/jsx/)** - Component-based templating
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[SSX](https://github.com/oscarotero/ssx)** - Server-side JSX rendering

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

## 🎯 Use Cases

This project template is perfect for:

- Historical timelines for any topic
- Company milestone pages
- Technology evolution showcases
- Personal achievement galleries
- Educational content with chronological data

---

**Built with ❤️ using Lume and Deno**