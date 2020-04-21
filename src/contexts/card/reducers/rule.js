export const add = (state, { payload }) => ({
    ...state,
    rules: [...state.rules, payload],
});

export const del = (state, { payload }) => ({
    ...state,
    rules: state.rules.filter(rule => rule.id !== payload),
});
