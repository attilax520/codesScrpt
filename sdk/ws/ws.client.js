// 假设服务端ip为127.0.0.1
ws = new WebSocket("ws://127.0.0.1:1314");
ws.onopen = function() {
  alert("连接成功");
  ws.send("tom");
  alert("给服务端发送一个字符串：tom");
};
ws.onmessage = function(e) {
  alert("收到服务端的消息：" + e.data);
};
