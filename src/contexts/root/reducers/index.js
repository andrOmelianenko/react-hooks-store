import * as DS from './datasecurity';
import { ActionsConstants } from '../../../constants';
import createReducer from '../../createReducer';

export default createReducer({
    [ActionsConstants.SET_DATASECURITY]: DS.set,
});
