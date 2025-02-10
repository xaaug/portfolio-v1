'use client'

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import { motion } from "framer-motion";


export default function LinkButton({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <motion.div
      className="flex gap-1 items-center "
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: .8 }}
    >
      <a
        href={href}
        target="_blank"
        className="text-sm border-b w-max hover:border-none"
      >
        {title}
      </a>
      <ArrowUpRightIcon className="size-3" />
    </motion.div>
  );
}
