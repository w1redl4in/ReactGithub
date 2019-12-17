import Container from ".";
import React from "react";
import { render, waitForElement } from "@testing-library/react";

describe("Tests for SearchBar", () => {
  it("Should show a search bar when the page is loaded", async () => {
    const { getByTestId } = render(<Container />);
    const searchBarNode = await waitForElement(() => getByTestId("searchbar"));
    console.log(searchBarNode);
  });
});
