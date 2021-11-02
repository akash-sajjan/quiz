import { questions } from "../../data/Questions";

const initialState = {
  user: {
    name: "",
    gender: "",
    lang: "",
  },
  questions: questions,
  answers: {
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
