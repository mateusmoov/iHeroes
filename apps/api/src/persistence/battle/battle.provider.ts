import { Provider } from '@nestjs/common';
import { BattleRepository } from './battle.repository';

export const BattleProvider: Provider = {
  provide: 'BattleRepo',
  useClass: BattleRepository,
};
