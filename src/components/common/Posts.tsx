"use client"

import { useOptimistic, useActionState } from "react"

import { addPost, deletePost, Post } from "@/lib/actions"
import { PostForm } from "./PostForm"
import { PostsList } from "./PostsList"

export const Posts = ({ posts }: { posts: Post[] }) => {

  const [optimisticPosts, updateOptimisticPost] = useOptimistic(
    posts, // 初期値（本物のデータ）
    (state, action: { type: "add" | "delete", payload: any }) => {
      switch (action.type) {
        case "add":
          return [...state,
          { id: Date.now(), title: action.payload, sending: true }, // 送信中の「仮データ」を混ぜる
          ]
        case "delete":
          return state.filter((post) => post.id !== action.payload)
        default:
          return state

      }
    }
  );

  const initialFormResult = { message: null, error: null }
  const [formResult, formAction, isPending] = useActionState(addPost, initialFormResult)

  const handleAdd = async (formData: FormData) => {
    const title = formData.get("title") as string;

    // 1. サーバーの結果を待たずに、画面に「偽データ」を追加
    updateOptimisticPost({ type: "add", payload: title });

    // 2. そのあと、ゆっくりサーバーに送信（awaitで待つ）
    await formAction(formData);

  };

  const [deleteFormResult, deleteFormAction, isDeletingPending] = useActionState(deletePost, { message: null, error: null })




  const handleDelete = async (formData: FormData) => {
    const id = Number(formData.get("id") as string);

    updateOptimisticPost({ type: "delete", payload: id });

    await deleteFormAction(id);

  };

  return (
    <>
      <PostForm formResult={formResult} handleAdd={handleAdd} />
      <PostsList posts={optimisticPosts} handleDelete={handleDelete} deleteFormResult={deleteFormResult}/>
    </>
  )
}