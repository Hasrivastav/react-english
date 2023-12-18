import conf from "../conf/conf";

import { Client, Account, ID, Databases, Storage, Query } from "appwrite";

export class DbSerives {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl)
    .setProject(conf.appriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await databases.createDocument(
        conf.appriteDatabaseId,
        conf.appriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("createPost error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appriteDatabaseId,
        conf.appriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("UpdatePost error:", error);
    }
  }

  async deletePost(slug){
    try {
         await this.deleteDocument(conf.appriteDatabaseId,conf.appriteCollectionId, slug)
         return true;
    } catch (error) {
        console.log('Delete Post Error',error)
        return false;
    }
  }

  async getPost(slug){
    try {
        return await  this.databases.getDocument(conf.appriteDatabaseId,conf.appriteCollectionId, slug);
        
    } catch (error) {
        console.log('document not found',error)
        return false;
    }
  }

  async getAllPost(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
           conf.appriteDatabaseId,
            conf.appriteCollectionId,
          queries,
          
        );
    } catch (error) {
        console.log("getAllpost:",error)
    }
  }

  //file upload services
}

const dbServices = new DbSerives();

export default dbServices; 