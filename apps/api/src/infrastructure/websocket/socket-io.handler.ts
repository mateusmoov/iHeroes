import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Inject,
} from '@nestjs/common';
import { Socket, io } from 'socket.io-client';
import { Occurrence } from 'src/domain/occurrence/occurrence';
import { IOccurrenceRepository } from 'src/domain/occurrence/ioccurrence.repository';
const OccurrenceRepo = () => Inject('OccurrenceRepo');

@Injectable()
export class SocketIoClient implements OnModuleInit, OnModuleDestroy {
  private socket: Socket;

  constructor(
    @OccurrenceRepo()
    private readonly occurrenceRepository: IOccurrenceRepository,
  ) {}

  onModuleInit() {
    this.connectToSocketIO();
  }

  private connectToSocketIO() {
    this.socket = io('https://zrp-challenges-dev-production.up.railway.app/');

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    this.socket.on('occurrence', async (data: Occurrence) => {
      await this.occurrenceRepository.CreateOccurrence(data);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }

  onModuleDestroy() {
    this.disconnect();
  }
}
