interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode
}


// 하위 2가지 방법은 코드 작성 표기법이 다르다.

// Interface를 사용하는 방법
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}> Click Me</button>
    </div>
    )
  }
// React.FunctionComponent 를 사용하는 방법
// 이 방법의 또 다른 장점은 Children을 복잡하게 고려하지 않아도 된다는 점

  export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
    <div>
      {color}
      {children}
      <button onClick={onClick}> Click Me</button>
    </div>
    )
}
