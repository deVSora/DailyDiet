import styled from 'styled-components/native'
import theme from '../../theme'
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

interface Props{
    isBlack: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    background-color: ${({isBlack} : Props) => isBlack ? theme.colors.gray1 : theme.colors.white};
    border: ${theme.colors.gray1} solid 1px;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`

export const Label = styled.Text<Props>`
    color: ${({isBlack} : Props) => isBlack ? theme.colors.white : theme.colors.gray1};
`

export const PlusIcon = styled(Plus)`
    margin-right: 12px;
`

export const PencilIcon = styled(PencilSimpleLine)`
    margin-right: 12px;
`

export const TrashIcon = styled(Trash)`
    margin-right: 12px;
`