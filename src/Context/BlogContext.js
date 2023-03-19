import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
const blogPosts = [
    {title : 'blog post 1'},{title : 'blog post 2'},{title : 'blog post 3'}    
]
    return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>;
};

export default BlogContext;
