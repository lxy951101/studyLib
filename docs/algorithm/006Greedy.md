# 贪心算法

在某一个标准下，忧先考虑最满足标准的样本，最后考虑最不满足标准的样本，最终得到一个答案的算法,叫作贪心算法。  
也就是说，不从整体最优上加以考虑，所做出的是在某种意义上的局部最优解。  
局部最优-?-〉整体最忧

## 贪心算法的在笔试时的解题套路

1. 实现一个不依靠贪心策略的解法x，可以用最暴力的尝试
2. 脑补出贪心策略A、贪心策略B、贪心策略C...
3. 用解法X和对数器，去验证每一个贪心策略，用实验的方式得知哪个贪心策略正确
4. 不要去纠结贪心策略的证明

## 从头到尾展示最正统的贪心策略求解过程

给定一个字符串类型的数组strs，找到一种拼接方式，使得把所有字符串拼起来之后形成的字符串具有最小的字典序。  
证明贪心策略可能是件非常腌心的事情。平时当然推荐你搞清楚所有的来龙去脉，但是笔试时用对数器的方式!

## 贪心策略在实现时，经常使用到的技巧

1. 根据某标准建立一个比较器来排序
2. 根据某标准建立一个比较器来组成堆

## 例题

### 问题1

一块金条切成两半，是需要花费和长度数值一样的铜板的。比如长度为20的金条，不管切成长度多大的两半，都要花费20个铜板。  
一群人想整分整块金条，怎么分最省铜板?  
例如,给定数组{10，20,30}，代表一共三个人，整块金条长度为10+20+30=60。金条要分成10,20,30%_..2.:。如果先把长度60的金条分成10和50，花费60;再把长度50的金条分成20和30，花费50;一共花费110铜板。
但是如果先把长度60的金条分成30和30，花费60;再把长度30金条分成10和20，花费30;一共花费90铜板。  
输入一个数组，返回分割的最小代价。  

#### 思想

哈佛曼树，利用小根堆，每次取出最小的两个数，做结合，然后将结合生成的数扔回小根堆，反复执行，直至小根堆只剩一个数字

#### 代码

```js
const lessMoney(arr) {
    const pQ = new PriorityQueue()
    for (let i = 0; i < arr.length; i++) {
        pQ.add(arr[i])
    }
    let sum = 0
    let cur = 0
    while (pQ.size() > 1) {
        cur = pQ.poll() + pQ.poll()
        sum += cur;
        pQ.add(cur)
    }
    return sum
}
```

### 问题2

输入:  
正数数组costs正数数组profits正数k  
正数m含义:  
costs[i]表示i号项目的花费  
profits[i]表示i号项目在扣除花费之后还能挣到的钱(利润)k表示你只能串行的最多做k个项目  
m表示你初始的资金  
说明:  
你每做完一个项目，马上获得的收益，可以支持你去做下一个项目。输出:
你最后获得的最大钱数。  

#### 思想

建立一个以成本为比较器的小根堆，一个以利润为比较器的大跟堆  
将所有项目扔到小根堆中，然后取出力所能及的项目，也就是成本低于当前资金的项目，扔到大跟堆里，这时候能够知道能够获得的利润最高的项目是谁，然后执行该项目使资金对应增加，反复执行该操作，直至K轮或者无项目可做

#### 代码

```js
function findMaximizedCapital(k, w, profits, capital) {
    const minCostQ = new PriorityQueue((a, b) => a.capital - b.capital)
    const maxProfitQ = new PriorityQueue((a, b) => b.profit - a.profit)
    for ( let i = 0; i < profits.length; i++) {
        minCostQ.add({
            profit: profits[i],
            capital: capitals[i]
        })
    }
    for (let i = 0; i < k; i++) {
        while (!minCostQ.isEmpty() && minCostQ.peek().capital <= w) {
            maxProfitQ.add(minCostQ.poll())
        }
        if (maxProfitQ.isEmpty()) {
            return w;
        }
        w += maxProfitQ.poll().profit
    }
    return w
}
```
