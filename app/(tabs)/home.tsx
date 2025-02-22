import { View, Text, FlatList, Image, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { resolvePlugin } from '@babel/core';
import { getAllPosts, Post } from 'lib/api';
import useApi from 'lib/useAPi';
import VideoCard from '@/components/VideoCard';

const Home = () => {
  const { data: posts, refetch } = useApi(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    // re call videos -> if any new videos appear
    setRefreshing(false);
  };

  console.log(posts);

  return (
    <SafeAreaView className=" h-full  bg-primary">
      <FlatList
        data={posts as Post[]}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <VideoCard  video={item} />}
        ListHeaderComponent={() => (
          <View className=" px-4">
            <View className=" max-h-[30vh]  flex-row items-center justify-between">
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
              <Trending posts={posts??[]} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No videos found" subtitle="Be the first one to update the video" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />

      {/* <CustomAlert
          content={modalContent ?? ''} 
          visible={!!modalContent}
          onClose={() => setModalContent(undefined)}
        /> */}
    </SafeAreaView>
  );
};

export default Home;
