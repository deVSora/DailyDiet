import { Grid } from '../../components/Grid'
import { Header } from '../../components/Header'
import { dietData, dietItem } from "../../utils/tempMock";
import {
    Container,
    Label,
    DietContainer,
    BodyContainer
} from './styles'



export function Statistics(){
    let dietSuccessItems = dietData.map(item => {return item.items.filter(x => x.isIntoDiet === true).length})
    const somaSuccessItems = dietSuccessItems.reduce((sum, value) => {
        return sum + value;
      }, 0);


    let dietItems = dietData.map(item => {return item.items.filter(x => x.description !== undefined).length})
    const somaDietItems = dietItems.reduce((sum, value) => {
        return sum + value;
      }, 0);

    let count = 0;
    let streak = 0;
    let dietStreakArray : dietItem[] = [];

    dietData.forEach(item => { item.items.map(x => dietStreakArray.push(x))})
    for(let i = 0; i < dietStreakArray.length; i++){
        if(dietStreakArray[i].isIntoDiet){
            count += 1
            if(streak < count){
                streak = count
            }
        } else {
            count = 0
        }
    }

    return(
        <Container>
            <Header isOpen={true} dietSuccess={ (somaSuccessItems / somaDietItems) * 100} />
            <BodyContainer>
                <Label>Estatísticas gerais</Label>
                <Grid colorType='None' label={streak.toString()} subLabel='best streak of meals into the diet' isHalf={false} />
                <Grid colorType='None' label={somaDietItems.toString()} subLabel='recorded meals' isHalf={false} />
                <DietContainer>
                    <Grid colorType='Green' label={somaSuccessItems.toString()} subLabel='meals into the diet' isHalf={true} />
                    <Grid colorType='Red' label={(somaDietItems - somaSuccessItems).toString()} subLabel='meals out of the diet' isHalf={true} />
                </DietContainer>
            </BodyContainer>
        </Container>
    )
}