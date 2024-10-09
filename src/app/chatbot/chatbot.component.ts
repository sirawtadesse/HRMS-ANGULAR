import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { sender: string, content: string }[] = [];
  isVisible: boolean = false; // To control the visibility of the chatbot

  toggleChatbot() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.messages.push({ sender: 'bot', content: "Hi there! How can I support you today?" });
    }
  }

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ sender: 'user', content: this.userInput });
      // Simulate bot response (replace with API call in real use)
      this.messages.push({ sender: 'bot', content: this.getBotResponse(this.userInput) });
      this.userInput = ''; // Clear input
    }
  }

  getBotResponse(input: string): string {
    // Predefined responses
    const responses = {
      'hello': 'Hi there! How can I help you?',
      'what are your services?': 'We offer various services including support and information.',
      'what job openings do you have?': 'We currently have openings for SW Developer and UI Designer.',
      'how can I apply for a job?': 'You can apply by submitting your resume through our website.',
      'what is the company culture like?': 'We foster a collaborative environment.',
      'what are the benefits?': 'We offer competitive salaries and health insurance.',
      'how do I contact hr?': 'You can reach our HR team at hr@example.com.',
      'who are the current candidates?': 'Our candidates include Siraw Tadesse and Gechi.',
      'what positions are candidates applying for?': 'Candidates are applying for SW Developer and UI Designer positions.',
      'tell me about the companies?': 'We have Tech Solution located in Addis Ababa and S Promotion located in Semit.',
      'who works in HR department?': 'Dawit is the employee in the HR department.',
      'what are the salary ranges?': 'Salaries for employees range from $50,000 to $60,000 depending on the role.',
      'how can I reach a candidate?': 'You can contact candidates via their provided emails or phone numbers.',
      'what is the status of my application?': 'You can check your application status by contacting HR or checking your email for updates.',
      'bye': 'Goodbye! Have a great day!',
    };
    return responses[input.toLowerCase()] || "I'm sorry, I didn't understand that.";
  }
}