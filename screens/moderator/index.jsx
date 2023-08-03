import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import RoomScreen from "./RoomScreen";
import NotificationScreen from './NotificationScreen';
import UserScreen from "./UserScreen";
import AddRoomScreen from "./AddRoomScreen";

const Tab = createBottomTabNavigator();

export default function ModeratorMain() {
    return (
        <Tab.Navigator 
            initialRouteName="MainPage"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="MainPage" component={MainScreen} />
            <Tab.Screen name="RoomPage" component={RoomScreen} />
            <Tab.Screen name="NotificationPage" component={NotificationScreen} />
            <Tab.Screen name="UserPage" component={UserScreen} />
            <Tab.Screen name="AddRoomPage" component={AddRoomScreen} options={{tabBarButton: (props) => (null),}}/>

        </Tab.Navigator>
    );
}
