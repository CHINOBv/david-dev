import Head from "next/head";
import Link from "next/link";

import axios from "axios";

export default function FirstPost({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/ssr">
          <a>Back to home</a>
        </Link>
      </h2>
      <h1>title: contacts</h1>
      <p>{data.properties.firstname?.value}</p>
    </>
  );
}

export async function getServerSidePaths() {
  // Call an external API endpoint to get posts
  const res = await axios(
    "https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=dd51b00b-2b30-45de-bbc3-4cb63ea5fe56"
  );
  const posts = await res.data.contacts;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/posts/${post.vid}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getServerSideProps = async ({ params }) => {
  // Fetch data from external API
  const res = await axios(
    `https://api.hubapi.com/contacts/v1/contact/vid/${params.id}/profile?hapikey=dd51b00b-2b30-45de-bbc3-4cb63ea5fe56`
  );
  //console.log(res);

  // Pass data to the page via props
  return { props: { data: res.data } };
};
