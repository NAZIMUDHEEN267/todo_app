import styled from "styled-components/native";

const Container = ({children}) => {
  return (
    <ContainerView>
        {children}
    </ContainerView>
  )
}

const ContainerView = styled.View`
    flex: 1;
    padding: 10px;
`;

export default Container;