import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Result from "../screens/Result";
import Q1 from "../screens/Q1";
import Q2 from "../screens/Q2";
import Q3 from "../screens/Q3";
import Q4 from "../screens/Q4";
import Q5 from "../screens/Q5";

const Stack = createStackNavigator();

const quizStack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: "Home Screen" }}
        />
        {/* <Stack.Screen
          name="quiz"
          component={Quiz}
          options={{ title: "Quiz Screen" }}
        /> */}
        <Stack.Screen
          name="result"
          component={Result}
          options={{ title: "Result Screen" }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="q1" component={Q1} />
        <Stack.Screen name="q2" component={Q2} />
        <Stack.Screen name="q3" component={Q3} />
        <Stack.Screen name="q4" component={Q4} />
        <Stack.Screen name="q5" component={Q5} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const QuizNavigator = () => {
  return (
    <quizStack.Navigator>
      <quizStack.Screen name="q1" component={Q1} />
      <quizStack.Screen name="q2" component={Q2} />
      <quizStack.Screen name="q3" component={Q3} />
      <quizStack.Screen name="q4" component={Q4} />
      <quizStack.Screen name="q5" component={Q5} />
    </quizStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
