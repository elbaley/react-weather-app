import styled from "styled-components";
import { TodaysWeather, NextWeekWeather } from "./components/";
function App() {
  return (
    <Wrapper>
      <TodaysWeather />
      <NextWeekWeather />
    </Wrapper>
  );
}
const Wrapper = styled.main`
  max-width: 500px;
  grid-template-rows: 0.55fr 0.15fr 0.25fr;
  display: grid;
  color: white;
  margin: 0 auto;
`;
export default App;
