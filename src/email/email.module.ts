import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from 'src/services/Email/EmailService';
@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
