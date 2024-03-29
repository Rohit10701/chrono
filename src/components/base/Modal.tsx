import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";
const modalVariant = cva("relative bg-white p-8 rounded-lg", {
  variants: {
    variant: {
      dark: "bg-black text-white ",
      white: "bg-white text-black",
    },
    size: {
      sm: "h-[450px] w-[600px]",
      lg: "h-[550px] w-[800px]",
    },
  },
  defaultVariants: {
    variant: "dark",
    size: "sm",
  },
});

interface ModalProps extends VariantProps<typeof modalVariant> {
  isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: string;
  href?: string;
}
const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  variant,
  size,
  href,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      {
        <div
          className={cn(modalVariant({ variant, size }), className)}
          onClick={(e) => e.stopPropagation()}
        >
          {href ? (
            <>
              <iframe src={href} className="w-full h-full"/>
            </>
          ) : (
            <>{children}</>
          )}
        </div>
      }
    </div>
  );
};

interface ModalWrapperProps {
  children: React.ReactNode;
  className?: string;
}
export const ModalWrapper = ({ children, className }: ModalWrapperProps) => {
  return <div className={cn("w-full h-full", className)}>{children}</div>;
};

interface ModalTitleProps {
  children: React.ReactNode;
  className?: string;
}
export const ModalTitle = ({ children, className }: ModalTitleProps) => {
  return (
    <div className={cn("flex justify-center items-center p-3 ", className)}>
      {children}
    </div>
  );
};

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
}
export const ModalContent = ({ children, className }: ModalContentProps) => {
  return <div className={cn("m-10", className)}>{children}</div>;
};
export default Modal;
