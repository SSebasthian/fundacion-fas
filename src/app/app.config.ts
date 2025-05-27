import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"fundacion-fas","appId":"1:46226900332:web:7cfd102a218a3cf39cdf49","storageBucket":"fundacion-fas.firebasestorage.app","apiKey":"AIzaSyBTSD2PWJ48pB5CJfOiMP1xrsSclgl0APs","authDomain":"fundacion-fas.firebaseapp.com","messagingSenderId":"46226900332"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideFirebaseApp(() => initializeApp({"projectId":"fundacion-fas","appId":"1:46226900332:web:7cfd102a218a3cf39cdf49","storageBucket":"fundacion-fas.firebasestorage.app","apiKey":"AIzaSyBTSD2PWJ48pB5CJfOiMP1xrsSclgl0APs","authDomain":"fundacion-fas.firebaseapp.com","messagingSenderId":"46226900332"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideAnimationsAsync()]
};
