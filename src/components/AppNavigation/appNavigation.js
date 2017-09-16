
import { StackNavigator } from 'react-navigation';
import App from '../../App/app';
import AppForm from '../form/form';
import AppHeader from '../header/header';
import Home from '../signup/signup';
import UserProfile from '../userProfile/userProfile';
const Navigations = StackNavigator({

    App: { screen: App },
    WelcomeScreen: { screen: Home },
    AppFormScreen:{screen:AppForm},
    UserProfile:{screen:UserProfile}
},
    {
        headerMode: 'screen',
        initialRouteName: 'App'
    }

);

export default Navigations;