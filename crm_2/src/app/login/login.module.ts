import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { PageForgotPasswordComponent } from './views/page-forgot-password/page-forgot-password.component';
import { PageResetPasswordComponent } from './views/page-reset-password/page-reset-password.component';
import { PageSignInComponent } from './views/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './views/page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetPasswordComponent,
    PageForgotPasswordComponent,
  ],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
