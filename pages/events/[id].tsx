import { GetStaticPropsContext } from "next";
import tempDB from "@/utils/db.json";
import { Post } from "@/types/items";

type Props = {
  post: Post | null;
};

export default function Item({ post }: Props) {
  if (!post) {
    return <div>Events not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <section className="bg-white p-8 shadow-md rounded-lg max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.name}</h1>
        <p className="text-gray-700 mb-4">{post.description}</p>
        <div className="mb-4">
          <span className="font-semibold">Type: </span>
          <span className="text-green-600">{post.type}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Direction: </span>
          <span className="text-green-600">{post.direction}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Experience Level: </span>
          <span className="text-green-600">{post.experience_lvl}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Email: </span>
          <a
            href={`mailto:${post.email}`}
            className="text-blue-600 hover:underline"
          >
            {post.email}
          </a>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Skills Required: </span>
          <ul className="list-disc list-inside">
            {post.skills.map((skill) => (
              <li key={skill} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { id } = params as { id: string };
  const post: Post | undefined = tempDB.find((item) => item.id === id);
  if (!post) {
    return { props: { post: null } };
  }
  return { props: { post } };
}

export async function getStaticPaths() {
  const paths = tempDB.map((item) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: false };
}
