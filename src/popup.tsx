import { useState, useRef, useEffect } from "react"
import Typed from 'typed.js';


function IndexPopup() {
  // const [data, setData] = useState("")
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['a new web3 wallet', 'Daism', 'ignite web3.0'],
      typeSpeed: 100,
      loop: true,
      backSpeed: 50,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    // <div
    //   style={{
    //     padding: 50
    //   }}>
    //   <h2>
    //     Welcome to {""}
    //     <br />
    //     <a href="https://test.daism.io/" target="_blank">
    //     Basique
    //     </a>{""}
    //     <br /> 
    //     A new web3 wallet
    //   </h2>
    //   <input onChange={(e) => setData(e.target.value)} value={data} />
    // </div>
    <div style={{ width: '300px', height: '500px',display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <div style={{textAlign:'center'}}>
        <h1> Welcome to </h1>
        <h1> Basique </h1>
        <div className='conmtainer1' style={{ minHeight: '100px' }}>
          <h1 ref={el}></h1>
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
