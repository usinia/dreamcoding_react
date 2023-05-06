import "./App.css";

function AppJSX() {
  /**
   * 정리
   * - 리액트에서 컴포넌트를 표시할 때는 대문자로 시작하는 함수로 만들 수 있다. 이 함수는 jsx 를 return 하는데, jsx 문법을 사용해서 어떤 UI 를 표기하는 컴포넌트인지 명시해준다.
   * - jsx 는 HTML 처럼 사용할 수 있는데, 다음 3가지 유의사항이 있다.
   * 1. 1개의 태그를 반환할 것 (<>, <Frragment>, <div> ...)
   * 2. class 를 주고 싶을 땐 className 을 사용
   * 3. js 코드도 사용이 가능한데, {} 중괄호를 이용해 사용
   */
  const name = "usinia";
  const style = { width: "200px", height: "200px" };
  const list = ["우유", "딸기", "바나나", "요거트"];

  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {/* <li>우유</li>
        <li>딸기</li>
        <li>바나나</li> */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        // style={{ width: "200px", height: "200px" }}
        style={style}
        src="https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        alt="nature"
      />
    </>
  );
}

export default AppJSX;
