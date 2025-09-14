/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React from "react";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="tiptap">
      <div className="notion-like-editor-content p-16">
        {children}
      </div>
    </section>
  );
};

export default PageLayout;
