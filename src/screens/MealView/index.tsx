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
    ButtonModalContainer,
    ModalOverlay,
    ModalContainer,
    TagText,
    TagIcon,
    Modal,
    ModalText
} from './styles'
import { DataProps } from '../../storage/diet/itemDTO';
import { getItems } from '../../storage/diet/getItems'
import { useRoute, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { removeItem } from '../../storage/diet/removeItem'

interface RouteParams{
    dataId: string
}

export function MealView(){
    const route = useRoute();
    const navigation = useNavigation();
    const {dataId} = route.params as RouteParams;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dietItem, setDietItem] = useState<DataProps>()

    useEffect(() => {
        getItems()
            .then((items) => {
                setDietItem(items.filter(el => el.id === dataId)[0])
            })
            .catch((error) => {
                console.error('Erro ao buscar os itens:', error);
            });
    },[])

    return(
        <>
            <ModalOverlay isModalOpen={isModalOpen}>
                <HeaderWithBack title='Meal' colorType={dietItem?.intoDiet ? "Green" : "Red"}/>
                <Container>
                    <Title>{dietItem?.name}</Title>
                    <Description>{dietItem?.description}</Description>
                    <SubLabel>Date and time</SubLabel>
                    <TimeText>{dietItem?.date} at {dietItem?.hour}</TimeText>
                    <Tag>
                        <TagIcon isIntoDiet={dietItem?.intoDiet} />
                        <TagText>{dietItem?.intoDiet ? "Into the diet" : "out of the diet"}</TagText>
                    </Tag>
                    {
                        dietItem &&
                        <Button iconType='Pencil' isBlack={true} text='Edit meal' onPress={() => navigation.navigate("editMeal", {dataId: dietItem.id})} />
                    }
                    <ButtonContainer>
                        <Button iconType='Trash' isBlack={false} text='Delete meal' onPress={() => setIsModalOpen(true)} />
                    </ButtonContainer>
                </Container>
            </ModalOverlay>
            <Modal isModalOpen={isModalOpen}>
                <ModalText>Do you want to delete this meal register?</ModalText>
                <ModalContainer>
                    <ButtonModalContainer>
                        <Button iconType='None' isBlack={false} text='Cancel' onPress={() => setIsModalOpen(false)} />
                    </ButtonModalContainer>
                    <ButtonModalContainer>
                        <Button iconType='None' isBlack={true} text='Yes, Delete' onPress={() => {
                            if(dietItem){
                                removeItem(dietItem.id)
                                setIsModalOpen(false)
                                navigation.navigate("home")
                            }
                            }} />
                    </ButtonModalContainer>
                </ModalContainer>
            </Modal>
        </>
    )
}