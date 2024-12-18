import { Client } from "@notionhq/client";
import { idContactBlock } from "../variable";
import { ListBlockChildrenResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a list of contact block.
 * @example
 * ```ts
 * await getContactBlock();
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getContactBlock = async () : Promise<ListBlockChildrenResponse> =>{
  if(idContactBlock){
    const response = await notion.blocks.children.list({
      block_id: idContactBlock,
    })
    return response as ListBlockChildrenResponse
  }
  else{
    throw new Error("Database ID is undefined");
  }
  
}