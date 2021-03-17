import React from 'react';
import Footer from '../../Components/Footer/Footer';
// Pages
import Boa from '../Boa/Boa';
import Green from '../GreenPython/Green';
import Agama from '../Agama/Agama';
import Chameleon from '../Chameleon/Chameleon';
import Basilisk from '../Basilisk/Basilisk';
import Snake from '../Snake/Snake';

import './Blog.css';
const Blog = () => {
  return (
    <>
      <Boa />
      <Green />
      <Agama />
      <Chameleon />
      <Basilisk />
      <Snake />
      <Footer />
    </>
  );
};

export default Blog;
