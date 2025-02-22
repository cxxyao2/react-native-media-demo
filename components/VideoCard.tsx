import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Post } from 'lib/api';
import { images } from '@/constants';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';

type VideoCardProps = {
  video: Post;
};

const VideoCard = ({ video: { title, thumbnail, video, creator } }: VideoCardProps) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="mb-14 flex-col items-start  px-4">
      <View className="w-full flex-row items-start justify-between gap-3">
        <View className="flex-1 flex-row items-center justify-center">
          <View
            className="items-center justify-center rounded-lg 
            border border-secondary p-0.5">
            <Image
              source={images.avatar}
              className=" h-[46px] max-h-[46px] w-[46px] max-w-[46px]  rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="ml-3 flex-1 justify-center gap-y-1">
            <Text className="font-psemiBold text-sm text-white" numberOfLines={1}>
              {title}
            </Text>

            <Text className="font-pregular text-xs text-gray-100" numberOfLines={1}>
              {creator?.username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      </View>

      {play ? (
        <Text className='text-white'>Playing</Text>
      ) : (
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={()=>setPlay(true)}
        className="relative mt-10 h-[200px]  w-full  items-center justify-center  rounded-xl">
          <Image
            source={images.cards}
            className="  w-[100px]  max-w-full  rounded-xl "
            resizeMode="contain"
          />  
         <Ionicons
         className='absolute left-auto  top-auto'
        name='play'
        size={24}
        color={'white'}
      />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
