export interface IPost{
    id: number,
    title: string,
    body: string,
    thumbnail?: string,
    dateTime?: string,
    categoryId?: number,
    authorId: number,
    isFeatured?: boolean
     
}

export interface IPostAdd{
    id:number , 
    Title:string, 
    Body:string, 
    Category?:number, 
    IsFeatured?:boolean, 
    AutorId:number,  
}