import React, { useEffect, useState } from "react";
import { getRandomWords, getWords } from "./apiService";
import "./styles.css";

/**
 * GOAL:
 * 1) Implement a "palindrome checker" that receives a word and validates
 *    if the word is a palindrome or not (a palindrome has the same letters
 *    in the same order when read forwards and backwards).
 * 2) With the same function used in #1, import a list of words and validate
 *    whether each one is a palindrome
 *
 * REQUIREMENTS:
 * 1) Implement `isAPalindrome()` function
 * 2) Clear input field on submit
 * 3) Think about edge cases and ask more questions if you have any. Then uncomment
 *    out the renderWordList function and print the results of running the getWords
 *    array through the palindrome checker, let's see if edge cases pass
 * 4) Use the async `getRandomWords` function to get a new array of words to render
 *    the list with. (Note: this can happen on mount, no need for extra button).
 */

const renderWordList = (
  words: string[],
  isAPalindrome: (word: string) => boolean
) => {
  if (!words.length) return;
  return (
    <ul>
      {words.map((word, index) => {
        return (
          <li key={index} className={isAPalindrome(word) ? "green" : "red"}>
            {word}{" "}
            {isAPalindrome(word) ? "is a palindrome" : "is not a palindrome"}
          </li>
        );
      })}
    </ul>
  );
};

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  const isAPalindrome = (word: string): boolean => {
    return false;
  };

  const checkPalindrome = () => {
    if (input.length === 0) setIsPalindrome(null);
    setIsPalindrome(isAPalindrome(input));
  };

  return (
    <div>
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter a word"
      />
      <button onClick={checkPalindrome}>Check</button>
      {input && isPalindrome !== null && (
        <p className="result">
          The word "{input}" is{" "}
          {isPalindrome ? "a palindrome!" : "not a palindrome."}
        </p>
      )}
      {/* {renderWordList(getWords(), isAPalindrome)} */}
    </div>
  );
};

export default App;
