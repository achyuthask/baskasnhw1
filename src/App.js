
import './App.css';
import React from 'react';


const App=()=>{ 
 

  const title=  React.createElement('h1', {}, 'Toppics coverd');
 const link1= React.createElement('a', { href: " " }, 'linkin');
 const link2= React.createElement('a', { href: " " }, 'HTML-strturing web');
 const link3= React.createElement('a', { href: " " }, 'css-styling web');
 const  para1=React.createElement('p' , {}, 'Lorem ipsum dolor sit amet');

 
  const  para2=React.createElement('p', {}, ' Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet');
  const  para3=React.createElement('p', {}, 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet');
  const  para4=React.createElement('p', {}, 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet');
return(
<>
<div className='App'>
{title}
{para1}
{link1}
{para2}
{para3}
{link2}
{para3}

{link3}
{para4}


</div>

</>
);

};


export default App;
