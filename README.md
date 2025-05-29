# 🌟 Co-op Constellations

> **Interactive dashboard for Cornell co-op residents & alumni around the world**

![Co-op Constellations](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![Tailwind](https://img.shields.io/badge/TailwindCSS-3-cyan)

A mobile-first, interactive dashboard that lets current & former residents of our Cornell cooperative visualize where everyone has ended up, filter by region or year, and discover the farthest migration distances. 🌍✨

## 🚀 Live Demo

Visit the live dashboard: **[kushal-satya.github.io/alum-connect](https://kushal-satya.github.io/alum-connect/)**

## ✨ Features

- 🗺️ **Interactive Map** - OpenStreetMap with marker clustering
- 🔍 **Smart Filters** - By country, year range, role, and fuzzy name search  
- 📱 **Mobile-First** - Responsive design that works everywhere
- 📊 **Live Statistics** - Countries represented, farthest distances, common cities
- 🌙 **Dark Mode** - System preference detection
- ⚡ **Fast Performance** - Sub-50ms filtering for 1000+ entries
- 🎯 **Distance Calculation** - Sort by distance from your location

## 🏗️ Tech Stack

| Category | Tool | Why |
|----------|------|-----|
| **Framework** | React + Vite | Fast, modern, zero-config GitHub Pages deploy |
| **Styling** | TailwindCSS | Rapid prototyping, built-in dark mode |
| **Map** | Leaflet + OpenStreetMap | No API keys, clustering, static build friendly |
| **Data** | JSON file | Simple PR-based updates |
| **Hosting** | GitHub Pages | Free, automatic deployment |
| **CI/CD** | GitHub Actions | Auto-build and deploy on push |

## 🏃‍♂️ Quick Start

```bash
# Clone the repository
git clone https://github.com/kushal-satya/alum-connect.git
cd alum-connect

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📍 Add Yourself to the Map

Want to appear on our global constellation? It's easy!

### Step 1: Fork & Edit

1. **Fork this repository** on GitHub
2. **Edit** `src/data/coop_members.json`
3. **Add your entry** using the format below
4. **Submit a pull request**

### Step 2: JSON Format

```json
{
  "fullName": "Your Name",
  "lat": 40.7128,
  "lon": -74.0060,
  "currentCity": "New York, NY",
  "country": "USA",
  "houseYears": ["2019-2021"],
  "cornellYears": ["2017-2021"],
  "role": "Alum"
}
```

### Step 3: Field Guidelines

| Field | Description | Example |
|-------|-------------|---------|
| `fullName` | Your full name | `"Alex Johnson"` |
| `lat` | Latitude (-90 to 90) | `40.7128` |
| `lon` | Longitude (-180 to 180) | `-74.0060` |
| `currentCity` | Current city, state/country | `"San Francisco, CA"` |
| `country` | Country name | `"USA"` |
| `houseYears` | Years lived in co-op | `["2018-2020", "2021-2022"]` |
| `cornellYears` | Years enrolled at Cornell | `["2017-2021"]` |
| `role` | Current status | `"Alum"` or `"Current Resident"` |

### 💡 Pro Tips

- **Find coordinates**: Use [latlong.net](https://www.latlong.net/) or Google Maps
- **Multiple house periods**: Use array format `["2018-2020", "2022-2023"]`
- **Double-check coordinates**: Invalid coordinates will be automatically filtered out
- **Privacy**: Only include information you're comfortable sharing publicly

## 🛠️ Development

### Project Structure

```
├── .github/workflows/     # GitHub Actions for auto-deployment
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   ├── data/            # Member data (JSON)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   └── main.jsx         # App entry point
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run lint     # Run ESLint
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

### Key Components

- **`useFilteredMembers`** - Custom hook for data filtering and statistics
- **`MapView`** - Leaflet map with clustering and interactions
- **`FilterPanel`** - Smart filters with real-time updates
- **`StatsBar`** - Global statistics and fun facts

## 🚀 Deployment

This project auto-deploys to GitHub Pages via GitHub Actions:

1. **Push to `main`** triggers the build
2. **Linting and building** happens automatically  
3. **Deploy to `gh-pages` branch** on success
4. **Live site updates** within minutes

### Manual Deployment

```bash
npm run deploy
```

## 🎯 Performance

- ⚡ **Filtering**: <50ms for 1,000+ entries
- 📱 **Lighthouse Mobile**: 90+ score target
- 🗺️ **Map Clustering**: Handles thousands of markers
- 📦 **Bundle Size**: Optimized with Vite tree-shaking

## 🤝 Contributing

We love contributions! Here's how you can help:

### Adding Members
- Submit PRs to add new members (see "Add Yourself" section)
- Help validate and merge member addition PRs

### Code Contributions  
- 🐛 **Bug fixes**: Always welcome
- ✨ **Features**: Check existing issues or create new ones
- 📝 **Documentation**: Improve this README or add code comments
- 🎨 **Design**: UI/UX improvements

### Future Features (TODO)
- [ ] Heat-map density layer toggle
- [ ] Timeline animation scrubber  
- [ ] Manual dark-mode toggle
- [ ] Export functionality
- [ ] Member profiles with more details

## 📊 Current Statistics

As of the latest data:
- **8 Members** across **6 Countries**
- **Farthest Distance**: ~19,000+ km (Argentina to Japan)
- **Most Common Country**: USA
- **Global Reach**: From Buenos Aires to Tokyo! 🌏

## 🏡 About Our Co-op

This dashboard celebrates the global reach of our Cornell cooperative housing community. From Ithaca to Singapore, from New York to Berlin, our constellation spans the globe while staying connected to our shared home.

## 📝 License

MIT License - feel free to fork and adapt for your own community!

## 🙋‍♀️ Questions?

- **Issues**: Open a GitHub issue
- **House Tech**: Reach out to current tech maintainers  
- **Community**: Ask in house Slack/Discord

---

**Made with ❤️ by the Cornell Co-op community**

*Keep the constellation bright! ⭐*
