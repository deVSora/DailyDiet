import {
    Container,
    Label,
    Time,
    Separator,
    StatusCircle
} from './styles';

interface Props{
    timeText: string;
    descriptionText: string;
    isIntoDiet: boolean;
}

export function DietItem({timeText, descriptionText, isIntoDiet}: Props){
    return(
        <Container>
            <Time>{timeText}</Time>
            <Separator/>
            <Label>{descriptionText}</Label>
            <StatusCircle isIntoDiet={isIntoDiet}/>
        </Container>
    )
}