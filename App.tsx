import { StatusBar } from 'expo-status-bar';
import { ThemeProvider} from 'styled-components';
import theme from './src/theme';
import { Home } from './src/screens/Home';
import { NewMeal } from './src/screens/NewMeal';
import { MealView } from './src/screens/MealView';
import { DietAddResult } from './src/screens/DietAddResult';
import { Statistics } from './src/screens/Statistics';
import { useFonts,
   NunitoSans_400Regular, 
   NunitoSans_700Bold } 
   from '@expo-google-fonts/nunito-sans';


export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular, 
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <MealView date='12/08/2022' description='Sanduíche de pão integral com atum e salada de alface e tomate' hour='16:00' isIntoDiet={false} title='Sanduíche'/>
    </ThemeProvider>
  );
}