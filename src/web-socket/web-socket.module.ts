import { Module } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
@WebSocketGateway()
export class NotificationsGateway {
  @WebSocketServer()
  server: Server;

  handleNotification(notification: any) {
    this.server.emit('notification', notification);
  }
}
@Module({ providers: [NotificationsGateway] })
export class WebSocketModule {}
