import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from 'components/CustomButton';
import { images } from '@/constants';
import React from 'react';
import ArrowSVG from '@/components/ArrowSVG';

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View
          className="min-h-[85vh] 
          w-full items-center
          justify-center px-4">
          <Image
            source={images.logoSmall}
            className="h-[300px]  w-full max-w-[380px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="h-[300px]  w-full max-w-[380px]"
            resizeMode="contain"
          />

          <View
            className="max-h-[30vh] 
          w-full items-center
          justify-center px-4">
            <Text className="text-center text-3xl font-bold text-white">
              Discover Endless Possibilities with
              <Text className="text-secondary-200"> Aurora</Text>
            </Text>


            <ArrowSVG fill={'yellow'} stroke={'red'}/>

            {/* <Image
              source={images.path}
              className=" absolute  h-[100px] w-[100px]  max-w-[180px]"
              resizeMode="contain"
            /> */}
            {/* <Image
              source={images.logoSmall}
              className="absolute -bottom-2 
              -right-8 h-[15px] w-[136px]"
              resizeMode="contain"
            /> */}
          </View>

          <Text className="mt-7 text-center font-pregular text-sm text-gray-100">
            Where creativity meets innovation: embark on a journey of limitless exploration with
            Aurora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
