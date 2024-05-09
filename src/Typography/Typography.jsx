import styles from "./Typography.module.sass";

export const Typography = (props) => {
    const {
        variant,
        weight = "",
        children,
        className,
        color = "",
        truncate = false,
        id,
    } = props;

    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        button: "p",
        body: "p",
        smallBody: "p",
        extraSmallBody: "p",
        span: "span"
    };

    const classNamedGenerated = [
        styles[variant],
        styles[weight],
        styles[color],
        className,
    ]
        .join(" ")
        .trim();

    const truncateString = (str, maxNumber) => {
        if (typeof str === "string") {
            return str.length <= maxNumber ? str : str.slice(0, maxNumber) + "...";
        }
        return str;
    };

    const TagName = Tags[variant in Tags ? variant : "body"];

    return (
        <TagName id={id} className={classNamedGenerated}>
            {!truncate ? children : truncateString(children, truncate)}
        </TagName>
    );
};



