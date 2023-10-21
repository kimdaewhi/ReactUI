import AutoCompletes from './components/materialUI/AutoCompletes'
import styled from  '@emotion/styled'

const StyledApp = styled.div`
  margin : 10px;
`;

function App() {
  return (
    <StyledApp>
      <AutoCompletes/>

      {/* 
        <Buttons/>
        */}
    </StyledApp>
  );
}

export default App;
