import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUiComponent } from './web-ui.component';

describe('WebUiComponent', () => {
  let component: WebUiComponent;
  let fixture: ComponentFixture<WebUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });
*/
});
