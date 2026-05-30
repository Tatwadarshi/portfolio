
// const Button = ({ className, id, text, action=()=>{console.log("Button clicked")}, params, arrow, arrowDirection}) => {
//   const btn = document.createElement('button');
//   btn.classList.add('cta-wrapper');
//   // const classlist = [...className.split(' ') ?? '']
//   btn.classList.add(...className.split(' ') ?? '');
//   btn.id = id;
//   btn.onclick = (e)=>{
//     e.preventDefault();
//     action(params);
//   };

import { asset_server_base_url } from "../constants";

//   const btnContent = document.createElement('div')
//   btnContent.classList.add('cta-button')
//   btnContent.classList.add('group')

//   const bgCircle = document.createElement('div');
//   const btnTxt = document.createElement('p');
//   btnTxt.classList.add('text');
//   btnTxt.innerText += text;
//   bgCircle.classList.add('bg-circle');
//   if (arrow) {
//     btnContent.innerHTML += bgCircle
//   }
//   btnContent.innerHTML += btnTxt;
//   if (arrow) {
//     btnContent.innerHTML += `
//                               <div className="arrow-wrapper">
//                                   <img src="/images/arrow-down.svg" alt="arrow" />
//                               </div>
//                             `
//   }
//   btn.innerHTML += btnContent;
//   return
//   (
//     <button 
//     onClick={(e)=>{
//       e.preventDefault();
//       action(params);
//     }}
//     className={`cta-wrapper ${className ?? ''}`} id={id}
//     >
//       <div className="cta-button group ">
//         <div className=" bg-circle" />
//             <p className="text">{text}</p>  
//               <div className="arrow-wrapper">
//                   <img src="/images/arrow-down.svg" alt="arrow" />
//               </div>
//       </div>
//     </button>
//   )
// }

// export default Button


const Button = ({ 
  className = "", 
  id, 
  type,
  text, 
  action = () => { console.log("Button clicked") }, 
  params, 
  arrow, 
  arrowDirection 
}) => {
  return (
    <button 
      type = {type ?? "button"}
      id={id} 
      onClick={action} 
      className={`cta-wrapper ${className}`}
    >
      <div className={`cta-button group `}>
        {arrow && <div className="bg-circle"></div>}
        {arrow || <div className="bg-btn"></div>}
        <p className={`text ${arrow ? "arrow-btn": ""}`}>{text}</p>
        
        {arrow && (
          <div className="arrow-wrapper">
            <img 
              className={arrowDirection}
              src={asset_server_base_url+"/images/arrow-down.svg"} 
              alt="arrow"  
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
