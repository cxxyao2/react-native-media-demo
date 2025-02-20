import { ScrollView, View, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { images, icons } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import axios from 'axios';
import config from 'config';
import CustomAlert from '@/components/CustomAlert ';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalContent, setModalContent] = useState<string | undefined>(undefined);

  const submit = async () => {
    if (!form.email || !form.username || !form.password) {
      setModalContent('Please fill in all the fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post(`${config.API_BASE_URL}/Auth/register`, {
        username: form.username,
        password: form.password,
        role: 0,
        email: form.email,
      });
      const token = response.data.accessToken;
      router.replace('/home');
    } catch (error: any) {
      setModalContent(error?.message ?? 'Register failed. ');
      console.error('Error when sign-up:', error);
    } finally {
      setIsSubmitting(false);
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
            Sign Up to Aurora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-4"
          />

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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-8"
            isLoading={isSubmitting}
          />
        </View>

        <View className="flex-row items-center justify-center gap-2">
          <Text className="font-regular text-lg text-gray-100">Have an account already?</Text>
          <Link href="/sign-in" className="font-psemiBold text-lg text-secondary">
            Sign In
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

export default SignUp;
