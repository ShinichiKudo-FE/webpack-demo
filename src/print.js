console.log('The print.js module has loaded! See the network tab in dev tools...');
console.log($('title').text()); // 使用 jQuery
export default function printMe() {
    //   console.log('I get called from print.js!');
    // cosnole.log('I get called from print.js!');//制造错误，代码映射修改错误
    //  console.log('Updating print.js...');
    console.log('Button Clicked : Here\'s "some text" !')
}