import { User } from "@firebase/auth";
import { Badge } from "./badge.enum";

export interface VividiUser extends User {
    id: string;
    firstName: string;
    lastName: string;
    badges: Badge[];
}