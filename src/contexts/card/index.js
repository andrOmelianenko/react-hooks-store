import React, { createContext, useContext, useReducer } from 'react';
import { composeCardActions } from './actions';
import reducers from './reducers';
import applyMiddlewares from '../applyMiddlewares';
import * as mw from './middlewares';

export const CardContext = createContext();

export const CardContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducers, props.initialState);

    const enhancedDispatch = applyMiddlewares(
        mw.rule,
    )(state, dispatch);

    const actions = composeCardActions(state, dispatch, enhancedDispatch);

    return (
        <CardContext.Provider
            value={{
                state,
                actions,
                dispatch,
                enhancedDispatch,
            }}
            {...props}
        />
    )
};

export const useCardContext = () => useContext(CardContext);
