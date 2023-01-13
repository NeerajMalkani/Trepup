import { DrawerItem } from "@react-navigation/drawer";
import { ScrollView, View, TouchableNativeFeedback } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { drawerData } from "../jsons/drawer";
import { Styles } from "../styles/styles";
import { darkTheme, lightTheme } from "../theme/apptheme";
import TrepupLogo from "./TrepupLogo";

export const activeIndex: number = 0;
const TrepupDrawer = (props: any) => {
  const theme = props.state.routes[0].params.themeMode ? lightTheme : darkTheme;
  const { colors } = theme;

  const arrDrawer: any = drawerData;

  return (
    <View style={[Styles.flex1]}>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate("Home")}>
        <View style={[Styles.paddingHorizontal16, Styles.paddingVertical12, Styles.height64, Styles.borderBottom1, { borderBottomColor: colors.seperator }]}>
          <TrepupLogo />
        </View>
      </TouchableNativeFeedback>
      <ScrollView style={[Styles.flex1]}>
        <Button mode="contained" style={[Styles.borderRadius4, Styles.margin16]} onPress={() => {}}>
          SIGN IN
        </Button>
        <View style={[Styles.flex1, Styles.height1, Styles.marginHorizontal16, { backgroundColor: colors.seperator }]}></View>
        {arrDrawer.map((k: any, i: any) => {
          return (
            <View key={i}>
              <Text variant="labelSmall" style={[Styles.margin16, Styles.marginBottom0, { color: colors.textSecondary, textTransform: "uppercase" }]}>
                {k.header}
              </Text>
              {k.data.map((v: any, j: any) => {
                return (
                  <DrawerItem
                    key={j}
                    focused={activeIndex === i + j}
                    label={({ focused }) => (
                      <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
                        {v.title}
                      </Text>
                    )}
                    icon={({ focused }) => (v.iconType === "svg" ? v.icon : <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name={v.icon} />)}
                    onPress={() => (v.navigation ? props.navigation.navigate(v.navigation) : {})}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TrepupDrawer;
