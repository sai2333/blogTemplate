# 根据psd设计图，高还原编写页面
## ui设计图（png预览）
![tsY8R.jpg](https://cuntuku.com/images/2018/08/01/tsY8R.jpg)
## 布局
* 使用flexbox布局
* 使用scss编写css，提高效率
* 使用css3动画交互
## flex兼容性问题
其它浏览器（edge，火狐，chrome，oprea）使用起来没有问题，但ie浏览器就有很多问题啦！（万恶之源）
* flex容器设置了justify-content，子项目会溢出（如果内容多的话）
* flex容器设置的属性，子项目无法继承容器的容器属性。（子项目设置了display:flex）
1. 子项目内容溢出是因为flex-shrink的默认值有关系，ie的默认值为0，即空间不足的话，项目不缩小。设置好flex-shrink或者直接给该子项目宽度即可。
2. ie浏览器下，flex父容器设置的容器属性是不会给子项目继承的（子项目也设置为容器）。其他浏览器暂时没发现这个问题。解决方法把子项目也设置需要的容器属性即可。
