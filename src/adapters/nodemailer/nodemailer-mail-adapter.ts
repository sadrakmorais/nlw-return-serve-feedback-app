import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4e8f49d162e530",
    pass: "c882af0615e24e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@gmail.com>",
      to: "Sadrak Morais <sadraksdk1@gmail.com>",
      subject,
      html: body,
    });
  }
}
