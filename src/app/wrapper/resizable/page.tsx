import ResizableWrapper from "@/components/wrappers/Resizable/Resizable";
import ResizableGroup from "@/components/wrappers/Resizable/ResizableGroup";

const Page = () => {
  return (
    <ResizableGroup>
      <div className="flex">
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
      </div>
    </ResizableGroup>
  );
};
export default Page;
