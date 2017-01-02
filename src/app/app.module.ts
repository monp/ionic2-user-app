import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { UserApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UserService } from "../service/UserService";
import { UserPage } from "../pages/edit/user";
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    UserApp,
    HomePage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(UserApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    UserApp,
    HomePage,
    UserPage
  ],
  providers: [
    Storage, // Déclaration du service de stockage de donnée
    UserService, // Déclaration du service de gestion des utilisateurs
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}
