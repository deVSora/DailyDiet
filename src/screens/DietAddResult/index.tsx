import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../components/Button';
import {
    Container,
    ButtonContainer,
    ResultText,
    SubText,
    Image,
    HighLightText,
} from './styles';
import { useState } from 'react';

interface RouteParams{
    intoDiet: boolean
}

export function DietAddResult(){
const navigation = useNavigation();
const route = useRoute();
let { intoDiet } = route.params as RouteParams;
const [isSuccess, setIsSuccess] = useState(intoDiet);

    return(
        <Container>
            {isSuccess ? 
                <>
                    <ResultText isSuccess={isSuccess}>Keep going!</ResultText>
                    <SubText>You keeping<HighLightText> into the diet. </HighLightText> Very well!</SubText>
                    <Image source={require("../../assets/img/IllustrationSuccess.png")} />
                </>            
            :
                <>
                    <ResultText isSuccess={isSuccess}>Too bad!</ResultText>
                    <SubText>You<HighLightText> went off the diet </HighLightText>this time, but keep making an effort and don't give up!</SubText>
                    <Image source={require("../../assets/img/IllustrationFail.png")} />
                </>
            }
            <ButtonContainer>
                <Button iconType='None' isBlack={true} text='Ir para a pagina inicial' onPress={() => navigation.navigate("home")}/>
            </ButtonContainer>
        </Container>
    )
}