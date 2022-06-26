import Header from '../components/Header'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings';
interface Props{
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  
  return (
    <div className="">
      <Header></Header>
    </div>
  )
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
