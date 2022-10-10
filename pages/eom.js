import React from "react";
import Image from "next/image";

const EOM = ({ employee }) => {
  console.log(employee);
  return (
    <>
      <div>
        <h1>About Dev</h1>
      </div>
      <div>
        <p>{employee.name}</p>
        <p>{employee.position}</p>
        <Image src={employee.image} width={50} height={50} layout="responsive" />
        <p>{employee.description}</p>
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
