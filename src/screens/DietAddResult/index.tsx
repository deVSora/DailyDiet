import { Button } from '../../components/Button';
import {
    Container,
    ButtonContainer,
    ResultText,
    SubText,
    Image,
    HighLightText,
} from './styles';

interface Props{
    isSuccess: boolean; 
}

export function DietAddResult({ isSuccess }: Props){
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
                <Button iconType='None' isBlack={true} text='Ir para a pagina inicial'/>
            </ButtonContainer>
        </Container>
    )
}