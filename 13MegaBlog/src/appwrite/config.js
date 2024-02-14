// Documentation: https://appwrite.io/docs/references

import conf from "../conf/conf";
import { Client, Account, ID, Databases,Storage,Query } from "appwrite";

export class Service{
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) 
        .setProject(conf.appwriteProjectId); 
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client)

    }

    // https://appwrite.io/docs/products/databases/documents
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,//this here acting as documentId
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log('Appwrite Service Error:: config :: createPost :: error" ',error);
            
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('Appwrite Service Error:: config :: updatePost :: error" ',error);
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
            
        } catch (error) {
            console.log('Appwrite Service Error:: config :: deletePost :: error" ',error);
            return false
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log('Appwrite Service Error:: config :: getPost :: error" ',error);
            return false;
        }
    }

    // https://appwrite.io/docs/references/cloud/client-web/databases#updateDocument
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
               

            )
        } catch (error) {
            console.log('Appwrite Service Error:: config :: getPosts :: error" ',error);
            return false;
        }
    }

    //File upload service: docs: https://appwrite.io/docs/references/cloud/client-web/storage
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Appwrite Service Error:: config :: uploadFile:: error" ',error);
            return false
        }
    }

    async deleteFile(fileId)
    {
        try {
                await this.bucket.deleteFile(
                    conf.appwriteBucketId,
                    fileId
                )
                return true
        } catch (error) {
            console.log('Appwrite Service Error:: config :: deleteFile :: error" ',error);
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId)
            
        } catch (error) {
            console.log('Appwrite Service Error:: config:: getFilePreview :: error" ',error);
        }
        return null
    }
}

const service=new Service();
export default service;