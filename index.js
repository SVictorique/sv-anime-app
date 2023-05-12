import { Navigation } from "react-native-navigation";
import App from "./App";
import MyScreen from "./view/MyScreen";

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('MyScreen', () => MyScreen)

Navigation.events().registerAppLaunchedListener(() => {
     Navigation.setRoot({
         root: {
           topTabs: {
             children: [
               {
                 stack: {
                   children: [
                     {
                       component: {
                         name: 'com.myApp.WelcomeScreen'
                       }
                     }
                   ],
                   options: {
                     topBar: {
                       title: '首页',
                       background: {
                         color: '#515a6e'
                       },
                     }
                   }
                 }
               },
             ]
           },
           bottomTabs: {
             children: [
               {
                 stack: {
                   children: [
                     {
                       component: {
                         name: 'com.myApp.WelcomeScreen'
                       }
                     }
                   ],
                   options: {
                     bottomTab: {
                       text: '首页'
                     }
                   }
                 }
               },
               {
                 stack: {
                   children: [
                     {
                       component: {
                         name: 'MyScreen'
                       }
                     }
                   ],
                   options: {
                     bottomTab: {
                       text: '我的'
                     }
                   }
                 }
               }
             ]
           }
         }
    });
  });
