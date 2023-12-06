import AsyncStorage from "@react-native-async-storage/async-storage";
import  { DataProps } from "./itemDTO"
import { DIET_COLLECTION } from "../storageConfig";

export async function updateItem(updatedItem: DataProps) {
    try {
        const currentCollection = await AsyncStorage.getItem(DIET_COLLECTION);

        if (currentCollection) {
            const currentCollectionArray: DataProps[] = JSON.parse(currentCollection);

            const foundIndex = currentCollectionArray.findIndex(item => item.id === updatedItem.id);

            if (foundIndex !== -1) {
                currentCollectionArray[foundIndex] = updatedItem;

                const updatedCollection = JSON.stringify(currentCollectionArray);

                await AsyncStorage.setItem(DIET_COLLECTION, updatedCollection);
            } else {
                console.log("Item não encontrado na coleção.");
            }
        } else {
            console.log("Coleção não encontrada.");
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
}






