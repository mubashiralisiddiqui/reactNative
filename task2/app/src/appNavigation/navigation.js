import { StackNavigator } from 'react-navigation';
import App from '../screens/app/app';
import AddPost from '../components/addPost/addPost';
import PostDetail from '../components/postDetail/postDetail';

const Navigations = StackNavigator({
    AppScreen: { screen: App },
    FormScreen: { screen: AddPost },
    PostDetail: { screen: PostDetail }
},
    {
        headerMode: 'screen',
        initialRouteName: 'AppScreen'
    }
);
export default Navigations;