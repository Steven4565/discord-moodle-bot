import { MessageTemplate } from '../message.class';

export interface AssignmentMessageOptions {
  course: string;
  title: string;
  dueDate: string;
}

export class AssignmentMessage extends MessageTemplate {
  readonly template = `**{course} - New Assignment Added!**
  :information_source: "{title}" is assigned
  :alarm_clock: until \`{dueDate}\``;
}
