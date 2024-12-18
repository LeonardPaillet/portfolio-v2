import { Client } from "@notionhq/client";
import { idProjectDB } from "../variable";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a list of projects.
 * @example
 * ```ts
 * await getProjects();
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getProjects = async () : Promise<QueryDatabaseResponse> =>{
  if(idProjectDB){
    const response = await notion.databases.query({
      database_id: idProjectDB
    })
    return response as QueryDatabaseResponse
  }
  else{
    throw new Error("Database ID is undefined");
  }
  
}