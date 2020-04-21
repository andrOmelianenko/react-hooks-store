/**
 * Logs an action data, that triggered a reducer
 * @param {Object} action - Action data
 */
const logAction = action => console.log('reducer: ', action);

/**
 * Implements standart reducer logic (returns updated state as a result).
 * Technically, returns a function, that returns a handler's call,
 * based on action type.
 * @param {Object} handlers - Object with keys as an actions' types
 * and values as a corresponding handler functions.
 * @returns {function} Checks the presence of action type key
 * in handlers object and returns the corresponding handler's call.
 */
export default handlers => (state, action) => {
    if (!handlers.hasOwnProperty(action.type)) {
        return state;
    }

    logAction(action);
    
    return handlers[action.type](state, action);
};
