// Expands a "stub" element into a full "tag card" element,
//  via transposing data attributes of main node into new child nodes.
window.addEventListener("load", function () {
	// Parse a CSV tag string into individual span elements
	function createSpan(tag) {
		const tagNode = document.createElement("span");
		tagNode.classList.add("tagCardTag");
		tagNode.textContent = tag.trim();
		return tagNode;
	}
	function parseTags(tagString) {
		return tagString.split(",").map(createSpan);
	}
	function createCard(title, descStr, tagStr, url) {
		// Looks like cleanup on Aisle Four
		const tagCard = document.createElement("div");
		tagCard.classList.add("tagCard");
		const anchor = document.createElement("a");
		anchor.href = url;
		const header = document.createElement("div");
		header.classList.add("tagCardHeader");
		const heading = document.createElement("h3");
		heading.textContent = title;
		const desc = document.createElement("div");
		desc.classList.add("tagCardDescription");
		const descText = document.createElement("p");
		descText.textContent = descStr;
		const footer = document.createElement("div");
		footer.classList.add("tagCardFooter");
		const tagNodes = parseTags(tagStr);
		if (tagNodes.length) footer.append(...tagNodes);
		desc.append(descText);
		header.append(heading);
		anchor.append(header);
		anchor.append(desc);
		anchor.append(footer);
		tagCard.append(anchor);
		return tagCard;
	}
	// Parse a card stub into a full card
	function parseCard(stub) {
		const data = stub.dataset;
		return createCard(
			data.title ?? "Untitled",
			data.description ?? "",
			data.url ?? "",
			data.tags ?? ""
		);
	}
	// Inject card contents into a card stub
	function renderCard(stub) {
		stub.replaceWith(parseCard(stub));
	}
	function renderTagCards() {
		const stubs = document.querySelectorAll(".tagCard");
		if (stubs.length) stubs.forEach(renderCard);
	}
	renderTagCards();
});