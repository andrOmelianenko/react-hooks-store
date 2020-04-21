import * as RuleActions from './rule';
import * as ValuesActions from './values';
import * as SharesActions from './shares';

const composeCardActions = (state, dispatch, enhancedDispatch) => ({
    addRule: (...args) => enhancedDispatch(RuleActions.add(...args)),
    deleteRule: (...args) => enhancedDispatch(RuleActions.del(...args)),
    // etc.
});

export {
    composeCardActions,
    RuleActions,
    ValuesActions,
    SharesActions,
}