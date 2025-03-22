export class Moment {
    private type: MomentType;
    private displayName: string;
    private description: string;
}

export enum MomentType {
    PREVIOUS_DAYS,
    CERIMONY,
    LUNCH,
    FOLLOWING_DAYS
}