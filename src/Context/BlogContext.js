import ceateDataContext from "./ceateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
      return;
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content },
    });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content , callback  ) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
    callback();

  };
};

export const { Context, Provider } = ceateDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "test post", content: "test content", id: 1 }]
);
