import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText: string;
  conversations = [
    {
      name: 'Liam	',
      time: '10:00',
      lastmessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: true },
      ],
    },
    {
      name: 'Noah	',
      time: '10:00',
      lastmessage: 'Morning',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Oliver	',
      time: '10:00',
      lastmessage: 'Hi, Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Elijah	',
      time: '10:00',
      lastmessage: 'Good evening',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'William	',
      time: '10:00',
      lastmessage: 'Nice',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'James	',
      time: '10:00',
      lastmessage: 'Great',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: true },
      ],
    },
    {
      name: 'Benjamin',
      time: '10:00',
      lastmessage: 'Thanks',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: true },
      ],
    },
    {
      name: 'Lucas	',
      time: '10:00',
      lastmessage: 'Looks Great',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Henry	',
      time: '10:00',
      lastmessage: 'Wow',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Alexander	',
      time: '10:00',
      lastmessage: 'See!!',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Aayansh',
      time: '10:00',
      lastmessage: 'Ok',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Avyukt',
      time: '10:00',
      lastmessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Aarav',
      time: '10:00',
      lastmessage: 'Good Morning',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Atharv',
      time: '10:00',
      lastmessage: 'Good Morning',
      latestMessageRead: false,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
    {
      name: 'Diyansh',
      time: '10:00',
      lastmessage: 'Good Morning',
      latestMessageRead: true,
      message: [
        { id: 1, body: 'Hello world', time: '10:00', me: true },
        { id: 2, body: 'How are you?', time: '10:00', me: false },
        { id: 3, body: 'I am fine thank you', time: '10:00', me: false },
      ],
    },
  ];

  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.lastmessage
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
