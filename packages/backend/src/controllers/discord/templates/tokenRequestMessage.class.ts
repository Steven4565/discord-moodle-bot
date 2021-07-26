import { MessageTemplate } from '../message.class';

export interface TokenRequestMessageOptions {
  key: string;
}

export class TokenRequestMessage extends MessageTemplate {
  readonly template = `:key: **An access token was requested**
  Access Token: {key}
  If you have not requested the token - no problem, just delete this message !`;
}
