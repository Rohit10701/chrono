import ResizableWrapper from "@/components/wrappers/Resizable/Resizable";
import ResizableGroup from "@/components/wrappers/Resizable/ResizableGroup";

const Page = () => {
  return (
    <ResizableGroup>
        <ResizableWrapper side="horizantal">
          <div className="bg-pink-300 w-full h-full">
            This is a resizable content!
          </div>
        </ResizableWrapper>
        <ResizableWrapper side="horizantal">
          <div className="bg-blue-300 w-full h-full">
            This is a resizable content!
          </div>
        </ResizableWrapper>
    </ResizableGroup>
  );
};
export default Page;
