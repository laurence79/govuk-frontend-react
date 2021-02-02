import React from "react";
import { render } from "@testing-library/react";
import { TagProps } from "./Tag.types";
import { Tag } from "./Tag";

describe("Tag", () => {
  let props: TagProps;

  beforeEach(() => {
    props = {
      colour: "RED",
      text: 'Text'
    };
  });

  const renderComponent = () => render(<Tag {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveClass("govuk-tag");
  });

  it("should have red className with colour RED", () => {
    props.colour = "RED";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveClass("red-tag");
  });

  it("should have green className with colour GREEN", () => {
    props.colour = "GREEN";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveClass("green-tag");
  });

  it("should have grey className with colour GREY", () => {
    props.colour = "GREY";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveClass("grey-tag");
  });

  it("should have orange className with colour ORANGE", () => {
    props.colour = "ORANGE";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveClass("orange-tag");
  });

  it("should have glow-text className with loading true", () => {
    props.loading = true;
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveClass("glow-text");
  });

  it("should not have glow-text className with loading false", () => {
    props.loading = false;
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).not.toHaveClass("glow-text");
  });

  it("should contain text", () => {
    props.text = "Hello test";
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("tag");

    expect(testComponent).toHaveTextContent("Hello test");
  });
});