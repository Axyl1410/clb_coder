import React, { FC } from "react";
import styles from "./Anchor.module.css";

type AnchorProps = {
  href: string;
  text: string;
  className?: string;
};

const Anchor: FC<AnchorProps> = ({
  href,
  text,
  className: additionalClassNames,
}) => {
  const classNames = additionalClassNames ? ` ${additionalClassNames}` : "";

  return (
    <a
      className={`${styles.links} ${classNames} inline-block after:bg-black`}
      href={href}
      rel="noreferrer noopener"
      target="_blank"
    >
      {text}
    </a>
  );
};

export default Anchor;
