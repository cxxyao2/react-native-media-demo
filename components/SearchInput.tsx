import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

type SearchInputProps = {
  value: string;
};

const SearchInput = ({ value }: SearchInputProps) => {
  const handleChangeText = () => {};

  return (
    <View
      className="border-black-200 h-10 w-full
       flex-row items-center space-x-4 rounded-2xl 
        border-2 bg-primary-600  px-4
        focus:border-secondary">
      <TextInput
        className="mt-0.5 flex-1 font-pregular text-base 
          text-white"
        value={value}
        placeholder="Search for a video topic..."
        placeholderTextColor="white"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <View>
          <Image source={icons.Search} className=" h-5 w-5 max-w-10" resizeMode="contain" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
