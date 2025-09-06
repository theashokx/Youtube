import React from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

const Comments = ({ info }) => {
  if (!info || !info.topLevelComment) return null;

  const { snippet } = info.topLevelComment;
  const {
    authorDisplayName,
    textOriginal,
    updatedAt,
    likeCount,
    authorProfileImageUrl,
  } = snippet;

  return (
    <div className="flex gap-3 py-3 border-b border-gray-200">
      <img
        src={authorProfileImageUrl}
        alt={authorDisplayName}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-col w-full">
        <div>
          <span className="font-bold text-black hover:underline cursor-pointer">
            {authorDisplayName}
          </span>
          <p className="text-sm text-gray-800 mt-1">{textOriginal}</p>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-xs mt-2">
          <span className="flex items-center gap-1 cursor-pointer">
            <ThumbUpAltOutlinedIcon className="text-[14px]" />
            {Number(likeCount).toLocaleString()}
          </span>
          <span>{new Date(updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
