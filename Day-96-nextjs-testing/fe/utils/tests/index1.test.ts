import { slugify } from "../index";

const str = "HELLO World";
const mene = "M'Ed$Exgui58736498374023";

describe("slugify", () => {
  it("change the lower case ", () => {
    expect(slugify(str)).toBe("hello-world");
  });
  it("change the lower case ", () => {
    expect(slugify(mene)).toBe("medexgui58736498374023");
  });
});
