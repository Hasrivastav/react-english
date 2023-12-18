import conf from "../conf/conf";
import { Client, Storage,ID } from "appwrite";

export class  FileStorageServices{

    client = new Client();
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appriteProjectId);

        this.bucket=new Storage(this.client)
    }

    async uploadFile(file){
        try {
         
            return  await this.bucket.createFile(
                conf.appriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("CreateFile Error:",error);
            return false;
        }
    }
 
    async deleteFile(fileId){
      try {
        await this.bucket.deleteFile(
            conf.appriteBucketId,
            fileId
        )
        return false;
        
      } catch (error) {
        console.log('Delete file error',error)
        return false;
      }
    }
    async getFilePreview(fileId){
        return this.bucket.getFilePreview( conf.appriteBucketId, fileId);
    }


}

const fileService = new FileStorageServices();
export default fileService; 