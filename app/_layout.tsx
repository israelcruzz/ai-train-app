import { Slot } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import LoadingScreen from "@/components/loading";
import { FavProvider } from "./context/fav-provider";

export default function Layout() {
  const [fontLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  return (
    <>
      {fontLoading ? (
        <FavProvider>
          <Slot />
        </FavProvider>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
