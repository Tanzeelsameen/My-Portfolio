# Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcase your professional experience, projects, and skills with beautiful animations and a clean, professional design.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Built-in dark mode toggle for better user experience
- **Smooth Animations**: Framer Motion animations for engaging user interactions
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Performance Optimized**: Fast load times with Vite build tool
- **TypeScript**: Fully typed codebase for better development experience
- **Component-Based Architecture**: Modular and reusable React components

## 📋 Sections

- **Hero**: Eye-catching introduction section with call-to-action
- **Navigation**: Smooth navigation bar with links to all sections
- **About**: Personal introduction and background
- **Experience**: Timeline view of work experience and education
- **Skills**: Display of technical skills and expertise
- **Projects**: Showcase of portfolio projects
- **Contact**: Contact information and links

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tanzeelsameen/My-Portfolio.git
cd My-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Next generation frontend tooling
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section
│   ├── Contact.tsx        # Contact section
│   ├── Experience.tsx     # Experience & education timeline
│   ├── Hero.tsx           # Hero/landing section
│   ├── Navigation.tsx     # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   └── Skills.tsx         # Skills section
├── images/                # Image assets
├── App.tsx                # Main App component
├── index.css              # Global styles
├── main.tsx               # Application entry point
└── vite-env.d.ts          # Vite environment types
```

## 🎨 Customization

### Adding Your Information

1. **Update Experience**: Edit `src/components/Experience.tsx` to add your work experience and education
2. **Update Skills**: Modify `src/components/Skills.tsx` to list your technical skills
3. **Add Projects**: Update `src/components/Projects.tsx` with your portfolio projects
4. **Personalize About**: Customize `src/components/About.tsx` with your bio
5. **Update Contact**: Modify `src/components/Contact.tsx` with your contact details

### Adding Company Logos

Place company logo images in the `src/images/` directory and import them in the respective components:

```typescript
import companyLogo from '../images/company-logo.png';
```

### Styling

The project uses Tailwind CSS for styling. Customize the design by:

1. Editing Tailwind configuration in `tailwind.config.js`
2. Modifying component classes in TSX files
3. Updating global styles in `src/index.css`

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Popular Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
Update `vite.config.ts` with your repository name and follow GitHub Pages deployment guide.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔒 Performance

- Optimized bundle size with Vite
- Code splitting and lazy loading ready
- Image optimization recommendations
- CSS minification and purging with Tailwind CSS

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Tanzeel Sameen**
- GitHub: [@Tanzeelsameen](https://github.com/Tanzeelsameen)
- Email: [Your Email]
- Portfolio: [Your Portfolio URL]

## 🤝 Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests for any improvements.

## 📞 Contact

For inquiries or collaboration opportunities, please reach out through the contact section in the portfolio or via email.

---

**Made with ❤️ using React & Tailwind CSS**
