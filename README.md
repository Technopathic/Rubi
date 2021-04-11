# Rubi

Rubi characters are small superscript texts placed above or to the right of normal text. These characters are common in East Asian writings and serve a purpose in adding an extra pronunciation guide for unfamiliar readers. After seeing a [twitter post by @mabelandtee](https://twitter.com/mabelandtee/status/1381043149125074946), I developed a ReactJS concept component to deliver a similar result as Rubi characters, but for English. 

[Check out the Demo](https://technopathic.github.io/Rubi/)

For more information on Rubi Characters, check out this [Wiki article](https://en.wikipedia.org/wiki/Ruby_character)
## Getting Started

Via NPM: 
```
npm install rubi --save
```

![Example Code](https://technopathic.github.io/Rubi/example2.svg)

<details>
<summary>Copyable Code</summary>

```
import Rubi from 'rubi'

const App = () => <Rubi text="Kernel">Colonel</Rubi>

export default App
```
</details>

## Properties

| Prop         |  type   | default   | description                               | required  |
|--------------|---------|-----------|-------------------------------------------|-----------|
| text         | string  | none      | Your rubi text above the normal text      | Yes       |
| children     | string  | none      | Your normal text                          | Yes       |
| size         | string  | "12px"    | Font size for your rubi text              | No        |
| offsetX      | number  | 0         | Offset rubi text on X-axis                | No        |
| offsetY      | number  | 0         | Offset rubi text on Y-axis                | No        |
| color        | string  | "initial" | Color of your rubi text                   | No        |
| align        | string  | "center"  | Aligns rubi text                          | No        |
| justify      | boolean | false     | Justify Rubi text to width of normal text | No        |
| lowerSpacing | boolean | false     | Justify normal text to width of Rubi text | No        |
| lowerCenter  | boolean | false     | Centers normal text to width of Rubi text | No        |
| attachAfter  | string  | none      | Add string after each char in normal text | No        |

Be sure to check out the example folder to see these properties in action.

## FAQ

### Will this support other writing systems?
Not sure. I have some experience in multilingual websites, but I'm open to contributions. 

### Why the name "Rubi"? It's really similar to the "Ruby" programming language. 
No relation. "Ruby" or "Rubi" is just what it's called. I could have gone for "Ruby" but yeah, I'm pretty certain that's been taken.

### Why did you build this?
I liked the concept and figured myself and other people would find it useful. 

### Do you profit from this?
Nope. Would appreciate a follow, though. 
[Twitter](https://twitter.com/NowNanoTV) | 
[Twitch](https://www.twitch.tv/NowNano)

### My Rubi characters are overlapping?
The Rubi text will require that you have a `line-height` set for your content. I've found that `line-height: 32px` works best at minimum.

### Does this support mobile?
It does.

### This looks kind of weird?
Of course. This isn't a standard in English writing systems. But it certainly makes it more interesting. 

### Can I contribute to this?
Yep. Make that pull request. 

## License

MIT © [Technopathic](https://github.com/Technopathic)
