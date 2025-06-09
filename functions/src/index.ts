import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import cors from 'cors';
import { Request, Response } from 'express';

const corsHandler = cors({ origin: true });

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ssebasthian.perez@gmail.com',
    pass: 'axxcukfllaxgbten',
  },
});

export const enviarCorreo = functions.https.onRequest((req: Request, res: Response) => {
  corsHandler(req, res, () => {
    const datos = req.body;

    const mailOptions = {
      from: 'ssebasthian.perez@gmail.com',
      to: 'destinatario@gmail.com', 
      subject: 'Nuevo mensaje desde formulario',
      html: `
        <p><strong>Nombre:</strong> ${datos.nombre} ${datos.apellido}</p>
        <p><strong>Correo:</strong> ${datos.correo}</p>
        <p><strong>Teléfono:</strong> ${datos.telefono}</p>
        <p><strong>Universidad:</strong> ${datos.universidad}</p>
        <p><strong>Carrera:</strong> ${datos.carrera}</p>
        <p><strong>Mensaje:</strong> ${datos.mensaje}</p>
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
