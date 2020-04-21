import { ActionsConstants } from '../../../constants';

export const getScopeConfig = args => ({
    type: ActionsConstants.GET_SCOPECONFIG,
    payload: args,
});

// etc.
