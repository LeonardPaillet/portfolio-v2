export type PropertyType = "select" | "url" | "files" | "multi_select" | "rich_text" | "title" ;

export interface Property{
  id: string;
  name: string;
  type: PropertyType;
  options: Options[]
}

export interface Options{
  id: string;
  name: string;
  color: string;
  description : string | null
}

export interface Project{
  id: string;
  properties : Property[]
}

