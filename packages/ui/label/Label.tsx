import React from 'react';
import { Text, TextProps } from 'react-native';

type LabelVariants = 'default' | 'outlined' | 'highlighted';

interface LabelProps extends TextProps {
  variant?: LabelVariants;
}

const variants: Record<LabelVariants, any> = {
  default: {
    fontSize: 16,
    color: 'black',
  },
  outlined: {
    fontSize: 16,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 8,
  },
  highlighted: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
  },
};


export const Label: React.FC<LabelProps> = ({ style, variant = 'default', children, ...rest }) => {
  return <Text style={[variants[variant], style]} {...rest}>{children}</Text>;
};

