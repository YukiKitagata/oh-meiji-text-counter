// ==UserScript==
// @name         oh-meiji アンケート 文字数カウンター
// @version      0.1
// @description  oh-meijiのアンケートで文字数をカウントするScriptです
// @author       @Yk_0n
// @match        https://oh-o2.meiji.ac.jp/portal/oh-o_meiji/classweb/questionnaire*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const textAreas = Array.from(
    document.querySelectorAll(".questionnaireDetail textarea")
  );

  const countLength = (e) => {
    const counterElements = e.target.parentNode.getElementsByClassName(
      "user__script__textarea__counter"
    );

    if (!counterElements.length) return;

    counterElements[0].innerText = `${
      e.target.value.replace(/\s/g, "").length
    }文字 (空白・改行を除く)`;
  };

  textAreas.map((textArea) => {
    textArea.addEventListener("keyup", countLength);

    const counterElement = document.createElement("p");

    counterElement.innerText = `${
      textArea.value.replace(/\s/g, "").length
    }文字 (空白・改行を除く)`;
    counterElement.className = "user__script__textarea__counter";

    textArea.parentNode.appendChild(counterElement);
  });
})();
