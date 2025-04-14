import { Moment } from 'libs/common/moment.enum';
import { Document } from 'mongoose';

export interface IVibe extends Document {
  readonly user: string;
  readonly description: string;
  readonly moment: Moment;
}
