import styled from 'styled-components/native'
import theme from '../../theme';


interface Props{
    bgColor: "None" | "Green" | "Red";
}

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 148px;
`

export const RdoButtonYes = styled.TouchableOpacity<Props>`
    height: 50px;
    width: 160px;
    background-color: ${({bgColor} : Props) => bgColor === "Green" ? theme.colors.greenLight : theme.colors.gray6};
    border-width: ${({bgColor} : Props) => bgColor === "Green" ? "1px" : "0px"};
    border-color:  ${({bgColor} : Props) => bgColor === "Green" ? theme.colors.greenDark : "transparent"};
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const RdoButtonNo = styled.TouchableOpacity<Props>`
    height: 50px;
    width: 160px;
    background-color: ${({bgColor} : Props) => bgColor === "Red" ? theme.colors.redLight : theme.colors.gray6};
    border-width: ${({bgColor} : Props) => bgColor === "Red" ? "1px" : "0px"};
    border-color:  ${({bgColor} : Props) => bgColor === "Red" ? theme.colors.redDark : "transparent"};
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const IconStatus = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 50px;
    background-color:  ${({bgColor} : Props) => bgColor === "Green" ? theme.colors.greenDark : theme.colors.redDark};
    margin-right: 8px;
`

export const Label = styled.Text`
    font-size: ${theme.fontSizes.S};
    font-weight: bold;
    color: ${theme.colors.gray1};
`