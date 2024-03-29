import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainScreen from "./MainScreen";
import ReservationScreen from "./ReservationScreen";
import NotificationScreen from './NotificationScreen';
import UserScreen from "./UserScreen";
import HotelScreen from "./HotelScreen";
import RoomScreen from "./RoomScreen";
import PaymentScreen from "./PaymentScreen";
import AfterPaymentScreen from "./AfterPaymentScreen";
import DetailReservationScreen from "./DetailReservationScreen";
import EditInformationScreen from "./EditInformationScreen";
import TopupScreen from "./TopupScreen";
import RecentlyViewScreen from "./RecentlyViewScreen";
import FavoriteHotelScreen from "./FavoriteHotelScreen";

import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function CustomerMain() {
    return (
        <Tab.Navigator
            initialRouteName="MainPage"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#FF6400",
                tabBarStyle: [
                    {
                        "display": "flex",
                        height: 58,
                        paddingTop: 6,
                        paddingBottom: 6,
                    },
                ]
            }}
            backBehavior="history"
        >
            <Tab.Screen name="MainPage" component={MainScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="ReservationPage" component={ReservationScreen}
                options={{
                    tabBarLabel: 'Reservation',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="NotificationPage" component={NotificationScreen}
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="notifications" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="UserPage" component={UserScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen name="HotelPage" component={HotelScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="RoomPage" component={RoomScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="PaymentPage" component={PaymentScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="AfterPaymentPage" component={AfterPaymentScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="DetailReservationPage" component={DetailReservationScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="EditInformationPage" component={EditInformationScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="TopupPage" component={TopupScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="RecentlyViewPage" component={RecentlyViewScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tab.Screen name="FavoriteHotelPage" component={FavoriteHotelScreen}
                options={{
                    tabBarButton: (props) => (null),
                    tabBarStyle: { display: 'none' }
                }}
            />

        </Tab.Navigator>
    );
}
