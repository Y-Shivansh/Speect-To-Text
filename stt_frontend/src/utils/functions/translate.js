export const translateToHindi = async (text) => {
  const res = await fetch(
    `https://inputtools.google.com/request?text=${encodeURIComponent( // inputtools.google.com/request, converts English into Hindi script.
      text
    )}&itc=hi-t-i0-und&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8`
  );
  const data = await res.json(); // response is something like: ["SUCCESS", [[text, [convertedText]]]]
  if (data[0] === "SUCCESS") {
    return data[1][0][1][0];
  }
  return text;
};