import ResizableWrapper from "@/components/wrappers/Resizabble";

const Page = () => {
  return (
    <div className="">
    <ResizableWrapper>
        <div className="bg-pink-300 w-full h-full">
          This is a resizable content!
        </div>
    </ResizableWrapper>
    <ResizableWrapper>
        <div className="bg-blue-300 w-full h-full">
          This is a resizable content!
        </div>
    </ResizableWrapper>
    </div >
  );
};
export default Page;
