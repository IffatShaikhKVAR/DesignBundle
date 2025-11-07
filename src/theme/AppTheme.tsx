import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import React from 'react'
import type { CSSObject } from '@emotion/react'

// Define custom palette colors
const lightPalette = {
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
    contrastText: '#fff'
  },
  secondary: {
    main: '#dc004e',
    light: '#f73378',
    dark: '#9a0036',
    contrastText: '#fff'
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20'
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100'
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828'
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b'
  },
  background: {
    default: '#fafafa',
    paper: '#fff'
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  divider: 'rgba(0, 0, 0, 0.12)'
}

const darkPalette = {
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#1976d2',
    contrastText: '#000'
  },
  secondary: {
    main: '#f48fb1',
    light: '#f73378',
    dark: '#c2185b',
    contrastText: '#000'
  },
  success: {
    main: '#66bb6a',
    light: '#81c784',
    dark: '#2e7d32'
  },
  warning: {
    main: '#ffa726',
    light: '#ffb74d',
    dark: '#f57c00'
  },
  error: {
    main: '#ef5350',
    light: '#e57373',
    dark: '#c62828'
  },
  info: {
    main: '#29b6f6',
    light: '#4fc3f7',
    dark: '#0277bd'
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e'
  },
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)'
}

// Typography configuration
const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif'
  ].join(','),
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700 as const,
    lineHeight: 1.2
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700 as const,
    lineHeight: 1.3
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600 as const,
    lineHeight: 1.4
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600 as const,
    lineHeight: 1.4
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600 as const,
    lineHeight: 1.5
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600 as const,
    lineHeight: 1.6
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.43
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 500 as const,
    fontSize: '0.875rem'
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.66
  }
} as const

// Common shape configuration
const shape = {
  borderRadius: 8
}

// Breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }
}

// Component overrides
const getComponentOverrides = (palette: typeof lightPalette) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none' as const,
        fontWeight: 500,
        padding: '10px 16px',
        transition: 'all 0.3s ease'
      } as CSSObject,
      contained: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)'
        }
      } as CSSObject
    }
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          transform: 'translateY(-2px)'
        }
      } as CSSObject
    }
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none'
      } as CSSObject
    }
  },
  MuiTextField: {
    defaultProps: {
      variant: 'outlined' as const
    },
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8
        }
      } as CSSObject
    }
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      } as CSSObject
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '6px'
      } as CSSObject
    }
  }
})

// Create light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette
  },
  typography,
  shape,
  breakpoints,
  components: getComponentOverrides(lightPalette)
})

// Create dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...darkPalette
  },
  typography,
  shape,
  breakpoints,
  components: getComponentOverrides(darkPalette)
})

// Theme context for easy theme switching
export interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {}
})

// Theme provider component
interface AppThemeProviderProps {
  children: React.ReactNode
  defaultDark?: boolean
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
  defaultDark = false
}) => {
  const [isDark, setIsDark] = React.useState(defaultDark)

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export const useThemeMode = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within AppThemeProvider')
  }
  return context
}