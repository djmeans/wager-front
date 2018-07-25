import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import SafariView from 'react-native-safari-view';


export default class Main extends Component {
state = {
  user: undefined ,
};

  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      console.log('URL is '+ url)
      if (url) {
        console.log('URL is '+ url)
        this.handleOpenURL({ url });
      }
    }).catch(err => console.error('An error occurred', err));
    Linking.addEventListener('url', this.handleOpenURL);
  };

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    console.log('working')
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      user: JSON.parse(decodeURI(user_string))
    });
    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  loginWithFacebook = () => this.openURL('http://localhost:3000/auth/facebook');
  loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

  openURL = (url) => {
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    else {
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    return (
      
      <View style={styles.container}>
        { user ? 
            <View style={styles.content}>
              <Text style={styles.header}>
                Welcome {user.name}!
              </Text>
              <Icon.Button
                name="male"
                backgroundColor="#000"
                onPress={() => Actions.profile()}
                {...iconStyles} 
              > Go to my Profile
              </Icon.Button>
              <View style={styles.avatar}>
                <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
              </View>
            </View>
          : <View style={styles.content}>
              <Text style={styles.header}>
                Welcome Stranger!
              </Text>
              
              <View style={styles.avatar}>
                <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
              </View>
              <Text style={styles.text}>
                Please log in to continue {'\n'}
              </Text>
            </View>
        }
            
        <View style={styles.buttons}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.loginWithFacebook}
            {...iconStyles}
            > 
            Login with Facebook
          </Icon.Button>
          <Icon.Button
            name="google"
            backgroundColor="#DD4B39"
            onPress={this.loginWithGoogle}
            {...iconStyles} 
          > 
            Login with Google
          </Icon.Button>
        </View>
        </View>
        
  )
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

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