import {DataProps} from '../storage/diet/itemDTO'

export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            home : undefined;
            dietAddResult : { intoDiet : boolean };
            editMeal : { dataId : string };
            mealView : { dataId : string };
            newMeal : undefined;
            statistics : undefined;
        }
    }
}