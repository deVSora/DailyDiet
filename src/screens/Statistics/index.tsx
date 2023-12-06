import { useEffect, useState } from 'react';
import { Grid } from '../../components/Grid'
import { Header } from '../../components/Header'
import { getItems } from "../../storage/diet/getItems";
import {
    Container,
    Label,
    DietContainer,
    BodyContainer
} from './styles'
import { DataProps } from '../../storage/diet/itemDTO';



export function Statistics(){
    const [dietData, setDietData] = useState<DataProps[] | null>(null);
    let sumSuccessItems : number = 1
    let sumDietItems : number = 1
    let count = 0;
    let streak = 0;

    useEffect(() => {
        // Use a função getItems() para obter os itens
        getItems()
            .then((items) => {
                // Define os itens como o valor inicial de dietData
                setDietData(items);
            })
            .catch((error) => {
                console.error('Erro ao buscar os itens:', error);
            });
    }, []); 

    if(dietData){
        sumSuccessItems = dietData.filter(el => el.intoDiet === true).length
        sumDietItems = dietData?.length
    
    for(let i = 0; i < dietData.length; i++){
        if(dietData[i].intoDiet){
            count += 1
            if(streak < count){
                streak = count
            }
        } else {
            count = 0
        }
    }
    }

    return(
        <Container>
            <Header isOpen={true} dietSuccess={ (sumSuccessItems / sumDietItems) * 100} />
            <BodyContainer>
                <Label>Estatísticas gerais</Label>
                <Grid colorType='None' label={streak.toString()} subLabel='best streak of meals into the diet' isHalf={false} />
                <Grid colorType='None' label={dietData ? sumDietItems.toString() : "0"} subLabel='recorded meals' isHalf={false} />
                <DietContainer>
                    <Grid colorType='Green' label={ dietData ? sumSuccessItems.toString() : "0"} subLabel='meals into the diet' isHalf={true} />
                    <Grid colorType='Red' label={(sumDietItems - sumSuccessItems).toString()} subLabel='meals out of the diet' isHalf={true} />
                </DietContainer>
            </BodyContainer>
        </Container>
    )
}