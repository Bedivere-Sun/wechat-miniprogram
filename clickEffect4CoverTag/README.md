## Click Effect for Cover Tags

`<Camera>` is an native component. It shows on topside of the layer and it's display order can not be changed by z-index property. In such a situation, to put one or more controller(s) on `<Camera>`, we must embed `<button>` components into `<conver-view>` or `<cover-image>`tags. But due to those two tags' limitation, you can not apply `<button>`'s hover-class style which could change button's on-click-style. this will make users feel not satisfied.

It is a bug, but also a need that needed to be meet. I've submited this report to the community. while waiting solving the problem, I share this solution to let "button" have an animation effect that telling people program had recieved their click process:

Code Segement Download Path:
https://developers.weixin.qq.com/s/cJfCXAmT7E5P

Welcoem to discuss about how to make mini-program better on Issue table:)



## cover-标签点击效果
camera是原生组件，默认在最上层显示且不能通过z-index调整显示位置，这样一旦要在其上显示几个控制组件就要用cover-view或者cover-image。但是由于cover-view和cover-image不支持hvoer-class，也不支持很多动态的替换样式（比如：背景颜色、图片、外边框、阴影等），这样放在上面的组件就失去了被点击后的反馈效果，让用户用起来不那么舒服。

我在社区也提交了一个bug反馈我认为它既是一种BUG，又是一种需求。


目前官方正在确认这个问题（BUG报告地址：https://developers.weixin.qq.com/community/develop/doc/000a422b0c0748ae8ef778f2151c00?highline=cover-view%E5%B5%8C%E5%A5%97）


那么，在它彻底解决前，我找了一个简单的“曲线救国”的方法，这里和大家分享。也欢迎大家一同探讨这个有趣的问题：

代码段下载地址：
https://developers.weixin.qq.com/s/cJfCXAmT7E5P

也欢迎大家一起探讨如何让小程序变得更好！
