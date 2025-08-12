import { GetUser } from "@/lib/db";
import { getIronSessionData } from "@/session/session";
import { notFound } from 'next/navigation'

type UserPage = {
  params: Promise<{
    slug: string
  }>
}

type Post = {
  title: string,
  content: string
}

export default async function UserPage({
  params
}: UserPage) {
  const { slug } = await params
  const session = await getIronSessionData();
  const user = await GetUser(slug);

  if (!user) {
    notFound()
  }

  const isUserPage = session.username === user?.userName;
  const posts = user ? user.posts : [];


// kada budes pravio da dodaje ili edituje post proveri i tamo da li je to taj user za svaki slucaj

  return (
    <div>
      <h1>{user?.userName}</h1>
      {
        isUserPage && (
          <div>
            <form>
              <label htmlFor="new-post">Create a new post</label>
              <textarea name="new-post" id="new-post"></textarea>
            </form>
          </div>
        )
      }
      {
        posts.map(({ title, content }: Post) => (
          <article key={title.toLowerCase().replaceAll(" ", "-")}>
            <h2>{title}</h2>
            <p>{content}</p>
          </article>
        ))
      }
    </div>
  )
}
