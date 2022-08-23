const mail = require("@sendgrid/mail")

const SENDGRID_API_KEY =
  "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"

mail.setApiKey(SENDGRID_API_KEY)

export default (req, res) => {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}
  `

  const data = {
    to: "joren.bagadiong14@gmail.com",
    from: "joren.bagadiong14@gmail.com",
    subject: "New web form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  }

  mail.send(data)

  res.status(200).json({ status: "OK" })
}
