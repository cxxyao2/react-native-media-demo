import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-secondary 
    min-h-[62px] items-center 
    justify-center rounded-xl
      ${containerStyles} 
      ${isLoading ? 'opacity-50' : ''}
    `}
    disabled={isLoading}
    >
      <Text className={`text-primary font-psemiBold
        text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
