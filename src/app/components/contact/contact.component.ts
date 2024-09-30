import { Component } from '@angular/core';
import { HeaderComponent } from "../layouts/header/header.component";
import { FooterComponent } from "../layouts/footer/footer.component";
import { ContactSectionComponent } from "./contact-section/contact-section.component";
import { CartComponent } from "../layouts/cart/cart.component";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactSectionComponent, CartComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
