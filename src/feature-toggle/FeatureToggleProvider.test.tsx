import {render, screen} from "@testing-library/react";
import React from "react";
import {FeatureToggleProvider, useFeatureToggle} from "./FeatureToggleProvider";

const TestComponent: React.FC = (): React.ReactElement => {
  const { CH1025 } = useFeatureToggle()
  return CH1025 ? <>Feature toggle is on</> : <>Under construction</>;
}

describe("FeatureToggleProvider", () => {
  it("should render under construction when feature toggle is off", () => {
    render(<FeatureToggleProvider featureToggle={{ CH1025: false }}>
      <TestComponent/>
    </FeatureToggleProvider>)

    expect(screen.getByText(/Under construction/)).toBeInTheDocument()
  })

  it("should render feature toggle on when feature toggle is on", () => {
    render(<FeatureToggleProvider featureToggle={{ CH1025: true }}>
      <TestComponent/>
    </FeatureToggleProvider>)

    expect(screen.getByText(/Feature toggle is on/)).toBeInTheDocument()
  })
})