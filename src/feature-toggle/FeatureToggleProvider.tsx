import React, {createContext, useContext} from "react";

type MyAppFeatureToggle = {
  CH1025: boolean
}

export const FeatureToggleContext =
  createContext<MyAppFeatureToggle>({CH1025: false})

type Props = {
  children: React.ReactElement
  featureToggle: MyAppFeatureToggle
}

export const FeatureToggleProvider: React.FC<Props> = ({
  children,
  featureToggle
}): React.ReactElement =>
  <FeatureToggleContext.Provider value={featureToggle}>
    {children}
  </FeatureToggleContext.Provider>

export const useFeatureToggle = () => useContext(FeatureToggleContext)
