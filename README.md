**I'm not own any of this , this was forked from https://github.com/stevenjoezhang/live2d-widget**

# Live2D Widget

![](https://forthebadge.com/images/badges/built-with-love.svg)
![](https://forthebadge.com/images/badges/uses-html.svg)
![](https://forthebadge.com/images/badges/made-with-javascript.svg)
![](https://forthebadge.com/images/badges/contains-cat-gifs.svg)
![](https://forthebadge.com/images/badges/powered-by-electricity.svg)
![](https://forthebadge.com/images/badges/makes-people-smile.svg)

## Feature

Add Live2D Kanban girl to the web page. Compatible with PJAX and supports no refresh loading.
Add Live2D widget to web page. Compatible with PJAX.

**Warning: This project uses a lot of ES6 syntax and does not support old browsers such as IE 11. **
**WARNING: This project does not support legacy browsers such as IE 11.**

## Example Demo

The effect can be viewed in the lower left corner of [米米的博客](https://zhangshuqiao.org). (Note: The following character models are for display purposes only, and this warehouse does not contain any models.)

<img src="assets/screenshot-2.png" width="280"><img src="assets/screenshot-3.png" width="280"><img src="assets/screenshot-1.png" width="270">

You can also carry out secondary development within the allowed scope, here are some examples

-[demo.html](https://mi.js.org/live2d-widget/demo/demo.html) to show basic effects</br>
-[login.html](https://mi.js.org/live2d-widget/demo/login.html), imitating the login interface of NPM

## Dependencies

This plugin requires Font Awesome (v4 or v5) icon support. Please make sure that the relevant style sheet has been loaded on the page. Take Font Awesome v4 as an example, please add in `<head>`:
Font Awesome (v4 or v5) is required for this plugin. Take Font Awesome v4 as an example, please add the following in `<head>`:
```xml
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
```
Otherwise, the icon will not be displayed normally. (If any version of Font Awesome is already loaded on the webpage, don’t load it repeatedly)

## Usage

Add this line of code to `<head>` or `<body>` to show the effect:
```xml
<script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
```
If PJAX is enabled on the website, since the Kanban girl does not have to refresh every page, you should pay attention to putting relevant scripts outside the PJAX refresh area.

In other words, if you are a novice, or you only need the most basic functions, just put this line of code, together with the line of code that loaded Font Awesome before, into the `<head>` of html.
For pages generated with various template engines (such as Nunjucks, Jinja, or PHP), you must modify it yourself. The method is similar, but it may be a little troublesome. Take [Hexo](https://hexo.io) as an example, you need to configure the path correctly in the theme-related ejs or njk template before it can be loaded.

**but! We strongly recommend to configure it yourself, otherwise many functions are incomplete and may cause problems! **
If you are interested in tossing yourself, please see the detailed instructions below.

### Using CDN

To customize the content, you can fork this warehouse and then modify it. At this time, the usage method correspondingly becomes
```xml
<script src="https://cdn.jsdelivr.net/gh/username/live2d-widget@latest/autoload.js"></script>
```
Replace `username` here with your GitHub username. In order to refresh the contents of the CDN normally, you need to create a new git tag and push it to the GitHub repository, otherwise the `@latest` here still points to the file before the update. In addition, the CDN itself has a cache, so the changes may take some time to take effect. Related documents:
-[Git Basics-Tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
-[Managing releases in a repository](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository)

### Self-host

You can also put these files directly on the server instead of loading them through the CDN.

-If you can access your host via `ssh`, please clone the entire repository to the server. carried out:
  ```bash
  cd /path/to/your/webroot
  # Clone this repository
  git clone https://github.com/stevenjoezhang/live2d-widget.git
  ```
-If your host cannot be connected with `ssh` (such as a general virtual host), please select `Download ZIP`, upload to the host via `ftp` etc., and then unzip it to the website directory.
-If you are deploying a static blog using tools such as Hexo, please execute the aforementioned `git clone` command in the blog source file (ie `source`) directory. When the blog is redeployed, the relevant files will be automatically uploaded to the corresponding path. In order to prevent these files from being incorrectly modified by the Hexo plug-in, you may need to set `skip_render`.

In this way, the entire project can be accessed from the public network through your server IP or domain name. You might as well try to open files such as `autoload.js` and `live2d.min.js` through the browser normally, and confirm that the contents of these files are complete and correct.
If everything is normal, just modify some configurations next. (It needs to be modified through the text editor on the server; you can also complete this step locally before uploading to the server)
Modify the constant `live2d_path` in `autoload.js` to the URL of the directory `live2d-widget`. For example, if you can pass
```
https://example.com/path/to/live2d-widget/live2d.min.js
```
Access to `live2d.min.js`, then change the value of `live2d_path` to
```
https://example.com/path/to/live2d-widget/
```
The `/` at the end of the path must be added. For details, please refer to the comments in `autoload.js`.
After finishing, add in the interface where you want to add the kanban girl
```xml
<script src="https://example.com/path/to/live2d-widget/autoload.js"></script>
```
It can be loaded.

## Backend API

The `initWidget` method accepts parameters named `apiPath` and `cdnPath`, and you can set one of them. Among them, `apiPath` is the URL of the back-end API, you can build it yourself and add models (there is a lot of modification, so I won't repeat them here). And `cdnPath` loads resources through CDN services such as jsDelivr, which is more stable.

## Directory Structure Files

-`waifu-tips.js` contains the logic of buttons and dialogs;
-`waifu-tips.json` defines the trigger condition (`selector`, CSS selector) and the text displayed when triggered (`text`);
-`waifu.css` is the style sheet of Kanban Girl.

The source file is valid for Hexo's [NexT theme](http://github.com/next-theme/hexo-theme-next). In order to apply to your own webpage, you may need to modify it yourself or add new content.
**Warning: The author is not responsible for the contents of the files including but not limited to `waifu-tips.js` and `waifu-tips.json`, please ensure that they are appropriate. **

If you have any questions, please raise an issue. If you have any suggestions for modification, please submit a Pull Request.

## Thanks Thanks

<a href="https://www.browserstack.com/"><img height="80" src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt=" BrowserStack Logo"></a>

> Thank you BrowserStack for allowing us to test this project in a real browser.
> Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

<a href="https://www.jsdelivr.com"><img height="80" src="https://raw.githubusercontent.com/jsdelivr/jsdelivr-media/master/default/svg/jsdelivr- logo-horizontal.svg"></a>

> Thanks to the CDN service provided by jsDelivr.
> Thanks jsDelivr for providing public CDN service.

The code is modified from this blog post:
https://www.fghrsh.net/post/123.html

When you click the paper airplane button of Kanban Girl, an egg will appear, which comes from [WebsiteAsteroids](http://www.websiteasteroids.com).

## More More

For more information, please refer to:
https://imjad.cn/archives/lab/add-dynamic-poster-girl-with-live2d-to-your-blog-02
https://github.com/xiazeyu/live2d-widget.js
https://github.com/summerscar/live2dDemo

About the back-end API model:
https://github.com/fghrsh/live2d_api
https://github.com/xiazeyu/live2d-widget-models
https://github.com/xiaoski/live2d_models_collection

In addition, there is a desktop version:
https://github.com/amorist/platelet
https://github.com/akiroz/Live2D-Widget
https://github.com/zenghongtu/PPet
https://github.com/LikeNeko/L2dPetForMac

And Wallpaper Engine:
https://github.com/guansss/nep-live2d

## License License

Released under the GNU General Public License v3
http://www.gnu.org/licenses/gpl-3.0.html

This warehouse does not contain any models. The copyrights of all Live2D models, pictures, motion data, etc. used for display belong to the original authors, which are for research and study only and cannot be used for commercial purposes.

Live2D official website:
https://www.live2d.com/en/
https://live2d.github.io

Live2D Cubism Core は Live2D Proprietary Software License で Provide しています.
https://www.live2d.com/eula/live2d-proprietary-software-license-agreement_en.html
Live2D Cubism Components は Live2D Open Software License で provide しています.
http://www.live2d.com/eula/live2d-open-software-license-agreement_en.html

> The terms and conditions do prohibit modification, but obfuscating in `live2d.min.js` would not be considered illegal modification.

https://community.live2d.com/discussion/140/webgl-developer-licence-and-javascript-question

## Update Update

On October 31, 2018, the original API provided by fghrsh was disabled. Please update to the new address. Reference article:
https://www.fghrsh.net/post/170.html

From January 1, 2020, this project no longer depends on jQuery.
