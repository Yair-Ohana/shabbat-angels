interface Props {
  title: string;
  content: string;
  backgroundColor: string;
  width: string;
  height: string;
}

const ContentBox = ({
  title,
  content,
  backgroundColor,
  width,
  height,
}: Props) => {
  return (
    <div className={`relative m-5 ${width} ${height}`}>
      <div
        className={`${backgroundColor} w-full h-full bg-opacity-60 absolute right-0 top-0 left-0 bottom-0 rounded-2xl`}
      />
      <div
        className={`${backgroundColor} w-full h-full rounded-2xl transition-all ease-in duration-200 translate-x-0 translate-y-0 hover:translate-x-3 hover:-translate-y-3 border-black border p-4 cursor-pointer`}
      >
        <h3 className="text-[30px]">{title}</h3>
        <p className="text-lg">{content}</p>
      </div>
    </div>
  );
};

export default ContentBox;
