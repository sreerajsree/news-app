import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";

const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <>
      <Head>
        <title>About Dev</title>
        <meta
          name="description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="og:image" content={employee.image} />
        <meta property="og:title" content="Employee Of The Month" />
        <meta
          property="og:description"
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property="twitter:image" content={employee.image} />
        <meta property="twitter:title" content="Employee Of The Month" />
        <meta
          property="twitter:description"
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
      <NavBar />
      <div className="max-w-[600px] mx-auto flex flex-col h-5/6 items-center justify-center">
        <div className="my-20">
          <h1 className="font-bold text-3xl text-center">About Dev</h1>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg my-5">{employee.name}</p>
          <p className="italic my-5">{employee.position}</p>
          <img
            className="rounded-full w-52 h-52 object-contain mx-auto shadow-lg"
            src={employee.image}
            alt="employee image"
          />
          <p className="text-sm my-5">{employee.description}</p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/sreerajsree/news-app/employeeOfTheMonth"
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee: employee,
    },
  };
};

export default EOM;
