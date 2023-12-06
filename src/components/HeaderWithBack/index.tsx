import {
    Container,
    BackIcon,
    Title,
    Button,
    TransparentIcon
} from './styles'
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';


interface Props{
    colorType: "None" | "Green" | "Red";
    title: string;
}

export function HeaderWithBack({ colorType, title} : Props){
    const navigation = useNavigation();
    
    return(
        <Container colorType={colorType}>
            <Button onPress={() => navigation.goBack()}>
                <BackIcon size={24} color={theme.colors.gray2}/>
            </Button>
            <Title>{title}</Title>
            <TransparentIcon />
        </Container>
    )
}