import {
    Container,
    RdoButtonYes,
    RdoButtonNo,
    IconStatus,
    Label
} from './styles'
import {useState} from 'react'

interface Props{
    bgColor: "None" | "Green" | "Red";
}

export function RadioButton({ bgColor } : Props){
    return(
        <Container>
            <RdoButtonYes bgColor={bgColor}>
                <IconStatus bgColor={"Green"}/>
                <Label>Yes</Label>
            </RdoButtonYes>
            <RdoButtonNo bgColor={bgColor}>
                <IconStatus/>
                <Label>No</Label>
            </RdoButtonNo>
        </Container>
    )
}