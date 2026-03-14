import React from "react";

export default function SignUpForm() {
  return (
    <section className="w-full bg-zinc-100 py-10 flex justify-center items-center">
      <form className="flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-2 md:mb-0 md:mr-8 whitespace-nowrap">Get Exclusive Deals from Bunny</h2>
        <div className="flex flex-col flex-1 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded border border-gray-400 px-6 py-4 text-lg min-w-[320px] w-[350px] md:w-[400px] focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded transition-colors text-lg whitespace-nowrap h-[56px] flex items-center justify-center"
        >
          Sign Up
        </button>
      </form>
      <div className="absolute left-1/4 mt-16">
        <a href="#" className="text-blue-700 text-base font-medium">Privacy Policy</a>
      </div>
    </section>
  );
}
