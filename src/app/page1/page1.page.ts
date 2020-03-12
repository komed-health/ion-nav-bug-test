import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IonNav } from "@ionic/angular";
import { NavService } from "../home/nav.service";
import { Page1Subpage1Component } from "../page1-subpage1/page1-subpage1.component";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"]
})
export class Page1Page implements AfterViewInit {
  @ViewChild("nav", { static: false }) private nav: IonNav;

  subpage = Page1Subpage1Component;

  constructor(public navService: NavService) {}

  async ngAfterViewInit() {
    this.navService.nav = this.nav;
    await this.navService.nav.canGoBack();
  }
}
