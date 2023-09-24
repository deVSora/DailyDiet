import styled from 'styled-components/native'
import theme from '../../theme'

interface Props {
    isIntoDiet: boolean;
}

export const Container = styled.TouchableOpacity`
    height: 49px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 12px;
    padding-right: 16px;
    border: ${theme.colors.gray5} 1px solid;
    border-radius: 6px;
    margin-top: 8px;
`

export const Label = styled.Text`
    width: 75%;
    font-size: ${theme.fontSizes.M};
    color: ${theme.colors.gray2};
    margin-right: 12px;
`

export const Time = styled.Text`
    font-size: ${theme.fontSizes.XS};
    color: ${theme.colors.gray1};
    margin-right: 12px;
`

export const Separator = styled.View`
    width: 1px;
    height: 14px;
    margin-right: 12px;
    background-color: ${theme.colors.gray4};
`

export const StatusCircle = styled.View<Props>`
    width: 14px;
    height: 14px;
    border-radius: 50px;
    background-color: ${({isIntoDiet}: Props ) => isIntoDiet ? theme.colors.greenMid : theme.colors.redMid};
`