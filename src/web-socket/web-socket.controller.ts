import { Controller, Get } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway'; // Importe o controlador WebSocket

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsGateway: NotificationsGateway) {} // Injete o controlador WebSocket

  @Get('send')
  sendNotification() {
    const notification = { message: 'Nova notificação' }; // Defina a notificação que deseja enviar
    this.notificationsGateway.handleNotification(notification); // Chame o método handleNotification do controlador WebSocket
    return 'Notificação enviada';
  }
}
