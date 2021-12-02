const dic1 = {
    name: 'shikha',
    age: 23,
    color: 'white'
  }
  
  const dic2 = {
    hobby: 'engneer',
    year: 2021, 
    color: 'yellow'
  }
  
  const dic3 = {...dic1, ...dic2}
  console.log(dic3)