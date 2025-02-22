import { View, Text, Image } from 'react-native';
import React from 'react';
import { icons } from '@/constants';
import CustomButton from './CustomButton';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  subtitle: string;
};

const EmptyState = ({ title, subtitle }: Props) => {
  return (
    <View className="items-center justify-center  px-4">
      <Ionicons name={'search'} size={48} color={'#FF5722'} />
      <Text className="mt-2 text-center text-2xl font-semibold text-white">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create"
        handlePress={() => router.push('/create')}
        containerStyles="w-full my-2"
      />
    </View>
  );
};

export default EmptyState;
