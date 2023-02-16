## About
This webpage allows the user to draw on a pixel grid, similarly to an etch-a-sketch. This was created as part of TOP: Fundamentals.

## Goals
* Create a 16x16 pixel grid on a page
* When user mouses over a square in the grid, that square changes color
* Allow user to select color that the grid is being filled with
* Allow user to select size of grid up to 100x100
* Create multiple fill effects for squares (choose color, random, or shade)
* Create clear button to reset grid to white
* Allow user to toggle between "click" and "drag" modes to fill squares

## Thoughts
Pretty fun exercise. I had some issues with the addEventListeners until I realized that I needed to remove them and re-add in order to
change what they were listening for when changing fill mode.
I enjoyed figuring out the shading as well. Decided to make it work with colors too instead of just shades of gray.
Currently the CSS and the HTML is a bit messy and could use a cleanup but overall everything is working properly.

## Project Links
- [Try the website here!](https://copaiement.github.io/etch-a-sketch/)
- [Link to TOP Assignment](https://www.theodinproject.com/lessons/etch-a-sketch)
