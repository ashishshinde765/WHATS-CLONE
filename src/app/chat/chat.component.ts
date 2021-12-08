import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @Input() conversation: any;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible: any;
  message= '';
  constructor() {}

  ngOnInit(): void {}

  submitMessage(event: any) {
    let value = event.target.value.trim();
    this.message = '';
    if (value.length < 1) return false;
    this.conversation.lastmessage = value;
    this.conversation.message.unshift({
      id: 3,
      body: value,
      time: '23:36',
      me: true,
    });
  }

  emojiClicked(event: any) {
    this.message += event.emoji.native;
  }
}
