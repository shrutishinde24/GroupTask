import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompoComponent } from './show-compo.component';

describe('ShowCompoComponent', () => {
  let component: ShowCompoComponent;
  let fixture: ComponentFixture<ShowCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
