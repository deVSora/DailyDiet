import {
    Container,
    Label,
    PlusIcon,
    PencilIcon,
    TrashIcon
} from './styles'
import { TouchableOpacityProps } from 'react-native'
import theme from '../../theme'


interface Props extends TouchableOpacityProps{
    isBlack: boolean;
    text: string;
    iconType: 'Plus' | 'Pencil' | 'Trash' | 'None';
}

export function Button({isBlack, text, iconType, ...rest} : Props) {
    return(
        <Container isBlack={isBlack} {...rest}>
            {
                iconType === 'Plus' && <PlusIcon size={18} color={isBlack ? theme.colors.white : theme.colors.gray1} />       
            }
            {
                iconType === 'Pencil' && <PencilIcon size={18} color={isBlack ? theme.colors.white : theme.colors.gray1} />
            }
            {
                iconType === 'Trash' && <TrashIcon size={18} color={isBlack ? theme.colors.white : theme.colors.gray1} />       
            }
            <Label isBlack={isBlack}>{text}</Label>
        </Container>
    )
}