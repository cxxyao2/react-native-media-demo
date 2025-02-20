import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

type SearchInputProps = {
  title: string;
  value: any;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  [key: string]: any;
};

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: SearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View
      className="border-black-200 h-16 w-full
       flex-row items-center space-x-4 rounded-2xl 
        border-2 bg-primary-600  px-4
        focus:border-secondary">
      <TextInput
        className="mt-0.5 flex-1 font-pregular text-base 
          text-white"
        value={value}
        {...props}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
      />

     <TouchableOpacity>
        <Image 
        source={icons.Search} 
        />
     </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
