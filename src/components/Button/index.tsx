import {
    Container,
    Label,
    PlusIcon,
    PencilIcon,
    TrashIcon
} from './styles'
import theme from '../../theme'


interface Props{
    isBlack: boolean;
    text: string;
    iconType: 'Plus' | 'Pencil' | 'Trash' | 'None';
}

export function Button({isBlack, text, iconType} : Props) {
    return(
        <Container isBlack={isBlack}>
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