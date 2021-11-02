import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { connect } from "react-redux";
import Styles from "../styles/Styles";

type Props = {
  navigation: {
    navigate: Function;
  };
  q: any;
};

const Q2 = ({ navigation, q }: Props) => {
  const [ans, setAns] = useState("");
  const [question, setQuestion] = useState();
  const [option, setOption] = useState({
    selectedLang1: false,
    selectedLang2: false,
    selectedLang3: false,
    selectedLang4: false,
  });

  const gotoNextQ = () => {
    navigation.navigate("q3");
  };
  const gotoPrivious = () => {
    navigation.navigate("q1");
  };

  useEffect(() => {
    if (q.user.lang == "javaScript") {
      setQuestion(q.questions.javaScript.q1);
    } else {
      setQuestion(q.questions.python.q1);
    }
  }, []);

  const { selectedLang1, selectedLang2, selectedLang3, selectedLang4 } = option;

  return (
    <View style={Styles.qContainer}>
      <ScrollView style={Styles.questionC}>
        <View style={Styles.question}>
          <Text>{JSON.stringify(question.question)}</Text>
        </View>
        <View style={{ ...Styles.optionsContainer }}>
          <Checkbox
            status={option.selectedLang1 ? "checked" : "unchecked"}
            color="#fc5185"
            onPress={() =>
              setOption({ ...option, selectedLang1: !selectedLang1 })
            }
          />
          <Text
            style={{
              marginLeft: 20,
              color: option.selectedLang1 ? "#fc5185" : "gray",
              fontWeight: option.selectedLang1 ? "bold" : "normal",
            }}
          >
            {JSON.stringify(question.options.option1)}
          </Text>
          <Text>{option.selectedLang1 ? "1" : "0"}</Text>
        </View>
        <View style={{ ...Styles.optionsContainer }}>
          <Checkbox
            status={option.selectedLang2 ? "checked" : "unchecked"}
            color="#fc5185"
            onPress={() =>
              setOption({ ...option, selectedLang2: !selectedLang2 })
            }
          />
          <Text
            style={{
              marginLeft: 20,
              color: option.selectedLang2 ? "#fc5185" : "gray",
              fontWeight: option.selectedLang2 ? "bold" : "normal",
            }}
          >
            {JSON.stringify(question.options.option2)}
          </Text>
          <Text>{option.selectedLang2 ? "1" : "0"}</Text>
        </View>
        <View style={{ ...Styles.optionsContainer }}>
          <Checkbox
            status={option.selectedLang3 ? "checked" : "unchecked"}
            color="#fc5185"
            onPress={() =>
              setOption({ ...option, selectedLang3: !selectedLang3 })
            }
          />
          <Text
            style={{
              marginLeft: 20,
              color: option.selectedLang3 ? "#fc5185" : "gray",
              fontWeight: option.selectedLang3 ? "bold" : "normal",
            }}
          >
            {JSON.stringify(question.options.option3)}
          </Text>
          <Text>{option.selectedLang3 ? "1" : "0"}</Text>
        </View>
        <View style={{ ...Styles.optionsContainer }}>
          <Checkbox
            status={option.selectedLang4 ? "checked" : "unchecked"}
            color="#fc5185"
            onPress={() =>
              setOption({ ...option, selectedLang4: !selectedLang4 })
            }
          />
          <Text
            style={{
              marginLeft: 20,
              color: option.selectedLang4 ? "#fc5185" : "gray",
              fontWeight: option.selectedLang4 ? "bold" : "normal",
            }}
          >
            {JSON.stringify(question.options.option4)}
          </Text>
          <Text>{option.selectedLang4 ? "1" : "0"}</Text>
        </View>
      </ScrollView>
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

export default connect(mapStateToProps)(Q2);
