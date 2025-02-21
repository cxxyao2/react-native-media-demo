import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '@/constants';
import Ionicons from '@expo/vector-icons/Ionicons';

type TabIconProps = {
  icon: string;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon = 'home', color, name, focused }: TabIconProps) => {
  return (
    <View className="mt-2 items-center justify-center space-y-2">
      <Ionicons
        name={focused ? (`${icon}-sharp` as any) : `${icon}-outline`}
        size={24}
        color={color}
      />

      <Text
        className={`${focused ? 'font-psemiBold ' : 'font-pregular'} text-xs`}
        style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF5722',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 2,
            borderTopColor: '#9E9E9E',
            height: 84,
          },
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={'home'} color={color} name="Home" focused={focused} />
              // <Ionicons name={focused ? 'home-sharp' : 'home-outline'} size={24} color={color} />
            ),
          }}
        />
        ,
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={'create'} color={color} name="Create" focused={focused} />
            ),
          }}
        />
        ,
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={'bookmark'} color={color} name="Bookmark" focused={focused} />
            ),
          }}
        />
        ,
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={'settings'} color={color} name="Profile" focused={focused} />
            ),
          }}
        />
        ,
      </Tabs>
    </>
  );
};

export default TabsLayout;
