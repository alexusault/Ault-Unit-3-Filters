
printPyramid(5);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
let space = " ";

let brick = "#";

let layer = space+space+space+space+space+space+brick+brick;
let layertwo = space+space+space+space+space+brick+brick+brick;
let layerthree = space+space+space+space+brick+brick+brick+brick;
let layerfour = space+space+space+brick+brick+brick+brick+brick;
let layerfive = space+space+brick+brick+brick+brick+brick+brick;
let layersix = space+brick+brick+brick+brick+brick+brick+brick;

console.log(space);
console.log(layer);
console.log(layertwo);
console.log(layerthree);
console.log(layerfour);
console.log(layerfive);
console.log(layersix)

}
