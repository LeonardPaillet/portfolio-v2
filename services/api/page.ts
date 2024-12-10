import { Client } from "@notionhq/client";
import { ListBlockChildrenResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
/**
 * Provides a Page block.
 * @example
 * ```ts
 * await getPageBlock({pageId : data.id})
 * ```
 */


const notion = new Client({ auth: process.env.NOTION_API_KEY });


export const getPageBlock = async ({pageId} : {pageId: string}) : Promise<ListBlockChildrenResponse> =>{
  console.log(pageId)
  if(pageId){
    const response = await notion.blocks.children.list({
      block_id: pageId,
    })
    return response as ListBlockChildrenResponse
  }
  else{
    throw new Error("Page ID is undefined");
  }
  
  
}