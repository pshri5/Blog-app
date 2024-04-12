import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DbService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteProjectId)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, image, status userId}) {}
}

const dbService = new DbService();
export default dbService;
