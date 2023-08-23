import B from './B.js'; // 2. 依赖 B.js，然后读B.js

console.log('A.js is loaded', B); // 6. 这里B已经加载完成，可以正常打印

export default 'A' // 7. 最后导出A，A.js加载完成