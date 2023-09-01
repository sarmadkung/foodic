// import React, { useState } from "react";
// import { TouchableOpacity, View } from "react-native";
// import { Box, Label, Row, Text, TextField, RowImageText, Container } from "ui";
// import { Button } from "ui";
// import { TextInputIcon } from "ui";
// import { ThemeProvider } from "../components/theme";
// import { useTheme } from "../context";

// export default function Page() {
//   const { theme } = useTheme();
//   const handlePress = () => {
//     alert("im pressed");
//   };
//   return (
//     <Container
//       style={{
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: theme.colors.base,
//         flex: 1,
//       }}
//     >
//       <Row>
//         <Text variant="title" colorVariant="body">
//           Welcome here at expo router
//         </Text>
//         <Button colorVariant="primary" variant="highlighted">
//           <Text variant="title" colorVariant="body">
//             ME
//           </Text>
//         </Button>
//       </Row>
//       <TextField
//         variant="outlined"
//         style={{ padding: 10, color: "red" }}
//         placeholderTextColor="pink"
//         placeholder="Enter your name"
//       />
//       <Box
//         imageSource={require("../../../apps/expo/assets/dish.jpg")}
//         title="Box Title"
//         description="Box Description"
//         onPress={handlePress}
//       />
//       <View>
//         <Label variant="default">Default Label</Label>
//         <Label variant="outlined">Outlined Label</Label>
//         <Label variant="highlighted">Highlighted Label</Label>
//       </View>
//       <TextInputIcon
//         variant="default"
//         leftIcon="person"
//         rightIcon="lock-closed"
//         placeholder="Username"
//       />
//       <View>
//         <RowImageText
//           imageSource={require("../assets/dish.jpg")}
//           title="Example Title"
//           description="Example Description"
//           variant="primary"
//           price="$100"
//         />

//         <RowImageText
//           imageSource={require("../assets/dish.jpg")}
//           title="Example Title"
//           description="Example Description"
//           variant="secondary"
//           price="$100"
//         />
//       </View>
//     </Container>
//   );
// }

import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import { useColorScheme } from "react-native";

import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from "tamagui";
import config from "../tamagui.config";
export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <YStack
          f={1}
          jc="center"
          ai="center"
          backgroundColor={"$backgroundSoft"}
        >
          <Paragraph color="$color" jc="center">
            {colorScheme}
          </Paragraph>

          <StatusBar style="auto" />
        </YStack>
      </Theme>
    </TamaguiProvider>
  );
}
