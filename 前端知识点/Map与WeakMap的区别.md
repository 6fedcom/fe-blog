Map 和 WeakMap 之间的主要区别：

Map 对象的键可以是任何类型，但 WeakMap 对象中的键只能是对象引用；
WeakMap 不能包含无引用的对象，否则会被自动清除出集合（垃圾回收机制），可以用来保存 DOM 节点，不容易造成内存泄漏；
WeakMap 对象是不可枚举的，无法获取集合的大小。
