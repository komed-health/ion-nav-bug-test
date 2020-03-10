import { Component, OnInit } from "@angular/core";
import { Page1Subpage1Component } from "../page1-subpage1/page1-subpage1.component";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"]
})
export class Page1Page implements OnInit {
  subpage = Page1Subpage1Component;
  constructor() {}

  ngOnInit() {}
}
