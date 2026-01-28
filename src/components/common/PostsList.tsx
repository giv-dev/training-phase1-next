import { Post } from "@/lib/actions"
import { SubmitButton } from "./SubmitButton";
import { ReturnMessage } from "@/lib/actions";

export const PostsList = ({ posts, handleDelete, deleteFormResult }: { posts: (Post | Post & { sending: boolean })[], handleDelete: (formData: FormData) => void, deleteFormResult: ReturnMessage }) => {
  return (
    <>
      <p className="text-red-700" aria-live="polite">{deleteFormResult.error}</p>
      <ul className="space-y-2" >
        {posts.map((post: Post | Post & { sending: boolean }) => (
          <li key={post.id} className={`${post.hasOwnProperty('sending') ? "opacity-50" : ""} flex justify-between gap-4 p-6 bg-gray-100 rounded`}>
            <p className="text-black p-2">{post.title}</p>
            <form action={handleDelete}>
              <input type="hidden" name="id" value={post.id}></input>
              <SubmitButton label={post.hasOwnProperty('sending') ? "追加中..." : "削除する"} />
            </form>

          </li>
        ))}
      </ul >
    </>
  )
}