import { Component } from '@angular/core';
import { TelegramService } from '../telegram.service';

@Component({
  selector: 'app-telegram',
  templateUrl: './telegram.component.html',
  styleUrls: ['./telegram.component.css']
})
export class TelegramComponent {
  message: string;

  constructor(private telegramService: TelegramService) {}

  sendMessage() {
    if (this.message) {
      this.telegramService.sendMessage(this.message);
      this.message = ''; // Clear the input after sending
    }
  }
}