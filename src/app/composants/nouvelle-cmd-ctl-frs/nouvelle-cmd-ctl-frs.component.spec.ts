import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdCtlFrsComponent } from './nouvelle-cmd-ctl-frs.component';

describe('NouvelleCmdCtlFrsComponent', () => {
  let component: NouvelleCmdCtlFrsComponent;
  let fixture: ComponentFixture<NouvelleCmdCtlFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdCtlFrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCmdCtlFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
