// Documentation: https://appwrite.io/docs/references

import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId); 

        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name);//ye paramenters kon kon se lene h sab documentation me diya h
            if(userAccount){
                //call another method 
                return this.login({email,password})
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password})
    {
        try {
            
            return await this.account.createEmailSession(email,password)

        } catch (error) 
        {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
            
        } catch (error) {
                console.log('Appwrite Service Error:: getCurrentUser :: error" ',error);
            }
            
            return null;//ye null bas isloye h ki bychance try catch m error aa jaaye to us case m null return ho jaye
        }
        
        async logout(){
            try {
                await this.account.deleteSessions()
                
            } catch (error) {
            console.log('Appwrite Service Error:: auth :: logout :: error" ',error);
            
        }
    }

}

const authService=new AuthService();

export default authService