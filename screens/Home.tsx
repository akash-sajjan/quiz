import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Styles from "../styles/Styles";
import { Picker } from "@react-native-picker/picker";
import setUser from "../redux/actions/action";
import { connect } from "react-redux";

type Props = {
  navigation: {
    navigate: Function;
  };
  setUser: Function;
};

const Home = ({ navigation, setUser }: Props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [lang, setLang] = useState("javaScript");
  const [isName, setIsName] = useState(true);

  const gotoQuiz = () => {
    setUser(name, gender, lang, navigation);
  };

  useEffect(() => {
    if (name.length > 0) {
      setIsName(false);
    } else {
      setIsName(true);
    }
  });

  return (
    <View style={Styles.container}>
      <View style={Styles.input}>
        <Text style={{ fontWeight: "bold" }}>Name</Text>
        <TextInput
          label="Enter your Name"
          mode="outlined"
          onChangeText={(val) => setName(val)}
        />
      </View>
      <View style={Styles.picker}>
        <Text style={{ fontWeight: "bold" }}>Gender</Text>
        <Picker
          mode="dropdown"
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
      <View style={Styles.picker}>
        <Text style={{ fontWeight: "bold" }}>Language</Text>
        <Picker
          mode="dropdown"
          selectedValue={lang}
          onValueChange={(itemValue, itemIndex) => setLang(itemValue)}
        >
          <Picker.Item label="javaScript" value="javaScript" />
          <Picker.Item label="python" value="python" />
        </Picker>
      </View>

      <Button onPress={gotoQuiz} mode="contained" disabled={isName}>
        Enter Test
      </Button>
    </View>
  );
};

export default connect(null, { setUser })(Home);
