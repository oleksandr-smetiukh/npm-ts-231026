export enum TextVariant {
  large = "large",
  regular = "regular",
}

export interface TextProps {
  tid?: string;
  content?: string;
  variant: TextVariant;
}
