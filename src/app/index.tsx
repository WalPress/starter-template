
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

import NotFoundPage from './pages/not-found';
import HomePage from './pages/home';

// Load modules dynamically for lazy loading (including subdirectories)
const pageModules = import.meta.glob('./pages/**/*.tsx');

const generatePagesRoutes = () => {
  const routes = [];
  
  console.log("pageModules found:", Object.keys(pageModules));
  
  for (const path in pageModules) {
    let routePath = path
      .replace('./(pages)/', '')
      .replace('.tsx', '')
      .replace(/\/index$/, ''); // Remove /index from the end
    
    // Skip special pages that are handled separately
    if (routePath === 'home' || routePath === 'not-found' || routePath === '') {
      console.log("Skipping special page:", routePath);
      continue;
    }
    
    // Convert file-based routing conventions to React Router patterns
    routePath = routePath
      .replace(/\[\.\.\.(.+)\]/g, '*')        // [...slug] -> *
      .replace(/\[(.+)\]/g, ':$1');          // [id] -> :id
    
    const realRoutePath = routePath.split("/pages/")[1]
    // Create lazy component - pageModules[path] is already a function that returns a Promise
    const LazyPageComponent = lazy(() => 
      pageModules[path]().then((module: any) => ({ 
        default: module.default 
      }))
    );
    
    const displayName = routePath.replace(/[:*]/g, '').replace(/\//g, ' / ') || 'page';
    
    routes.push(
      <Route 
        key={path} 
        path={`/${realRoutePath}`} 
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
  console.log("Generated routes:", routes.length, "from pageModules:", routes)
  
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

export default AppRoutes;
