"use client"

import { useFormStatus } from "react-dom";

export const SubmitButton = ({ label }: { label: string }) => {

  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded`}>
      {pending ? '送信中…' : label}
    </button>
  )
}