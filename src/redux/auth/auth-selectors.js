export const isAuthorized = (state) => !!state.auth.token;
export const getUsername = (state) => state.auth.user.name;
