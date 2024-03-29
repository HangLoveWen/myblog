---
title: 常用正则表达式学习
date: 2022-11-21
---

### 一、校验数字的[表达式](https://so.csdn.net/so/search?q=%E8%A1%A8%E8%BE%BE%E5%BC%8F&spm=1001.2101.3001.7020)

1. 数字：^[0-9]\*$
2. n 位的数字：^\d{n}$
3. 至少 n 位的数字：^\d{n,}$
4. m-n 位的数字：^\d{m,n}$
5. 零和非零开头的数字：^(0|[1-9][0-9]\*)$
6. 非零开头的最多带两位小数的数字：^([1-9][0-9]\*)+(.[0-9]{1,2})?$
7. 带 1-2 位小数的正数或负数：^(\-)?\d+(\.\d{1,2})?$
8. 正数、负数、和小数：^(\-|\+)?\d+(\.\d+)?$
9. 有两位小数的正实数：^[0-9]+(.[0-9]{2})?$
10. 有 1~3 位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
11. 非零的正整数：^[1-9]\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]\*$
12. 非零的负整数：^\-[1-9][]0-9"_$ 或 ^-[1-9]\d_$
13. 非负整数：^\d+$ 或 ^[1-9]\d\*|0$
14. 非正整数：^-[1-9]\d\*|0$ 或 ^((-\d+)|(0+))$
15. 非负浮点数：^\d+(\.\d+)?$ 或 ^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$
16. 非正浮点数：^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 或 ^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$
17. 正浮点数：^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$ 或 ^(([0-9]+\.[0-9]_[1-9][0-9]_)|([0-9]_[1-9][0-9]_\.[0-9]+)|([0-9]_[1-9][0-9]_))$
18. 负浮点数：^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$ 或 ^(-(([0-9]+\.[0-9]_[1-9][0-9]_)|([0-9]_[1-9][0-9]_\.[0-9]+)|([0-9]_[1-9][0-9]_)))$
19. 浮点数：^(-?\d+)(\.\d+)?$ 或 ^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$

## 二、校验字符的表达式

1. 汉字：^[\u4e00-\u9fa5]{0,}$
2. 英文和数字：^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$
3. 长度为 3-20 的所有字符：^.{3,20}$
4. 由 26 个英文字母组成的字符串：^[A-Za-z]+$
5. 由 26 个大写英文字母组成的字符串：^[A-Z]+$
6. 由 26 个小写英文字母组成的字符串：^[a-z]+$
7. 由数字和 26 个英文字母组成的字符串：^[A-Za-z0-9]+$
8. 由数字、26 个英文字母或者下划线组成的字符串：^\w+$ 或 ^\w{3,20}$
9. 中文、英文、数字包括下划线：^[\u4E00-\u9FA5A-Za-z0-9_]+$
10. 中文、英文、数字但不包括下划线等符号：^[\u4E00-\u9FA5A-Za-z0-9]+$ 或 ^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$
11. 可以输入含有^%&',;=?$\"等字符：[^%&',;=?$\x22]+ 12 禁止输入含有~的字符：[^~\x22]+

**其它：**

.\*匹配除 \n 以外的任何字符。

/[\u4E00-\u9FA5]/ 汉字

/[\uFF00-\uFFFF]/ 全角符号

/[\u0000-\u00FF]/ 半角符号

## 三、特殊需求表达式

