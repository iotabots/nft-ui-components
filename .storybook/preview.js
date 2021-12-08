// .storybook/preview.js

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

import { Web3ReactProvider } from '@web3-react/core'

const defaultTheme = createTheme(); // or your custom theme

function getLibrary(provider, connector) {
  return new Web3Provider(provider) // this will vary according to whether you use e.g. ethers or web3.js
}

const withThemeProvider = (Story, context) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>

      <Emotion10ThemeProvider theme={defaultTheme}>

        <ThemeProvider theme={defaultTheme}>
          <Story {...context} />
        </ThemeProvider>
      </Emotion10ThemeProvider>
    </Web3ReactProvider>
  );
};

export const decorators = [withThemeProvider];
