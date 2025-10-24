import { User } from "@firebase/auth";

export interface VividiUser extends User {
    id: string;
    firstName: string;
    lastName: string;
}