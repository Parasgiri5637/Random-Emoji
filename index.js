"use strict";

const btnEL = document.querySelector("#btn");
const pEl = document.querySelector("p");

//* emojiApi = https://emojihub.yurace.pro/api/all

//* api2 = "https://emoji-api.com/emojis?access_key=e2171c4a5c846b29b9261dbd397a43bcc32261e1";

let emoji = [];

async function getEmoji() {
  try {
    const api = await fetch(
      "https://emoji-api.com/emojis?access_key=e2171c4a5c846b29b9261dbd397a43bcc32261e1"
    );
    const res = await api.json();

    for (let i = 0; i <= 1500; i++) {
      emoji.push({
        emojiCharcter: res[i].character,
        emojiName: res[i].unicodeName,
      });
      const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
      btnEL.innerHTML = randomEmoji.emojiCharcter;
      pEl.innerHTML = randomEmoji.emojiName;
    }
  } catch (err) {
    btnEL.innerHTML = "🚫";
    pEl.innerHTML = new Error(`${err.message}, try again later`);
  }
}

btnEL.addEventListener("click", getEmoji);
