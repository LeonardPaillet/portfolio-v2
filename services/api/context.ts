import { Client } from "@notionhq/client";
import { idContextBlock } from "../variable";
import { ListBlockChildrenResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a Information block.
 * @example
 * ```ts
 * await getContextBlock();
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getContextBlock = async () : Promise<ListBlockChildrenResponse> =>{
  if(idContextBlock){
    const response = await notion.blocks.children.list({
      block_id: idContextBlock,
    })
    return response as ListBlockChildrenResponse
  }
  else{
    throw new Error("Database ID is undefined");
  }
  
}