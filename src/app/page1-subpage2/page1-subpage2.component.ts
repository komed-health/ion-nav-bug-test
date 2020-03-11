import { Component, OnInit } from "@angular/core";
import { NavService } from "../home/nav.service";

@Component({
  selector: "app-page1-subpage2",
  templateUrl: "./page1-subpage2.component.html",
  styleUrls: ["./page1-subpage2.component.scss"]
})
export class Page1Subpage2Component implements OnInit {
  constructor(public navService: NavService) {}

  ngOnInit() {}

  popSubpage() {
    this.navService.nav.pop();
  }
}
