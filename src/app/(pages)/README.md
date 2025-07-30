# File-Based Dynamic Routing

This directory uses a **file-based routing system** that automatically generates routes based on the files you create here.

## How It Works

1. **Create a new `.tsx` file** in this directory or subdirectories
2. **Export a React component as default** from that file
3. **The route is automatically created** using the file path

## Basic Examples

| File | Route | Description |
|------|-------|-------------|
| `about.tsx` | `/about` | About page |
| `contact.tsx` | `/contact` | Contact page |
| `blog.tsx` | `/blog` | Blog page |
| `services.tsx` | `/services` | Services page |

## Advanced Examples (Nested & Dynamic Routes)

| File | Route | Description |
|------|-------|-------------|
| `blog/index.tsx` | `/blog` | Blog index page |
| `blog/[id].tsx` | `/blog/:id` | Dynamic blog post page |
| `docs/[...slug].tsx` | `/docs/*` | Catch-all docs page |
| `user/[userId]/profile.tsx` | `/user/:userId/profile` | Nested dynamic route |

## Dynamic Route Conventions

- **`[id].tsx`** → `:id` (single parameter)
- **`[slug].tsx`** → `:slug` (single parameter)  
- **`[...slug].tsx`** → `*` (catch-all route)
- **`index.tsx`** → `/` (directory index)

## File Template

```tsx
import { useParams } from 'react-router-dom'; // For dynamic routes

const YourPageName = () => {
  // For dynamic routes, access parameters:
  // const { id } = useParams<{ id: string }>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Your Page Title</h1>
      <p>Your page content here...</p>
    </div>
  );
};

export default YourPageName;
```

## Special Files

- **`home.tsx`** - Handled as the index route (`/`)
- **`not-found.tsx`** - Handled as the 404 page (`*`)

These files are handled separately and won't be included in the dynamic routing.

## Features

- ✅ **Automatic route generation** from file structure
- ✅ **Nested routes** with folders
- ✅ **Dynamic parameters** with `[param]` syntax
- ✅ **Catch-all routes** with `[...param]` syntax
- ✅ **Lazy loading** for better performance
- ✅ **Loading states** with spinners
- ✅ **Automatic layout wrapping** with PageLayout
- ✅ **TypeScript support**

## Examples in This Directory

- `about.tsx` → `/about`
- `contact.tsx` → `/contact`
- `blog/[id].tsx` → `/blog/:id` (try `/blog/1` or `/blog/hello-world`)
- `docs/[...slug].tsx` → `/docs/*` (try `/docs/getting-started` or `/docs/api/auth`)

## Notes

- Only `.tsx` files are processed
- Files are lazy-loaded for better performance
- Each page is automatically wrapped in the `PageLayout` component
- The system scans this directory recursively using Vite's `import.meta.glob`
- Use `useParams()` hook to access dynamic route parameters