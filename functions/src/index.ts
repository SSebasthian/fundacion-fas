import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import cors from 'cors';
import { Request, Response } from 'express';

const corsHandler = cors({ origin: true });

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'fundacionfasvinculacion@gmail.com',
    pass: 'zomhiznqpcetpyul',
  },
});

export const enviarCorreo = functions.https.onRequest((req: Request, res: Response) => {
  corsHandler(req, res, () => {
    const datos = req.body;

    const mailOptions = {
      from: 'fundacionfasvinculacion@gmail.com',
      to: `fundacionaccionessostenibles@gmail.com, facciones2020@gmail.com, ${datos.correo}`,
      subject: `📩 Nuevo mensaje de ${datos.nombre} ${datos.apellido} - Formulario Web`,
      html: 
      `
        <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; padding: 20px;">
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/fundacion-fas.firebasestorage.app/o/Empresa%2Flogo-letranegra.png?alt=media&token=c7580709-287f-421d-ad82-6460eb6bd78e"
                        alt="Logo Fundación FAS"
                        style="max-width: 110px; height: auto; margin-bottom: 10px;" />
                    <h1 style="color: #2c3e50; margin-top:-10px">Nuevo mensaje recibido <br> Pagina Web</h1>
                  </td>
                </tr>
                <tr>
                  <td style="font-size: 16px; color: #333">
                    <p><strong>Nombre:</strong> ${datos.nombre} ${datos.apellido}</p>
                    <p><strong>Correo:</strong> ${datos.correo}</p>
                    <p><strong>Teléfono:</strong> ${datos.telefono}</p>
                    <p><strong>Universidad:</strong> ${datos.universidad}</p>
                    <p><strong>Carrera:</strong> ${datos.carrera}</p>
                    <p><strong>Mensaje:</strong></p>
                    <p style="background-color: #f8f9fa; padding: 10px; border-left: 4px solid #3498db;">${datos.mensaje}</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <p style="font-size: 12px; color: #888;">Fundación FAS - Todos los derechos reservados</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar correo:', error);
        return res.status(500).send(error.toString());
      }
      console.log('✅ Correo enviado con info:', info);
      return res.status(200).json({ mensaje: 'Correo enviado correctamente' });    
    });
  });
});
