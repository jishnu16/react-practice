export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

export function planetsFormattedForDropdown(planets) {
  return planets.map(planet => {
    return {
      value: planet.name,
      text: planet.name
    };
  });
}
