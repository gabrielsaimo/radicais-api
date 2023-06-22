/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async enviarEmail(
    destinatario: string,
    assunto: string,
    corpo: string,
  ): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'Outlook.com',
      auth: {
        user: 'saimo.adm@outlook.com',
        pass: 'Gs@221097',
      },
    });

    const mailOptions = {
      from: 'saimo.adm@outlook.com',
      to: destinatario,
      subject: assunto,
      html: corpo,
    };

    await transporter.sendMail(mailOptions);
  }
}
