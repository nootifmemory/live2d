// Note: The live2d_path parameter should use an absolute path
const live2d_path = "https://cdn.jsdelivr.net/gh/nootifmemory/live2d/";
//const live2d_path = "/live2d-widget/";

// Encapsulate the method of asynchronously loading resources
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource("https://cdn.jsdelivr.net/gh/nootifmemory/live2d/waifu.css", "css"),
		loadExternalResource("https://cdn.jsdelivr.net/gh/nootifmemory/live2d/live2d.min.js", "js"),
		loadExternalResource("https://cdn.jsdelivr.net/gh/nootifmemory/live2d/waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: "https://cdn.jsdelivr.net/gh/nootifmemory/live2d/waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
			cdnPath: "https://cdn.jsdelivr.net/gh/nootifmemory/live2d_api/"
		});
	});
}
// The first parameter of initWidget is the path of waifu-tips.json, and the second parameter is the API address
// API backend can be built by yourself, refer to https://github.com/fghrsh/live2d_api
// Initializing Kanban Girl will automatically load waifu-tips.json in the specified directory 44

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
