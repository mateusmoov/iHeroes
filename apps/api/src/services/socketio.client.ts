import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';
import { OccurrencesService } from 'src/occurrences/occurrences.service';

@Injectable()
export class SocketIoClient implements OnModuleInit {
  private socket: Socket;

  constructor(private readonly occurrenceService: OccurrencesService) {}

  onModuleInit() {
    this.connectToSocketIO();
  }

  private connectToSocketIO() {
    this.socket = io('https://zrp-challenges-dev-production.up.railway.app/');

    this.socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    this.socket.on('occurrence', async (data: any) => {
      await this.occurrenceService.create(data);
    });
  }

  disconnect() {
    this.socket.disconnect();
  }
}
