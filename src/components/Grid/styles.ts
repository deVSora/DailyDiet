import styled from "styled-components/native";
import theme from "../../theme";

interface Props{
    colorType: "None" | "Red" | "Green";
    isHalf: boolean;
}

export const Container = styled.View<Props>`
    width: ${({isHalf} : Props) => isHalf ? "48%" : "100%"};
    background-color: ${({colorType} : Props) => colorType === "Red" ? theme.colors.redLight : colorType === "Green" ? theme.colors.greenLight : theme.colors.gray6};
    height: ${({isHalf} : Props) => isHalf ? "107px" : "89px"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 0px 16px 0px;
    margin-top: 12px;
    border-radius: 6px;
`

export const MainLabel = styled.Text`
    color: ${theme.colors.gray1};
    font-size: ${theme.fontSizes.GG};
    margin-bottom: 8px;
`

export const SubLabel = styled.Text`
    color: ${theme.colors.gray2};
    font-size: ${theme.fontSizes.S};
    margin: 0px 16px 0px 16px;
    text-align: center;
`