"use client"

import { useEffect, useState } from "react"

import { ReturnMessage } from "@/lib/actions"
import { SubmitButton } from "@/components/common/SubmitButton";

export const PostForm = ({ formResult, handleAction }: { formResult: ReturnMessage, handleAction: (formData: FormData) => void }) => {

  const [inputValue, setInputValue] = useState<string>("")

  useEffect(() => {
    if (formResult.message && !formResult.error) {
      setInputValue("");
    }
  }, [formResult]); // stateがサーバーから返ってくるたびに動く

  return (
    <div className="mb-10">
      {/* 投稿フォーム */}
      <form action={handleAction} className="mb-3 flex gap-2">
        <input
          name="title"
          type="text"
          className="border p-2 rounded text-black"
          placeholder="タイトルを入力..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <SubmitButton label="投稿する" />
      </form>
      <p className="text-red-700" aria-live="polite">{formResult.error}</p>
    </div>
  )
}