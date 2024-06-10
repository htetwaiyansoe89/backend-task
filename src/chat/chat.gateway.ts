import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(@Inject('CHAT_SERVICE') private client: ClientProxy) {}

  @SubscribeMessage('sendMessage')
  async handleSendMessage(client, payload: { sender: string; text: string }) {
    await this.client.emit('message', payload).toPromise();
    this.server.emit('newMessage', payload);
  }
}
