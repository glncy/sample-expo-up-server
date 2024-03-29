import { ExpoUp } from "expo-up-server";
import { bucket } from "./firebaseAdmin";

export const expoUp = ExpoUp({
  bucket,
  storageRootFolder: "_sample_expo_up_storage",
});
