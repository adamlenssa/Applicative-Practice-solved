import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  let planetWithMoons = data.planets.filter((planet) => planet.moons);
  let planetName = undefined;
  for (let i = 0; i < planetWithMoons.length; i++) {
      const element = planetWithMoons[i].moons;
      for (const moon of element) {
        if (moon === moonName) {
          planetName = planetWithMoons[i].name;
          break
        }
      }
    }
    return planetName;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
