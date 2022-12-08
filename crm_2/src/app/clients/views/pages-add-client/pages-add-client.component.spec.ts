import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesAddClientComponent } from './pages-add-client.component';

describe('PagesAddClientComponent', () => {
  let component: PagesAddClientComponent;
  let fixture: ComponentFixture<PagesAddClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesAddClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
