import { ActionsConstants } from '../../../constants';
// import { RuleActions } from '../actions';

export default () => next => action => {
    const { type } = action;

    switch (type) {
        case ActionsConstants.ADD_RULE:
            // api manipulations
            return next(action);
    
        default:
            return next(action);
    }
};
