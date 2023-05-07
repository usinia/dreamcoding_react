import React, { useContext } from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function AppTheme() {
  return (
    /**
     * context : umbrella. 공통으로 사용하는 값들을 state 처럼 사용하며, 필요한 컴포넌트들의 부모에 우산처럼 씌워서 자식 컴포넌트들이 접근할 수 있다.
     * 최상위 컴포넌트의 state를 최하위 컴포넌트에게 props 로 전달하는 대신 context 를 사용하는데, context 값이 변경되면 하위의 모든 컴포넌트가 re-rendering 되기 때문에 필요한 컴포넌트 상단에만 우산처럼 씌워서 사용할 수 있다.
     */
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: "black", color: "white" }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
