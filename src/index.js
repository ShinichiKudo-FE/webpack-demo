import _ from 'lodash';
// import './style.css';
// import Icon from './42.png';//Icon 是图片的 URL
// import Data from './data.json'; // Data 变量包含可直接使用的 JSON 解析得到的对象
// import printMe from './print';
import './h';
function component() {
  // 动态引入注释开始
  // return import (/* webpackChunkName: "lodash" */ 'lodash').then(function(_){
    const element = document.createElement('div');
    const btn = document.createElement('button');
      
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //   element.classList.add('hello'); // 在相应元素上添加类名

  //   const myIcon = new Image();
  //   myIcon.src = Icon;
  //   element.appendChild(myIcon)

  //   console.log(Data);
      btn.innerHTML = 'Click me and check the console!';
      // btn.onclick = printMe;
      element.appendChild(btn);
      btn.onclick = function() {
      import(/* webpackChunkName: "print" */ './print')
      .then(function(module) {
        const printMe = module.default; // 引入模块的默认函数

        printMe();
    });
  };
      return element;
      
    // })
  //   .catch(function(error){
  //   console.log('An error occurred while loading the component')
  // });
  

}

document.body.appendChild(component());

// if(module.hot) { // 习惯上我们会检查是否可以访问 `module.hot` 属性
//   module.hot.accept('./print.js', function() { // 接受给定依赖模块的更新，并触发一个回调函数来对这些更新做出响应
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }

// 原本热加载的部分全部注释掉...

// component().then(function(component) {
//    document.body.appendChild(component);
//  });

    //动态引入结束 