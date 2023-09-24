import { Button } from '../../components/Button'
import { HeaderWithBack } from '../../components/HeaderWithBack'
import { RadioButton } from '../../components/RadioButton'
import {
    Container,
    FormContainer,
    Label,
    LongInput,
    ShortInput,
    TimeContainer,
    TimeInputContainer,
    AreaInput,
} from './styles'

export function NewMeal(){
    return(
        <Container>
            <HeaderWithBack title='New meal' colorType='None'/>
            <FormContainer>
                <Label>Name</Label>
                <LongInput/>
                <Label>Description</Label>
                <AreaInput
                    multiline
                    numberOfLines={5}
                    maxLength={150}
                    textAlignVertical="top"
                />
                <TimeContainer>
                    <TimeInputContainer>
                        <Label>Date</Label>
                        <ShortInput/>
                    </TimeInputContainer>
                    <TimeInputContainer>
                        <Label>Hour</Label>
                        <ShortInput/>
                    </TimeInputContainer>
                </TimeContainer>
                <Label>Is it into the diet?</Label>
                <RadioButton bgColor='Green' />
                <Button iconType='None' isBlack={true} text='Register meal'/>
            </FormContainer>
        </Container>
    )
}