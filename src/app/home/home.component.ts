import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    message = {
        recipient: '',
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      constructor(private contactService: ContactService) { }


    ngOnInit() {
        this.addScrollAnimations();
    }

    scrollTo(direction: 'top' | 'bottom'): void {
        if (direction === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (direction === 'bottom') {
            const footer = document.querySelector('.footer');
            if (footer) {
                const footerPosition = footer.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: footerPosition, behavior: 'smooth' });
            }
        }
    }

    addScrollAnimations() {
        const serviceItems = document.querySelectorAll('.service-item');

        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY + window.innerHeight;

            serviceItems.forEach(item => {
                const itemPosition = item.getBoundingClientRect().top + window.scrollY;

                if (scrollPosition > itemPosition) {
                    item.classList.add('animate');
                }
            });
        });
    }

    sendEmail(contactForm: any) {
        this.contactService.sendEmail(this.message).subscribe(
          response => {
            console.log(response);
            // Handle successful response
          },
          error => {
            console.error(error);
            // Handle error response
          }
        );
      }
    
}
