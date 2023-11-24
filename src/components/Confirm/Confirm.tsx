interface ConfirmProps {
  handleConfirm: () => void;
  handleCancell: () => void;
}

const Confirm = ({ handleConfirm, handleCancell }: ConfirmProps) => {
  return (
    <div>
      <button onClick={handleConfirm}>Подтвердить ✅</button>
      <button onClick={handleCancell}>Отмена ❌ </button>
    </div>
  );
};

export default Confirm;
