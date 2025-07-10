import { client } from "@/sanity/client";
import { PostList } from "@/components/PostList";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <PostList posts={posts} />
    </main>
  );
}

