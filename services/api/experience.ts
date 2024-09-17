import { Client } from "@notionhq/client";
import { idXpDB } from "../variable";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a list of experience.
 * @example
 * ```ts
 * await getXP();
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getXP = async () : Promise<QueryDatabaseResponse> =>{
  if(idXpDB){
    const response = await notion.databases.query({
      database_id: idXpDB
    })
    return response as QueryDatabaseResponse
  }
  else{
    throw new Error("Database ID is undefined");
  }
  
}