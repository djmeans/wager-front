import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import Main from './components/main'
import Profile from '../components/profile'
import AddBet from '../components/addBet'

class AppContainer extends Component {

    render() {
        return(
        <Router>
            <Scene key='root'>
                <Scene 
                    key='main'
                    component={Main}
                    title='Login'
                    initial
                />
                <Scene
                    bets={this.state.totalBets}
                    key='profile'
                    addBet={this.addBet}
                    component={Profile}
                    title='My Profile'
                />
                <Scene
                    key='addBet'
                    component={AddBet}
                    title='Add a Bet'
                />
            </Scene>
        </Router>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);