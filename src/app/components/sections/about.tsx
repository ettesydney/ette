import { client } from "../../../../sanity/lib/client";
import { ABOUT_QUERY } from "../../../../sanity/lib/queries";

export default async function About() {
  const aboutData = await client.fetch(ABOUT_QUERY);


  // console.log('about data', aboutData)

  if (!aboutData) {
    return <p className="text-center text-red-500">No about data found.</p>;
  }

  return (
    <div className="text-center bg-primarylight my-[5rem] mb-[1rem] mx-[2rem] ">
      <div className='flex flex-col items-center justify-center gap-4 lg:gap-8 lg:pt-[6rem]'>
        <div>
          <h2 className="mb-2 mt-2 title">{aboutData.title}</h2>
        </div>
        <div className="max-w-2xl">
          <p className="">{aboutData.blurb}</p>
        </div>
      </div>
    </div>
  );
}
