import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SideBarComponent } from './sidebar.component';


describe('sideNav', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarComponent]
    });
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
