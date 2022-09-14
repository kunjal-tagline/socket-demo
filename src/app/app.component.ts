import { MessageService } from './services/message.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newMessage: string | undefined;
  messageList:  string[] = [];

  constructor(private messageService: MessageService) {
  }

  sendMessage() {
    this.messageService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
  ngOnInit() {
    this.messageService
      .getMessages()
      .subscribe((message: string) => {
        this.messageList.push(message);
      });
  }
}
