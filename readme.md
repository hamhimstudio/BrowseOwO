# Customizing the OWO Bot

The OWO bot allows you to owoify text on a webpage by replacing words and adding random stutters, prefixes, and suffixes. This document explains how to customize the bot by adding your own filters, word replacements, prefixes, and suffixes.
How the OWO bot works

## The main owoify function takes in some text and an options object. It does the following:

    Replace words using a wordMap
    Randomly stutter words
    Randomly add prefixes
    Randomly add suffixes

It returns the modified owoified text.

The owoifyPage function calls owoifyElement on the body element to owoify the entire page.

owoifyElement loops through all text nodes under an element, checking if they pass the filters before calling owoifyText on the node's text.
## Adding custom filters

The owoifyElement function takes in an options object that contains a filter array. This array contains class names, IDs, and tag names that should be skipped when owoifying text.

For example, to skip owoifying text under elements with class "skip" or ID "title":

js

Copy code
let defaults = {
  filter: ['skip', 'title']
}

You can add any classes, IDs, or tag names to skip.
## Adding custom word replacements

The wordMap in the options object controls what words get replaced. For example:

```js
let defaults = {
  cat: 'kitteh',
  dog: 'doggo'  
}
```

This will replace "cat" with "kitteh" and "dog" with "doggo".

Simply add your own keys and values to the wordMap to customize the replacements.
## Adding custom prefixes and suffixes

The prefixes and suffixes arrays contain random strings that can be added before and after the owoified text.

To add your own, simply add new strings into the arrays

```js
prefixes: [
        'OwO',
        'OwO whats this?',
        '*unbuttons shirt*',
        '*nuzzles*',
        '*raises paw*',
        '*notices bulge*',
        '*blushes*',
        '*giggles*',
        'hehe',
        // add more here!!
    ],
```

Same thing with suffixes!!

You can add as many custom prefixes and suffixes as you want.

And that's it! By customizing the filter, wordMap, prefixes and suffixes, you can create your own personalized Owoify Plugin.
