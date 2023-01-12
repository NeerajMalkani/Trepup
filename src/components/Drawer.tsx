import { DrawerItem } from "@react-navigation/drawer";
import { ScrollView, View, TouchableNativeFeedback, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Styles } from "../styles/styles";
import { darkTheme, lightTheme } from "../theme/apptheme";
import AnalyticsLogo from "./AnalyticsLogo";
import EmailLogo from "./EmailLogo";
import MarketplaceLogo from "./MarketplaceLogo";
import PhotosLogo from "./PhotosLogo";
import StoreLogo from "./StoreLogo";
import TrepupLogo from "./TrepupLogo";

export const activeIndex: number = 0;
const TrepupDrawer = (props: any) => {
  const theme = props.state.routes[0].params.themeMode ? lightTheme : darkTheme;
  const { colors } = theme;
  return (
    <View style={[Styles.flex1]}>
      <TouchableNativeFeedback onPress={() => props.navigation.navigate("Home")}>
        <View style={[Styles.paddingHorizontal16, Styles.paddingVertical12, Styles.height56, Styles.borderBottom1, { borderBottomColor: colors.seperator }]}>
          <TrepupLogo />
        </View>
      </TouchableNativeFeedback>
      <ScrollView style={[Styles.flex1]}>
        <Button mode="contained" style={[Styles.borderRadius4, Styles.margin16]} onPress={() => {}}>
          SIGN IN
        </Button>
        <View style={[Styles.flex1, Styles.height1, Styles.marginHorizontal16, { backgroundColor: colors.seperator }]}></View>
        <Text variant="labelSmall" style={[Styles.margin16, Styles.marginBottom0, { color: colors.textSecondary, textTransform: "uppercase" }]}>
          COMPANY
        </Text>
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              About Trepup
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="information-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 2}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Only on Trepup
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="information-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 3}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Contact
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="contacts" />}
          onPress={() => {}}
        />

        <View style={[Styles.flex1, Styles.height1, Styles.marginHorizontal16, { backgroundColor: colors.seperator }]}></View>
        <Text variant="labelSmall" style={[Styles.margin16, Styles.marginBottom0, { color: colors.textSecondary, textTransform: "uppercase" }]}>
          SERVICES
        </Text>
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Trepup Store
            </Text>
          )}
          icon={({ focused }) => <StoreLogo />}
          onPress={() => props.navigation.navigate("TrepupStore")}
        />
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Trepup Marketplace
            </Text>
          )}
          icon={({ focused }) => <MarketplaceLogo />}
          onPress={() => props.navigation.navigate("TrepupMarketplace")}
        />
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Trepup Analytics
            </Text>
          )}
          icon={({ focused }) => <AnalyticsLogo />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Trepup Photos
            </Text>
          )}
          icon={({ focused }) => <PhotosLogo />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Trepup Email
            </Text>
          )}
          icon={({ focused }) => <EmailLogo />}
          onPress={() => props.navigation.navigate("TrepupEmail")}
        />

        <View style={[Styles.flex1, Styles.height1, Styles.marginHorizontal16, { backgroundColor: colors.seperator }]}></View>
        <Text variant="labelSmall" style={[Styles.margin16, Styles.marginBottom0, { color: colors.textSecondary, textTransform: "uppercase" }]}>
          RESOURCES
        </Text>
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Trepup One
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="numeric-1-circle-outline" />}
          onPress={() => props.navigation.navigate("TrepupOne")}
        />
        <DrawerItem
          focused={activeIndex === 2}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Pricing Plans
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="information-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 3}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Help
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="help-circle-outline" />}
          onPress={() => {}}
        />

        <View style={[Styles.flex1, Styles.height1, Styles.marginHorizontal16, { backgroundColor: colors.seperator }]}></View>
        <Text variant="labelSmall" style={[Styles.margin16, Styles.marginBottom0, { color: colors.textSecondary, textTransform: "uppercase" }]}>
          LEGAL
        </Text>
        <DrawerItem
          focused={activeIndex === 1}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Terms of Use
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="numeric-1-circle-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 2}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Privacy Policy
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="information-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 3}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Cookie Policy
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="help-circle-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 3}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Intellectual Property Policy
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="help-circle-outline" />}
          onPress={() => {}}
        />
        <DrawerItem
          focused={activeIndex === 3}
          label={({ focused }) => (
            <Text variant="bodyMedium" style={[{ marginStart: -16, color: focused ? colors.primary : colors.text }]}>
              Brand Guideline Policy
            </Text>
          )}
          icon={({ focused }) => <Icon color={focused ? colors.primary : colors.textSecondary} size={24} name="help-circle-outline" />}
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

export default TrepupDrawer;
