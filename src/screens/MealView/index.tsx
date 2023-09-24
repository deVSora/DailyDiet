import { Button } from '../../components/Button';
import { HeaderWithBack } from '../../components/HeaderWithBack'
import {
    Container,
    Title,
    Description,
    SubLabel,
    TimeText,
    Tag,
    ButtonContainer,
    TagText,
    TagIcon
} from './styles'

interface Props{
    isIntoDiet: boolean;
    title: string;
    description: string;
    date: string;
    hour: string;
}

export function MealView({isIntoDiet, date, description, hour, title} : Props){
    return(
        <>
            <HeaderWithBack title='Meal' colorType={isIntoDiet? "Green" : "Red"}/>
            <Container>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <SubLabel>Date and time</SubLabel>
                <TimeText>{date} at {hour}</TimeText>
                <Tag>
                    <TagIcon isIntoDiet= {isIntoDiet} />
                    <TagText>{isIntoDiet ? "Into the diet" : "out of the diet"}</TagText>
                </Tag>

                <Button iconType='Pencil' isBlack={true} text='Edit meal' />
                <ButtonContainer>
                    <Button iconType='Trash' isBlack={false} text='Delete meal' />
                </ButtonContainer>
            </Container>
        </>
    )
}