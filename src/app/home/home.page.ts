import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  clickSub: any;
  constructor(
    private localNotifications: LocalNotifications,
    private readonly platform: Platform,
    private route: Router
  ) {}

  async ngOnInit() {
    await this.platform.ready();
    this.localNotifications.on("click").subscribe(data => {
      console.log("XXX asdf");
      this.route.navigate(["/page1"]);
    });
  }

  simpleNotif() {
    this.localNotifications.schedule({
      text: "Single Local Notification"
    });

    console.log("asdf");
  }
}
