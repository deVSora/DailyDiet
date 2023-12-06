import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataProps } from "./itemDTO";
import { DIET_COLLECTION } from "../storageConfig";

export async function addItem(newItem : DataProps){
    try{
    const currentCollection = await AsyncStorage.getItem(DIET_COLLECTION);

    if (currentCollection) {
        const currentCollectionObj = JSON.parse(currentCollection);

        currentCollectionObj.push(newItem); // Supondo que o item tem uma propriedade "id" única

        const updatedCollection = JSON.stringify(currentCollectionObj);

        await AsyncStorage.setItem(DIET_COLLECTION, updatedCollection);
    } else {
        const newCollection = [newItem];

        const newCollectionJSON = JSON.stringify(newCollection);

        await AsyncStorage.setItem(DIET_COLLECTION, newCollectionJSON);
    }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}