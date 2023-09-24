import styled from 'styled-components/native'
import theme from '../../theme'

interface Props{
    isIntoDiet: boolean;
}

export const Container = styled.View`
    margin-top: -20px;
    background-color: ${theme.colors.white};
    z-index: 100;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 40px 24px;
`

export const Title = styled.Text`
    font-size: ${theme.fontSizes.GG};
    font-weight: bold;
    color: ${theme.colors.gray1};
`

export const Description = styled.Text`
    font-size: ${theme.fontSizes.M};
    margin-top: 8px;
    color: ${theme.colors.gray2};
`

export const SubLabel = styled.Text`
    font-size: ${theme.fontSizes.S};
    font-weight: bold;
    color: ${theme.colors.gray1};
    margin-top: 24px;
`

export const TimeText = styled.Text`
    font-size: ${theme.fontSizes.M};
    color: ${theme.colors.gray2};
    margin-top: 8px;
`

export const Tag = styled.View`
    background-color: ${theme.colors.gray6};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 144px;
    height: 34px;
    margin-bottom: 314px;
    border-radius: 8px;
    margin-top: 24px;
`

export const ButtonContainer = styled.View`
    margin-top: 9px;
`

export const TagText = styled.Text`
    font-size: ${theme.fontSizes.S};
    color: ${theme.colors.gray1};
`

export const TagIcon = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 50px;
    margin-right: 8px;
    background-color: ${({isIntoDiet} : Props) => isIntoDiet ? theme.colors.greenDark : theme.colors.redDark};
`