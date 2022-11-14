import { Component } from '@angular/core';
import { LayoutService } from '@backbase/ui-ang/layout';
import { triplets } from './services/entitlementsTriplets';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'bank-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client-one';
  triplets = triplets;
  isAuthenticated = false;

  constructor(
    private oAuthService: OAuthService,
    public layoutService: LayoutService
  ) {
    this.isAuthenticated = oAuthService.hasValidAccessToken();
  }

  logout(): void {
    this.oAuthService.logOut(true);
  }

  focusMainContainer(event: MouseEvent) {
    const element = event.view?.window.document.querySelector(
      '[role="main"]'
    ) as HTMLElement | undefined;
    element?.focus();
  }
}
