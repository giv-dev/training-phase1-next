"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";

export type ReturnMessage = { message: string | null, error: string | null }

export type Post = {
  id: number,
  title: string
}

// サーバー上のメモリに保存（Dockerコンテナが動いている間だけ保持される）
// let posts = [
//   { id: 1, title: "最初の投稿" },
// ];

export async function addPost(prevState: ReturnMessage, formData: FormData): Promise<ReturnMessage> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const title = formData.get("title") as string;

  if (title.length <= 5) return { message: null, error: "タイトルが短かすぎます" }


  try {
    await prisma.post.create({
      data: { title }
    });

    // 【重要】/posts ページのキャッシュをクリアして再描画させる
    revalidatePath("/posts");
    return { message: "投稿に成功しました", error: null }
  } catch (e) {
    return { message: null, error: "投稿に失敗しました" };
  }

}

export async function deletePost(prevState: ReturnMessage, id: number): Promise<ReturnMessage> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    await prisma.post.delete({ where: { id } })

    revalidatePath("/posts");
    return { message: "削除に成功しました", error: null }

  } catch (e) {
    console.error(e);
    return { message: null, error: "削除に失敗しました" };

  }
}

// export async function getPosts() {
//   return posts;
// }