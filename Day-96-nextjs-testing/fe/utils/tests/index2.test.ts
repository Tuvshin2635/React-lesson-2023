import { composeArticleSlug, extractArticleIdFromSlug } from "../index";
import { slugify } from "../index";

const str = "HELLO World";
const nono = "helloblah";
const mene = "M'Ed$Exgui58736498374023";
const id = 1000;

describe("composeArticleSlug", () => {
  it("ard n zalgaj bichne ", () => {
    expect(composeArticleSlug(id, str)).toBe("hello-world-1000");
  });

  it("ard n zalgaj bichne ", () => {
    expect(extractArticleIdFromSlug(nono)).toBe("helloblah");
  });
});
