import ceateDataContext from "./ceateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { id: Math.floor(Math.random() * 99999) , title: `blog Post #${state.length + 1}` }];
    case "delete_blogpost" :return state.filter((blogPost)=>blogPost.id !== action.payload)
      return
      default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost" , payload : id });
  };
};

export const { Context, Provider } = ceateDataContext(
  blogReducer,
  { addBlogPost , deleteBlogPost},
  []
);
