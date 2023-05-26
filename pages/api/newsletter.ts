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

    const client = require('@sendgrid/client');
    client.setApiKey(process.env.SENDGRID_API_KEY_ALL_ACCESS)

    // parse the body of the request
    const body = JSON.parse(req.body);

    // Add email to the list
    // source: https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact
    const data = {
        "list_ids": ["fd83a4ba-79a1-4c04-b925-3d99b0b04bcb"],
        "contacts": [
            {
                "email": body.email,
            }
        ]
    };
    const request = {
        url: `/v3/marketing/contacts`,
        method: 'PUT',
        body: data
    }
    client.request(request)
        .then(([response, body]: any) => {
            console.log(response.statusCode);
            console.log(response.body);
        })
        .catch((error: any) => {
            console.error(error);
            res.status(500).json({ msg: "Can't add email to list" })
        });


    // Create a new email
    // source: https://docs.sendgrid.com/api-reference/mail-send/mail-send
    const msg = {
        to: body.email, // Change to your recipient
        from: {
            email: "jobjazz@web.de",
            name: "Duc from JobJazz"
        }, // Change to your verified sender
        subject: "Welcome to Jobjazz community!",
        templateId: "d-36447a40af744339ae5814aa91f7c90c",
        asm: {
            groupId: 18862,
        }
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
