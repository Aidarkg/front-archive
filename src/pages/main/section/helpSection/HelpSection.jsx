import { useState } from "react";
import s from "./HelpSection.module.sass";

export const HelpSection = () => {
    const [openAnswer, setOpenAnswer] = useState(null);

    const toggleAccordion = (ind) => setOpenAnswer(openAnswer === ind ? null : ind);

    const accordionItems = [
        {
            id: 1,
            question: "Что такое архив?",
            answer: `Идейные соображения высшего порядка,
                    а также новая модель организационной деятельности, 
                    а также свежий взгляд на привычные вещи
                    — безусловно открывает новые горизонты для поставленных обществом задач.`
        },
        {
            id: 2,
            question: "Что такое архив?",
            answer: `Идейные соображения высшего порядка,
                    а также новая модель организационной деятельности, 
                    а также свежий взгляд на привычные вещи
                    — безусловно открывает новые горизонты для поставленных обществом задач.`
        },
        {
            id: 3,
            question: "Что такое архив?",
            answer: `Идейные соображения высшего порядка,
                    а также новая модель организационной деятельности, 
                    а также свежий взгляд на привычные вещи
                    — безусловно открывает новые горизонты для поставленных обществом задач.`
        },
        {
            id: 4,
            question: "Что такое архив?",
            answer: `Идейные соображения высшего порядка,
                    а также новая модель организационной деятельности, 
                    а также свежий взгляд на привычные вещи
                    — безусловно открывает новые горизонты для поставленных обществом задач.`
        },
        {
            id: 5,
            question: "Что такое архив?",
            answer: `Идейные соображения высшего порядка,
                    а также новая модель организационной деятельности, 
                    а также свежий взгляд на привычные вещи
                    — безусловно открывает новые горизонты для поставленных обществом задач.`
        },
    ];

    return (
        <section className={s.helpSection}>
            <h2 className={s.helpSection__heading}>Справочный раздел</h2>

            <div className={s.helpSection__accordeon_container}>
                {accordionItems.map((item, index) => (
                    <div key={item.id} className={s.helpSection__accordeon_item}>
                        <div
                            className={s.helpSection__accordeon_question}
                            onClick={() => toggleAccordion(index)}>
                                <h4>{item.question}</h4>
                        </div>
                        {openAnswer === index &&
                            <div className={s.helpSection__accordeon_answer}>
                                <h4>{item.question}</h4>
                                <p>{item.answer}</p>
                            </div>}
                    </div>
                ))}
            </div>
        </section>
    );
};