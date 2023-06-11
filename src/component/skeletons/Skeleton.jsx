import React from "react";

const Skeleton = ({ classes }) => {
  const classNames = `skeleton ${classes} animate-pulse`;
  return <div className={classNames}>Skeleton</div>;
};

export default Skeleton;
