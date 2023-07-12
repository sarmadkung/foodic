import React, { FC } from 'react';
import { Image as PlainImage, ImageProps } from 'react-native';

const variants : Record< ImageVariants, any> ={
    small: {
      width: 100,
      height: 100,
      resizeMode: 'cover',
    },
    large: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
  };

export const Image : FC<CustomImageProps> = ({ variant="small", source, style, ...props }) => {
    return <PlainImage source={source} style = {[[variants[variant],style]]} {...props} />;
};

type ImageVariants = 'small' | 'large'

  
export type CustomImageProps = ImageProps &{
    variant?: ImageVariants;
  }