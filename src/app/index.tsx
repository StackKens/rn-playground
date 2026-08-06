import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const [sum, setSum] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 items-center justify-center gap-2">
        <Text className="text-3xl font-bold text-slate-800">RN Playground</Text>
        <Text className="text-base text-slate-400">
          Practice React Native concepts here.
        </Text>

        <View>
          <TextInput
            placeholder="Type..."
            value={text}
            onChangeText={setText}
            className="px-3 py-4 text-slate-950 border border-gray-500 rounded-full w-64"
          />
        </View>

        <Pressable
          className="rounded-3xl w-32 py-3 px-3 border border-gray-500"
          onPress={() => setVisible((prev) => !prev)}
        >
          <Text className="text-blue-600 text-center">Show text</Text>
        </Pressable>

        {visible && (
          <View>
            <Text className="text-slate-950 font-bold text-2xl py-2">
              {text ? `You have typed: ${text}` : "Please type something"}
            </Text>
          </View>
        )}
      </View>

      <View className="py-4 flex-1">
        <View className="flex-row gap-2 ml-8">
          <Pressable
            className="rounded-3xl w-32 py-3 px-3 border border-gray-500"
            onPress={() => setSum((prev) => prev + 1)}
          >
            <Text className="text-center">Add</Text>
          </Pressable>
          <Pressable
            className="rounded-3xl w-32 py-3 px-3 border border-gray-500"
            onPress={() => setSum(0)}
          >
            <Text className="text-center text-red-300 font-bold">Reset</Text>
          </Pressable>
        </View>

        <View className="py-4">
          <Text className="text-black font-sm text-2xl  py-4 text-center bg-gray-950 text-white">
            {sum}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
