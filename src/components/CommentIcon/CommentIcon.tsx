interface PropsCommentIcon {
  onClickHandler: ()=> void;
}

const CommentIcon = ({ onClickHandler }: PropsCommentIcon) => {
  return (
    <svg
      onClick={onClickHandler}
      height="50px"
      version="1.1"
      viewBox="0 0 519 519"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <desc />
      <defs>
        <radialGradient
          cx="50%"
          cy="21.9311119%"
          fx="50%"
          fy="21.9311119%"
          id="radialGradient-1"
          r="87.8884669%"
        >
          <stop offset="0%" stopColor="#5C79E5" />
          <stop offset="100%" stopColor="#3F59CD" />
        </radialGradient>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        id="Page-1"
        stroke="none"
        strokeWidth="1"
      >
        <g id="Artboard" transform="translate(-1563.000000, -153.000000)">
          <g
            fill="url(#radialGradient-1)"
            id="Group-8"
            transform="translate(718.000000, 153.000000)"
          >
            <circle cx="1104.5" cy="259.5" id="Oval" r="259.5" />
          </g>
          <path
            d="M1949,266 C1962.80712,266 1974,277.192881 1974,291 L1974,499.476352 C1974,513.283471 1962.80712,524.476352 1949,524.476352 L1835.456,524.476 L1753.37323,579.156663 C1751.07505,580.687611 1747.97092,580.065641 1746.43997,577.767454 C1745.89304,576.946425 1745.60121,575.98195 1745.60121,574.995429 L1745.601,524.476 L1699,524.476352 C1685.19288,524.476352 1674,513.283471 1674,499.476352 L1674,291 C1674,277.192881 1685.19288,266 1699,266 L1949,266 Z"
            fill="#FFFFFF"
            id="Rectangle-2"
          />
        </g>
      </g>
    </svg>
  );
};

export default CommentIcon;
