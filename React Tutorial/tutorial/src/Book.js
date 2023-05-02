import React from 'react';

const Book = ({ img, title, author }) => {
  //   const { img, title, author } = props.book;
  //   attribute, eventHandler

  const clickHandler = () => {
    alert('Hello world');
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Example
      </button>
    </article>
  );
};

export default Book;
