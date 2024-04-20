import {Banner} from "../banner/Banner.jsx";
import s from './mainBlock.module.sass'
import TextContent from "../textContent/TextContent.jsx";
export const MainBlock = () => {
    return (
        <section className={s.main}>
            <div className="container">
                <div className={s.main__inner}>
                    <Banner/>
                    <TextContent/>
                </div>
            </div>
        </section>
    );
};

