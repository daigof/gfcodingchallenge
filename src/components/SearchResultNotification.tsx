import type { FC } from "react";
import Modal, { useModal } from "react-minimal-modal";

import { type ApiResultType } from "~background";
import { pickRandomStringFromArray, type Unpacked } from "~utils";

type Props = {
  websiteInfo: Unpacked<ApiResultType>;
};

const buttonStyles = {
  background: "none",
  margin: "16px 0",
  padding: "8px",
  border: "1px solid #fff",
  width: "50px",
  height: "50px",
  cursor: "pointer",
  borderRadius: "50%"
};

const modalTitleStyles = {
  fontSize: "18px",
  color: "black",
  margin: "16px 0 0 0"
};

const blockquoteStyles = {
  fontSize: "16px",
  fontStyle: "italic",
  color: "black",
  border: "3px double #bde7b8",
  borderRadius: "8px",
  padding: "8px",
  margin: "16px"
};

const SearchResultNotification: FC<Props> = ({ websiteInfo }) => {
  const { isVisible, toggle } = useModal();

  return (
    <>
      <button type="button" onClick={toggle} style={buttonStyles}>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M15.133 10.632v-1.8a5.407 5.407 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.944.944 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175Zm-13.267-.8a1 1 0 0 1-1-1 9.424 9.424 0 0 1 2.517-6.39A1.001 1.001 0 1 1 4.854 3.8a7.431 7.431 0 0 0-1.988 5.037 1 1 0 0 1-1 .995Zm16.268 0a1 1 0 0 1-1-1A7.431 7.431 0 0 0 15.146 3.8a1 1 0 0 1 1.471-1.354 9.425 9.425 0 0 1 2.517 6.391 1 1 0 0 1-1 .995ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
        </svg>
      </button>

      <Modal
        visible={isVisible}
        toggle={toggle}
        title={`Search result notification for company: ${websiteInfo.name}`}>
        <h3 style={modalTitleStyles}>Message of the day:</h3>
        <blockquote style={blockquoteStyles}>
          {pickRandomStringFromArray(websiteInfo.messages)}
        </blockquote>
      </Modal>
    </>
  );
};

export default SearchResultNotification;
