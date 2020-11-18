import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveBillsPage } from './save-bills.page';

describe('SaveBillsPage', () => {
  let component: SaveBillsPage;
  let fixture: ComponentFixture<SaveBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveBillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
