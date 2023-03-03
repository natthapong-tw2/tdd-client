import {render} from "@testing-library/react";
import React, {createContext} from "react";

const FeatureToggleContext = createContext({ foo: "bar"})

type Props = {
  children: React.ReactElement
}

const FeatureToggleProvider: React.FC<Props> = ({children}): React.ReactElement =>
  <FeatureToggleContext.Provider value={{foo: "bar"}}>
    { children }
  </FeatureToggleContext.Provider>

const TestComponent: React.FC = (): React.ReactElement => <></>

describe("FeatureToggleProvider", () => {
  it("should be able to render", () => {
    render(<FeatureToggleProvider><TestComponent/></FeatureToggleProvider>)
    expect(true).toEqual(true)
  })
})