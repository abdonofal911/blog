import ceateDataContext from "./ceateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = ceateDataContext(
  blogReducer,
  { addBlogPost },
  []
);
