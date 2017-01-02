import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Http } from "@angular/http";
import {User} from "../domain/User";

@Injectable()
export class UserService {

  constructor(private http: Http, private storage: Storage) {
    // Chargement des données à partir d'un service web si la base de donnée est vide
    if (this.storage.get("users") === null) {
      this.http.get("https://randomuser.me/api/?results=100&nat=fr").subscribe(response => {
        // Les données sont stockées dans la collection 'users' (stockage de type 'clé -> valeur')
        this.storage.set('users', response.json().results)
      })
    }
  }

  findAll(): Promise<Array<User>> {
    // Rapratiement des données stockées dans la collection 'users'
    return this.storage.get('users').then((data) => data);
  }

  update(user: User) {
    // Recherche et mise à jour de l'enregistrement en base de donnée
    this.storage.get('users').then((users) => {
      // Discrimination sur l'identifiant unique 'username'
      let found = users.findIndex(u => u.login.username === user.login.username);
      users[found] = user;
      // Mise à jour de la collection 'users'
      this.storage.set('users', users);
    })
  }
}
