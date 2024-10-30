import { Stack } from "expo-router";
// name은 파일명, title은 보여지는 것

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
      <Stack.Screen name="hello" options={{ title: "Hello" }} />
      <Stack.Screen name="multiplication" options={{ title: "구구단" }} />
      <Stack.Screen name="piano" options={{ title: "piano" }} />
      <Stack.Screen name="boxinbox" options={{ title: "boxinbox" }} />
      <Stack.Screen name="dice" options={{ title: "dice" }} />
    </Stack>
  );
}
