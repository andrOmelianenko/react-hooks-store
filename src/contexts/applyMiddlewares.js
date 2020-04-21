/**
 * Composes middlewares functions' chain
 */
const composeMiddlewares = middlewares => middlewares.reduce(
    (prev, current) => (...args) => prev(current(...args))
);

/**
 * Current action creator object logs middleware
 */
const logger = () => next => action => {
    console.log('middleware: ', action);
    next(action);
};

/**
 * Enhances dispatch with specified middlewares chain
 */
export default (...middlewares) => (state, dispatch) => {
    const middlewareAPI = {
        state,
        dispatch,
    };

    const chain = [logger, ...middlewares].map(
        middleware => middleware(middlewareAPI)
    );
    
    return composeMiddlewares(chain)(dispatch);
};
