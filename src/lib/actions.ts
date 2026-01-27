"use server";

import { revalidatePath } from "next/cache";

export type ReturnMessage = { message: string | null, error: string | null }

export type Post = {
  id: number,
  title: string
}

// サーバー上のメモリに保存（Dockerコンテナが動いている間だけ保持される）
let posts = [
  { id: 1, title: "最初の投稿" },
];

export async function addPost(prevState: ReturnMessage, formData: FormData): Promise<ReturnMessage> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  const title = formData.get("title") as string;

  if (title.length <= 5) return { message: null, error: "タイトルが短かすぎます" }

  // 新しい投稿を追加
  const newPost: Post = {
    id: Date.now(),
    title: title,
  };

  posts.push(newPost);
  console.log("現在の投稿一覧:", posts);

  // 【重要】/posts ページのキャッシュをクリアして再描画させる
  revalidatePath("/posts");

  return { message: "投稿に成功しました", error: null }
}

export async function deletePost(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  posts = posts.filter((post) => post.id !== id);
  console.log("現在の投稿一覧:", posts);
  revalidatePath("/posts");
}

export async function getPosts() {
  return posts;
}