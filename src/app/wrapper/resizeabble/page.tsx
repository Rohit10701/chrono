import ResizableWrapper from "@/components/wrappers/Resizabble";

interface MyComponentProps {
  // ... other props
}

function MyComponent(props: MyComponentProps) {
  const handleResize = (newSize: { width: number; height: number }) => {
    console.log("New size:", newSize);
  };

  return (
    <ResizableWrapper onResize={handleResize} style={{ backgroundColor: "lightblue" }}>
      This is a resizable content!
    </ResizableWrapper>
  );
}