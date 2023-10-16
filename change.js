//valueをtype1からtype2への変換を行う関数
function getValues(Value,type1,type2){
    const map = [
        ["あ", "a", "@"],
        ["い", "#", "☆"],
        ["う", "&", "♪"],
        ["え", "_", "→"],
        ["お", ",", "1"],
        ["か", "a", "2"],
        ["き", "b", "¥"],
        ["く", "c", "$"],
        ["け", "a", "€"],
        ["こ", "a", "2"],
        ["さ", "d", "3"],
        ["し", "e", "%"],
        ["す", "f", "°"],
        ["せ", "d", "#"],
        ["そ", "d", "3"],
        ["た", "g", "4"],
        ["ち", "h", "○"],
        ["つ", "i", "＊"],
        ["て", "g", "・"],
        ["と", "g", "4"],
        ["な", "k", "5"],
        ["に", "l", "+"],
        ["ぬ", "j", "×"],
        ["ね", "j", "÷"],
        ["の", "j", "5"],
        ["は", "m", "6"],
        ["ひ", "n", "<"],
        ["ふ", "o", "="],
        ["へ", "m", ">"],
        ["ほ", "m", "6"],
        ["ま", "p", "7"],
        ["み", "q", "「"],
        ["む", "r", "」"],
        ["め", "s", ":"],
        ["も", "p", "7"],
        ["や", "t", "8"],
        ["ゆ", "v", "々"],
        ["よ", "t", "〆"],
        ["ら", "w", "9"],
        ["り", "x", "^"],
        ["る", "y", "|"],
        ["れ", "z", "\\"],
        ["ろ", "w", "9"],
        ["わ", "'", "\""],
        ["を", "(", "("],
        ["ん", ")", ")"],
        ["ー", "'", "'"],
    ];
    let result = "";
    if(type1 === "kana"){
        if (type2 === "english") {
            for (let i = 0; i < Value.length; i++) {
                const char = Value.charAt(i);
                const values = map.find((result) => result[0] === char);
                if (values) {
                    result += values[1];
                } else {
                    result += char;
                }
            }
        } else if (type2 === "symbol") {
            for (let i = 0; i < Value.length; i++) {
                const char = Value.charAt(i);
                const values = map.find((result) => result[0] === char);
                if (values) {
                    result += values[2];
                } else {
                    result += char;
                }
            }
        } else {
            result = Value;
        }
    }else if(type1 === "english"){
        if (type2 === "kana") {
            for (let i = 0; i < Value.length; i++) {
                const char = Value.charAt(i);
                const values = map.find((result) => result[1] === char);
                if (values) {
                    result += values[0];
                } else {
                    result += char;
                }
            }
        } else if (type2 === "symbol") {
            for (let i = 0; i < Value.length; i++) {
                const char = Value.charAt(i);
                const values = map.find((result) => result[1] === char);
                if (values) {
                    result += values[2];
                } else {
                    result += char;
                }
            }
        } else {
            result = Value;
        }
    }else{
        if (type2 === "english") {
            for (let i = 0; i < Value.length; i++) {
                const char = Value.charAt(i);
                const values = map.find((result) => result[2] === char);
                if (values) {
                    result += values[1];
                } else {
                    result += char;
                }
            }
        } else if (type2 === "kana") {
            for (let i = 0; i < Value.length; i++) {
                const char = Value.charAt(i);
                const values = map.find((result) => result[2] === char);
                if (values) {
                    result += values[0];
                } else {
                    result += char;
                }
            }
        } else {
            result = Value;
        }
    }
    return result;
}

// HTMLのinput要素から値を取得して変換する関数
function convert() {
    let element = document.getElementsByName("type");
    let type = "";
    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            type = element[i].value;
        }
    }

    const codeInput = document.getElementsByName("code")[0];
    const englishOutput = document.getElementsByName("english")[0];
    const symbolOutput = document.getElementsByName("symbol")[0];
    const kanaOutput = document.getElementsByName("kana")[0];
    const codeValue = codeInput.value;
    const englishValue = getValues(codeValue, type, "english");
    const symbolValue = getValues(codeValue, type, "symbol");
    const kanaValue = getValues(codeValue, type, "kana");
    englishOutput.value = englishValue;
    symbolOutput.value = symbolValue;
    kanaOutput.value = kanaValue;
}
