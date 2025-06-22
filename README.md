# SusEyez Careers

A modern job board web application built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Material Tailwind](https://www.material-tailwind.com/).  
SusEyez Careers lets users browse, filter, and view job listings, and subscribe to a newsletter with real-time email notifications.

## Features

- ⚡ **Fast & Modern**: Built with Vite and React 19 for instant loading and HMR.
- 🎨 **Beautiful UI**: Styled with Tailwind CSS and Material Tailwind components.
- 📄 **Dynamic Job Listings**: Fetches jobs from [JSONFakery](https://jsonfakery.com/job-posts).
- 📧 **Newsletter Subscription**: Users can subscribe and receive a thank-you email (powered by EmailJS).
- 📱 **Responsive Design**: Works great on desktop and mobile.
- 🔍 **Pagination**: Easily browse through multiple job postings.
- 🛠️ **Accessible & Clean Code**: ESLint and best practices included.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/your-username/github-careers.git
cd github-careers
npm install
```

### Development

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```
The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

You can deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Configuration

- **EmailJS**: To enable newsletter emails, set up your [EmailJS](https://www.emailjs.com/) service and update the service/template/user IDs in `src/pages/Home.jsx`.
- **Job Data**: Job listings are fetched from [JSONFakery](https://jsonfakery.com/jobs/random/100) via Axios.

## Folder Structure

```
src/
  components/      # Reusable UI components
  layout/          # Main layout wrapper
  pages/           # Page components (Home, Jobs, 404)
  assets/          # Static images and assets
  App.jsx          # Main app router
  main.jsx         # Entry point
  index.css        # Tailwind and custom styles
```

## Credits

- [JSONFakery](https://jsonfakery.com/job-posts) for mock job data
- [EmailJS](https://www.emailjs.com/) for email delivery
- [Material Tailwind](https://www.material-tailwind.com/) for UI components

## License

[MIT](LICENSE)

---

> &copy; SusEyez.inc. All rights reserved.