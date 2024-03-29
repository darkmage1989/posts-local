interface EditIconProps {
  onClickHandler: ()=> void;
}

const EditIcon = ({ onClickHandler }: EditIconProps) => {
  return (
    <svg
      onClick={onClickHandler}
      style={{ height: "50px", width: "50px" }}
      enableBackground="new 0 0 512 512"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M494,256c0,131.4-106.6,238-238,238S18,387.4,18,256S124.6,18,256,18S494,124.6,494,256z"
        fill="#4DB6AC"
      />
      <g>
        <path
          d="M157.5,331.8c4,60.4,75,66.3,89.4,26   c19.9-43.7,77.9-58,107.5-8.5"
          fill="#4DB6AC"
          stroke="#FFFFFF"
          strokeMiterlimit="10"
          strokeWidth="15"
        />
        <path
          d="M172,270.1l-7.2,7.3l-4,33.8l33.8-4l7.3-7.2   L305,196.8L275.1,167L172,270.1z"
          fill="none"
          stroke="#FFFFFF"
          strokeMiterlimit="10"
          strokeWidth="15"
        />
        <path
          d="M322.3,177.8L293.4,149l18.9-19   c1.8-1.9,4.9-1.9,6.9,0l22,22c1.9,1.8,1.9,4.9,0,6.9L322.3,177.8z"
          fill="none"
          stroke="#FFFFFF"
          strokeMiterlimit="10"
          strokeWidth="15"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
