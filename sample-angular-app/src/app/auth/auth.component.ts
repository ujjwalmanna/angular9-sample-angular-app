import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceHolderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  isLoginMode = true;
  isLoading = false;
  error = null;

  private closeSub: Subscription;
  @ViewChild(PlaceHolderDirective, { static: false }) alertHost: PlaceHolderDirective;
  constructor(private authService: AuthService, private router: Router, private componentResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitAuthForm(form: NgForm) {
    if (!form.valid) {
      console.log('invalid form');
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
      authObs = this.authService.signin(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(resData => {
      console.log(resData);
      this.router.navigate(['/recipes']);
      this.isLoading = false;
    }, errorRes => {
      console.log(errorRes);
      this.error = errorRes;
      this.showErrorAlert(errorRes);
      this.isLoading = false;

    });
    form.resetForm();
  }

  onHandleError() {
    this.error = null;
  }

  showErrorAlert(error: string) {
    const alertComp = this.componentResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContaiberRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertComp);
    componentRef.instance.message = error;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
  }

  ngOnDestroy(): void {
    if (this.closeSub != null) {
      this.closeSub.unsubscribe();
    }
  }

}
