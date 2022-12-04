import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

import ContentBox from "../../components/ContentBox";

const TEXTS = ["Content Content", "Content"];

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => setTextIndex((i) => i + 1), 3000);
    return () => clearTimeout(textInterval);
  }, []);

  return (
    <div className="w-full">
      <div className="w-full h-[1200px] bg-lightBlue pt-40 pl-14">
        <div className="text-[70px]">
          Content Content Content
          <TextTransition className="inline" springConfig={presets.gentle}>
            <span>{TEXTS[textIndex % TEXTS.length]}</span>
          </TextTransition>
          Content Content
        </div>
      </div>

      <div className="flex md:flex-row flex-col w-full my-20 items-center justify-center">
        <ContentBox
          title="Content"
          content="Content"
          backgroundColor="bg-falcon"
          width="md:w-1/3 w-5/6"
          height="h-[400px]"
        />
        <ContentBox
          title="Content"
          content="Content"
          backgroundColor="bg-lightPink"
          width="md:w-1/3 w-5/6"
          height="h-[400px]"
        />
        <ContentBox
          title="Content"
          content="Content"
          backgroundColor="bg-lightBlue"
          width="md:w-1/3 w-5/6"
          height="h-[400px]"
        />
      </div>

      <div className="w-full h-[200px] bg-gray  px-30 flex items-center justify-center">
        <div className="flex w-4/6 justify-between items-center">
          <div className="flex flex-col justify-center items-center text-[24px]">
            <p>350</p>
            <p className="font-bold">Statistics</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[24px]">
            <p>350</p>
            <p className="font-bold">Statistics</p>
          </div>
          <div className="flex flex-col justify-center items-center text-[24px]">
            <p>350</p>
            <p className="font-bold">Statistics</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[800px] bg-falcon pt-40 pl-14">
        <p className="text-[70px]">Content Content Content</p>
        <p className="text-[70px]">Content Content</p>
      </div>
    </div>
  );
};

export default Home;
