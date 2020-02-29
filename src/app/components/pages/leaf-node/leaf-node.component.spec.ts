import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafNodeComponent } from './leaf-node.component';

describe('LeafNodeComponent', () => {
  let component: LeafNodeComponent;
  let fixture: ComponentFixture<LeafNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
