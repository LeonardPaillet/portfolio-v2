import { Client } from "@notionhq/client";
import { idPresBlock } from "../variable";
import { ListBlockChildrenResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a presentation block.
 * @example
 * ```ts
 * await getPresentationBlock();
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getPresentationBlock = async () : Promise<ListBlockChildrenResponse> =>{
  if(idPresBlock){
    const response = await notion.blocks.children.list({
      block_id: idPresBlock,
    })
    return response as ListBlockChildrenResponse
  }
  else{
    throw new Error("Database ID is undefined");
  }
  
}