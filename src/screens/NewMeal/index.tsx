import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button'
import { HeaderWithBack } from '../../components/HeaderWithBack'
import {
    Container,
    FormContainer,
    Label,
    LongInput,
    ShortInput,
    TimeContainer,
    TimeInputContainer,
    AreaInput,
    RdoContainer,
    RdoButtonYes,
    RdoButtonNo,
    IconStatus,
    RdoLabel
} from './styles'
import { useState } from 'react';
import { Alert } from 'react-native';
import { DataProps } from '../../storage/diet/itemDTO'
import { addItem } from '../../storage/diet/addItem';

export function NewMeal(){
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [intoDiet, setIntoDiet] = useState(false);
    const reDate = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])$/;


    const onPressRdoButton = (booleanValue: boolean) => {
        setIntoDiet(booleanValue)
    }

    const submit = async () => {
        if(name.trim() === ""){
            return Alert.alert("The name field is required")
        } else if (description.trim() === ""){
            return Alert.alert("The description field is required")
        } else if (date.trim() === "" || !date.match(reDate)){
            return Alert.alert("The date field is invalid, please follow the format: YYYY-MM-DD")
        }

        const data: DataProps = {
            id: (Math.random()*1000).toFixed(0),
            name: name,
            description: description,
            date: date,
            hour: hour,
            intoDiet: intoDiet,
        };
            
        await addItem(data)

        navigation.navigate('dietAddResult', {intoDiet: intoDiet});

    }

    return(
        <Container>
            <HeaderWithBack title='New meal' colorType='None'/>
            <FormContainer>
                <Label>Name</Label>
                <LongInput onChangeText={setName} value={name} />
                <Label>Description</Label>
                <AreaInput
                    multiline
                    numberOfLines={5}
                    maxLength={150}
                    textAlignVertical="top"
                    onChangeText={setDescription}
                    value={description}
                />
                <TimeContainer>
                    <TimeInputContainer>
                        <Label>Date</Label>
                        <ShortInput onChangeText={setDate} value={date} placeholder={"YYYY/MM/DD"} />
                    </TimeInputContainer>
                    <TimeInputContainer>
                        <Label>Hour</Label>
                        <ShortInput onChangeText={setHour} value={hour} placeholder={"23:59"} />
                    </TimeInputContainer>
                </TimeContainer>
                <Label>Is it into the diet?</Label>
                <RdoContainer>
                    <RdoButtonYes onPress={() => {onPressRdoButton(true)}} bgColor={intoDiet ? "Green" : "None"}>
                        <IconStatus bgColor={"Green"}/>
                        <RdoLabel>Yes</RdoLabel>
                    </RdoButtonYes>
                    <RdoButtonNo onPress={() => {onPressRdoButton(false)}} bgColor={!intoDiet ? "Red" : "None"}>
                        <IconStatus/>
                        <RdoLabel>No</RdoLabel>
                    </RdoButtonNo>
                </RdoContainer>
                <Button iconType='None' isBlack={true} text='Register meal' onPress={() => {submit()}} />
            </FormContainer>
        </Container>
    )
}