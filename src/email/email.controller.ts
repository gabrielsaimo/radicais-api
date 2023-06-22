/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from '../services/Email/EmailService';
@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post('enviar')
    async enviarEmail(@Body() body: { destinatario: string, assunto: string, corpo: string }): Promise<void> {
      const { destinatario, assunto, corpo } = body;
      await this.emailService.enviarEmail(destinatario, assunto, corpo);
    }
}
