import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Page1Subpage2Component } from './page1-subpage2.component';

describe('Page1Subpage2Component', () => {
  let component: Page1Subpage2Component;
  let fixture: ComponentFixture<Page1Subpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1Subpage2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Page1Subpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
