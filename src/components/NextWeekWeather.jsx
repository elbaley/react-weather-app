import styled from "styled-components";
import useWeatherContext from "../context/WeatherContext";
import { ListItem } from "./";

const NextWeekWeather = () => {
  const { weatherData } = useWeatherContext();
  return (
    <Wrapper>
      <ul className='next-week'>
        {weatherData?.daily.map((day, index) => {
          if (index === 0) return;

          return <ListItem key={index} day={day} />;
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--alternativeBodyBackground);
  padding: 1.5rem 1rem;
  .next-week {
    list-style: none;
    padding: 0;
  }
`;

export default NextWeekWeather;
