
import { StackNavigator } from 'react-navigation';
import App from '../screens/app';
import AppForm from '../components/form/form';
import Signup from '../components/signup/signup';
import UserProfile from '../components/userProfile/userProfile';
const Navigations = StackNavigator({
    App: { screen: App },
    signupScreen: { screen: Signup },
    UserProfile:{screen:UserProfile}
},
    {
        headerMode: 'screen',
        initialRouteName: 'signupScreen'
    }

);

export default Navigations;