
import { StackNavigator } from 'react-navigation';
import Welcome from '../welcome/welcome';
import App from '../../App/app';
import AppForm from '../form/form';
import AppHeader from '../header/header';
import Home from '../welcome/welcome';

const Navigations = StackNavigator({

    App: { screen: App },
    WelcomeScreen: { screen: Home },
    AppFormScreen:{screen:AppForm}
},
    {
        headerMode: 'screen',
        initialRouteName: 'App'
    }

);

export default Navigations;