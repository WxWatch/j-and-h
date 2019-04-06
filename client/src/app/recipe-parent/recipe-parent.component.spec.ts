import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeParentComponent } from './recipe-parent.component';

describe('RecipeParentComponent', () => {
  let component: RecipeParentComponent;
  let fixture: ComponentFixture<RecipeParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
