/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React from 'react';
import { Link } from 'react-router-dom';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */
import PageLayout from '../layout';

const NotFoundPage: React.FC = () => {
  return (
    <PageLayout>
      <h1 className="text-6xl font-bold text-primary mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/" 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
      >
        Go to Home
      </Link>
    </PageLayout>
  );
};

export default NotFoundPage; 