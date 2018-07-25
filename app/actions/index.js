import * as UserActions from './users'
import * as BetActions from './bets'
import * as MessageActions from './messages'
import * as MemberActions from './members'
import * as GroupActions from './groups'
import * as types from './types';

export const ActionCreators = Object.assign({}, 
    BetActions,
    UserActions,
    MessageActions,
    MemberActions,
    GroupActions
);

export const types;