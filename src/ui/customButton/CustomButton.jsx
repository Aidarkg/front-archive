import "./CustomButton.sass";
export const CustomButton = ({
     text,
     onClick,
     className,
     media,
     alt,
     children,
     type
}) => {

    return (
        <button type={type} onClick={onClick} className={className}>
            {text}
            {children}
            <img src={media} alt={alt} />
        </button>
    );
};


