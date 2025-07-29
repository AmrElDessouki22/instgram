export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface Post {
  id: string;
  userId: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  postId: string;
  text: string;
}
