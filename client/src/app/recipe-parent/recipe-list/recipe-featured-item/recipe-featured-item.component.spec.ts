import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFeaturedItemComponent } from './recipe-featured-item.component';

describe('RecipeFeaturedItemComponent', () => {
  let component: RecipeFeaturedItemComponent;
  let fixture: ComponentFixture<RecipeFeaturedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFeaturedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFeaturedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
