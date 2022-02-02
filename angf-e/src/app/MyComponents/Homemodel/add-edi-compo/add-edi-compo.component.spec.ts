import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdiCompoComponent } from './add-edi-compo.component';

describe('AddEdiCompoComponent', () => {
  let component: AddEdiCompoComponent;
  let fixture: ComponentFixture<AddEdiCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEdiCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdiCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
