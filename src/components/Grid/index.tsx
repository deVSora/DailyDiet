import { 
    Container, 
    MainLabel,
    SubLabel
} from "./styles"

interface Props{
    label: string;
    subLabel: string;
    colorType: "None" | "Red" | "Green";
    isHalf: boolean;
}

export function Grid({label, subLabel, colorType, isHalf}: Props){
    return(
        <Container colorType={colorType} isHalf={isHalf}>
            <MainLabel>{label}</MainLabel>
            <SubLabel>{subLabel}</SubLabel>
        </Container>
    )
}