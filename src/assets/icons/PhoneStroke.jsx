export const PhoneStroke = ({width, height, color }) => {
   return (
      <svg
          width={width}
          height={height}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
      >
         <defs>
            <clipPath id="clip1577_9052">
               <rect
                  id="phone-stroke"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fillOpacity="0"
               />
            </clipPath>
         </defs>
         <rect
            id="phone-stroke"
            width="24.000000"
            height="24.000000"
            fill="#FFFFFF"
            fillOpacity="0"
         />
         <g clipPath="url(#clip1577_9052)">
            <path
               id="Vector"
               d="M9.36 10.68C10.3 12.32 11.67 13.69 13.31 14.63L14.2 13.39C14.49 12.98 15.05 12.85 15.49 13.09C16.9 13.86 18.45 14.33 20.07 14.46C20.59 14.5 21 14.93 21 15.46L21 19.92C21 20.43 20.61 20.86 20.1 20.91C19.57 20.97 19.03 21 18.5 21C9.93 21 3 14.06 3 5.5C3 4.96 3.02 4.42 3.08 3.89C3.13 3.38 3.56 3 4.07 3L8.53 3C9.06 3 9.49 3.4 9.53 3.92C9.66 5.54 10.13 7.09 10.9 8.5C11.14 8.94 11.01 9.5 10.6 9.79L9.36 10.68ZM6.84 10.02L8.74 8.66C8.2 7.5 7.83 6.27 7.64 5L5 5C5 5.16 5 5.33 5 5.5C5 12.95 11.04 19 18.5 19C18.66 19 18.83 18.99 19 18.99L19 16.35C17.72 16.16 16.49 15.79 15.33 15.25L13.97 17.15C13.42 16.94 12.89 16.69 12.38 16.4L12.32 16.37C10.36 15.25 8.74 13.63 7.62 11.67L7.59 11.61C7.3 11.1 7.05 10.57 6.84 10.02Z"
               fill={color}
               fillOpacity="1.000000"
               fillRule="nonzero"
            />
         </g>
      </svg>
   );
};

export default PhoneStroke;