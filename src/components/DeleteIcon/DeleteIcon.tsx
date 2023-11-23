interface DeleteIconProps {
  onClickHandler: () => void;
}

const DeleteIcon = ({ onClickHandler }: DeleteIconProps) => {
  return (
    <svg
      onClick={onClickHandler}
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="55"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <g transform="scale(2)">
        <circle style={{ fill: "#f44336" }} cx="8" cy="8" r="7" />
        <rect
          style={{ fill: "#ffffff" }}
          width="2"
          height="10"
          x="-.98"
          y="-16.29"
          transform="rotate(135)"
        />
        <rect
          style={{ fill: "#ffffff" }}
          width="2"
          height="10"
          x="-12.29"
          y="-5.01"
          transform="rotate(-135)"
        />
      </g>
    </svg>
  );
};

export default DeleteIcon;
