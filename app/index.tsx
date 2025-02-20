import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { images } from '@/constants';
import React from 'react';
import ArrowSVG from '@/components/ArrowSVG';
import { useGlobalContext } from 'context/GlobalProvider';

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View
          className="min-h-[85vh] 
          w-full items-center
          justify-center px-4">
          <View className="max-h-[10vh]  items-start justify-center">
            <Image
              source={images.logoBlack}
              className="h-[35px]  w-[50px] max-w-[100px]"
              resizeMode="contain"
            />
          </View>

          <View
            className=" 
          mt-8 max-h-[30vh] 
          w-full items-center justify-center px-4">
            <Text className="text-center text-3xl font-bold text-white">
              Discover Endless Possibilities with
              <Text className="text-secondary-200"> Aurora</Text>
            </Text>

            {/* hide svg */}
            <View className="relative">
              <View className=" absolute -bottom-8  right-8 h-[100px] w-[100px]  max-w-[200px]">
                <ArrowSVG
                  fill={'black'}
                  stroke={'#FFEB3B'}
                  height={600}
                  width={600}
                  strokeWidth={8}
                />
              </View>
            </View>
          </View>

          <Text className="mt-10 text-center font-pregular text-sm text-gray-100">
            Where creativity meets innovation: embark on a journey of limitless exploration with
            Aurora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-8"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
