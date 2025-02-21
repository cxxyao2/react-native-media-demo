import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={[
          { id: 1, name: 'aa' },
          { id: 2, name: 'bb' },
          { id: 3, name: 'cc' },
        ]}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Text className="px-4 text-3xl text-white">{item.name}</Text>}
        ListHeaderComponent={() => (
          <View className=" px-4">
            <View className=" max-h-[40vh]  flex-row items-center justify-between">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                <Text className="font-pmedium text-2xl text-white">JSMastery</Text>
              </View>

              <View>
                <Image
                  source={images.logoBlack}
                  className=" h-10 w-10 max-w-20"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput value="" />

            <View className="w-full flex-1 pb-8 pt-5">
              <Text className="font-regular mb_3 text-lg text-gray-100">Latest Videos</Text>
              <Trending posts={[{id:1},{id:2},{id:3}]}/>
            </View>
          </View>
        )}
        ListEmptyComponent={()=>(
          <Text className='text-white'>Empty</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
