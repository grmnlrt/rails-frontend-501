import Typed from "typed.js"

const initTypeJs = () => {
  const typed = new Typed('#banner-typed-text', {
    strings: ["Test live reload", "Test 2", "Change your life", "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { initTypeJs };
