import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';

import { Post } from 'lib/api';
import { images } from '@/constants';

import { Video, ResizeMode } from 'expo-av';

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }: { activeItem: Post; item: Post }) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item ? 'zoomIn' : 'zoomOut'}
      duration={500}>
      {play ? (
        <Video source={{ uri: item.video }}
        className='w-52 h-52 rounded-[35px] mt-3 bg-white/10'
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        shouldPlay
        ></Video>
      ) : (
        <TouchableOpacity
          className="item-center relative justify-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}>
          <ImageBackground
            source={images.path}
            resizeMode="cover"
            className="shadown-black/40 my-5 h-[50px] w-[72px] max-w-[72px] 
            overflow-hidden shadow-lg"></ImageBackground>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

type TrendingProps = {
  posts: Post[];
};
const Trending = ({ posts }: TrendingProps) => {
  const [activeItem, setActiveItem] = useState(posts[0]);
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.title}
      horizontal
      renderItem={({ item }) => <TrendingItem activeItem={activeItem} item={item}></TrendingItem>}
    />
  );
};

export default Trending;
