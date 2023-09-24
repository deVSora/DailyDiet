import {
    Container,
    BackIcon,
    Title,
    Button,
    TransparentIcon
} from './styles'
import theme from '../../theme';


interface Props{
    colorType: "None" | "Green" | "Red";
    title: string;
}

export function HeaderWithBack({ colorType, title} : Props){
    return(
        <Container colorType={colorType}>
            <Button>
                <BackIcon size={24} color={theme.colors.gray2}/>
            </Button>
            <Title>{title}</Title>
            <TransparentIcon />
        </Container>
    )
}