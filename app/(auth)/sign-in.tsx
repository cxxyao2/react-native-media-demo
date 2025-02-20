import { ScrollView, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import config from '../../config';

import { images, icons } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import CustomAlert from '@/components/CustomAlert ';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalContent, setModalContent] = useState<string | undefined>(undefined);

  const submit = async () => {
    if (!form.email || !form.password) {
      setModalContent('Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post(`${config.API_BASE_URL}/Auth/login`, {
        email: form.email,
        password: form.password,
      });
      const token = response.data.accessToken;
      const user = response.data.user;
      await AsyncStorage.setItem('accessToken', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));
      router.push('/home');
    } catch (error: any) {
      setModalContent(error?.message ?? 'Login failed. ');
      console.error('Error when sign in:', error);
    }
  };

  return (
    <SafeAreaView className=" h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View
          className=" my-6 min-h-[60vh] w-full  items-center
           justify-center px-4">
          <View
            className="mt-4 max-h-[10vh]
           items-start  justify-center">
            <Image
              source={images.logoBlack}
              className="h-full w-[50px] max-w-[100px]"
              resizeMode="contain"
            />
          </View>

          <Text className="text-semibold mt-4  font-psemiBold text-2xl text-white">
            Log in to Aurora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-8"
            isLoading={isSubmitting}
          />
        </View>

        <View className="flex-row justify-center gap-2 pt-5">
          <Text className="font-regular text-lg text-gray-100">Don't have account?</Text>
          <Link href="/sign-up" className="font-psemiBold text-lg text-secondary">
            Sign Up
          </Link>
        </View>
        <CustomAlert
          content={modalContent ?? ''}
          visible={!!modalContent}
          onClose={() => setModalContent(undefined)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
