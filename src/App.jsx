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
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;800&display=swap");
  max-width: 500px;
  grid-template-rows: 0.55fr 0.15fr 0.25fr;
  display: grid;
  color: white;
  margin: 0 auto;
`;
export default App;
