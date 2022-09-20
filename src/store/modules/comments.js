export default {
  namespaced: true,
  state: {
    comments: [],
  },

  getters: {
    comments(state) {
      return state.comments;
    },
  },

  mutations: {
    getAllComments(state) {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.json())
        .then((json) => (state.comments = json));
    },

    addComment(state, value) {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: "POST",
        body: JSON.stringify({
          ...value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => state.comments.unshift(value));
    },

    removeComment(state, index, id) {
      state.comments.splice(1, index);
      fetch(`https://jsonplaceholder.typicode.com/posts/1/comments${id}`, {
        method: "DELETE",
      });
    },
  },

  actions: {
    getAllCommentsAsync(context) {
      context.commit("getAllComments");
    },
  },
};
