### 插件说明

闲来无事，看到了淘宝详情页的放大镜效果，心血来潮，做了这么一个小插件。简单测试了一下，用起来还是比较方便的。

![Image text](https://github.com/zhkai0530/fangdajing/blob/master/taobao/images/fangdajing.gif)

下面说一下插件的使用方法：

* 首先是要引入几个文件，分别是JQuery文件、magnifier.css文件和magnifier.js文件。

* 第二个就是HTML文件的写法，举个例子：

   &emsp;&emsp;&lt;div class="lt-img"&gt;  
   &emsp;&emsp;&emsp;&emsp;&lt;div class="bgbox"&gt;&lt;/div&gt;  
   &emsp;&emsp;&emsp;&emsp;&lt;img src=""&gt;  
   &emsp;&emsp;&lt;/div&gt;  
   &emsp;&emsp;&lt;div class="lg-img"&gt;  
   &emsp;&emsp;&emsp;&emsp;&lt;img src=""&gt;  
   &emsp;&emsp;&lt;/div&gt;

  &emsp;&emsp;其中.lt-img就是小图，.bgbox就是鼠标移入到小图时出现的小方块，而.lg-img就是放大的图了。所以在这里要注意的就是：

  &emsp;&emsp;&emsp;&emsp;1、类名不要写错。

  &emsp;&emsp;&emsp;&emsp;2、准备两张图，一大一小。当然也可以用一张图，只是效果不是太好而已。

* 第三就是，看着这个样式不顺眼的话，就自己创建一个样式表，或是直接在HTML页面里面写一个样式表，覆盖掉magnifier.css就好了。


  在这里，我总结了一下此插件的优缺点：

  优点就是：简单、方便、快捷。

  缺点就是：目前只能做一张图的放大镜效果。

  但是针对缺点有一个解决方案：就是通过增删类名的方法来实现了。
