import { useState } from "react";
import {
    Container,
    IntroContainer,
    AppLogo,
    UserImg,
    PercentageContainer,
    ArrowIcon,
    BackArrowIcon,
    PercentageText,
    ArrowButton,
    BackButton,
    PercentageSubtext
} from "./styles"
import { useNavigation } from "@react-navigation/native";

interface Props {
    isOpen: boolean;
    dietSuccess: number;
}

export function Header({isOpen, dietSuccess} : Props){  
    const navigation = useNavigation();

    return(
        <Container isOpen={isOpen}>
        { isOpen ?
            <>
                <PercentageContainer isSuccess={dietSuccess >= 50 ? true : false} isOpen={isOpen}>
                    <BackButton onPress={() => {navigation.navigate('home')}}>
                        <BackArrowIcon/>
                    </BackButton>
                    <PercentageText>{dietSuccess.toFixed(2)}%</PercentageText>
                    <PercentageSubtext>of meals into the diet</PercentageSubtext>
                </PercentageContainer>
            </>
            : 
            <>
                <IntroContainer>
                    <AppLogo source={require("../../assets/img/Logo.png")} />
                    <UserImg source={require("../../assets/img/Shiro.jpeg")} />
                </IntroContainer>
                <PercentageContainer isSuccess={dietSuccess >= 50 ? true : false} isOpen={isOpen}>
                    <ArrowButton onPress={() => {navigation.navigate('statistics')}}>
                        <ArrowIcon/>
                    </ArrowButton>
                    <PercentageText>{dietSuccess.toFixed(2)}%</PercentageText>
                    <PercentageSubtext>of meals into the diet</PercentageSubtext>
                </PercentageContainer>
            </>
        }
        </Container>
    )
}