import { Provider } from '@nestjs/common';
import { MonsterRepository } from './monster.repository';

export const MonsterProvider: Provider = {
  provide: 'MonsterRepo',
  useClass: MonsterRepository,
};
