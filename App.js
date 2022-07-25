import React,{Fragment} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './src/api/redux/reducers'
import AddProduct from './src/component/addPost'
import Main from './src/Main'
import firebase from 'firebase'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()
const store = createStore(reducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyAF8EAfB5mV6uxcXc93W2NSizih8wBfkZ0",
  authDomain: "upayments-8653e.firebaseapp.com",
  projectId: "upayments-8653e",
  storageBucket: "upayments-8653e.appspot.com",
  messagingSenderId: "586619633053",
  appId: "1:586619633053:web:3eee42893c588df3224374",
  measurementId: "G-1RCJLF3Y1Q"
}

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}

 function App() {

  const config = {
    animation: 'spring',
    config: {
      stiffness: 2700,
      damping: 800,
      mass: 1.7,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
    },
  }

  return (
    <Provider store={store}>
    <Fragment>
     <NavigationContainer>
     <Stack.Navigator 
                 detachInactiveScreens={false}  
                 initialRouteName="Main" 
                    screenOptions={{
                    animation: 'fade_from_bottom',
                    headerBackTitle: false,
                    headerBackTitleVisible: false,
                    animationEnabled:true,
                      header:{visible:false},
                        headerMode:false,
                        headerShown: false}}>
      <Stack.Screen name="Main" component={Main} 
          options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                      }
                      }}/>
      <Stack.Screen name="AddProduct" component={AddProduct} 
          options={{
                    transitionSpec: {
                        open: config,
                        close: config,
                      }
                      }}/>
    </Stack.Navigator>
    </NavigationContainer>
    </Fragment>
   </Provider>
  );
}


export default App;
