import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import {ListScreen} from "../screens/ListScreen";
import {LoginScreen} from "../screens/LoginScreen";
import {DetailScreen} from "../screens/DetailScreen";

function CustomDrawerContent(props:any) {
    return (
      <DrawerContentScrollView {...props}>
      
        {/*<DrawerItem label="Logout" onPress={() => props.navigation.navigate("Logout")} />*/}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }
  
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  
  function Root() {
    return (
      <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Home"
            component={ListScreen}
            options={{
              drawerIcon: (config) => <Icon size={23} name="list"></Icon>,
            }}
          />
          <Drawer.Screen
            name="Ofertas"
            component={ListScreen}
            options={{
              drawerIcon: (config) => <Icon size={23} name="rocket"></Icon>,
            }}
          />
          <Drawer.Screen
            name="Perfil"
            component={LoginScreen}
            options={{
              drawerIcon: (config) => <Icon size={23} name="person"></Icon>,
            }}
          />
         
        </Drawer.Navigator>
    );
  }

export const AppRoutes = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="Detalles" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}