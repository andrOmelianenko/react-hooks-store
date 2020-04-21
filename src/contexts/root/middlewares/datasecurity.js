import { ActionsConstants } from '../../../constants';
import { DataSecurityActions } from '../actions';

export default ({ dispatch, state }) => next => action => {
    const { type, payload } = action;

    switch (type) {
        case ActionsConstants.GET_DATASECURITY:
            // get some data
            const fakeData = Array.from(Array(50).keys()).map(i => ({
                id: i,
                name: `name_${i}`,
                rules: [],
            }));
            return next(DataSecurityActions.setDataSecurity(fakeData));
            
        default:
            return next(action);
    }
};
