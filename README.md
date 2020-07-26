# slang-translator

## Inspiration:

In celebration of MLH’s 7th birthday, we wanted to build a lighthearted hack that would be entertaining to its users. We’ve always been baffled by slang used in Toronto (also known as the 6ix), however we’ve found it to be interesting and quite funny. Thus, to take advantage of the vast vocabulary in Toronto slang, we decided to build 6ixify.

## What it does:

6ixify is able to read text within Google Chrome, and “translate” it into Toronto Slang by replacing key words with their Toronto equivalent. It works especially well on Facebook Messenger as users tend to have more casual conversations, leading to funnier translations. It also works on news articles, Google search results, Stack Overflow posts, etc.

## How we built it:

We built the chrome extensions using the following various web development technologies, primarily JavaScript (but also HTML), in order to interact with the elements on the webpages. A JSON file was created that held key value pairs of English words and Toronto slang. We then used JavaScript to find and replace text that matched the key value pairs, and displayed this new text on the webpage.

## Challenges we ran into:

This was all of our first times developing a Chrome extension, and as a result, we needed to navigate some of the unique aspects that come with it. For example, one of the challenges we ran into was understanding the limitations of JavaScript in the context of a Chrome extension.

Another challenge we faced was determining the best method to implement the translation aspects of the extension. We needed to find an option that was feasible to develop while still being functional - ultimately, when exploring whether to translate specific highlighted text or the entire webpage, we found that translating text on the entire page best suited our vision for the extension.

## Accomplishments we’re proud of:

We made it work! Chrome extensions are pretty versatile (once you solve the problems that come along with them), thus building our first extension was really rewarding. This hackathon was also much shorter than usual, so we’re proud of our ability to finish in this limited time.

Moreover, after testing it out ourselves and sharing it with a couple of our friends, we realized that 6ixify brought a lot of entertainment value. For people who don’t know the mapping of the words, each time they send a message is an opportunity for a possible Toronto slang translation. We’re proud of making a fun Chrome extension that has the potential to make any website into something entertaining.

## What we learned:

There are many limitations with developing a Chrome extension, namely the complications involved in reading a local file or calling an API. However, after building 6ixify, we learned that both of these were possible, it just involved a couple extra steps.

Aside from all this, one of our big takeaways is our increased knowledge of Toronto slang, which we learned from researching the phrases and testing out 6ixify.

## What’s next:

First and foremost, we want to expand the translator’s vocabulary! Increasing the amount of words and phrases it is able to detect will allow it to be more accurate and versatile. As well, we would like to work on implementing better grammar so that verb tenses can be maintained.

Next, we would like to develop an “autocorrect” function that allows the user to alter their text to Toronto slang prior to sending a message on various messaging apps. Currently, the extension supports messages that have already been sent, however, expanding the scope to cover messages that have not been sent will allow for an improved user experience (and greater entertainment value).

Lastly, we hope to implement different types of slang moving forward - while our initial focus is on the Toronto area, we hope to expand the extension such that it is able to translate text into slang from all around the world.
