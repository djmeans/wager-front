import React, { Component } from 'react';
import {
    Image,
    Linking,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import FilterLink from './filterLink'
import { betReducers }from '../reducers';

export default class Profile extends Component {
    constructor(props){
        super(props)
    };
    render() {
        const visibleBets = betReducers.getVisibleBets(
            this.props.bets,
            betReducers.visibilityFilter
        )
        return(
        <View>
            <View style={styles.avatar}>
                <Image source={{ uri: this.props.user.avatar }} style={styles.avatarImage} />
            </View>
            {visibleBets.map(bet => <Bet allBets={bet}></Bet>)}
            <View>
                <Text>Show:</Text>
                <FilterLink
                    filter='SHOW_ALL_BETS'
                > All
                </FilterLink>
                <FilterLink
                    filter='SHOW_NEW_BETS'
                > New
                </FilterLink>
                <FilterLink
                    filter='SHOW_ACCEPTED_BETS'
                > Accepted
                </FilterLink>
                <FilterLink
                    filter='SHOW_UNPAID_BETS'
                > Unpaid
                </FilterLink>
            </View>
            <TouchableHighlight 
                onPress={() => Actions.addBet()}
            > Add a Bet
            </TouchableHighlight>

        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: 20,
    },
    avatarImage: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
    },
});