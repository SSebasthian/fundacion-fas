<h1 align="center"> # FUNDACION FAS </h1>

## Necesario para Angular
`npm install -g @angular/cli@17`<br>
`ng add @angular/material@17`<br>


## Necesario Firebase
<b>Se Crea Proyecto en Firebase con Authentication y Firestore Database</b><br>
`npm install firebase`<br>
`ng add @angular/fire`<br>
`npm install -g firebase-tools`<br>

(seleccionamos Authentication / firestore / Realtime Database )<br>
(Seguimos los pasos para autenticarnos con la cuenta de Firebase)<br>
(Seleccionamos el correo con el que se registró Firebase)<br>
(Seleccionamos el proyecto creado con Firebase (sistemas-inventario))<br>


## Firebase DEPLOY
`firebase init` (Hosting - Configure con GitHub)<br>
dist/fundacion-fas/browser  (Ruta para Dejar el DEPLOY del Proyecto)<br>


`ng build` <br>
`firebase deploy`<br>

https://fundacion-fas.web.app


## Creación de Proyecto Angular

`ng new fundacion-fas` (Se crea con CSS)<br>
`ng generate component compartido/menu` (Menu)<br>
`ng generate component compartido/footer` (Footer)<br>
`ng generate component pagina/inicio` (Pagina Inicio)<br>
`ng generate component pagina/quienes-somos` (Pagina Quiénes Somos)<br>
`ng generate component pagina/autenticacion/acceso` (Acceso)<br>
`ng generate service arquitectura/servicio/autenticador` (Servicio para Autenticacion - Acceso)
`ng generate guard arquitectura/guardia/enrutamiento` (*)CanActivate (Guardian para Controlar Roles de Acceso)<br>
`ng generate component pagina/autenticacion/perfil` (Perfil)<br>
`ng generate component pagina/programas` (Pagina Programas)<br>
`ng generate component pagina/vinculacion` (Pagina Vinculación)<br>
`Se crea interface contacto manualmente` (Interface Contacto)
`ng generate service arquitectura/servicio/contacto` (Servicio Contacto)


