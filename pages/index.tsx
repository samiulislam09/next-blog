import Link from 'next/link';
import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';
interface Props{
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  
  return (
    <div className="bg-white">
      <Header></Header>
      <div className='grid md:grid-cols-2 items-center'>
        {posts.map((post) => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="card lg:card-side bg-base-100 shadow-xl m-4 max-w-2xl">
              <figure>
                <img
                  src="https://api.lorem.space/image/album"
                  className='md:w-52'
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



export const getServerSideProps = async() => {
  const query = `*[_type=='post']{
    _id,
    title,
    slug,
    description,
    mainImage,
    author->{
      name,
      image
    }
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts
    }
  };
}
