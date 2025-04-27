import React from "react";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
    replies: [
      {
        name: "Virat Kohli",
        text: " this is comment given by kohli",
        replies: [
          {
            name: "Virat Kohli",
            text: " this is comment given by kohli",
            replies: [
              {
                name: "Virat Kohli",
                text: " this is comment given by kohli",
                replies: [
                  {
                    name: "Virat Kohli",
                    text: " this is comment given by kohli",
                    replies: [
                      {
                        name: "Virat Kohli",
                        text: " this is comment given by kohli",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
  },
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
  },
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
  },
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
  },
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
  },
  {
    name: "Virat Kohli",
    text: " this is comment given by kohli",
  },
];

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      {/* <Comment data={commentData[0]} /> */}
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
