# 私の考える Tailwind CSS ロードマップ

- Width(100%)

```
className="w-screen"
```

- Height(100%)

```
className="h-screen"
```

- 右上 右中 右下

```
className="absolute top-0 right-0"
className="absolute top-1/2 right-0"
className="absolute bottom-0 right-0"
```

- 左上 左中 左下

```
className="absolute top-0 left-0"
className="absolute top-1/2 left-0"
className="absolute bottom-0 left-0"
```

- 中央上 中央中 中央下

```
className="absolute top-0 left-1/2"
className="absolute top-1/2 left-1/2"
className="absolute bottom-0 left-1/2"
```

- 変数

```
global.css or index.css
root:{
    --accent:#00ff00;
}

className="bg-[var(--accent)]"
```

- グラデーション

```
<div className="w-20 h-20 bg-gradient-to-t from-blue-600 to-red-600 absolute top-0 left-0" />
      <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-red-600 absolute top-0 left-1/2" />
      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-red-600 absolute top-0 right-0" />
      <div className="w-20 h-20 bg-gradient-to-b from-blue-600 to-red-600 absolute bottom-0 left-0" />
      <div className="w-20 h-20 bg-gradient-to-bl from-blue-600 to-red-600 absolute bottom-0 left-1/2" />
      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-red-600 absolute bottom-0 right-0" />
      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-red-600 absolute top-1/2 left-0" />
      <div className="w-20 h-20 bg-gradient-to-l from-blue-600 to-red-600 absolute top-1/2 right-0" />
```

- アニメーション

```
<div className="animate-spin w-20 h-20 bg-gradient-to-t from-blue-600 to-red-600 absolute top-0 left-0" />
      <div className="animate-bounce w-20 h-20 bg-gradient-to-tr from-blue-600 to-red-600 absolute top-0 left-1/2" />
      <div className="animation-pulse w-20 h-20 bg-gradient-to-br from-blue-600 to-red-600 absolute top-0 right-0" />
      <div className="animate-ping w-20 h-20 bg-gradient-to-b from-blue-600 to-red-600 absolute bottom-0 left-0" />
      <div className="animate-pulse w-20 h-20 bg-gradient-to-bl from-blue-600 to-red-600 absolute bottom-0 left-1/2" />
      <div className="animate-pulse w-20 h-20 bg-gradient-to-br from-blue-600 to-red-600 absolute bottom-0 right-0" />
      <div className="animate-pulse w-20 h-20 bg-gradient-to-r from-blue-600 to-red-600 absolute top-1/2 left-0" />
      <div className="animate-pulse w-20 h-20 bg-gradient-to-l from-blue-600 to-red-600 absolute top-1/2 right-0" />
```

- オーバーフロー スクロール オートスクロール 隠す

```
<div className="w-24 h-screen overflow-auto">
        <div className="w-20 h-20 bg-blue-600" />
        <div className="w-20 h-20 bg-red-600" />
        <div className="w-20 h-20 bg-green-600" />
        <div className="w-20 h-20 bg-yellow-600" />
        <div className="w-20 h-20 bg-purple-600" />
        <div className="w-20 h-20 bg-orange-600" />
        <div className="w-20 h-20 bg-pink-600" />
        <div className="w-20 h-20 bg-gray-600" />
        <div className="w-20 h-20 bg-indigo-600" />
        <div className="w-20 h-20 bg-lime-600" />
        <div className="w-20 h-20 bg-teal-600" />
        <div className="w-20 h-20 bg-cyan-600" />
        <div className="w-20 h-20 bg-sky-600" />
        <div className="w-20 h-20 bg-violet-600" />
        <div className="w-20 h-20 bg-fuchsia-600" />
        <div className="w-20 h-20 bg-pink-600" />
        <div className="w-20 h-20 bg-rose-600" />
        <div className="w-20 h-20 bg-amber-600" />
        <div className="w-20 h-20 bg-emerald-600" />
        <div className="w-20 h-20 bg-teal-600" />
        <div className="w-20 h-20 bg-cyan-600" />
        <div className="w-20 h-20 bg-sky-600" />
        <div className="w-20 h-20 bg-violet-600" />
      </div>
```

- グリッドシステム(max-width)

```
<div className="w-screen h-screen bg-red-600 absolute top-0 left-0 max-w-400" />

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-200 p-4 rounded">アイテム 1</div>
        <div className="bg-blue-200 p-4 rounded">アイテム 2</div>
        <div className="bg-blue-200 p-4 rounded">アイテム 3</div>
        <div className="bg-blue-200 p-4 rounded">アイテム 4</div>
        <div className="bg-blue-200 p-4 rounded">アイテム 5</div>
        <div className="bg-blue-200 p-4 rounded">アイテム 6</div>
      </div>


      // tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        // 'max-sm' は 639px 以下に適用 (smブレークポイントの-1px)
        "max-sm": { max: "639px" },
        // 'max-md' は 767px 以下に適用 (mdブレークポイントの-1px)
        "max-md": { max: "767px" },
      },
    },
  },
  plugins: [],
};

```

- マージン/パディング

```
<div>
        <div className="w-20 h-20 bg-blue-600 m-10" />
        <div className="w-20 h-20 bg-red-600 p-15" />
        <div className="w-20 h-20 bg-green-600 mt-10" />
        <div className="w-20 h-20 bg-yellow-600 mb-19" />
</div>
```

- ボーダー/角丸/シャドー

```
<div>
        <div className="w-20 h-20 bg-blue-600 m-10 border-4" />
        <div className="w-20 h-20 bg-red-600 p-15 border-10" />
        <div className="w-20 h-20 bg-green-600 mt-10 border-t-1 border-r-19 border-b-39" />
        <div className="w-20 h-20 bg-yellow-600 mb-19 rounded-2xl" />
        <div className="w-20 h-20 bg-purple-600" />
        <div className="w-20 h-20 bg-orange-600" />
        <div className="w-20 h-20 bg-pink-600" />
        <div className="w-20 h-20 bg-gray-600" />
        <div className="w-20 h-20 bg-indigo-600 rounded-full" />
        <div className="w-20 h-20 bg-lime-600 rounded-b-xl" />
        <div className="w-20 h-20 bg-teal-600 shadow-amber-300 shadow-2xl" />
        <div className="w-20 h-20 bg-cyan-600" />
        <div className="w-20 h-20 bg-sky-600 shadow-1 shadow-outline-2xl" />
        <div className="w-20 h-20 bg-violet-600" />
        <div className="w-20 h-20 bg-fuchsia-600" />
        <div className="w-20 h-20 bg-pink-600" />
        <div className="w-20 h-20 bg-rose-600" />
        <div className="w-20 h-20 bg-amber-600" />
        <div className="w-20 h-20 bg-emerald-600" />
        <div className="w-20 h-20 bg-teal-600" />
        <div className="w-20 h-20 bg-cyan-600" />
        <div className="w-20 h-20 bg-sky-600" />
        <div className="w-20 h-20 bg-violet-600" />
      </div>
```

- flex-direction row/column

```
flex-row
flex-row-reverse
columns-3
```

- flex-wrap/nowrap

```
<div className="flex flex-wrap">
<div className="flex flex-nowrap">
```

- justify-content flex-start flex-end center space between space-around

```
 <div className="flex justify-end">
<div className="flex justify-center">
<div className="flex justify-between">
<div className="flex justify-around">
```

- position static fixed absolute relative sticky

```

```
