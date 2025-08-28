export interface Post {
    id?: number;
    title: string;
    body: string;
  }
  
  export interface PostsState {
    items: Post[];
    loading: boolean;
    error: string | null;
  }
  