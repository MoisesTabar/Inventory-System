import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteBillsPage } from './delete-bills.page';

describe('DeleteBillsPage', () => {
  let component: DeleteBillsPage;
  let fixture: ComponentFixture<DeleteBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
