function includesWords(sentence) {
  let strng = 0;
  strng = sentence
    .split("")
    .filter(
      (el) =>
        el.includes("i") ||
        el.includes("u") ||
        el.includes("o") ||
        el.includes("a") ||
        el.includes("e")
    ).length;
  console.log(strng);
}

noSpace("welcome to our journeyai");
