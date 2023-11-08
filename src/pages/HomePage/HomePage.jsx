import React from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../../shared/ui/MyButton/MyButton";

const HomePage = () => {
    const router = useNavigate()

    return (
        <div className="contacts">
            <h1 className="contacts-title">Тестовое задание компании ПИКАССО</h1>
            <p className="contacts-text"><span className="contacts-accent">Вакансия:</span> Frontend-разработчик (React)</p>
            <p className="contacts-text"><span className="contacts-accent">Выполнил:</span> Александр Мурашов</p>
            <p className="contacts-text"><span className="contacts-accent">GitHub:</span> <a className="contacts-link" target={"_blank"} rel="noreferrer" href="https://github.com/ZaprostoNeprosto">@ZaprostoNeprosto</a></p>
            <div className="post__btns post__btns_main">
                <MyButton onClick={()=> router(`/posts`)}>
                    Перейти к постам
                </MyButton>
            </div>
        </div>
    );
};

export default HomePage;
