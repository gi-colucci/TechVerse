import React from 'react';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { Sobre } from './components/sobre/Sobre';
import { Valores } from './components/valores/Valores';
import { Projects } from './components/projects/Projects';
import { Form } from './components/formulario/Form';
import { Footer } from './components/footer/Footer';

export function App() {

  return (

    <>
     <body>
        <Header />
        <Banner/>
        <Sobre/>
        <Valores/>
        <Projects/>
        <Form/>
        <Footer />
      </body>
    </>
  )
}