import React from 'react';
import {View, FlatList, TouchableHighlight, StyleSheet} from 'react-native';



const Bet = ({
    bets
    }) => (
    <View style={styles.container}>
            <FlatList
                data={[bets]}
                renderItem={({bet}) => 
                    (<View>
                        <Text style={{ ...styles.text , }}>Challenger: {bet.challenger}</Text>
                        <Text style={{ ...styles.text , }}>Opponent: {bet.opponent}</Text>
                        <Text style={{ ...styles.text , }}>Terms: {bet.description}</Text>
                        <Text style={{ ...styles.text , }}>Winnings: {bet.terms}</Text>
                        <Text style={{ ...styles.text , }}>Accepted? {bet.accepted}</Text>
                        <View> 
                            { (bet.accepted == true)
                            ? ( <Text style={{ 
                                    ...styles.text ,
                                    color: '#666'
                                }}> 
                                Paid? {bet.paid}
                                </Text> ) 
                            : ( <View>
                                    <Text>Accept the Bet!</Text> 
                                    <TouchableHighlight onPress={() =>
                                        store.dispatch({
                                            type: 'TOGGLE_BET_ACCEPTED',
                                            id: bet.id
                                        })
                                    }>
                                        Accept the Bet
                                    </TouchableHighlight>
                                </View>
                                )
                        }
                        </View>
                    </View>
                )}
            />
    </View>
);

export default Bet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    text: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})