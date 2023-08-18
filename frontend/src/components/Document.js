import React from "react";
import "../assests/css/Document.css";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete, AiOutlineFileAdd } from "react-icons/ai";
import { FiEye } from "react-icons/fi";

const Document = (props) => {
  const isUploaded = props?.isUploaded;
  return (
    <>
      <div className="document">
        <div className="document-item">
          <span>{props?.document}</span>
          <div className="document-icon">
            {isUploaded ? (
              <>
                <FiEye className="document-view-icon" />
                <BiEdit className="document-edit-icon" />
                <AiOutlineDelete className="document-delete-icon" />
              </>
            ) : (
              <AiOutlineFileAdd className="document-add-icon" />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
