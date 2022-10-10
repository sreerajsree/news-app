import React from 'react'

const EOM = ({employee}) => {
    console.log(employee);
  return (
    <div>{employee.name}</div>
  )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/sreerajsree/news-app/employeeOfTheMonth'
    )
    const employee = await apiResponse.json();

    return {
        props: {
            employee : employee
        },
    };
};

export default EOM