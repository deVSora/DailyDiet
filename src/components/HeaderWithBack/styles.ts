import styled from 'styled-components/native'
import theme from '../../theme';
import {ArrowLeft} from 'phosphor-react-native'

interface Props{
    colorType: "None" | "Green" | "Red";
}

export const Container = styled.View<Props>`
    height: 132px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    padding: 0px 24px 0px 24px;
    background-color: ${({colorType}: Props) => colorType === "None" ? theme.colors.gray5 : colorType === "Green" ? theme.colors.greenLight : theme.colors.redLight};
`

export const Button = styled.TouchableOpacity`

`

export const BackIcon = styled(ArrowLeft)`

`

export const Title = styled.Text`
    color: ${theme.colors.gray1};
    font-weight: bold;
    font-size: ${theme.fontSizes.G};
`

export const TransparentIcon = styled.View`
    width: 24px;
    height: 24px;
    background-color: transparent;
`