import React from 'react';
import {useFetchPostByIdQuery} from "../../shared/api/PostService";
import Loader from "../../shared/ui/Loader/Loader";
import {useParams} from "react-router";
import MyButton from "../../shared/ui/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

const PostIdPage = () => {

    const params = useParams();
    const {data, error, isLoading} = useFetchPostByIdQuery(params.id);
    const router = useNavigate()

    return (
        <>
            {error
                ?
                <h1 className="notification-container">Возникла ошибка: {error}</h1>
                :
                <>
                    {isLoading &&
                        <div className="notification-container">
                            <h1 className="notification-text">Загрузка...</h1>
                            <Loader/>
                        </div>
                    }

                    {data &&
                        <div className="post-container">
                            <h1 className="post-title">
                                {data.id}. {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
                            </h1>
                            <div className="post-body">
                                {data.body.charAt(0).toUpperCase() + data.body.slice(1)}
                            </div>
                            <div className="post__btns">
                                <MyButton onClick={()=> router(`/posts`)}>
                                    Назад
                                </MyButton>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    );
};

export default PostIdPage;
