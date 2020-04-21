import { ActionsConstants } from '../../../constants';

export const add = payload => ({
    type: ActionsConstants.ADD_RULE,
    payload,
});

export const del = payload => ({
    type: ActionsConstants.DELETE_RULE,
    payload,
});
