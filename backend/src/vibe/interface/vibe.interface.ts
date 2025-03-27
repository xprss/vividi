import { Document } from 'mongoose';

export interface IVibe extends Document {
  readonly id: string;
  readonly height: number;
  readonly width: number;
}
