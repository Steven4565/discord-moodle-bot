import { MessageTemplate } from '../message.class';

export interface AssignmentReminderMessageOptions {
  course: string;
  title: string;
}

export class AssignmentReminderMessage extends MessageTemplate {
  readonly template = `**{course} - Reminder**:
  :warning: Assignment of title "{title}" is due **tomorrow** !`;
}
