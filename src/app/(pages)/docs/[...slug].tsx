/* -------------------------------------------------------------------------- */
/*                         Catch-All Documentation Page                      */
/* -------------------------------------------------------------------------- */

import { useParams, useLocation } from 'react-router-dom';

const DocsPage = () => {
  const { '*': slug } = useParams();
  const location = useLocation();
  
  // Split the slug into breadcrumb segments
  const segments = slug ? slug.split('/').filter(Boolean) : [];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            Documentation
          </span>
        </div>
        
        {/* Breadcrumb */}
        <nav className="flex mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <span className="text-gray-500">docs</span>
            </li>
            {segments.map((segment, index) => (
              <li key={index}>
                <div className="flex items-center">
                  <span className="text-gray-400 mx-2">/</span>
                  <span className={`text-sm font-medium ${
                    index === segments.length - 1 
                      ? 'text-gray-900' 
                      : 'text-gray-500'
                  }`}>
                    {segment}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {segments.length > 0 
            ? segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
            : 'Documentation'
          }
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            This is a catch-all documentation page that handles nested routes 
            using the <code>[...slug].tsx</code> pattern.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Current Route Info:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li><strong>Full Path:</strong> <code>{location.pathname}</code></li>
              <li><strong>Slug:</strong> <code>{slug || '(empty)'}</code></li>
              <li><strong>Segments:</strong> <code>[{segments.map(s => `"${s}"`).join(', ')}]</code></li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Catch-All Routes
          </h2>
          
          <p className="text-gray-600 mb-4">
            The <code>[...slug].tsx</code> file creates a catch-all route that matches 
            any number of nested path segments. This is perfect for documentation sites 
            or file explorers.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">Try these URLs:</h3>
            <ul className="space-y-1 text-sm">
              <li>• <code>/docs/getting-started</code></li>
              <li>• <code>/docs/api/authentication</code></li>
              <li>• <code>/docs/guides/advanced/deployment</code></li>
              <li>• <code>/docs/tutorials/react/hooks/useState</code></li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            How It Works
          </h3>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><code>[...slug].tsx</code> becomes a catch-all route (<code>*</code>)</li>
            <li>The matched path is available as <code>params["*"]</code></li>
            <li>You can split the slug to create breadcrumbs and navigation</li>
            <li>Perfect for documentation, file browsers, or hierarchical content</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;