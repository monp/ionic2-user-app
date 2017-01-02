import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../service/UserService";
import { User } from "../../domain/User";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  public user: User;
  public userForm: FormGroup;

  constructor(private userService: UserService, public navParams: NavParams, public navCtrl: NavController,
              public formBuilder: FormBuilder) {
    this.user = navParams.get('user'); // Récupération de l'utilisateur séléctionné
    // Création du formulaire
    this.userForm = formBuilder.group({
      lastName: ['', [ Validators.required ]],
      firstName: ['', [ Validators.required ]],
      email: ['', [ Validators.required, Validators.minLength(5) ]],
      phone: ['', [ ]]
    });
    // Binding du formulaire
    this.userForm.controls['lastName'].setValue(this.user.name.last);
    this.userForm.controls['firstName'].setValue(this.user.name.first);
    this.userForm.controls['email'].setValue(this.user.email);
    this.userForm.controls['phone'].setValue(this.user.phone);
  }

  save() {
    // Récupération des valeurs du formulaire
    let formUser = this.userForm.value;
    this.user.name.last = formUser.lastName;
    this.user.name.first = formUser.firstName;
    this.user.email = formUser.email;
    this.user.phone = formUser.phone;

    // Mise à jour de la base de donnée
    this.userService.update(this.user)

    // Navigation vers la page précédente
    this.navCtrl.pop();
  }
}
