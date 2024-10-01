import Link from "next/link"
// export default function Footer() {
//     return(
//         <div className="footer">
//             <ul className='footer-buttons'>
   
//    <a href="https://www.linkedin.com">LinkedIn</a>
//    <a href="https://www.github.com">Github</a>
//    <a href="https://www.facebook.com">Facebook</a>
//    </ul>

//         </div>
//     )
// }
// const Footer = () => {
//     return (
//       <footer className="footer">
//         <div className="footer-buttons">
//           <button>Button 1</button>
//           <button>Button 2</button>
//           <button>Button 3</button>
//         </div>
//       </footer>
//     );
//   };
  
//   export default Footer;
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-buttons">
        <a href="https://www.linkedin.com/in/hina-naeem-a7345a108/" target="_blank" rel="noopener noreferrer" className="footer-link">
          LinkedIn
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          Facebook
        </a>
        <a href="https://github.com/hinanaeem" target="_blank" rel="noopener noreferrer" className="footer-link">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;

       
  