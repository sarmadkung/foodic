import React from 'react';
import { View, TextInput, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type TextInputVariants = 'default' | 'outlined' | 'solid';

export type TextInputWithIconsProps = TextInputProps &{
  variant?: TextInputVariants;
  leftIcon?: string;
  rightIcon?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
}

const variants: Record<TextInputVariants, { containerStyle: ViewStyle; inputStyle: TextStyle }> = {
  default: {
    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      borderColor: 'gray',
    },
    inputStyle: {
      flex: 1,
      marginLeft: 10,
    },
  },
  outlined: {
    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      borderColor: 'black',
    },
    inputStyle: {
      flex: 1,
      marginLeft: 10,
    },
  },
  solid: {
    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 8,
      padding: 10,
      backgroundColor: 'lightgray',
    },
    inputStyle: {
      flex: 1,
      marginLeft: 10,
    },
  },
};

export const TextInputIcon: React.FC<TextInputWithIconsProps> = ({
  variant = 'default',
  leftIcon,
  rightIcon,
  style,
  inputStyle,
  ...rest
}) => {
  const containerStyles = [variants[variant].containerStyle, style];
  const inputStyles = [variants[variant].inputStyle, inputStyle];
  return (
    <View style={containerStyles}>
      {/* {leftIcon && <Ionicons name="md-checkmark-circle" size={20}  />} */}
      <TextInput style={inputStyles} {...rest} />
      {/* {rightIcon && <Ionicons name="md-checkmark-circle" size={20} />} */}
    </View>
  );
};