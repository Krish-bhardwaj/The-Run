import React ,{useState} from 'react'
import Modalsprite from './Modalsprite';
import Spriteimage from './Spriteimage';
const Sprite = () => {
  const [titl,setTitl] = useState("");
  const [health,setHealth] = useState(0);
  const [speed,setSpeed] = useState(0);
  const [jump,setJump] = useState(0);



  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <a className='modalclass'
      onClick={() => {
        setModalOpen(true);
        console.log("true");
        setTitl("SPRITE 1");
        setHealth(20);
        setJump(20);
        setSpeed(20);
      }} >
    <Spriteimage title={"SPRITE 1"} img={"https://res.cloudinary.com/rohangotwal/image/upload/v1668677235/Blog/dino_j81o8g.png"}/></a>
{modalOpen && <Modalsprite title1={titl} health={health} speed={speed} jump={jump} setOpenModal={setModalOpen} />}
</>
  )
}

export default Sprite