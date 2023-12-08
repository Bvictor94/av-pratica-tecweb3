import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCatsComponent } from './lista-cats.component';

describe('ListaCatsComponent', () => {
  let component: ListaCatsComponent;
  let fixture: ComponentFixture<ListaCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
