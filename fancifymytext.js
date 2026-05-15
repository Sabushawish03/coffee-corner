function makeBigger() {
    alert("Hello, world!");
    document.getElementById("myText").style.fontSize = "24pt";
}

function applyStyle() {
    var textarea = document.getElementById("myText");
    if (document.getElementById("fancyShmancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "";
        textarea.style.textDecoration = "none";
    }
}

function mooify() {
    var textarea = document.getElementById("myText");
    var text = textarea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var trimmed = sentences[i].trimEnd();
        if (trimmed.length > 0) {
            var words = trimmed.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }
    textarea.value = sentences.join(".");
}
