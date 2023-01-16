import React from "react";

interface InterierPageProps {
  pageId: any;
  children?: React.ReactNode | React.ReactNode[];
}

const PageWrapper = (props: InterierPageProps) => {
  return (
    <section
      className="PageWrapper min-h-[100vh] w-full flex flex-col p-10  bg-green-100/50  "
      id={props.pageId}
    >
      {props.children}
    </section>
  );
};

export default PageWrapper;
