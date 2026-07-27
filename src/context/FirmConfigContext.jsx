/**
 * FIRM CONFIG CONTEXT
 * Provides firm configuration throughout the app
 * Allows switching between default, US demo, and UK demo configs
 */

import { createContext, useContext, useState } from 'react'
import firmConfig from '../data/firmConfig'

const FirmConfigContext = createContext()

export function FirmConfigProvider({ children, initialConfig = firmConfig }) {
  const [config, setConfig] = useState(initialConfig)
  
  const updateConfig = (newConfig) => {
    setConfig(newConfig)
  }
  
  return (
    <FirmConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </FirmConfigContext.Provider>
  )
}

/**
 * Hook to access firm configuration
 * @returns {{ config: object, updateConfig: function }}
 */
export function useFirmConfig() {
  const context = useContext(FirmConfigContext)
  if (!context) {
    throw new Error('useFirmConfig must be used within FirmConfigProvider')
  }
  return context
}

export default FirmConfigContext
