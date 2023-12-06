import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "../storageConfig";
import { getItems } from "./getItems";

export async function removeItem(id : string){
    try{
        let currentCollection = await getItems()

        if (currentCollection) {
            currentCollection = currentCollection.filter(el => el.id != id);

            // Converte a coleção atualizada de volta para JSON
            const updatedCollection = JSON.stringify(currentCollection);

            // Salva a coleção atualizada de volta no AsyncStorage
            await AsyncStorage.setItem(DIET_COLLECTION, updatedCollection);
        }
    }
    catch(err){
        console.log(err)
        throw err
    }
}