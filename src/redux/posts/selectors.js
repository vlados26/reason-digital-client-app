const postsSelector = (state) => state.posts;

export const postsDocSelector = (state) =>
    postsSelector(state).postsDoc.postsDoc;
export const isPostsDocLoadingSelector = (state) =>
    postsSelector(state).postsDoc.isLoading;
export const postsDocErrorSelector = (state) =>
    postsSelector(state).postsDoc.error;
