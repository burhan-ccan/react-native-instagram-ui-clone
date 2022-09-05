import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Icons
import {
    Home,
    HomeFilled,
    Search,
    SearchFilled,
    Reel,
    ReelFilled,
    Shop,
    ShopFilled,
} from "./Icons";

// screens
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/Search";
import ReelScreen from "./screens/Reel";
import ShopScreen from "./screens/Shop";
import ProfileScreen from "./screens/Profile";
import Comments from "./components/shared/comments";

function MainScreens() {
    return (
        <Stack.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#262626'
        }}>
            <Stack.Screen name="Home" component={Screens} />
            <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
    )
}

function Screens() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#262626'
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <HomeFilled size={30} fill={color} />

                        return <Home size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <SearchFilled size={30} fill={color} />

                        return <Search size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="reel"
                component={ReelScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ReelFilled size={30} fill={color} />

                        return <Reel size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => {
                        if (focused)
                            return <ShopFilled size={30} fill={color} />

                        return <Shop size={30} fill={color} />
                    }
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color }) => (
                        <Image
                            style={[styles.avatar, {
                                borderColor: focused ? '#000' : 'transparent'
                            }]}
                            source={{
                                uri: 'https://burhancacan.com.tr/img/profile-img.jpg'
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainScreens

const styles = StyleSheet.create({
    avatar: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 21,
    }
})