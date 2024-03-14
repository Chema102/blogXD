import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFromComponent } from './blog-from.component';

describe('BlogFromComponent', () => {
  let component: BlogFromComponent;
  let fixture: ComponentFixture<BlogFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogFromComponent]
    });
    fixture = TestBed.createComponent(BlogFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
