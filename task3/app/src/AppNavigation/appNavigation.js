
import { StackNavigator } from 'react-navigation';
// import App from '../screens/app'
import Login from '../components/login/login';
import Signup from '../components/signup/signup';
import UserProfile from '../components/userProfile/userProfile';
const Navigations = StackNavigator({
    // App: { screen: App },
    LoginScreen:{screen:Login},
    signupScreen: { screen: Signup },
    UserProfile:{screen:UserProfile}
},
    {
        headerMode: 'screen',
        initialRouteName: 'LoginScreen'
    }

);

export default Navigations;