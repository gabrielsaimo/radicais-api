import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';
import { EmailService } from './services/Email/EmailService';
import { WebSocketModule } from './web-socket/web-socket.module';

@Module({
  imports: [EmailModule, WebSocketModule, WebSocketModule],
  controllers: [AppController, EmailController],
  providers: [AppService, EmailService],
})
export class AppModule {}
