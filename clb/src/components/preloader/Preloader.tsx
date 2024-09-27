import React from "react";
import styles from "./Preloader.module.css";

export default function Preloader() {
  return (
    <>
      <div className="top-0 left-0 z-50 fixed flex justify-center items-center bg-black w-screen h-screen">
        <div className={styles.loader}></div>
      </div>
    </>
  );
}
