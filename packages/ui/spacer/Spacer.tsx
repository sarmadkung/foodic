import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';

type SpacerVariants = 'small' | 'medium' | 'large';

interface SpacerProps {
  variant?: SpacerVariants;
  style?: ViewStyle;
}

export const Spacer: React.FC<SpacerProps> = ({ variant = 'medium', style }) => {
  const getSpacerSize = (): ViewStyle => {
    switch (variant) {
      case 'small':
        return styles.small;
      case 'medium':
        return styles.medium;
      case 'large':
        return styles.large;
      default:
        return styles.medium;
    }
  };
  const spacerStyles = [getSpacerSize(), style];

  return <View style={spacerStyles} />;
};

 const styles = StyleSheet.create({
  small: {
    height: 10,
  },
  medium: {
    height: 20,
  },
  large: {
    height: 30,
  },
});