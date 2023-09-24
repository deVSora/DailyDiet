import styled from "styled-components/native";
import theme from "../../theme"


export const Container = styled.View`
  margin: 0px 24px 0px 24px;
`

export const Label = styled.Text`
  font-size: ${theme.fontSizes.M};
  color: #000;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const DateLabel = styled.Text`
  font-size: ${theme.fontSizes.G};
  color: ${theme.colors.gray1};
  margin-top: 32px;
  font-weight: bold;
`
