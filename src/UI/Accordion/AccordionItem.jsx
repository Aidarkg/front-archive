import { useRef, useState } from "react";
import css from "./Accordion.module.sass";
import arrow from "../../pages/FAQ/img/arrow.svg";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
   const itemRef = useRef(null);
   const [isRotated, setIsRotated] = useState(false);

   const handleRotate = () => {
      setIsRotated(prev => !prev);
   };

   return (
      <li className={css.accordion_item}>
         <button
            className={`${css.accordion_header} ${isOpen ? css.opena : ""}`}
            onClick={() => {
               onClick();
               handleRotate();
            }}
         >
            {faqItem.questionName}
            <img
               className={css.accordion_arrow}
               src={arrow}
               alt="arrow"
               style={{
                  transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                  marginLeft: "10px",
               }}
            />
         </button>
         <div
            className={`${css.accordion_collapse} ${isOpen ? css.open : ""}`}
            style={
               isOpen
                  ? { height: itemRef.current.scrollHeight }
                  : { height: "0px" }
            }
         >
            <div className={css.accordion_body} ref={itemRef}>
               {faqItem.questionDescription}
            </div>
         </div>
      </li>
   );
};
