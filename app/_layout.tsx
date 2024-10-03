import { Drawer } from "expo-router/drawer";
// name은 파일명, title은 보여지는 것

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="about" options={{ title: "About" }} />
      <Drawer.Screen name="hello" options={{ title: "Hello" }} />
      <Drawer.Screen name="multiplication" options={{ title: "구구단" }} />
    </Drawer>
  );
}
