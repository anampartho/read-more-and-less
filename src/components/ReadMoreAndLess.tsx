import React, { useEffect, useState } from "react";

interface ReadMoreAndLess {
  charLimit?: number;
  readMoreText?: string;
  readLessText?: string;
  stopPropogation?: boolean;
  preventDefault?: boolean;
  text: string;
}

export const ReadMoreAndLess = ({
  charLimit: originalCharLimit = 150,
  readMoreText = "Read More",
  readLessText = "Read Less",
  stopPropogation = true,
  preventDefault = true,
  text,
}: ReadMoreAndLess) => {
  const [trimmedText] = useState(text.trim());
  const [content, setContent] = useState(<></>);
  const [charLimit, setCharLimit] = useState(originalCharLimit);

  const handlePropagationAndPrevention = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (stopPropogation) {
      e.stopPropagation();
    }
    if (preventDefault) {
      e.preventDefault();
    }
  };

  const readMoreHandler = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    handlePropagationAndPrevention(e);
    setCharLimit(trimmedText.length);
    getContent();
  };

  const readLessHandler = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    handlePropagationAndPrevention(e);

    setCharLimit(originalCharLimit);
    getContent();
  };

  const getContent = () => {
    if (trimmedText.length > charLimit) {
      return (
        <span className="read-more-and-less short-text">
          {trimmedText.substring(0, charLimit)}...
          <span
            className="readMoreText"
            style={{ color: "#007bff", cursor: "pointer" }}
            role="presentation"
            onClick={(e) => readMoreHandler(e)}
          >
            {readMoreText}
          </span>
        </span>
      );
    } else if (charLimit > originalCharLimit) {
      return (
        <span className="read-more-and-less long-text">
          {trimmedText}
          <span
            className="readLessText"
            style={{ color: "#007bff", cursor: "pointer" }}
            role="presentation"
            onClick={(e) => readLessHandler(e)}
          >
            {readLessText}
          </span>
        </span>
      );
    }

    return (
      <span className="read-more-and-less original-text">{trimmedText}</span>
    );
  };

  useEffect(() => {
    if (!trimmedText.length) return;

    setContent(getContent());
  }, [trimmedText, setContent, getContent]);

  return content;
};

export default ReadMoreAndLess;
