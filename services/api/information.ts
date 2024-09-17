import { Client } from "@notionhq/client";
import { idInfoBlock } from "../variable";
import { ListBlockChildrenResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a Information block.
 * @example
 * ```ts
 * await getInformationBlock();
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getInformationBlock = async () : Promise<ListBlockChildrenResponse> =>{
  if(idInfoBlock){
    const response = await notion.blocks.children.list({
      block_id: idInfoBlock,
    })
    return response as ListBlockChildrenResponse
  }
  else{
    throw new Error("Database ID is undefined");
  }
  
}