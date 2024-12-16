import { TelegramMethod } from '../types/telegram';

export const API_METHODS: TelegramMethod[] = [
  {
    name: 'getMe',
    description: 'Get basic information about the bot',
    category: 'Getting information',
    parameters: [],
    returns: 'User object'
  },
  {
    name: 'sendMessage',
    description: 'Send text messages',
    category: 'Messages',
    parameters: [
      {
        name: 'chat_id',
        type: 'number | string',
        required: true,
        description: 'Unique identifier for the target chat'
      },
      {
        name: 'text',
        type: 'string',
        required: true,
        description: 'Text of the message to be sent'
      },
      {
        name: 'parse_mode',
        type: 'string',
        required: false,
        description: 'Mode for parsing entities in the message text'
      }
    ],
    returns: 'Message object'
  },
  // Add more methods here...
];