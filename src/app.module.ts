import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';
import { EmailService } from './services/Email/EmailService';
import { WebSocketModule } from './web-socket/web-socket.module';
import { NotificationsController } from './web-socket/web-socket.controller';
import { NotificationsGateway } from './web-socket/notifications.gateway';

@Module({
  imports: [EmailModule, WebSocketModule],
  controllers: [AppController, EmailController, NotificationsController],
  providers: [AppService, EmailService, NotificationsGateway],
})
export class AppModule {}
