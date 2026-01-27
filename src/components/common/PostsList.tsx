import { Post } from "@/lib/actions"
import { SubmitButton } from "./SubmitButton";

export const PostsList = ({ posts, handleDelete }: { posts: (Post | Post & { sending: boolean })[], handleDelete: (formData: FormData) => void }) => {
  return (
    <ul className="space-y-2" >
      {posts.map((post: Post | Post & { sending: boolean }) => (
        <li key={post.id} className="flex justify-between gap-4 p-6 bg-gray-100 rounded">
          <p className="text-black p-2">{post.title}</p>
          <form action={handleDelete}>
            <input type="hidden" name="id" value={post.id}></input>
            <SubmitButton label={post.hasOwnProperty('sending') ? "追加中..." : "削除する"} />
          </form>

        </li>
      ))}
    </ul >
  )
}