1. Email 地址：^\w+([-+.]\w+)_@\w+([-.]\w+)_\.\w+([-.]\w+)\*$
2. 域名：[a-zA-Z0-9][-a-za-z0-9]{0,62}(/.[a-zA-Z0-9][-a-za-z0-9]{0,62})+/.?
3. InternetURL：[a-zA-z]+://[^\s]_ 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]_)?$
4. 手机号码：^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
5. 电话号码("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$
6. 国内电话号码(0511-4405222、021-87888822)：\d{3}-\d{8}|\d{4}-\d{7}
7. 身份证号(15 位、18 位数字)：^\d{15}|\d{18}$
8. 短身份证号码(数字、字母 x 结尾)：^([0-9]){7,18}(x|X)?$ 或 ^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$
9. 帐号是否合法(字母开头，允许 5-16 字节，允许字母数字下划线)：^[a-zA-Z][a-za-z0-9_]{4,15}$
10. 密码(以字母开头，长度在 6~18 之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
11. 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)：^(?=._\d)(?=._[a-z])(?=.\*[A-Z]).{8,10}$
12. 日期格式：^\d{4}-\d{1,2}-\d{1,2}
13. 一年的 12 个月(01 ～ 09 和 1 ～ 12)：^(0?[1-9]|1[0-2])$
14. 一个月的 31 天(01 ～ 09 和 1 ～ 31)：^((0?[1-9])|((1|2)[0-9])|30|31)$
15. 钱的输入格式：
16. 1.有四种钱的表示形式我们可以接受:"10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"：^[1-9][0-9]\*$
17. 2.这表示任意一个不以 0 开头的数字,但是,这也意味着一个字符"0"不通过,所以我们采用下面的形式：^(0|[1-9][0-9]\*)$
18. 3.一个 0 或者一个不以 0 开头的数字.我们还可以允许开头有一个负号：^(0|-?[1-9][0-9]\*)$
19. 4.这表示一个 0 或者一个可能为负的开头不为 0 的数字.让用户以 0 开头好了.把负号的也去掉,因为钱总不能是负的吧.下面我们要加的是说明可能的小数部分：^[0-9]+(.[0-9]+)?$
20. 5.必须说明的是,小数点后面至少应该有 1 位数,所以"10."是不通过的,但是 "10" 和 "10.2" 是通过的：^[0-9]+(.[0-9]{2})?$
21. 6.这样我们规定小数点后面必须有两位,如果你认为太苛刻了,可以这样：^[0-9]+(.[0-9]{1,2})?$
22. 7.这样就允许用户只写一位小数.下面我们该考虑数字中的逗号了,我们可以这样：^[0-9]{1,3}(,[0-9]{3})\*(.[0-9]{1,2})?$

23 8.1 到 3 个数字,后面跟着任意个 逗号+3 个数字,逗号成为可选,而不是必须：^([0-9]+|[0-9]{1,3}(,[0-9]{3})\*)(.[0-9]{1,2})?$

24. 备注：这就是最终结果了,别忘了"+"可以用"\*"替代如果你觉得空字符串也可以接受的话(奇怪,为什么?)最后,别忘了在用函数时去掉去掉那个反斜杠,一般的错误都在这里
25. xml 文件：^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|m][l|L]$
26. 中文字符的[正则表达式](https://so.csdn.net/so/search?q=%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F&spm=1001.2101.3001.7020)：[\u4e00-\u9fa5]
27. 双字节字符：[^\x00-\xff] (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计 2，ASCII 字符计 1))
28. 空白行的正则表达式：\n\s\*\r (可以用来删除空白行)
29. HTML 标记的正则表达式：<(\S*?)[^>]*>._?</\1>|<._? /> (网上流传的版本太糟糕，上面这个也仅仅能部分，对于复杂的嵌套标记依旧无能为力)
30. 首尾空白字符的正则表达式：^\s*|\s*$或(^\s*)|(\s*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
31. 腾讯 QQ 号：[1-9][0-9]{4,} (腾讯 QQ 号从 10000 开始)
32. 中国邮政编码：[1-9]\d{5}(?!\d) (中国邮政编码为 6 位数字)
33. IP 地址：\d+\.\d+\.\d+\.\d+ (提取 IP 地址时有用)
34. IP 地址：((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))
35. IP-v4 地址：\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b (提取 IP 地址时有用)
36. 校验 IP-v6 地址:(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))
37. 子网掩码：((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))
38. 校验日期:^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$(“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。)
39. 抽取注释：`<!--(.*?)-->`
40. 查找 CSS 属性:^\\s*[a-zA-Z\\-]+\\s*[:]{1}\\s[a-zA-Z0-9\\s.#]+[;]{1}
41. 提取页面超链接:(<a\\s*(?!.*\\brel=)[^>]_)(href="https?:\\/\\/)((?!(?:(?:www\\.)?'.implode('|(?:www\\.)?', $follow_list).'))[^" rel="external nofollow" ]+)"((?!._\\brel=)[^>]_)(?:[^>]_)>
42. 提取网页图片:\\< _[img][^\\\\>]_[src] _= _[\\"\\']{0,1}([^\\"\\'\\ >]\*)
43. 提取网页颜色代码:^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
44. 文件扩展名效验:^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)_[^\\/:_?"<>|]+\\.txt(l)?$
45. 判断 IE 版本：^.*MSIE [5-8](?:\.[0-9]+)?(?!.*Trident\\/[5-9]\\.0).\*$

| 元字符       | 描述                                                                                                                                                                                                                                                                                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| \            | 将下一个字符标记符、或一个向后引用、或一个八进制转义符。例如，“\\n”匹配\n。“\n”匹配换行符。序列“\\”匹配“\”而“\(”则匹配“(”。即相当于多种编程语言中都有的“转义字符”的概念。                                                                                                                                                                                             |
| ^            | 匹配输入字行首。如果设置了 RegExp 对象的 Multiline 属性，^也匹配“\n”或“\r”之后的位置。                                                                                                                                                                                                                                                                                |
| $            | 匹配输入行尾。如果设置了 RegExp 对象的 Multiline 属性，$也匹配“\n”或“\r”之前的位置。                                                                                                                                                                                                                                                                                  |     |
| \*           | 匹配前面的子表达式任意次。例如，zo*能匹配“z”，也能匹配“zo”以及“zoo”。*等价于{0,}。                                                                                                                                                                                                                                                                                    |
| +            | 匹配前面的子表达式一次或多次(大于等于 1 次）。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于{1,}。                                                                                                                                                                                                                                                            |
| ?            | 匹配前面的子表达式零次或一次。例如，“do(es)?”可以匹配“do”或“does”。?等价于{0,1}。                                                                                                                                                                                                                                                                                     |
| {_n_ }       | *n*是一个非负整数。匹配确定的*n*次。例如，“o{2}”不能匹配“Bob”中的“o”，但是能匹配“food”中的两个 o。                                                                                                                                                                                                                                                                    |
| {_n_ ,}      | *n*是一个非负整数。至少匹配*n*次。例如，“o{2,}”不能匹配“Bob”中的“o”，但能匹配“foooood”中的所有 o。“o{1,}”等价于“o+”。“o{0,}”则等价于“o\*”。                                                                                                                                                                                                                           |
| {_n_ , _m_ } | *m*和*n*均为非负整数，其中 _n_ <= _m_ 。最少匹配*n*次且最多匹配*m*次。例如，“o{1,3}”将匹配“fooooood”中的前三个 o 为一组，后三个 o 为一组。“o{0,1}”等价于“o?”。请注意在逗号和两个数之间不能有空格。                                                                                                                                                                    |
| ?            | 当该字符紧跟在任何一个其他限制符（*,+,?，{*n* }，{ *n* ,}，{ *n* , *m\* }）后面时，匹配模式是非贪婪的。非贪婪模式尽可能少地匹配所搜索的字符串，而默认的贪婪模式则尽可能多地匹配所搜索的字符串。例如，对于字符串“oooo”，“o+”将尽可能多地匹配“o”，得到结果[“oooo”]，而“o+?”将尽可能少地匹配“o”，得到结果 ['o', 'o', 'o', 'o']                                           |
| .点          | 匹配除“\n”和"\r"之外的任何单个字符。要匹配包括“\n”和"\r"在内的任何字符，请使用像“[\s\S]”的模式。                                                                                                                                                                                                                                                                      |
| (pattern)    | 匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在 VBScript 中使用 SubMatches 集合，在 JScript 中则使用$0…$9 属性。要匹配圆括号字符，请使用“**”**或**“**”或“”。                                                                                                                                                                               |
| (?:pattern)  | 非获取匹配，匹配 pattern 但不获取匹配结果，不进行存储供以后使用。这在使用或字符“(                                                                                                                                                                                                                                                                                     |
| (?=pattern)  | 非获取匹配，正向肯定预查，在任何匹配 pattern 的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如，“Windows(?=95                                                                                                                                                                                                                                            |
| (?!pattern)  | 非获取匹配，正向否定预查，在任何不匹配 pattern 的字符串开始处匹配查找字符串，该匹配不需要获取供以后使用。例如“Windows(?!95                                                                                                                                                                                                                                            |
| (?<=pattern) | 非获取匹配，反向肯定预查，与正向肯定预查类似，只是方向相反。例如，“(?<=95                                                                                                                                                                                                                                                                                             |
| (?<!patte_n) | 非获取匹配，反向否定预查，与正向否定预查类似，只是方向相反。例如“(?<!95                                                                                                                                                                                                                                                                                               |
| x            | y                                                                                                                                                                                                                                                                                                                                                                     |
| [xyz]        | 字符集合。匹配所包含的任意一个字符。例如，“[abc]”可以匹配“plain”中的“a”。                                                                                                                                                                                                                                                                                             |
| [^xyz]       | 负值字符集合。匹配未包含的任意字符。例如，“[^abc]”可以匹配“plain”中的“plin”任一字符。                                                                                                                                                                                                                                                                                 |
| [a-z]        | 字符范围。匹配指定范围内的任意字符。例如，“[a-z]”可以匹配“a”到“z”范围内的任意小写字母字符。注意:只有连字符在字符组内部时,并且出现在两个字符之间时,才能表示字符的范围; 如果出字符组的开头,则只能表示连字符本身.                                                                                                                                                        |
| [^a-z]       | 负值字符范围。匹配任何不在指定范围内的任意字符。例如，“[^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。                                                                                                                                                                                                                                                              |
| \b           | 匹配一个单词的边界，也就是指单词和空格间的位置（即正则表达式的“匹配”有两种概念，一种是匹配字符，一种是匹配位置，这里的\b 就是匹配位置的）。例如，“er\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”；“\b1*”可以匹配“1_23”中的“1*”，但不能匹配“21*3”中的“1*”。                                                                                                    |
| \B           | 匹配非单词边界。“er\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”。                                                                                                                                                                                                                                                                                               |
| \cx          | 匹配由 x 指明的控制字符。例如，\cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的“c”字符。                                                                                                                                                                                                                                      |
| \d           | 匹配一个数字字符。等价于[0-9]。grep 要加上-P，perl 正则支持                                                                                                                                                                                                                                                                                                           |
| \D           | 匹配一个非数字字符。等价于[^0-9]。grep 要加上-P，perl 正则支持                                                                                                                                                                                                                                                                                                        |
| \f           | 匹配一个换页符。等价于\x0c 和\cL。                                                                                                                                                                                                                                                                                                                                    |
| \n           | 匹配一个换行符。等价于\x0a 和\cJ。                                                                                                                                                                                                                                                                                                                                    |
| \r           | 匹配一个回车符。等价于\x0d 和\cM。                                                                                                                                                                                                                                                                                                                                    |
| \s           | 匹配任何不可见字符，包括空格、制表符、换页符等等。等价于[ \f\n\r\t\v]。                                                                                                                                                                                                                                                                                               |
| \S           | 匹配任何可见字符。等价于[^ \f\n\r\t\v]。                                                                                                                                                                                                                                                                                                                              |
| \t           | 匹配一个制表符。等价于\x09 和\cI。                                                                                                                                                                                                                                                                                                                                    |
| \v           | 匹配一个垂直制表符。等价于\x0b 和\cK。                                                                                                                                                                                                                                                                                                                                |
| \w           | 匹配包括下划线的任何单词字符。类似但不等价于“[A-Za-z0-9_]”，这里的"单词"字符使用 Unicode 字符集。                                                                                                                                                                                                                                                                     |
| \W           | 匹配任何非单词字符。等价于“[^a-za-z0-9_]”。                                                                                                                                                                                                                                                                                                                           |
| \x*n*        | 匹配*n* ，其中*n*为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，“\x41”匹配“A”。“\x041”则等价于“\x04&1”。正则表达式中可以使用 ASCII 编码。                                                                                                                                                                                                              |
| \*num\*      | 匹配*num* ，其中*num*是一个正整数。对所获取的匹配的引用。例如，“(.)\1”匹配两个连续的相同字符。                                                                                                                                                                                                                                                                        |
| \*n\*        | 标识一个八进制转义值或一个向后引用。如果\*n*之前至少*n*个获取的子表达式，则*n*为向后引用。否则，如果*n*为八进制数字（0-7），则*n\*为一个八进制转义值。                                                                                                                                                                                                                |
| \*nm\*       | 标识一个八进制转义值或一个向后引用。如果\*nm*之前至少有*nm*个获得子表达式，则*nm*为向后引用。如果\*nm*之前至少有*n*个获取，则*n*为一个后跟文字*m*的向后引用。如果前面的条件都不满足，若*n*和*m*均为八进制数字（0-7），则\*nm*将匹配八进制转义值 *nm\* 。                                                                                                              |
| \*nml\*      | 如果*n*为八进制数字（0-7），且*m*和*l*均为八进制数字（0-7），则匹配八进制转义值 _nml_ 。                                                                                                                                                                                                                                                                              |
| \u*n*        | 匹配*n* ，其中*n*是一个用四个十六进制数字表示的 Unicode 字符。例如，\u00A9 匹配版权符号（©）。                                                                                                                                                                                                                                                                        |
| \p{P}        | 小写 p 是 property 的意思，表示 Unicode 属性，用于 Unicode 正表达式的前缀。中括号内的“P”表示 Unicode 字符集七个字符属性之一：标点字符。其他六个属性：L：字母；M：标记符号（一般不会单独出现）；Z：分隔符（比如空格、换行等）；S：符号（比如数学符号、货币符号等）；N：数字（比如阿拉伯数字、罗马数字等）；C：其他字符。\*_注：此语法部分语言不支持，例：javascript。_ |
| \<\>         | 匹配词（word）的开始（\<）和结束（\>）。例如正则表达式\<the\>能够匹配字符串"for the wise"中的"the"，但是不能匹配字符串"otherwise"中的"the"。注意：这个元字符不是所有的软件都支持的。                                                                                                                                                                                  |
| ( )          | 将( 和 ) 之间的表达式定义为“组”（group），并且将匹配这个表达式的字符保存到一个临时区域（一个正则表达式中最多可以保存 9 个），它们可以用 \1 到\9 的符号来引用。                                                                                                                                                                                                        |
|              |                                                                                                                                                                                                                                                                                                                                                                       |

![](https://img-blog.csdnimg.cn/20190805102705163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly96eWM4OC5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190805102741132.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly96eWM4OC5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190805102803643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly96eWM4OC5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70)

![](https://img-blog.csdnimg.cn/20190805102828321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly96eWM4OC5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70)
