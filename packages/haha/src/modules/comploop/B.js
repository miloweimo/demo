import A from './A.js'; // 3. 这里A还没有加载完成

console.log('B.js is loaded', A); // 4. 所以这里A是undefined

export default 'B' // 5. 最后导出B，B.js加载完成