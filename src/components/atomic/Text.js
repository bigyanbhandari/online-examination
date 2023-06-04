import { TextWrapper } from './Styles';

 export const Text = ({
  children,
  type = 'text',
  size = 'md',
  weight = 'regular',
  className,
}) => {
  const mapSizeToClass = {
    text: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    display: {
      xs: 'display-text-xs',
      sm: 'display-text-sm',
      md: 'display-text-md',
      lg: 'display-text-lg',
      xl: 'display-text-xl',
      '2xl': 'display-text-2xl',
    },
  };

  const mapWeightToClass = {
    regular: 'font-regular',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <TextWrapper
      className={`${mapSizeToClass[type][size]} ${mapWeightToClass[weight]} ${className}`}
    >
      {children}
    </TextWrapper>
  );
};


