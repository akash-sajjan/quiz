import React, { useState } from "react";
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

const Q3 = ({ navigation, q }: Props) => {
  const [ans, setAns] = useState("");

  const gotoNextQ = () => {
    navigation.navigate("q4");
  };
  const gotoPrivious = () => {
    navigation.navigate("q2");
  };
  return (
    <View style={Styles.qContainer}>
      <View style={Styles.question}>
        <Text>{JSON.stringify(q, null, 10)}</Text>
      </View>
      <View style={Styles.bt}>
        <Button onPress={gotoPrivious} mode="contained">
          Back
        </Button>

        <Button onPress={gotoNextQ} mode="contained">
          Next
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ q: state.reducer.user });

export default connect(mapStateToProps)(Q3);
