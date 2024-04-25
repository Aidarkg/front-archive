import s from "./CustomInput.module.sass";

export const CustomInput = ({ label, value, onChange }) => {
   return (
      <div className={s.customInput}>
         <label className={s.label}>{label}</label>
         <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={s.input}
         />
      </div>
   );
};


