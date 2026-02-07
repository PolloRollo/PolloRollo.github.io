# Project Help Guide

### Start Local Development Server

```bash
npm run dev
```

- Opens at http://localhost:5173 (or next available port)
- Hot module replacement (HMR) enabled for instant updates
- Automatically opens browser

## Development Tasks

### Build for Production

```bash
npm run build
```

- Compiles TypeScript and builds optimized production bundle
- Output goes to `dist/` directory

### Preview Production Build Locally

```bash
npm run preview
```

- Serves the production build locally to test before deploying
- Useful for catching production-only issues

### Run Linter

```bash
npm run lint
```

- Checks code for errors and warnings
- Uses ESLint with TypeScript support

### Convert HEIC Images

```bash
npm run convert-images
```

- Converts HEIC image files to web-friendly formats
- Uses the script at `scripts/convert-heic.sh`

## Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

- Automatically runs `npm run build` first (via predeploy hook)
- Deploys `dist/` directory to `gh-pages` branch
- Site will be live at: https://pollorollo.github.io/

### Manual Deployment Steps

1. Build the project: `npm run build`
2. Deploy: `npm run deploy`
3. Wait a few minutes for GitHub Pages to update

## Git Workflow

### Check Current Status

```bash
git status
```

### Stage Changes

```bash
git add .
# or specific files:
git add src/components/MyComponent.tsx
```

### Commit Changes

```bash
git commit -m "Your commit message"
```

### Push to Repository

```bash
git push origin main
# or your branch name:
git push origin react
```

### Complete Workflow: Make Changes → Deploy

1. Make your code changes
2. Test locally: `npm run dev`
3. Build and test production: `npm run build && npm run preview`
4. Commit changes: `git add . && git commit -m "Description"`
5. Push to GitHub: `git push origin main` (or your branch)
6. Deploy to live site: `npm run deploy`

## Common Tasks

### Update Dependencies

```bash
npm update
```

### Install New Package

```bash
npm install package-name
# For dev dependencies:
npm install -D package-name
```

### Check for Outdated Packages

```bash
npm outdated
```

### Clean Install (if having issues)

```bash
rm -rf node_modules package-lock.json
npm install
```

### View Project Structure

- `src/` - Source code
  - `components/` - React components
  - `pages/` - Page components
  - `lib/` - Utility functions
  - `data/` - JSON data files
  - `styles/` - CSS files
- `public/` - Static assets (images, PDFs, etc.)
- `dist/` - Production build output (generated)
- `build/` - Old build directory (may be outdated)

## Troubleshooting

### Port Already in Use

If port 5173 is busy, Vite will automatically use the next available port.

### Build Errors

- Check TypeScript errors: `npm run build`
- Check linting errors: `npm run lint`
- Ensure all dependencies are installed: `npm install`

### Deployment Issues

- Ensure `gh-pages` package is installed: `npm install -D gh-pages`
- Check that `homepage` in package.json matches your GitHub Pages URL
- Verify you have push access to the repository

### Environment Variables

- Create `.env` file for local environment variables
- Add `.env` to `.gitignore` to keep secrets safe
- Use `import.meta.env.VITE_*` to access variables in code

## Useful Commands Summary

| Task                   | Command                  |
| ---------------------- | ------------------------ |
| Start dev server       | `npm run dev`            |
| Build production       | `npm run build`          |
| Preview build          | `npm run preview`        |
| Deploy to GitHub Pages | `npm run deploy`         |
| Run linter             | `npm run lint`           |
| Install dependencies   | `npm install`            |
| Convert images         | `npm run convert-images` |
