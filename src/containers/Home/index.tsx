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
      <div className="w-full h-[1200px] bg-lightBlue pt-40 pl-10">
        <p className="text-[70px]">
          Content Content Content
          <TextTransition className="inline" springConfig={presets.gentle}>
            <span>{TEXTS[textIndex % TEXTS.length]}</span>
          </TextTransition>
          Content Content
        </p>
      </div>

      <div className="flex w-full">
        <ContentBox
          title="Content"
          content="Content"
          backgroundColor="bg-falcon"
          width="w-1/3"
          height="h-[550px]"
        />
        <ContentBox
          title="Content"
          content="Content"
          backgroundColor="bg-gray"
          width="w-1/3"
          height="h-[550px]"
        />
        <ContentBox
          title="Content"
          content="Content"
          backgroundColor="bg-lightBlue"
          width="w-1/3"
          height="h-[550px]"
        />
      </div>

      <div className="w-full h-[1200px] bg-falcon"></div>
    </div>
  );
};

export default Home;
