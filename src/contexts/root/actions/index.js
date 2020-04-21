import * as DataSecurityActions from './datasecurity';
import * as ScopeConfigActions from './scopeconfig';

// not really scalable
const composeRootActions = (state, dispatch, enhancedDispatch) => ({
    getDataSecurity: () => enhancedDispatch(DataSecurityActions.getDataSecurity()),
    // etc.
});

export {
    composeRootActions,
    DataSecurityActions,
    ScopeConfigActions,
    // etc.
};