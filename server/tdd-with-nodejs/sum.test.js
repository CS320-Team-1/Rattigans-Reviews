const sum = require("./sum"); //sum is just for testing purposes
const appModules = require("../app");

const splitCinema = appModules.sC;
const TMDBConnectionTV = appModules.connectTV;

test('adds 2 + 2 to equal 4', () =>{
    expect(sum(2,2)).toBe(4);
});

test('splitCinema, space translates to %20', () =>{
    expect(splitCinema(" ")).toBe("%20");
});

test('break bad id', async () => {
    expect((await TMDBConnectionTV("breaking bad"))[0].id).toBe(1396);
});