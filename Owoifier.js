let defaults = {
    rltow: true,
    yaftern: true,
    repeaty: true,
    replaceWords: true,
    wordMap: {
        love: 'wuv',
        mr: 'mistuh',
        dog: 'doggo',
        cat: 'kitteh',
        hello: 'henwo',
        hell: 'heck',
        fuck: 'fwick',
        fuk: 'fwick',
        shit: 'shoot',
        friend: 'fwend',
        stop: 'stawp',
        god: 'gosh',
        dick: 'peepee',
        penis: 'peepee',
        damn: 'darn'
    },
    doStutter: true,
    stutterChance: 0.1,
    doPrefixes: true,
    prefixChance: 0.05,
    prefixes: [
        'OwO',
        'OwO whats this?',
        '*unbuttons shirt*',
        '*nuzzles*',
        '*raises paw*',
        '*notices bulge*',
        '*blushes*',
        '*giggles*',
        'hehe'
    ],
    doSuffixes: true,
    suffixChance: 0.15,
    suffixes: [
        '(ﾉ´ з `)ノ',
        '( ´ ▽ ` ).｡ｏ♡',
        '(´,,•ω•,,)♡',
        '(*≧▽≦)',
        'ɾ⚈▿⚈ɹ',
        '( ﾟ∀ ﾟ)',
        '( ・ ̫・)',
        '( •́ .̫ •̀ )',
        '(▰˘v˘▰)',
        '(・ω・)',
        '✾(〜 ☌ω☌)〜✾',
        '(ᗒᗨᗕ)',
        '(・`ω´・)',
        ':3',
        '>:3',
        'hehe',
        'xox',
        '>3<',
        'murr~',
        'UwU',
        '*gwomps*'
    ],
    filter: ['video-title', 'ytd-compact-video-renderer'] // Implemented so YouTube doesnt have a stroke.
};

function replaceWords(text, wordMap) {
    const words = text.split(/\s+/);
    const replacedWords = words.map((word) => wordMap[word.toLowerCase()] || word);
    return replacedWords.join(' ');
}

function owoifyText(text, options) {
    let owoText = text;

    if (options.replaceWords && options.wordMap) {
        owoText = replaceWords(owoText, options.wordMap);
    }

    if (options.doStutter && Math.random() < options.stutterChance) {
        owoText = owoText.split('').map((char) => char + (char === ' ' ? ' ' : char)).join('');
    }

    if (options.doPrefixes && Math.random() < options.prefixChance) {
        owoText = options.prefixes[Math.floor(Math.random() * options.prefixes.length)] + ' ' + owoText;
    }

    if (options.doSuffixes && Math.random() < options.suffixChance) {
        owoText = owoText + ' ' + options.suffixes[Math.floor(Math.random() * options.suffixes.length)];
    }

    return owoText;
}

function owoifyElement(element, options) {
    const {
        filter
    } = options;

    for (const node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
            // Check if any part of the element's tag name matches any of the filters
            const elementTag = node.parentNode.tagName.toLowerCase();
            if (filter.some((f) => elementTag.includes(f))) {
                continue;
            }

            // Check if the parent node has any of the specified classes or IDs
            if (node.parentNode.classList) {
                const classList = Array.from(node.parentNode.classList);
                if (filter.some((f) => classList.includes(f))) {
                    continue;
                }
            }
            if (node.parentNode.id && filter.includes(node.parentNode.id)) {
                continue;
            }
            if (node.parentNode.tagName.toLowerCase() == 'a') {
                continue
            }

            node.textContent = owoifyText(node.textContent, options);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // For some reason TEXT_NODE wasn't enough to get all text on screen.
            owoifyElement(node, options);
        }
    }
}



function owoifyPage(options) {
    owoifyElement(document.body, options);
}

owoifyPage(defaults);
