import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
    const router = useNavigate()

    const {title, body} = props.post

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {title}</strong>
                <div>
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
