# rn-playground

A sandbox project for practicing and learning React Native concepts with Expo and NativeWind.

## Stack

- [Expo SDK 57](https://docs.expo.dev) with **expo-router** (file-based routing)
- React Native 0.86
- [NativeWind](https://www.nativewind.dev) v4 + Tailwind CSS for styling
- TypeScript (strict)

## Getting started

```bash
npm install          # install dependencies
npm start            # start the Expo dev server
```

Then press `a` for Android, `i` for iOS, or `w` for web.

## Scripts

| Script    | Description                    |
| --------- | ------------------------------ |
| `npm start` | Start the Expo dev server    |
| `npm run android` | Run on Android          |
| `npm run ios` | Run on iOS                |
| `npm run web` | Run on web                |
| `npm run lint` | Lint the project           |

## Project structure

```
src/
  app/          # expo-router routes (each file = a screen)
    _layout.tsx # root layout
    index.tsx   # home screen
  ...
```

## Included packages

AsyncStorage, Axios, TanStack Query, Zustand, dayjs, CVA/clsx, lucide icons, Reanimated, gesture-handler, expo-image, expo-linear-gradient, and more. All installed and ready to experiment with.

## Concepts to explore

- Core components: View, Text, Image, ScrollView, FlatList, Pressable
- Styling with NativeWind / StyleSheet
- State: useState, useContext, Zustand, React Query
- Navigation: expo-router (Stack, Tabs, modals, dynamic routes)
- AsyncStorage for local persistence
- Networking with Axios
- Animations with Reanimated
- Safe areas, status bar, splash screen, icons
