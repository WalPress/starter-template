/* -------------------------------------------------------------------------- */
/*                             About Page Component                           */
/* -------------------------------------------------------------------------- */

import PageLayout from "../layout";

const AboutPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to our amazing website! This page was automatically generated 
            by our dynamic routing system.
          </p>
          
          <p className="text-gray-600 mb-6">
            This page demonstrates how the <code>generatePagesRoutes</code> function 
            works by reading actual files from the (pages) directory and creating 
            routes dynamically.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Dynamic Routing:</strong> This route was automatically 
                  created because this file exists in the (pages) directory.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            How It Works
          </h2>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>The system scans the (pages) directory for .tsx files</li>
            <li>Each file becomes a route with the filename as the path</li>
            <li>Components are lazy-loaded for better performance</li>
            <li>Special pages like 'home' and 'not-found' are handled separately</li>
          </ul>
        </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;