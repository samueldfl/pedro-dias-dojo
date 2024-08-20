import { Component } from '@angular/core';
import { BurgerMenuComponent } from "../../../../../public/assets/svg/burger-menu/burger-menu.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  imports: [BurgerMenuComponent],
})
export class NavbarComponent {}
