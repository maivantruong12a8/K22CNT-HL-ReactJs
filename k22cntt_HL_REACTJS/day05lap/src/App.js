import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function EventDemo() {
  // Hàm xử lý sự kiện click
  const handleClick = () => {
    alert("Bạn vừa nhấn vào nút!");
  };

  // Hàm xử lý khi truyền tham số
  const showMessage = (msg) => {
    alert("Thông điệp: " + msg);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Ví dụ về Event</h2>
      <button onClick={handleClick}>Nhấn vào đây</button>
      <br /><br />
      <button onClick={() => showMessage("Xin chào Trường")}>
        Hiện thông điệp
      </button>
    </div>
  );
}

// =======================
// Component FormDemo
// =======================
function FormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn load lại trang
    alert(`Tên: ${name}\nEmail: ${email}`);
  };

  return (
    <div>
      <h2>Ví dụ về Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Họ và tên: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nhập tên của bạn"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
          />
        </div>
        <button type="submit">Gửi thông tin</button>
      </form>
    </div>
  );
}

// =======================
// App chính
// =======================
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo React: Event & Form</h1>
      <EventDemo />
      <FormDemo />
    </div>
  );
}
export default App;
