import {AppRoutes} from "./src/routes/Routes";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <AppRoutes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
