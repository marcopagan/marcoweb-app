export type Project = {
    _id: string,
    _createdAt: string,
    _type: string,
    title: string,
    slug: string,
    type: string[],
    year: number,
    client: string,
    collaborators: string,
    link: {label:string, url:string},
    tags: string[],
    //description: PortableBlock[],
    //media: immagine o video,
    isPublished: boolean
  };