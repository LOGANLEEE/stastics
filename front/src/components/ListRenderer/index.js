import React from 'react';
import Wrapper from './Wrapper';

function ListRenderer(props) {

    return (
        <Wrapper>
            {props.data.map(({ id, title,
                author,
                registeredAt,
                hitCount,
                link,
                from,
                createdAt }) => (
                    <div key={id}>
                        <p>
                            ========================
                    <br />
                            제목 : {title}
                            <br />
                            저자 : {author}
                            <br />
                            등록일 : {registeredAt}
                            <br />
                            조회수 : {hitCount}
                            <br />
                            링크 : {link}
                            <br />
                            출처 : {from}
                            <br />
                            생성일 : {createdAt}
                            <br />
                            ========================
                </p>
                    </div>
                ))
            }
        </Wrapper>
    )
}

export default ListRenderer;