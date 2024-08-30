const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.set('port', 4000)
app.listen(app.get('port'))
console.log(`escuchando en puerto ${app.get('port')}`)

app.use(cors({
    origin:['http://127.0.0.1:5500', 'http://127.0.0.1:5501']
}))
app.use(morgan('dev'))


app.get('/obtenermail', async (req,res)=>{
    const transporter = nodemailer.createTransport(
        {
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user:'marlin71@ethereal.email',
                pass: 'qpeF4jC68f82b9eXhZ',
            },
        }
    )
    
    async function main() {
        //Pruebo numeros aleatorios para corroborar la interactividad del mensaje
        const numeroAleatorio= Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"marlin71@ethereal.email" <marlin71@ethereal.email>', // sender address
          to: "georgemibu@gmail.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: `el numero ganador es ${numeroAleatorio}`, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);
})




  const getMail = async ()=> await main;

  module.exports = {
    getMail
  }