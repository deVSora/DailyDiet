import React, { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useIsFocused, useRoute } from '@react-navigation/native';
import { getItems } from '../../storage/diet/getItems';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Container, ContainerItem, DateLabel, Label } from './styles';
import { DietItem } from '../../components/DietItem';
import { DataProps } from '../../storage/diet/itemDTO';

interface PropsItems {
  date: string;
  items: DataProps[];
}

export function Home() {
  const [dietData, setDietData] = useState<DataProps[]>([]);
  const navigation = useNavigation();
  const [listItems, setListItems] = useState<PropsItems[]>([]);
  const isFocused = useIsFocused();
  const [reload, setReload] = useState(false)
  const [sumSuccessItems, setSumSuccessItems] = useState(1)
  const [sumDietItems, setSumDietItems] = useState(1)

  const fetchAndSetDietData = useCallback(async () => {
    try {
      const items = await getItems();
      setDietData(items);

      if (!items) {
        setReload(true)
      }

    } catch (error) {
      console.error('Erro ao buscar os itens:', error);
    }
  }, [reload]);

  useEffect(() => {
    fetchAndSetDietData();
  }, [fetchAndSetDietData]);

  useEffect(() => {
    setSumSuccessItems(dietData.filter((el) => el.intoDiet === true).length)
    setSumDietItems(dietData.length)

    let listUniqueDates = dietData.map((x) => x.date);
    listUniqueDates = listUniqueDates.filter((valor, indice, self) => self.indexOf(valor) === indice);
    listUniqueDates.sort((a, b) => b.localeCompare(a));

    const newListItems = listUniqueDates.map((date) => ({
      date: date,
      items: dietData.filter((obj) => obj.date === date),
    }));

    setListItems(newListItems);

  }, [dietData, isFocused]);

  useEffect(() => {
    if (isFocused) {
      fetchAndSetDietData();
    }
  }, [isFocused, fetchAndSetDietData]);

  return (
    <Container>
      <Header isOpen={false} dietSuccess={(sumSuccessItems / sumDietItems) * 100} />
      <ContainerItem>
        <Label>Meals</Label>
        <Button
          iconType="Plus"
          text="New meal"
          isBlack={true}
          onPress={() => {
            navigation.navigate('newMeal');
          }}
        />
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <>
              <Label>{item.date}</Label>
              {item.items.sort((a,b) => b.hour.localeCompare(a.hour)).map((x) => (
                <>
                  <DietItem isIntoDiet={x.intoDiet} name={x.name} time={x.hour} onPress={() => navigation.navigate('mealView', {dataId: x.id})} />
                </>
              ))}
            </>
          )}
        />
      </ContainerItem>
    </Container>
  );
}
