import { Dispatch } from "redux";

const setUser =
  (name: string, gender: string, lang: string, navigation: any) =>
  (dispatch: Dispatch) => {
    const a = {
      name,
      gender,
      lang,
    };
    dispatch({
      type: "SET_USER",
      payload: a,
    });
    navigation.navigate("q1");
  };

export default setUser;
