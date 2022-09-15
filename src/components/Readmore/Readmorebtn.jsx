import React, { useState } from "react";

const ReadMore = (props) => {
  const [text, setText] = useState(props.content);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p
      className="text"
      style={{
        height: "6rem",
        overflow: "auto",
      }}
    >
      {text?.length > 0 ? (isReadMore ? text?.slice(0, 80) : text) :(<>
      Click On <strong>"Read Full Article" </strong>to get full information</>)}
      <span onClick={toggleReadMore} className="read-or-hide">
        {text?.length > 75 ? (
          isReadMore ? (
            <span style={{ fontWeight: "650" }}>...show more </span>
          ) : (
            <span style={{ fontWeight: "650" }}>
              <br />
              ...show less
            </span>
          )
        ) : (
          text
        )}
      </span>
    </p>
  );
};

export default ReadMore;
