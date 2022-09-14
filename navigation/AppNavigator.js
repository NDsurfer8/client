import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AboutScreen from '../screens/AboutScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import HomeDetailScreen from '../screens/HomeDetailScreen';
import HomeListScreen from '../screens/HomeListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeList'
                component={HomeListScreen}
                options={{ title: 'HomeHunt' }}
            />
            <Stack.Screen
                name='HomeDetails'
                component={HomeDetailScreen}
            />
            <Stack.Screen
                name='AddHome'
                component={AddHomeScreen}
            />
        </Stack.Navigator>
    )
}



function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'About') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen
                    name='Home'
                    component={StackNavigator}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name='About'
                    component={AboutScreen}
                />
            </Tab.Navigator >
        </NavigationContainer>
    )
}

export default AppNavigator;