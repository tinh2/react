export async function getRandomWords() {
  return await fetch("https://random-word-api.herokuapp.com/word?number=10")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data, Array.isArray(JSON.parse(data)));
      return JSON.parse(data);
    });
}

export function getWords() {
  return [
    "kayak",
    "taco cat",
    "two words",
    "",
    "hello",
    "civic",
    "noon",
    "racecar",
    "Mom",
    "dad",
    "LEVEL",
    "level ",
  ];
}
