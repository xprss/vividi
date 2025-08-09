export class Like {
  userId: string;
  isLiked: boolean;
  timestamp: Date;

  constructor(userId: string, isLiked: boolean) {
    this.userId = userId;
    this.isLiked = isLiked;
    this.timestamp = new Date();
  }
}
