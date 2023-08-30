# 逻辑编程题

## FizzBuzz

```js
function FizzBuzz(value) {
    if (value % 5 === 0 && value % 3 === 0) {
        return 'FizzBuzz'
    }
    if (value % 5 === 0) {
        return 'Fizz'
    }
    return 'Buzz'
}
```

## PromiseMap

```js 效果
PromiseMap([1, 2, 3, 4, 5], x => Promise.resolve(x + 1))

PromiseMap([Promise.resolve(1), Promise.resolve(2)], x => x + 1)

// 注意输出时间控制
PromiseMap([1, 1, 1, 1, 1, 1, 1, 1], x => sleep(1000), { concurrency: 2 })
```

```js
function PromiseMap(promises, fn, options) {
    const {
        concurrency
    } = Object.assign({
        concurrency: Infinity
    }, options)
    const res = []
    const len = promises.length
    let invokingCounts = 0
    let count = 0
    let i = 0

    function invoke(resolve, reject) {
        while (i < len && invokingCounts < concurrency) {
            const index = i
            Promise.resolve(promises[index]).then(fn).then((data) => {
                res[index] = data
                if (++count === len) return resolve(data)
                invokingCounts -= 1
                invoke(resolve, reject)
            }).catch((e) => {
                reject(e)
            })
            i++
            invokingCounts += 1
        }
    }

    return new Promise((resolve, reject) => {
        invoke(resolve, reject)
    })
}
```

## 并发sum

```js
/*
  请实现一个 sum 函数，接收一个数组 arr 进行累加，并且只能使用add异步方法
  
  add 函数已实现，模拟异步请求后端返回一个相加后的值
*/
function add(a, b) {
  return Promise.resolve(a + b);
}

function sum(arr) {
    return mySum(arr, 0, arr.length - 1)
}

async function mySum(arr, l, r) {
    if (l === r) return arr[l]
    const m = l + ((r - l) >> 1)
    const result1 = await mySum(arr, l, m)
    const result2 = await mySum(arr, m + 1, r)
    return add(result1, result2)
}
```

## 订阅发布

```js
function removeBy(arr, by) {
    let i = 0
    let j = 0;
    const n = arr.length
    while (i < n) {
        const item = arr[i]
        if (!by(item)) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++
        }
        i++
    }
    arr.length = j
    return arr
}

class EventEmitter {
    constructor() {
        this.wrapListeners = new Map()
    }
    on(event, listener) {
        const wrapListener = {
            listener,
            once: false,
        }
        if (!this.wrapListeners.has(event)) {
            this.wrapListeners.set(event, [wrapListener])
        } else {
            this.wrapListeners.get(event).push(wrapListener)
        }
        return this
    }
    once(event, listener) {
        const wrapListener = {
            listener,
            once: true,
        }
        if (!this.wrapListeners.has(event)) {
            this.wrapListeners.set(event, [wrapListener])
        } else {
            this.wrapListeners.get(event).push(wrapListener)
        }
        return this
    }
    off(event, listener) {
        if (!this.wrapListeners.has(event)) {
            return this
        }
        const eventListeners = this.wrapListeners.get(event)
        if (typeof listener !== 'function') {
            eventListeners.length = 0
            return this
        }
        removeBy(eventListeners, (wrapListener) => wrapListener.listener === listener)
        return this
    }
    emit(event, ...rest) {
        if (!this.wrapListeners.has(event)) {
            return this
        }
        const eventListeners = this.wrapListeners.get(event)
        const copies = eventListeners.slice()
        removeBy(eventListeners, (wrapListener) => wrapListener.once)
        copies.forEach((copy) => copy.listener())
        return this
    }
}

```

## 无限累加的sum

```js
function sum(...rest) {
    function func(...args) {
        return sum(...rest, ...args)
    }
    func.valueOf = () => {
        return rest.reduce((a, b) => a + b)
    }
    return func
}

```

## queryParams

```js
function queryParams(href) {
    const queryStr = href.replace(/\?([\s\S]+)/g, '')
    const queryList = queryStr.split('&').map((str) => {
        const [key, value] = str.split('=')
        return {
            key,
            value,
        }
    })
    return queryList.reduce((pre, cur) => {
        pre[key] = value || true
        return pre
    }, {})
}
```

## queryString

```js
function stringify (data) {
  const pairs = Object.entries(data)
  const qs = pairs.map(([k, v]) => {
    let noValue = false
    if (v === null || v === undefined || typeof v === 'object') {
      noValue = true
    }
    return `${encodeURIComponent(k)}=${noValue ? '' : encodeURIComponent(v)}`
  }).join('&')
  return qs
}
```

## JSONP

```js
function load(script) {
    let resolve = _resolve
    let reject = _reject
    const promise = new Promise((_resolve, _reject) => {
        const scriptTag = document.createElement('script')
        scriptTag.src = script
        function onLoadSuccess() {
            resolve()
            scriptTag.removeEventListener('load', onLoadSuccess)
            scriptTag.removeEventListener('error', onLoadError)
            document.head.appendChild(scriptTag)
        }
        function onLoadError(e) {
            reject(e)
            scriptTag.removeEventListener('load', onLoadSuccess)
            scriptTag.removeEventListener('error', onLoadError)
            scriptTag.parent.removeChild(scriptTag)
        }
        scriptTag.addEventListener('load', onLoadSuccess)
        scriptTag.addEventListener('error', onLoadError)
        document.body.appendChild(scriptTag)
    })
    return promise
}

function jsonp({ url, params }) {
    return new Promise((resolve, reject) => {
        // 一、为了避免全局污染，使用一个随机函数名
        const cbFnName = `JSONP_PADDING_${Math.random().toString().slice(2)}`
        // 二、默认 callback 函数为 cbFnName
        const script = `${url}?${stringify({ callback: cbFnName, ...params })}`
        
        // 三、使用 onData 作为 cbFnName 回调函数，接收数据
        window[cbFnName] = resolve

        load(script).catch((e) => {
            reject(e)
        })
    })
}

jsonp({
    url: 'http://localhost:10010',
    params: { id: 10000 },
}).then((a) => {
    console.log(a)
})
```