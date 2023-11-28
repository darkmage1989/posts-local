export interface Post {
  [key: string]: any;
  body: string;
  id: number;
  title: string;
  userId: number ;
  name: string;
  favorite: boolean;
}
export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}
export interface EditPost {
  body: string;
  id: number;
  title: string;
  name: string
}
export interface EditName {
  name: string;
  userId: number;
}
