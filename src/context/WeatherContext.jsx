import axios from "axios";
import { createContext } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { SET_WEATHER_DATA } from "./actions";
import reducer from "./reducer";
const WeatherContext = createContext();
const initialState = {
  weatherData: null,
};

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setWeatherData = (data) => {
    dispatch({ type: SET_WEATHER_DATA, payload: { data } });
  };

  return (
    <WeatherContext.Provider value={{ ...state, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export default useWeatherContext;
