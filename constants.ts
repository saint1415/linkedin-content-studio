
import { LinkedInImageOption } from './types';

export const LINKEDIN_IMAGE_OPTIONS: LinkedInImageOption[] = [
  {
    label: 'Square Post (1:1)',
    value: '1:1',
    description: 'Ideal for feed posts, 1080x1080px',
  },
  {
    label: 'Portrait Post (9:16)',
    value: '9:16',
    description: 'Taller post format, 1080x1920px',
  },
  {
    label: 'Landscape / Link Image (16:9)',
    value: '16:9',
    description: 'Best for article links, 1200x628px',
  },
  {
    label: 'Profile Banner (16:9)',
    value: '16:9',
    description: '1584x396px (16:9 image may need cropping)',
  },
];
