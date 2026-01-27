import { prisma } from "@/lib/prisma";

// import { getPosts } from "@/lib/actions";
import { Posts } from "@/components/common/Posts";

export default async function PostsPage() {
	const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc", // 新しい順に並べる
    },
  });


	return (
		<main className="p-10">
			<h1 className="text-2xl font-bold mb-6">掲示板（Server Actions版）</h1>
			<Posts posts={posts} />
		</main>
	);
}