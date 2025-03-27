import React, { useState, useEffect, useMemo } from "react";

function App() {
  const [inputText, setInputText] = useState(
    "Sehr geehrter Herr Schmidt, im Januar hatte ich bei (21) für mich und meine Familie einen Flug nach Indien gebucht. Leider entsprach unser Flug überhaupt nicht dem, (22) bei der Buchung am Telefon ausgemacht worden war."
  );
  const [answers, setAnswers] = useState({});
  const [outputText, setOutputText] = useState("");
  const [sentences, setSentences] = useState([]);
  const [answerOptions, setAnswerOptions] = useState({});

  const numbers = useMemo(() => {
    return [
      ...new Set(
        inputText.match(/\((\d+)\)/g)?.map((num) => num.replace(/[()]/g, "")) ||
        []
      ),
    ];
  }, [inputText]);

  useEffect(() => {
    let defaultAnswers = {};
    numbers.forEach((num) => {
      defaultAnswers[num] = answers[num] || "";
    });
    setAnswers(defaultAnswers);
  }, [numbers]);

  useEffect(() => {
    const optionMatches = inputText.match(/(\d+)\.\n([A-C]\.\s*[^\n]+\n?)+/g);
    let options = {};
    if (optionMatches) {
      optionMatches.forEach((match) => {
        const lines = match.split("\n").filter(Boolean);
        const key = lines[0].split(".")[0].trim();
        options[key] = lines
          .slice(1)
          .map((line) => line.replace(/^[A-C]\./, "").trim());
      });
    }
    setAnswerOptions(options);
  }, [inputText]);

  const handleAnswerChange = (num, value) => {
    setAnswers((prev) => ({ ...prev, [num]: value }));
  };

  const replaceNumbersWithAnswers = (text, answers) => {
    return text.replace(
      /\((\d+)\)/g,
      (match, number) => `{=${answers[number] || match}}`
    );
  };

  const handleReplace = () => {
    if (numbers.length === 0) {
      alert("Không tìm thấy số nào trong văn bản.");
      return;
    }
    const replacedText = replaceNumbersWithAnswers(inputText, answers);
    setOutputText(replacedText);
    setSentences(
      replacedText
        .split(/\.+/)
        .filter((sentence) => sentence.trim() !== "")
        .map((sentence) => sentence.trim() + ".")
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Text Replacement Tool</h2>
      <textarea
        rows="10"
        cols="50"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <h3>Enter Answers</h3>
      <div>
        {numbers.length > 0 ? (
          numbers.map((num) => (
            <div key={num} style={{ marginBottom: "5px" }}>
              <label>{num}: </label>
              <select
                value={answers[num]}
                onChange={(e) => handleAnswerChange(num, e.target.value)}
                style={{ padding: "5px", marginLeft: "5px" }}
              >
                <option value="">-- Chọn đáp án --</option>
                {answerOptions[num]?.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                <option value="custom">Nhập đáp án khác...</option>
              </select>
              {answers[num] === "custom" && (
                <input
                  type="text"
                  value={answers[num]}
                  onChange={(e) => handleAnswerChange(num, e.target.value)}
                  style={{ marginLeft: "5px", padding: "5px" }}
                />
              )}
            </div>
          ))
        ) : (
          <p>Không có số nào trong văn bản.</p>
        )}
      </div>
      <button
        onClick={handleReplace}
        style={{ marginTop: "10px", padding: "8px" }}
      >
        Replace Text
      </button>
      <h3>Output:</h3>
      <p style={{ background: "#f4f4f4", padding: "10px" }}>{outputText}</p>
    </div>
  );
}

export default App;
