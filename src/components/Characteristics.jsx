import React , {useState} from 'react'
import Modal from './Modal';
import Marketcard from './Marketcard'
const Characteristics = () => {
  const [titl,setTitl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("ABC Charac");
      }} >
    <Marketcard title={"ABC Charac"}/></a>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("FGH Charac");

      }} ><Marketcard title={"FGH Charac"}/></a>
      {modalOpen && <Modal title1={titl} body1={"Buy this to get double heath"} setOpenModal={setModalOpen} />}
    </>
  )
}

export default Characteristics