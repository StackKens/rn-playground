import { SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="flex-1 items-center justify-center gap-2">
        <Text className="text-3xl font-bold text-white">
          RN Playground
        </Text>
        <Text className="text-base text-slate-400">
          Practice React Native concepts here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
