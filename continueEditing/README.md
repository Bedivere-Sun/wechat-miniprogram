## User Continue Editing Effect

This is an alternative method to let mini-program looks like it could forward to the next page which user opened before.
Say, We have an order page which need user choose an address. On the page I put a button to let users navigate to a new page to add new address on the address list.
Now We need to have an effect which could pop up a message to let users decide whether they want to continue editing while they happend tapped the `back` button and back to the index page. The work flow is like this in follow:
1. setup a boolean variable to indecate is being in edit mode(not finished yet), default value is `false`
2. setup a global variable to store user input text
3. while navigate back to the index, onShow triggered. If the edit mode finished is `false`, popup a message:
    1. if user choose to discard information, clear global variable, then switch boolean variable to `true`
    2. while user choose to continue editing, call naviToPage back to the edit page then pass a queryString to the new page

Code Segement Download Path:
https://developers.weixin.qq.com/s/uFvqfDme7m5K

Welcoem to discuss about how to make mini-program better on Issue table:)



## 用户继续编辑信息的效果

同样是一个曲线救国的方法。假设我有一个订单页面，需要选择收货地址，然后设置一个添加收货地址的按钮，进入下一页。当用户不小心点击了返回按钮，我希望像其它APP一样显示个提示，问用户是否继续编辑或放弃已输入信息。但是一旦点击了返回按钮，就触发了当前页面的Hide和前一页面的Show，页面就显示出来了。我的流程大致如下：
1. 设置一个标记用户已完成编辑的变量，通常为true，一旦点击了“增加收货地址”按钮，就设置为false，表示当前编辑状态未结束
2. 设置一个全局变量保存所有用户输入的信息
3. 当用户返回时，触发主页的onShow，检查标记变量，如果为false，则显示提示信息
    1.  当用户选择放弃，清空变量，修改标记为true，以避免不必要的检查信息
    2.  当用户选择继续，直接navigateTo下一页面，然后传个queryString给新页处理

代码段下载地址：
https://developers.weixin.qq.com/s/uFvqfDme7m5K

也欢迎大家一起探讨如何让小程序变得更好！
