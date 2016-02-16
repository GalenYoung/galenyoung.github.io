#  2016/02/15
* `Thinking主页`面响应式的时候当页面宽度为`1200px`的时候，`thk-right`部分会跑到页面下面去，由于在` @media only screen and (min-width: 1200px) `里设置了 `padding:50px;` 属性;而在`@media only screen and (min-width: 1000px) and (max-width: 1200px)`中并没有设置padding，属性，导致`padding:50px`依然起作用
* 向下面中添加 `html,body{overflow:hidden}` 属性
