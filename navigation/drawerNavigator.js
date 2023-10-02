import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/profile';
import StackNavigator from './stackNavigator';
import Logout from '../screens/logout';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}