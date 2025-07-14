import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen overflow-auto">
      <h1>helloworld</h1>
      {/*
      <div className="w-20 h-20 bg-blue-600 absolute top-0 left-0" />
      <div className="w-20 h-20 bg-red-600 absolute top-0 right-0" />
      <div className="w-20 h-20 bg-green-600 absolute bottom-0 left-0" />
      <div className="w-20 h-20 bg-yellow-600 absolute bottom-0 right-0" />
      <div className="w-20 h-20 bg-purple-600 absolute top-0 left-1/2" />
      <div className="w-20 h-20 bg-orange-600 absolute top-1/2 left-1/2" />
      <div className="w-20 h-20 bg-pink-600 absolute top-1/2 right-0" />
      <div className="w-20 h-20 bg-gray-600 absolute bottom-0 left-1/2" />
      <div className="w-20 h-20 bg-indigo-600 absolute top-1/2 left-0" />
      */}

      <div className="flex justify-around">
        <div className="w-20 h-20 bg-blue-600 m-10 border-4" />
        <div className="w-20 h-20 bg-red-600 p-15 border-10" />
        <div className="w-20 h-20 bg-green-600 mt-10 border-t-1 border-r-19 border-b-39" />
        <div className="w-20 h-20 bg-yellow-600 mb-19 rounded-2xl" />
        <div className="w-20 h-20 bg-purple-600 relative" />
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
    </div>
  );
}
