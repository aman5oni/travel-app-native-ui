import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "./src/screens/Detail";
import Home from "./src/screens/Home";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
