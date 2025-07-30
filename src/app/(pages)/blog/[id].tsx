/* -------------------------------------------------------------------------- */
/*                         Dynamic Blog Post Page                            */
/* -------------------------------------------------------------------------- */

import { useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            Blog Post
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Blog Post #{id}
        </h1>
        
        <div className="text-gray-600 mb-8">
          <p>Published on {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            This is a dynamic blog post page that was automatically generated 
            from the file structure. The post ID is: <strong>{id}</strong>
          </p>
          
          <p className="text-gray-600 mb-6">
            This demonstrates how file-based routing can handle dynamic parameters 
            using the <code>[id].tsx</code> naming convention.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Dynamic Route:</strong> This route was created from 
                  <code>(pages)/blog/[id].tsx</code> and matches <code>/blog/:id</code>
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            How Dynamic Routes Work
          </h2>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><code>[id].tsx</code> becomes <code>:id</code> in React Router</li>
            <li><code>[slug].tsx</code> becomes <code>:slug</code> in React Router</li>
            <li><code>[...slug].tsx</code> becomes <code>*</code> (catch-all route)</li>
            <li>Access parameters using <code>useParams()</code> hook</li>
          </ul>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Try these URLs:</h3>
            <ul className="space-y-1 text-sm">
              <li>• <code>/blog/1</code> - Post with ID 1</li>
              <li>• <code>/blog/hello-world</code> - Post with ID "hello-world"</li>
              <li>• <code>/blog/2024-update</code> - Post with ID "2024-update"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;