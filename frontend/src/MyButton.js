import React from 'react';

function MyButton() {
  const handleClick = () => {
    alert('Bạn đã nhấn nút!');
  };

  return (
    <button onClick={handleClick}>
      Nhấn tôi
    </button>
  );
}

export default MyButton;
