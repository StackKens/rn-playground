import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="flex-1 items-center justify-center gap-2">
        <Text className="text-3xl font-bold text-white">RN Playground</Text>
        <Text className="text-base text-slate-400">
          Practice React Native concepts here.
        </Text>

        <View>
          <TextInput
            placeholder="Type..."
            value={text}
            onChangeText={setText}
            className="px-3 py-2 text-white border border-gray-500 rounded-full w-70"
          />
        </View>

        <Pressable
          className="rounded-3xl w-20 py-3 px-3 border border-gray-500"
          onPress={() => setVisible((prev) => !prev)}
        >
          <Text className="text-blue-600">Show text</Text>
        </Pressable>

        {visible && (
          <View>
            <Text className="text-white font-bold text-2xl py-2">
              {text ? `You have typed: ${text}` : "Please type something"}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
