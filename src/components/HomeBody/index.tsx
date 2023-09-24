import { Container, DateLabel, Label } from "./styles";
import { Button } from "../Button";
import { useState } from "react";
import { DietItem } from "../DietItem";
import { dietData, dietDataProps } from "../../utils/tempMock";
import { FlatList } from "react-native";

export function HomeBody() {

    const [dietDataMock, setDietDataMock] = useState<dietDataProps[]>(dietData)

    return (
        <Container>
            <Label>Meals</Label>
            <Button
                iconType="Plus"
                text="New meal"
                isBlack={true}
            />
            <FlatList 
                data={dietDataMock} 
                keyExtractor={data => data.date}
                renderItem={({item}) => 
                <>
                    <DateLabel>{item.date}</DateLabel>
                    {
                        item.items.map(el => <DietItem descriptionText={el.description} isIntoDiet={el.isIntoDiet} timeText={el.time} key={`${el.description}-${item.date}`} />)
                    }
                </>
                }
            />
        </Container>
    )
}