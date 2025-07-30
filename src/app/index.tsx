
/* -------------------------------------------------------------------------- */
/*                          File-Based Dynamic Routing                       */
/* -------------------------------------------------------------------------- */
/*
 * This system automatically generates routes based on files in the (pages) directory.
 * 
 * How it works:
 * 1. Add any .tsx file to the (pages) directory
 * 2. The filename becomes the route path (e.g., about.tsx → /about)
 * 3. Components are lazy-loaded for better performance
 * 4. Each page is automatically wrapped in PageLayout
 * 
 * Special files:
 * - home.tsx: Handled as the index route (/)
 * - not-found.tsx: Handled as the 404 route (*)
 * 
 * Example:
 * (pages)/
 * ├── home.tsx        → / (index route)
 * ├── about.tsx       → /about
 * ├── contact.tsx     → /contact
 * ├── blog.tsx        → /blog
 * └── not-found.tsx   → * (404 page)
 */

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import NotFoundPage from './(pages)/not-found';
import HomePage from './(pages)/home';
import PageLayout from './layout';

// Dynamically import all page files from the (pages) directory with lazy loading
// Supports nested folders and dynamic parameters
const pageModules = import.meta.glob('./(pages)/**/*.tsx');

const generatePagesRoutes = () => {
  const routes = [];
  
  for (const path in pageModules) {
    // Extract the route path from file path
    // Examples:
    // './(pages)/about.tsx' -> 'about'
    // './(pages)/blog/[id].tsx' -> 'blog/:id'
    // './(pages)/docs/[...slug].tsx' -> 'docs/*'
    let routePath = path
      .replace('./(pages)/', '')
      .replace('.tsx', '')
      .replace(/\/index$/, ''); // Remove /index from the end
    
    // Skip special pages that are handled separately
    if (routePath === 'home' || routePath === 'not-found' || routePath === '') {
      continue;
    }
    
    // Convert file-based routing conventions to React Router patterns
    routePath = routePath
      .replace(/\[\.\.\.(.+)\]/g, '*')        // [...slug] -> *
      .replace(/\[(.+)\]/g, ':$1');          // [id] -> :id
    
    // Create lazy component
    const LazyPageComponent = lazy(() => 
      pageModules[path]().then((module: any) => ({ 
        default: module.default 
      }))
    );
    
    const displayName = routePath.replace(/[:*]/g, '').replace(/\//g, ' / ') || 'page';
    
    routes.push(
      <Route 
        key={path} 
        path={`/${routePath}`} 
        element={
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-gray-600">Loading {displayName}...</p>
                </div>
              </div>
            }>
              <LazyPageComponent />
            </Suspense>
        } 
      />
    );
  }
  
  return routes;
};

const AppRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />

    {/* Dynamically generated pages from (pages) folder */}
    {generatePagesRoutes()}

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)

function App() {
  return <AppRoutes />;
}

export default App;
