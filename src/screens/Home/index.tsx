import {
    Container
} from './styles'
import { dietData } from "../../utils/tempMock";
import {Header} from "../../components/Header"
import {HomeBody} from "../../components/HomeBody"

export function Home(){
    let dietSuccessItems = dietData.map(item => {return item.items.filter(x => x.isIntoDiet === true).length})
    const sumSuccessItems = dietSuccessItems.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
      }, 0);


    let dietItems = dietData.map(item => {return item.items.filter(x => x.description !== undefined).length})
    const sumDietItems = dietItems.reduce((acumulador, valorAtual) => {
        return acumulador + valorAtual;
      }, 0);


    return(
        <Container>
            <Header isOpen={false} dietSuccess={(sumSuccessItems / sumDietItems) * 100} />
            <HomeBody/>
        </Container>
    )
}