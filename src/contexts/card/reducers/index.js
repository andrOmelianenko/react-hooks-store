import * as rule from './rule';
import * as shares from './shares';
import * as values from './values';
import createReducer from '../../createReducer';
import { ActionsConstants } from '../../../constants';

export default createReducer({
    [ActionsConstants.ADD_RULE]: rule.add,
    [ActionsConstants.DELETE_RULE]: rule.del,
});
