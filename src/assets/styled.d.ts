import {RefAttributes} from 'react';
import { ImageProps, TextProps, View, ViewProps, Image } from 'react-native';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string;
    colors: {
      priceD: Interpolation<
        ThemedStyledProps<ImageProps & RefAttributes<Image>, DefaultTheme>
      >;
      separator: Interpolation<
        ThemedStyledProps<ViewProps & RefAttributes<View>, DefaultTheme>
      >;
      priceUp: Interpolation<
        ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>
      >;
      symb: Interpolation<
        ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>
      >;
      main: string;
      title: string;
      name: string;
    };
  }
}
