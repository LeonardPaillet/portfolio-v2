export const token = process.env.NOTION_API_KEY

export const url = process.env.API_NOTION

export const idProjectDB = process.env.ID_PROJECT_DATABASE
export const idXpDB = process.env.ID_XP_DATABASE
export const idInfoBlock = process.env.ID_INFO_BLOCK
export const idContactBlock = process.env.ID_CONTACT_BLOCK

export const headers = {
  "Authorization": `Bearer ${token}`,
  "Content-Type" : "application/json",
  "Notion-Version": process.env.NEXT_PUBLIC_NOTION_VERSION
}