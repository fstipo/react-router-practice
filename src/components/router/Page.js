import React from 'react';

const Page = ({ title }) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <section className="m-5 section__border"></section>
      </main>
    </>
  );
};

export default Page;
