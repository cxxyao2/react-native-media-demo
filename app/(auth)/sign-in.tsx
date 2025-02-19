import { ScrollView, View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView className=" h-full bg-primary">
      <ScrollView>
        <View
          className="my-6 min-h-[82vh] w-full
           justify-center px-4">
          <Image source={images.logo} resizeMode="contain" className="h-[35px] w-[115px]" />

          <Text
            className="text-semibold mt-10 
        font-psemiBold text-2xl text-white">
            Log in to Aurora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: string) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
        </View>
        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="flex-row justify-center gap-2 pt-5">
          <Text className="font-regular text-lg text-gray-100">Don't have account?</Text>
          <Link href="/sign-up" className="font-psemiBold text-lg text-secondary">
            Sign Up
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
