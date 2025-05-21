import styles from './Join.module.css'
import Header from '../../components/header/Header'
import Form from '../../components/form/Form';
import Footer from "../../components/footer/Footer";
import { useState } from 'react';
import Modal from '../../components/modal/Modal';

function Join () {
  
    return (
    <>
   	 <Header />
    	 <main className={styles.join}>
      	 				
   		     <h1 className={styles.joinTitle}>
   		         Join us in the world of Geo Quizzes!
   		     </h1>
 			
        <Form className={styles.regForm}/>
 	   	</main>
        <Footer />
    </>
  )
};

export default Join;