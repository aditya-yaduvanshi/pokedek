export default function getImageUrl (url: string) {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
		url.split('/')[url.split('/').length - 2]
	}.png`;
};
