import conf from "../conf/conf";
import {Client, Account,  ID} from "appwrite"

export class authService{
    client = new Client()
    account

    constructor() {
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.account = new Account(this.client)
    }

}

const authService = new authService();

export default authService