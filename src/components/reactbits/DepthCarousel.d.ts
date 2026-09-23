import type { ReactElement, ReactNode } from 'react';

export interface DepthCarouselItem {
  image?: string;
  alt?: string;
  title?: string;
  url?: string;
  content?: ReactNode;
}

export interface DepthCarouselProps {
  items?: Array<string | DepthCarouselItem>;
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tint?: string;
  depth?: number;
  spread?: number;
  tilt?: number;
  tiltDirection?: 'left' | 'right';
  perspective?: number;
  visibleCards?: number;
  falloff?: number;
  blur?: number;
  duration?: number;
  ease?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  onChange?: (index: number, item: DepthCarouselItem) => void;
  className?: string;
}

declare const DepthCarousel: (props: DepthCarouselProps) => ReactElement;
export default DepthCarousel;
