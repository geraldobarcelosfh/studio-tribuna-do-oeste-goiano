interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
}

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <article key={post._id}>
          <h2>{post.title}</h2>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </article>
      ))}
    </div>
  );
}

export default PostList;
