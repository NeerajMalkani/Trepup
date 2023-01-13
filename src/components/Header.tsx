import { View } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { BasicParametersProps } from "../models/ParameterProps";
import { Styles } from "../styles/styles";
import TrepupLogo from "./TrepupLogo";

const Header = (screenProps: BasicParametersProps) => {
  const { colors } = screenProps.theme;
  return (
    <View style={[Styles.flexRow, Styles.flexAlignCenter, Styles.width100per, Styles.height64, Styles.paddingHorizontal8, Styles.borderBottom1, { justifyContent: "space-between", borderBottomColor: colors.seperator }]}>
      <View style={[Styles.flexRow, Styles.flexAlignCenter]}>
        <IconButton icon="menu" iconColor={colors.text} size={24} onPress={() => screenProps.navigation.toggleDrawer()} />
        <TrepupLogo />
      </View>
      <View style={[Styles.flexRow, Styles.flexAlignCenter]}>
        <IconButton icon="magnify" iconColor={colors.text} size={24} onPress={() => console.log("Pressed")} />
        <Button mode="contained" style={[Styles.borderRadius4]} onPress={() => {}}>
          SIGN IN
        </Button>
      </View>
    </View>
  );
};

export default Header;
