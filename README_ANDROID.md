# Santa's Christmas Quest — Android build

This repository contains the HTML5 game and its Capacitor Android wrapper configuration.

## Build an APK without a laptop

1. Open the repository's **Actions** tab.
2. Select **Build Android APK**.
3. Tap **Run workflow** and confirm.
4. Wait for the run to finish successfully.
5. Open the completed run and download the `santas-christmas-quest-debug-apk` artifact.
6. Extract the ZIP and install `app-debug.apk` on your Android phone. Android may ask you to allow installs from your browser or file manager.

A push to `main` also starts the build automatically.

## Local build

Requires Node.js 22+, Java 21, Android Studio and Android SDK. Run:

```sh
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

The debug APK is for testing and sideloading, not a Play Store release. Game progress is saved locally on the device.
