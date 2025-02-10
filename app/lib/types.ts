export interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

export interface NavigateToProps {
  type?: string;
  text?: string;
  link?: string;
  ariaLabel?: string;
  target?: string;
}

export interface CardProps {
  title?: string;
  text?: string;
  image?: ImageProps;
  className?: string;
  navigateTo?: NavigateToProps;
}

export interface SocialIconsProps {
  label?: string;
  image?: ImageProps;
  navigateTo?: NavigateToProps;
}

export interface TimelineProps {
  id?: number;
  type?: string;
  title?: string;
  subtitle?: string;
  date?: string;
  image?: ImageProps;
}
