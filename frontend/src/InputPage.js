import React, { useState } from 'react';

function InputPage() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    alert(`Bạn đã nhập: ${text}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Trang nhập liệu</h2>
      <input
        type="text"
        placeholder="Nhập gì đó..."
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>
        Gửi
      </button>
    </div>
  );
}

export default InputPage;
