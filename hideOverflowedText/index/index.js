const app = getApp()

Page({
  data: {
    content: `健康管理是指一种对个人或人群的健康危险因素进行全面管理的过程。其宗旨是调动个人及集体的积极性，有效地利用有限的资源来达到最大的健康效果。在我国，健康管理服务由具有执业资格的"健康管理师"来提供。我国十三五之后提出“大健康”建设，把提高全民健康管理水平放在国家战略高度。根据“规划”，群众健康将从医疗转向预防为主，不断提高民众的自我健康管理意识。`,

    textBlocks: [
      {
        isHidden: false,
        title: '全部文本信息'
      },
      {
        isHidden: true,
        title: '只显示1行文本'
      },
      {
        isHidden: true,
        title: '只显示3行文本'
      },
      {
        isHidden: true,
        title: '只显示50个字'
      },
    ],
  },
  showHideContent: function(e){
    let target = e.currentTarget.id;
    let textBlocks = this.data.textBlocks;
    
    textBlocks[target].isHidden = !textBlocks[target].isHidden;

    this.setData({
      textBlocks: textBlocks
    });
  }
})
