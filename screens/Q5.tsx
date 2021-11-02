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

const Q5 = ({ navigation, q }: Props) => {
  const [ans, setAns] = useState("");

  const gotoresult = () => {
    navigation.navigate("result");
  };
  const gotoPrivious = () => {
    navigation.navigate("q3");
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

        <Button onPress={gotoresult} mode="contained" color="orange">
          Submit
        </Button>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({ q: state.reducer.user });

export default connect(mapStateToProps)(Q5);
