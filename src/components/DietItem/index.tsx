import {
    Container,
    Label,
    Time,
    Separator,
    StatusCircle
} from './styles';
import {TouchableOpacityProps} from 'react-native'


interface Props extends TouchableOpacityProps{
    time: string;
    name: string;
    isIntoDiet: boolean;
}

export function DietItem({time, name, isIntoDiet, ...rest}: Props){
    return(
        <Container {...rest}>
            <Time>{time}</Time>
            <Separator/>
            <Label>{name}</Label>
            <StatusCircle isIntoDiet={isIntoDiet}/>
        </Container>
    )
}