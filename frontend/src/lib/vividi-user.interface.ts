import { User } from "@firebase/auth";

export interface VividiUser extends User {
    firstName: string;
    lastName: string;
}