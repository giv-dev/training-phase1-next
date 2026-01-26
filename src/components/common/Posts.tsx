"use client"

import { useOptimistic, useActionState } from "react"

import { addPost, Post } from "@/lib/actions"
import { PostForm } from "./PostForm"
import { PostsList } from "./PostsList"

export const Posts = ({ posts }: { posts: Post[] }) => {

  const [optimisticPosts, addOptimisticPost] = useOptimistic(
    posts, // 初期値（本物のデータ）
    (state, newPostTitle: string) => [
      ...state,
      { id: Date.now(), title: newPostTitle, sending: true }, // 送信中の「仮データ」を混ぜる
    ]
  );

  const initialFormResult = { message: null, error: null }
  const [formResult, formAction, isPending] = useActionState(addPost, initialFormResult)

  const handleAction = async (formData: FormData) => {
    const title = formData.get("title") as string;

    // 1. サーバーの結果を待たずに、画面に「偽データ」を追加
    addOptimisticPost(title);

    // 2. そのあと、ゆっくりサーバーに送信（awaitで待つ）
    await formAction(formData);

  };

  return (
    <>
    <PostForm formResult={formResult} handleAction={handleAction}/>
    <PostsList posts={optimisticPosts}/>
    </>
  )
}