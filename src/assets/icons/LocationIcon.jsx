export const LocationIcon = ({width, height, color }) => {
   return (
      <svg
         width={width}
         height={height}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
      >
         <desc>Created with Pixso.</desc>
         <defs>
            <clipPath id="clip1564_2218">
               <rect
                  id="location"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fillOpacity="0"
               />
            </clipPath>
         </defs>
         <rect
            id="location"
            width="24.000000"
            height="24.000000"
            fill="#FFFFFF"
            fillOpacity="0"
         />
         <g clipPath="url(#clip1564_2218)">
            <path
               id="Vector"
               d="M12 20.89L16.94 15.94C19.68 13.21 19.68 8.78 16.94 6.05C14.21 3.31 9.78 3.31 7.05 6.05C4.31 8.78 4.31 13.21 7.05 15.94L12 20.89ZM12 23.72L5.63 17.36C2.12 13.84 2.12 8.15 5.63 4.63C9.15 1.12 14.84 1.12 18.36 4.63C21.87 8.15 21.87 13.84 18.36 17.36L12 23.72ZM12 13C13.1 13 14 12.1 14 11C14 9.89 13.1 9 12 9C10.89 9 10 9.89 10 11C10 12.1 10.89 13 12 13ZM12 15C9.79 15 8 13.2 8 11C8 8.79 9.79 7 12 7C14.2 7 16 8.79 16 11C16 13.2 14.2 15 12 15Z"
               fill={color}
               fillOpacity="1.000000"
               fillRule="nonzero"
            />
         </g>
      </svg>
   );
};

export default LocationIcon;