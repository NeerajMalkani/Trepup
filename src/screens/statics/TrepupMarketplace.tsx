import { Text, withTheme } from "react-native-paper";
import { View } from "react-native";
import Header from "../../components/Header";
import { BasicParametersProps } from "../../models/ParameterProps";
const TrepupMarketplace = (screenProps: BasicParametersProps) => {
  return (
    <View>
      <Header theme={screenProps.theme} route={screenProps.route} navigation={screenProps.navigation} />
      <Text variant="bodyLarge">Marketplace</Text>
    </View>
  );
};

export default withTheme(TrepupMarketplace);
