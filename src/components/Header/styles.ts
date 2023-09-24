import styled from "styled-components/native";
import {ArrowUpRight, ArrowLeft} from "phosphor-react-native"
import theme from "../../theme"
import { TouchableOpacityProps } from "react-native";

interface Props {
    isOpen: boolean;
    isSuccess: boolean;
}

export const Container = styled.View`
    padding: ${({isOpen}: Props) => isOpen ? '0px' : '24px'};
    margin: ${({isOpen}: Props) => isOpen ? '0px' : '37px 0px 0px 0px'};
`

export const IntroContainer = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 36px;
`

export const AppLogo = styled.Image``

export const UserImg = styled.Image`
    border: 2px solid ${theme.colors.gray2};
    border-radius: 50px;
    width: 40px;
    height: 40px;
`

export const PercentageContainer = styled.View<Props>`
    border-radius: ${({isOpen}: Props) => isOpen ? '0px' : '8px'};
    background-color: ${({isSuccess}: Props) => isSuccess ? theme.colors.greenLight : theme.colors.redMid};
    padding: ${({isOpen}: Props) => isOpen ? '72px 0px 66px 0px' : '20px 0px 20px 0px'};;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ArrowIcon = styled(ArrowUpRight)`
    font-size: 24px;
    color: ${theme.colors.greenDark};
`
export const BackArrowIcon = styled(ArrowLeft)`
    font-size: 24px;
    color: ${theme.colors.greenDark};
`

export const ArrowButton = styled.TouchableOpacity<Props>`
    background-color: transparent;
    top: 8px;
    right: 8px;
    position: absolute;
`
export const BackButton = styled.TouchableOpacity<Props>`
    background-color: transparent;
    top: 56px;
    left: 24px;
    position: absolute;
`

export const PercentageText = styled.Text`
    color: ${theme.colors.gray1};
    font-size: ${theme.fontSizes.XG};
    font-weight: bold;
`

export const PercentageSubtext = styled.Text`
    color: ${theme.colors.gray2};
    font-size: ${theme.fontSizes.XS};
`