import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[
          { id: 1, name: 'aa' },
          { id: 2, name: 'bb' },
          { id: 3, name: 'cc' },
        ]}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text className="text-3xl text-white">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6 px-4">
            <View className="mb-6 flex-row items-start justify-between">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                <Text className="font-pmedium text-2xl text-white">JSMastery</Text>
              </View>

              <View className="mt-1.5 min-h-[10vh]">
                <Image source={images.logoBlack} 
                className="h-10 w-10 max-w-[100px]" 
                resizeMode="contain" 
                />
              </View>
            </View>

            <SearchInput />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
