import * as types from '../actions/types'
module.exports = {
    bet = (state, action) => {
        switch (action.type){
            case 'ADD_BET':
                return {
                        id: action.id,
                        challenger:action.challenger,
                        opponent: action.opponent,
                        description: action.description,
                        terms: action.terms,
                        winner: null,
                        accepted: false,
                        paid: false
                    };
            case 'TOGGLE_BET_ACCEPTED':
                if(state.id !== action.id){
                    return state
                } 
                return {
                    ...state,
                    accepted: !state.accepted
                };
            case 'TOGGLE_BET_PAID':
                if(state.id !== action.id) {
                    return state
                }
                return {
                    ...state,
                    paid: !state.paid
                }
            case 'DECLARE_BET_WINNER':
                if(state.id !== action.id){
                    return state
                }
                return {
                    ...state,
                    winner: action.winner
                }
            default: return state;
        }
    },
    allBets = (state = [], action) =>{
        switch (action.type) {
            case 'ADD_BET':
                return [
                    ...state,
                    bet(undefined, action)
                ];
            case 'TOGGLE_BET_ACCEPTED':
                return state.map(b =>
                    bet(b, action)
                );
            case 'TOGGLE_BET_PAID':
                return state.map(b =>
                    bet(b, action)
                );
            case 'DECLARE_BET_WINNER':
                return state.map(b =>
                    bet(b, action)
                );
            default: return state;
        }
    },
    visibilityFilter = (state = 'SHOW_ALL', action) =>{
        switch (action.type){
            case 'SET_VISIBILITY_FILTER':
                return action.filter;
            default: return state;
        }
    },
    getVisibleBets = (bets, filter) => {
        switch(filter){
            case 'SHOW_ALL_BETS':
                return bets;
            case 'SHOW_NEW_BETS':
                return bets.filter(
                    b => !b.accepted 
                );
            case 'SHOW_ACCEPTED_BETS':
                return bets.filter(
                    b => b.accepted
                )
            case 'SHOW_UNPAID_BETS':
                return bets.filter(
                    b => (b.accepted && !bets.paid)
                )
            default: return bets;
        }
    }
}