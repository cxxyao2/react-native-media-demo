import { View, Text, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '@/constants';

type TabIconProps = {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
};

const TabIcon = ({icon, color, name, focused}:TabIconProps) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className = "w-6 h-6" 
            />
            <Text className={`${focused?'font-psemiBold ':
              'font-pregular'} text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen  
        name="home" 
        options={{ 
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
                <TabIcon
                icon={icons.homeSharp}
                color={color}
                name="Home"
                focused={focused}
                />
            ),
          }}  
        />,
   <Tabs.Screen  
        name="create" 
        options={{ 
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
                <TabIcon
                icon={icons.plus}
                color={color}
                name="Home"
                focused={focused}
                />
            ),
          }}  
        />,
        <Tabs.Screen  
        name="bookmark" 
        options={{ 
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({color, focused})=>(
                <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
                />
            ),
          }}  
        />,
      </Tabs>
    </>
  );
};

export default TabsLayout;
