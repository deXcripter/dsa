const urlSlug = (title) => title.toLowerCase().trim().split(/\s+/).join('-');

console.log(urlSlug(' Winter Is  Coming'));
