import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DietAddResult } from "../screens/DietAddResult";
import { Home } from "../screens/Home";
import { MealView } from "../screens/MealView";
import { NewMeal } from "../screens/NewMeal";
import { Statistics } from "../screens/Statistics";
import { EditMeal } from "../screens/EditMeal";

const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes(){
    return(
        <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="dietAddResult"
                component={DietAddResult}
            />

            <Screen
                name="mealView"
                component={MealView}
            />

            <Screen
                name="newMeal"
                component={NewMeal}
            />

            <Screen
                name="editMeal"
                component={EditMeal}
            />

            <Screen
                name="statistics"
                component={Statistics}
            />
        </Navigator>
    )
}