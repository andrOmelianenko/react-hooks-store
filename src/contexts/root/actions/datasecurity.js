import { ActionsConstants } from '../../../constants';

export const getDataSecurity = () => ({
    type: ActionsConstants.GET_DATASECURITY,
});

export const setDataSecurity = payload => ({
    type: ActionsConstants.SET_DATASECURITY,
    payload,
});

// etc.
