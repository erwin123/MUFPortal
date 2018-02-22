import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerappsComponent } from './drawerapps.component';

describe('DrawerappsComponent', () => {
  let component: DrawerappsComponent;
  let fixture: ComponentFixture<DrawerappsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerappsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerappsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
