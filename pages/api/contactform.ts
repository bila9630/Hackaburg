// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const body = JSON.parse(req.body);

  const emailBodyMessage = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const msg = {
    to: "jobjazz@web.de", // Change to your recipient
    from: "jobjazz@web.de", // Change to your verified sender
    subject: body.subject,
    text: emailBodyMessage,
    html: emailBodyMessage.replace(/\r\n/g, "<br>"),
  }
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ msg: "Email is sent!" })
    })
    .catch((error: any) => {
      console.error(error)
      res.status(500).json({ msg: "Email couldnt be sent!" })
    })
}
