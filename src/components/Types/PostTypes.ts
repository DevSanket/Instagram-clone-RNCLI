export type commentData = {
    id: string;
    comment: string;
    user: {
      username: String;
    };
  };

export interface FeedPost{
    post : {
        id:string,
        description : string,
        image:string,
        user: {
            username:string,
            image:string,
        },
        nofComments: number,
        nofLikes: number,
        comments : Array<commentData>[];
    }
}