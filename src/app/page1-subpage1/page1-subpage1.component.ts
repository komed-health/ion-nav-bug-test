import { Component, OnInit } from "@angular/core";
import { Page1Subpage2Component } from "src/app/page1-subpage2/page1-subpage2.component";
import { NavService } from "../home/nav.service";

@Component({
  selector: "app-page1-subpage1",
  templateUrl: "./page1-subpage1.component.html",
  styleUrls: ["./page1-subpage1.component.scss"]
})
export class Page1Subpage1Component implements OnInit {
  constructor(public navService: NavService) {}

  ngOnInit() {}

  pushSubpage() {
    this.navService.nav.push(Page1Subpage2Component);
  }
}
