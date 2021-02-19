import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const ssr = ({ data }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>title: contacts</h1>

      {data.map((contact) => (
        <>
          <p>Date: </p>
          <Link href={`/posts/${contact.vid}`} key={contact.vid}>
            {contact.properties.lastmodifieddate.value}
          </Link>
          <br />
        </>
      ))}
      <p>Count: {count}</p>
      <button onClick={() => setCount((pv) => pv + 1)}>Count ++</button>
    </div>
  );
};

export const getStaticProps = async () => {
  // Fetch data from external API
  const res = await axios(
    "https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=dd51b00b-2b30-45de-bbc3-4cb63ea5fe56"
  );

  // Pass data to the page via props
  return { props: { data: res.data.contacts } };
};

export default ssr;
