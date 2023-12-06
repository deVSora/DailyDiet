import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataProps } from "./itemDTO";
import { DIET_COLLECTION } from "../storageConfig";

export async function getItems(){
    try{
        const storage : DataProps[] = await AsyncStorage.getItem(DIET_COLLECTION).then(storage => storage ? JSON.parse(storage) : undefined);
        
        return storage
    }
    catch(err){
        throw err
    }
}