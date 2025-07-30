/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React from 'react';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */


const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default PageLayout