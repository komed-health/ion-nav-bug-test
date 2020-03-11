import { Injectable } from "@angular/core";
import { IonNav } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class NavService {
  public nav: IonNav;

  constructor() {}
}
