import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../service/UserService";
import { UserPage } from "../edit/user";
import { User } from "../../domain/User";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userPage = UserPage; // Référence de la page utilisée par [navPush] dans le template home.html
  public users: Array<User>; // Référence utilisée par le template 'home.html'

  constructor(public userService: UserService, public navCtrl: NavController) {
    // Chargement de la liste des utilisateurs stockées en base de donnée
    userService.findAll().then(data => {
      this.users = data
    })
  }
}
