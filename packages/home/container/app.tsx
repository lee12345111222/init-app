import React from 'react'
import '../styles/index.scss';

const App: React.FC = () => {
  return <div>
    <p>world </p>
    <img src={require('./assets/img/test.png')} alt="" />
  </div>
}

export {
  App
}
