import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

type FormFieldProps = {
  title: string;
  value: any;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  [key: string]: any;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles} w-full `}>
      <Text className=" font-pmedium text-base text-gray-100">{title}</Text>

      <View
        className="border-black-200 h-16 w-full
       flex-row items-center rounded-2xl border-2 
        bg-primary-600 px-4  focus:border-secondary">
        <TextInput
          className="flex-1 font-psemiBold text-base 
          text-white"
          value={value}
          {...props}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="h-[10px]  w-[10px] max-w-[20px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
