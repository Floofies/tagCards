# Taggable Cards

I made these tiny taggable "cards" to show off my GitHub projects. I was initally using [Unofficial GitHub Cards](https://github.com/lepture/github-cards), but the complexity and network overhead outweighed my simple needs.

## How-To

I made this as quickly as possible. Just import the CSS and JS files into your document. You can create your own taggable cards in two steps: Write one or more stubs which are rendered into full cards during initial document load. The script scans for all stubs in the live document upon loading, replacing them with fully rendered cards.

1. Create an empty parent element (stub) of any type that allows child elements.
2. Set the `class` attribute to `tagCard` and fill-in the [Data Attributes](#attributes).
3. The script scans for all elements of class `tagCard`, and then reads data from your stub elements.
4. The script replaces all stubs with their fully rendered cards.

You can then save the resultant HTML/CSS for use on a static page, or let the script run clientside every time.

## Attributes

There are several valid W3C Data Attributes, to be used on valid parent elements only:
Attribute|Summary
---|---
`data-title`|Sets the card's title/heading text.
`data-description`|Sets the card's description/content text.
`data-tags`|Sets the card's string tags. *Comma-sepearated strings are required.*
`data-url`|Links the card to a URL by wrapping the card in an `anchor` element.

## Example

Here is an example of a hand-written stub:

```html
<div class="tagCard"
	data-title="artists"
	data-url="https://github.com/Floofies/artists"
	data-description="A collection of JavaScript programs which randomly generate art."
	data-tags="javascript, canvas, tag4, tags on tags, bags on bags"
></div>
```

After the script runs, it will have replaced the stub with a tagged card.

Here is an example of such a card:

```html
<div class="tagCard">
	<a href="https://github.com/Floofies/artists">
		<div class="tagCardHeader">
			<h3>artists</h3>
		</div>
		<div class="tagCardDescription">
			<p>A collection of JavaScript programs which randomly generate art.</p>
		</div>
		<div class="tagCardFooter">
			<span class="tagCardTag">javascript</span>
			<span class="tagCardTag">canvas</span>
		</div>
	</a>
</div>
```
