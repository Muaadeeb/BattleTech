import { Component } from '@angular/core';
import { ClientSettings } from "./models/client-settings.model";
import { Subscription } from 'rxjs/Rx';
import { Router, NavigationEnd } from '@angular/router';

import './styles/site.scss';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = "BattleTech";

  showNavigation: boolean;

  routerSubscription: Subscription;

  constructor(
    public clientSettings: ClientSettings,
    private router: Router
  ) {
    this.showNavigation = true;
  }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        window.scroll(0, 0);
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

  toggleNavigation() {
    this.showNavigation = !this.showNavigation;
  }

}
