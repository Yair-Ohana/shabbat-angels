import ContentBox from "../../components/ContentBox";

const Home = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[1200px] bg-lightBlue"></div>
      <div className="flex w-full">
        <ContentBox
          title="test"
          content="test"
          backgroundColor="bg-falcon"
          width="w-1/3"
          height="h-[550px]"
        />
        <ContentBox
          title="test"
          content="test"
          backgroundColor="bg-gray"
          width="w-1/3"
          height="h-[550px]"
        />
        <ContentBox
          title="test"
          content="test"
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
