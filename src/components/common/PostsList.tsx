import { Post } from "@/lib/actions"
import { deletePost } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";

export const PostsList = ({ posts }: { posts: Post[]}) => {
  return(
    <ul className="space-y-2" >
      {posts.map((post) => (
        <li key={post.id} className="flex justify-between gap-4 p-6 bg-gray-100 rounded">
          <p className="text-black p-2">{post.title}</p>
          <form action={deletePost.bind(null, post.id)}>
            <SubmitButton label="削除する" />
          </form>

        </li>
      ))}
    </ul >
  )
}