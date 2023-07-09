// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// // import CreateUser from "./app/create-user/createUser";
// import { registerRootComponent } from "expo";
// import "react-native-reanimated";
// import "react-native-gesture-handler";
// import { lightColors, createTheme, ThemeProvider } from "@rneui/themed";
// import { Platform } from "react-native";
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Users } from "./screens/Users";
// import { CreateUser } from "./screens/user-screens";
// import Profile from "./screens/user-screens/my-profile";

// const Stack = createNativeStackNavigator();

// const theme = createTheme({
//   lightColors: {
//     ...Platform.select({
//       default: lightColors.platform.android,
//       ios: lightColors.platform.ios,
//     }),
//   },
// });

// export default function App() {
//   return (
//     <ThemeProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="User" component={Users} />
//           <Stack.Screen name="Create-user" component={CreateUser} />
//           <Stack.Screen name="profile" component={Profile} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </ThemeProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// registerRootComponent(App);
