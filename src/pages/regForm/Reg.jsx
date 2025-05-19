import './Reg.module.css'
import Header from '../../components/header/Header'
import Form from '../../components/form/Form';
import Footer from "../../components/footer/Footer";


function Join () {
  
    return (
    <>
   	 <Header />
    	 <main>
      	 
   				 <section>
   		     <h1>
   		         Join us in the world of geo Quizzes!
   		     </h1>
 			   </section>
        <Form />
 	   	</main>
        <Footer />
    </>
  )
};

export default Join;