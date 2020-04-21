import React, { createContext, useContext, useReducer } from 'react';
import { composeRootActions } from './actions';
import reducers from './reducers';
import initialState from './initialState';
import applyMiddlewares from '../applyMiddlewares';
import * as mw from './middlewares';

export const RootContext = createContext();

export const RootContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducers, initialState);

    // get dispatch with applied middlewares chain
    const enhancedDispatch = applyMiddlewares(
        mw.datasecurity,
    )(state, dispatch);

    // get wrapped to enhancedDispatch actions 
    const actions = composeRootActions(state, dispatch, enhancedDispatch);

    return (
        <RootContext.Provider
            value={{
                state,
                actions,
                dispatch,
                enhancedDispatch,
            }}
            {...props}
        />
    );
}

export const useRootContext = () => useContext(RootContext);
// export const useStoreDispatch = () => useContext(RootContext).dispatch;
// export const useStoreActions = () => useContext(RootContext).actions;
// export const useStoreState = () => useContext(RootContext).state;
