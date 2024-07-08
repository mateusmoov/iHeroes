import { Provider } from '@nestjs/common';
import { HeroRepository } from './hero.repository';

export const HeroProvider: Provider = {
  provide: 'HeroRepo',
  useClass: HeroRepository,
};
