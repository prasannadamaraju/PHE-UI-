import {TestBed, ComponentFixture, async, ComponentFixtureAutoDetect} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminloginComponent } from './adminlogin.component';
import { Router} from '@angular/router';


describe('AdminloginComponent', () => {
  let component: AdminloginComponent;
  let fixture: ComponentFixture<AdminloginComponent>;
  let loginEl: DebugElement;
  let emailEl: DebugElement;
  let passwordEl: DebugElement;
  const router = { navigate: jasmine.createSpy('navigate')};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminloginComponent],
      imports: [
      RouterTestingModule.withRoutes([]),
  ],
  providers: [
    { provide: Router, useValue: router}]
}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginComponent);
    component = fixture.componentInstance;
    loginEl = fixture.debugElement.query(By.css('.login-button')).nativeElement;
    emailEl = fixture.debugElement.query(By.css('input[type=text]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  it('Checking the defaults values entered on the username fields is empty', () => {
    expect(emailEl.nativeElement.textContent).toBe('');
  });

  it('Checking the defaults values entered on the password fields is empty', () => {
    expect(passwordEl.nativeElement.textContent).toBe('');
  });

  it('Setting wrong values in username and password field and checking the credentials on click of login button', () => {
    // Arrange
    const username = {value : ''};
    const password = {value : ''};

    // Act
    fixture.componentInstance.login(username, password);
    fixture.detectChanges();

    // Assert
    expect(fixture.componentInstance.message).toBe('Please enter the username and password.');
    expect(fixture.componentInstance.isLogin).toBe('');
  });

  it('Setting right values in username and password field and checking the credentials on click of login button', () => {
    // Arrange
    const username = {value : 'admin@phe.com'};
    const password = {value : 'adminphe'};

    // Act
    fixture.componentInstance.login(username, password);
    fixture.detectChanges();

    // Assert
    expect(fixture.componentInstance.message).toBe(undefined);
    expect(fixture.componentInstance.isLogin).toBe('hide');
    expect(router.navigate).toHaveBeenCalledWith(['app-admin-homepage']);

  });
});
