import {render} from "@testing-library/react";
import React, {createContext} from "react";

type MyAppFeatureToggle = {
  CH1025: boolean
}

const FeatureToggleContext = createContext<MyAppFeatureToggle>({ CH1025: false })

type Props = {
  children: React.ReactElement
}

const FeatureToggleProvider: React.FC<Props> = ({children}): React.ReactElement =>
  <FeatureToggleContext.Provider value={{ CH1025: false }}>
    { children }
  </FeatureToggleContext.Provider>

const TestComponent: React.FC = (): React.ReactElement => <></>

describe("FeatureToggleProvider", () => {
  it("should be able to render", () => {
    render(<FeatureToggleProvider><TestComponent/></FeatureToggleProvider>)
    expect(true).toEqual(true)
  })
})