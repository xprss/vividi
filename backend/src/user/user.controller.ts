import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { User } from "./user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    @HttpCode(200)
    public async getUser(): Promise<User[]> {
        return this.userService.getUsers();
    }
}
