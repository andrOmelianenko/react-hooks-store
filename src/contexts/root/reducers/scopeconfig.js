export const get = (state, { payload }) => ({
    ...state,
    scopeConfiguration: payload,
});
