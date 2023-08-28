import React from "react";

const ChatBar = ({
  task,
  ref,
  input,
  replyTo,
  createMessage,
  createReply,
  handleUnfocusInput,
  setInput,
}) => {
  const styles = {
    container: replyTo === null ? "md:pt-5" : "md:pt-3",
    placeholder: replyTo !== null && "placeholder:text-green-500",
    form: replyTo !== null && "md:border md:border-green-500 ",
  };

  const placeholder =
    replyTo !== null
      ? `Reply to @${replyTo.user.username}`
      : `Type ${task ? "Task" : "Message"}`;

  return (
    <div
      className={`z-40 w-full absolute bottom-[78px] md:bottom-0 md:h-[100px] md:px-7 md:pt-5 md:pb-5 py-3 border-t border-t-gray-600 bg-gray-700  md:border-t md:border-t-gray-600 ${styles.container}   `}
    >
      <form
        onSubmit={replyTo === null ? createMessage : createReply}
        className={`relative flex items-center bg-gray-700  md:bg-gray-600  ${styles.form}`}
      >
        {replyTo !== null && (
          <div
            onClick={handleUnfocusInput}
            className="absolute left-1.5 w-7 h-7 flex items-center justify-center bg-gray-900 hover:bg-gray-800 rounded-full  transition ease-in-out duration-200 cursor-pointer"
          >
            <XIcon />
          </div>
        )}
        <input
          ref={ref}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`w-full py-2 mx-5 px-5 md:mt-0 md:py-3 text-gray-400 bg-gray-800 md:bg-gray-600 rounded-full outline-none ${styles.placeholder}`}
          type="text"
          placeholder={placeholder}
        />
        <div className="md:hidden absolute right-[20px] md:right-0 px-5 h-full flex items-center justify-center bg-gray-900 cursor-pointer md:rounded-none hover:bg-black text-white font-semibold rounded-full transition ease-in-out duration-200">
          Send
        </div>
      </form>
    </div>
  );
};

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default ChatBar;
