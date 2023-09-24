import styled from 'styled-components/native'
import theme from '../../theme';


interface Props{
    isSuccess: boolean;
}


export const Container = styled.View`
   padding: 160px 32px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const ButtonContainer = styled.View`
    margin: 32px 60px 0px 62px;
    width: 191px;
    display: flex;
    justify-content: center;
`

export const ResultText = styled.Text<Props>`
    color: ${({isSuccess} : Props) => isSuccess ? theme.colors.greenDark : theme.colors.redDark};
    font-size: ${theme.fontSizes.GG};
    text-align: center;
`

export const SubText = styled.Text`
    margin-top: 8px;
    color: ${theme.colors.gray1};
    font-size: ${theme.fontSizes.M};
    text-align: center;
`

export const HighLightText = styled.Text`
    color: ${theme.colors.gray1};
    font-size: ${theme.fontSizes.M};
    font-weight: bold;
`

export const Image = styled.Image`
    margin: 40px 43px 32px 43px;
`