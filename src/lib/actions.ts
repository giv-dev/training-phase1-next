"use server";

import { prisma } from "./prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export type ReturnMessage = { message: string | null, error: string | null }

export type Post = {
  id: number,
  title: string
}

const PostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "タイトルが短かすぎます" }) // 空文字禁止
    .max(50, { message: "50文字以内で入力してください" }), // 長すぎ禁止
});

// サーバー上のメモリに保存（Dockerコンテナが動いている間だけ保持される）
// let posts = [
//   { id: 1, title: "最初の投稿" },
// ];

export async function addPost(prevState: ReturnMessage, formData: FormData): Promise<ReturnMessage> {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // データを解析
  const validatedFields = PostSchema.safeParse({
    title: formData.get("title"),
  });

  // const title = formData.get("title") as string;
  // if (title.length <= 5) return { message: null, error: "タイトルが短かすぎます" }

  // もしバリデーションに失敗したら、その時点でエラーを返す
  if (!validatedFields.success) {

    return {
      message: null,
      // Zodが生成したエラーメッセージを抽出して返す
      error: validatedFields.error.flatten().fieldErrors.title?.[0] ?? "入力エラーが発生しました",
      // error: validatedFields.error.issues[0].message,
    };
  }

  const { title } = validatedFields.data;

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

export async function deletePost(id: number) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    await prisma.post.delete({ where: { id } })

    revalidatePath("/posts");
  } catch (e) {
    console.error(e);
  }
}

// export async function getPosts() {
//   return posts;
// }