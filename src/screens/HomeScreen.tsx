import { StatusBar, View } from "react-native";
import { withTheme } from "react-native-paper";
import { createNavigationContainerRef } from "@react-navigation/native";
import { Styles } from "../styles/styles";
import { BasicParametersProps } from "../models/ParameterProps";
import Header from "../components/Header";

export const navigationRef = createNavigationContainerRef();
const HomeScreen = (screenProps: BasicParametersProps) => {
  const { colors }: any = screenProps.theme;
  return (
    <View style={[Styles.flex1]}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Header theme={screenProps.theme} route={screenProps.route} navigation={screenProps.navigation} />
    </View>
  );
};

export default withTheme(HomeScreen);
