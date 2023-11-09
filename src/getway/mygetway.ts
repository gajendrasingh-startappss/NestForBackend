import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class mygetway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('Socket Id: ', socket.id);
      console.log('connected');
    });
  }

  @SubscribeMessage('eventsIn')
  onEventsIn(@MessageBody() body: any) {
    console.log(body);
    this.server.emit('onMessage', {
      msg: 'New Message',
      content: body,
    });
  }

  @SubscribeMessage('eventsOut')
  onEventsOut(@MessageBody() body: any) {
    console.log(body);
    this.server.emit('onOut', {
      msg: 'New Message',
      content: body,
    });
  }
}
