import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesListClientsComponent } from './pages-list-clients.component';

describe('PagesListClientsComponent', () => {
  let component: PagesListClientsComponent;
  let fixture: ComponentFixture<PagesListClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesListClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
