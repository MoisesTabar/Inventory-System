import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveArticlesPage } from './save-articles.page';

describe('SaveArticlesPage', () => {
  let component: SaveArticlesPage;
  let fixture: ComponentFixture<SaveArticlesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveArticlesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
