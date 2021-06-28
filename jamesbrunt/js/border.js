(window.onload = function(){

var cs       = document.getElementById('myCanvas');
var ctx      = cs.getContext('2d');
var csWidth  = cs.width;
var csHeight = cs.height;
var center   = {
      x: csWidth / 2,
      y: csHeight / 2
    };

// 線の基本スタイル
ctx.strokeStyle = '#dddddd';
ctx.lineWidth = 8;



var drawHorizontalLineAnim = function() {
  var beginPos = 0,  // スタート位置
      movePos  = beginPos,  // 移動位置（現在位置）
      addVal   = 4.5,  // 加算量
      endPos   = csWidth - 0,  // 終了位置
      isAnim   = function() {  // アニメーションを終了する条件
        return (movePos < endPos);
      };

  var render = function() {
    ctx.beginPath();
    ctx.moveTo(beginPos, 20);
    ctx.lineTo(movePos, 20);
    ctx.moveTo(beginPos, 40);
    ctx.lineTo(movePos, 40);
    ctx.moveTo(beginPos, 60);
    ctx.lineTo(movePos, 60);
    ctx.moveTo(beginPos, 80);
    ctx.lineTo(movePos, 80);
    ctx.closePath();
    ctx.stroke();

    if (isAnim() === true) {
      movePos += addVal;
      // ↑のaddで終了点を超えることがあるため上限を決める
      movePos = (isAnim() === false) ? endPos : movePos;
      requestAnimationFrame(render)
    }
  };
  render();
};
drawHorizontalLineAnim();

})
