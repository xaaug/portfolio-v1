"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Project({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
      divRef.current.style.setProperty(
        "--spotlight-color",
        "rgba(58, 13, 163, 0.75)",
      );
    }
  };
  return (
    <>
      <div
        className="card-spotlight flex flex-col gap-3"
        onMouseMove={handleMouseMove}
        ref={divRef}
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href={""}
            className="text-base border-b border-transparent"
            initial={{ borderColor: "transparent" }}
            whileHover={{ borderColor: "#fff" }} // Change to your preferred color
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.a>

          <ArrowUpRightIcon className="size-4" />
        </motion.div>
        <p className="text-sm">{content}</p>
      </div>
    </>
  );
}
