import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import Styles from "../styles/Styles";

type Props = {
  navigation: {
    navigate: Function;
  };
  q: any;
};

const Result = ({ navigation, q }: Props) => {
  const gotoHome = () => {
    navigation.navigate("home");
  };

  return (
    <View style={Styles.qContainer}>
      <View style={Styles.question}>
        <Text> Results </Text>
        <Text>{JSON.stringify(q, null, 10)}</Text>
      </View>
      <View>
        <Button onPress={gotoHome} mode="contained">
          Reset
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ q: state.reducer.user });

export default connect(mapStateToProps)(Result);
