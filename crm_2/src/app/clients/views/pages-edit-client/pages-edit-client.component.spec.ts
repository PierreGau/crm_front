import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesEditClientComponent } from './pages-edit-client.component';

describe('PagesEditClientComponent', () => {
  let component: PagesEditClientComponent;
  let fixture: ComponentFixture<PagesEditClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesEditClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
