import { SET_WEATHER_DATA } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA:
      return { ...state, weatherData: action.payload.data };

    default:
      throw new Error("No action found!");
  }
};

export default reducer;
