import React from 'react';
import { AsyncStorage, ToastAndroid } from 'react-native';

export default class AuthServices {

    static signup(obj, nav) {
        let AllUser = [];
        AllUser.push(obj)
        AsyncStorage.setItem('users', JSON.stringify(AllUser))
        console.log("success");
        nav('LoginScreen')
        ToastAndroid.show('SIGNUP SUCCESSFUL !', ToastAndroid.SHORT);

    }
   static login(obj,nav,users) {
        console.log(nav)
       
        var filterdata = users.some((d, i) => {
            if (d.name == obj.name && d.pasword === obj.pasword) {
                ToastAndroid.show('lOGIN SUCCESSFUL !', ToastAndroid.SHORT);
                nav('UserProfile')
                return true;
            }
        })
        if (filterdata == false) {
            ToastAndroid.show('Wrong name or Password', ToastAndroid.SHORT);
        }
    }
}