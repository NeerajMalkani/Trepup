import { useState } from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator  } from "@react-navigation/drawer";
import { Styles } from "./src/styles/styles";
import { darkTheme, lightTheme } from "./src/theme/apptheme";
import HomeScreen, { navigationRef } from "./src/screens/HomeScreen";
import TrepupDrawer from "./src/components/Drawer";
import TrepupStore from "./src/screens/statics/TrepupStore";
import TrepupMarketplace from "./src/screens/statics/TrepupMarketplace";
import TrepupEmail from "./src/screens/statics/TrepupEmail";
import TrepupOne from "./src/screens/statics/TrepupOne";

const Drawer = createDrawerNavigator ();
export default function App() {
  const [themeMode, setThemeMode] = useState(true);

  return (
    <SafeAreaView style={[Styles.flex1]}>
      <Provider theme={themeMode ? lightTheme : darkTheme}>
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator initialRouteName="Home" drawerContent={TrepupDrawer}>
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }} />
            <Drawer.Screen name="TrepupStore" component={TrepupStore} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }} />
            <Drawer.Screen name="TrepupMarketplace" component={TrepupMarketplace} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }} />
            <Drawer.Screen name="TrepupEmail" component={TrepupEmail} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }} />
            <Drawer.Screen name="TrepupOne" component={TrepupOne} options={{ headerShown: false }} initialParams={{ themeMode: themeMode }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}
