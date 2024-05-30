import { useRef, useState, useEffect } from "react";
import classes from "./Accordion.module.sass";
import arrow from "../../pages/FAQ/img/arrow.svg";
import { Typography } from "../../Typography/Typography";

export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
   const itemRef = useRef(null);
   const [isRotated, setIsRotated] = useState(false);

   const handleRotate = () => {
      setIsRotated((prev) => !prev);
   };

   useEffect(() => {
      if (isOpen) {
         itemRef.current.style.maxHeight = `${itemRef.current.scrollHeight}px`;
      } else {
         itemRef.current.style.maxHeight = "0px";
      }
   }, [isOpen]);

   return (
      <li className={classes.accordion_item}>
         <button
            className={`${classes.accordion_header} ${isOpen ? classes.opena : ""}`}
            onClick={() => {
               onClick();
               handleRotate();
            }}
         >
            <Typography className={`${classes.textFaq} ${isOpen ? classes.fullText : ""}`} variant="h5">{faqItem.questionName}</Typography>
            <img
               className={classes.accordion_arrow}
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
            ref={itemRef}
            className={`${classes.accordion_collapse} ${isOpen ? classes.open : ""}`}
         >
            <div className={classes.accordion_body}>
               {faqItem.questionDescription}
            </div>
         </div>
      </li>
   );
};
