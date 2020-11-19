import React from 'react'


function CLists() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
  const personList = persons.map(
      person => <Person key={person.id} person={person} />
    )
  return (
    <React.Fragment>{personList}</React.Fragment>
  )
}

// functional component

const Person = ({person : {id,name,age,skill}}) => {
  return (
    <React.Fragment>
        <p>{id} : {name} is {age} years old. He knows {skill}</p>    
    </React.Fragment>
  )
}

export default CLists

