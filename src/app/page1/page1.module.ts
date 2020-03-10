import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Page1Subpage1Component } from "../page1-subpage1/page1-subpage1.component";
import { Page1PageRoutingModule } from "./page1-routing.module";
import { Page1Page } from "./page1.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Page1PageRoutingModule],
  declarations: [Page1Page, Page1Subpage1Component],
  entryComponents: [Page1Subpage1Component]
})
export class Page1PageModule {}
