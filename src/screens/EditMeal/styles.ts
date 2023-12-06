import styled from 'styled-components/native'
import theme from '../../theme'
import { TextInputProps } from 'react-native';

interface Props{
    bgColor: "None" | "Green" | "Red";
}

export const Container = styled.ScrollView`

`

export const FormContainer = styled.View`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: ${theme.colors.white};
    z-index: 100;
    margin-top: -20px;
    padding: 16px 24px 0px 24px;
`

export const TimeContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const TimeInputContainer = styled.View`
    display: flex;
    flex-direction: column;
`

export const Label = styled.Text`
    color: ${theme.colors.gray2};
    font-weight: bold;
    font-size: ${theme.fontSizes.S};
    margin-top: 24px;
`

export const AreaInput = styled.TextInput<TextInputProps>`
    border: 1px solid ${theme.colors.gray5};
    width: 100%;
    margin-top: 4px;
    height: 120px;
    font-size: ${theme.fontSizes.M};
    padding: 14px 8px;
    color: ${theme.colors.gray1};
    border-radius: 6px;
`

export const LongInput = styled.TextInput<TextInputProps>`
    border: 1px solid ${theme.colors.gray5};
    width: 100%;
    margin-top: 4px;
    font-size: ${theme.fontSizes.M};
    height: 48px;
    padding: 14px 8px;
    color: ${theme.colors.gray1};
    border-radius: 6px;
`

export const ShortInput = styled.TextInput<TextInputProps>`
    border: 1px solid ${theme.colors.gray5};
    margin-top: 4px;
    width: 155px;
    font-size: ${theme.fontSizes.M};
    height: 48px;
    padding: 14px 8px;
    color: ${theme.colors.gray1};
    border-radius: 6px;
`

export const RdoContainer = styled.View`
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

export const RdoLabel = styled.Text`
    font-size: ${theme.fontSizes.S};
    font-weight: bold;
    color: ${theme.colors.gray1};
`