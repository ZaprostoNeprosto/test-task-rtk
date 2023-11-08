import React from 'react';
import MyButton from "../../../../shared/ui/MyButton/MyButton";
import {useNavigate} from "react-router-dom"

const PostItem = (props) => {
    const router = useNavigate()
    const {title, body} = props.post

    return (
        <div className="post">
            <div className="post__content">
                <strong className="text-title">{props.post.id}. {title}</strong>
                <div className="text-body">
                    {body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> router(`/posts/${props.post.id}`)}>
                    Просмотр
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
