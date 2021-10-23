# tagCards

I made these tiny taggable HTML cards to show off my GitHub projects. I was initally using [Unofficial GitHub Cards](https://github.com/lepture/github-cards), but the complexity outweighed my simple needs.

## How-To

You can create your own taggable cards. They are generic enough to be used for almost any text-only purpose.

It works simply, using any valid parent element which can contain children:
- Add these W3C Data Attributes to the element: `data-title`, `data-description`, `data-url`, and `data-tags`. (See [Attributes](#attributes)
- When running the webpage, the script reads data from your W3C Data Attributes.
- Data is transposed into the HTML element as 3 distinct child elements: Title, description, and tags list.

## Example

```html
<div class="tagCard"
	data-title="artists"
	data-url="https://github.com/Floofies/artists"
	data-description="A collection of JavaScript programs which randomly generate art."
	data-tags="javascript, canvas"
></div>
```

### Attributes

There are several valid WC3 Data Attributes, to be used on valid parent elements only:
Attribute|Summary
---|---|---
`data-title`| Sets the card's title/heading text.
`data-description`| Sets the card's description/content text.
`data-tags`| Sets the card's footer tags and adds them to the global tag list.
`data-url`| Links the card to a URL by wrapping the card in an `anchor` element.
