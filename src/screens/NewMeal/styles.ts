import styled from 'styled-components/native'
import theme from '../../theme'
import { TextInputProps } from 'react-native';

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


