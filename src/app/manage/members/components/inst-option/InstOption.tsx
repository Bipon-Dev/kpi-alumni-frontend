"use client";

import React from "react";
import iconDotFill from "./icons/icon-vertical-dot-fill.svg";
import iconDotLine from "./icons/icon-vertical-dot-line.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/lib/ui/dropdown-menu";
import { cn } from "@/utils/cn";

// children is zero then show empty option
const OptionMenu: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="text-sm p-1.5 px-2 rounded-sm select-none cursor-default flex items-center relative hover:text-accent-foreground hover:bg-accent transition-all duration-200">
      {children || "No option available"}
    </div>
  );
};

const DropDownItems: React.FC<{ isChildren?: React.ReactNode }> = ({
  isChildren,
}) => {
  if (
    !!isChildren === false ||
    (Array.isArray(isChildren) && isChildren.length === 0) ||
    (typeof isChildren === "string" && isChildren.length === 0)
  ) {
    return <OptionMenu />;
  }

  if (!Array.isArray(isChildren)) {
    return (
      <DropdownMenuItem className="!p-0 [&>button]:!px-2 [&>button]:!py-2">
        {isChildren}
      </DropdownMenuItem>
    );
  }

  return isChildren?.map((item, i) => {
    if (item === null || item?.props?.children === undefined) return null;
    return (
      <DropdownMenuItem
        key={i}
        className="!p-0 [&>button]:!px-2 [&>button]:!py-2"
      >
        {item}
      </DropdownMenuItem>
    );
  });
};

export const InstOption: React.FC<{
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}> = ({ children, disabled, className }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "group/button relative size-[31px] outline-none [&>img]:last-of-type:data-[state=open]:opacity-100 select-none block",
          className,
          {
            "pointer-events-none grayscale":
              (Array.isArray(children) &&
                children.every((item) => !!item === false)) ||
              disabled,
          }
        )}
        disabled={disabled}
      >
        <img
          src={iconDotLine}
          alt="dot icon line"
          className="size-full absolute top-0 left-0 opacity-100 group-hover/button:opacity-0 transition-all duration-200"
          width={100}
          height={100}
        />
        <img
          src={iconDotFill}
          alt="dot icon fill"
          className="size-full absolute top-0 left-0 opacity-0 group-hover/button:opacity-100 transition-all duration-200"
          width={100}
          height={100}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="px-1 [&_button]:px-1 [&_button]:w-full [&_button]:text-left"
      >
        <DropDownItems isChildren={children} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
