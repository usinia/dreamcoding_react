import React, { useState } from "react";

export default function AppForm() {
  /**
   * form 의 input -> uncontrol component
   * 리액트에서 추구하는 원칙에 어긋남 : 리액트가 관리하는 상태가 변경될 때만 UI Component 가 변경된다는 원칙
   * form 과 연동되는 state 를 만들고, change(유저 입력)이 일어날 때마다 state 에 업데이트 해줌
   */
  const [form, setFrom] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
