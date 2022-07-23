import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = (props) => {
  //原本的做法
  // const para = document.createElement('p');
  // para.textCpntent = 'Tis is also visible';
  // document.getElementById('root').append(para);
  const expenses = [
    {
      id: 'e1', title: 'Toilet Paper',







      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // )

  // React.createElement(創建網頁元素字串, 物件class屬性, 內容)
  // 第一个参数是必填, 传入的是似HTML标签名称, eg: ul, li
  // 第二个参数是选填.表示的是属性, eg: className
  // 第三个参数是选填, 子节点, eg: 要显示的文本内容
  //使用自定義元件不能使用字串


  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
