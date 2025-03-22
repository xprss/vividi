import { MomentType } from "../../libs/common/moment.enum";

export class Picture {
    private id: string;
    private timestamp: string;
    private profileId: string;
    private moment: MomentType;

    constructor(id: string, timestamp: string, profileId: string, moment: MomentType) {
        this.id = id;
        this.timestamp = timestamp;
        this.profileId = profileId;
        this.moment = moment;
    }
}