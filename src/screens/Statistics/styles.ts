import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.ScrollView`
    display: flex;
    flex: 1;
`
export const BodyContainer = styled.View`
    padding: 0px 24px 0px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    margin-top: -30px;
    background-color: white;
    z-index: 100;
`

export const Label = styled.Text`
    font-size: ${theme.fontSizes.S};
    color: ${theme.colors.gray2};
    margin: 33px 0px 23px 0px;
    font-weight: bold;
`

export const DietContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`