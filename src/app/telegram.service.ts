import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private token = '8008165771:AAGIxsH1HMyJjEbmSFCsgfYNOS_QC9qlah0'; 
  private chatId = '1854913649'; 

  constructor() {}

  async sendMessage(message: string) {
    const url = `https://api.telegram.org/bot${this.token}/sendMessage`;
    try {
      await axios.post(url, {
        chat_id: this.chatId,
        text: message
      });
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  }
}