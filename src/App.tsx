import { SandpackCodeEditor, SandpackConsole, SandpackFileExplorer, SandpackPreview } from '@codesandbox/sandpack-react';
import { SandpackLayout, SandpackProvider } from '@codesandbox/sandpack-react';
import './App.css';

function App() {
  return (
    <SandpackProvider
      style={{ height: '100vh' }}
      files={{ '/CUSTOMFILE.tsx': '' }}
      // template={undefined}
    >
        <SandpackLayout
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '0',
            border: 'none'
          }}
        >
            <SandpackFileExplorer 
              style={{
                height: '100%'
              }}
            />
            <SandpackCodeEditor
              closableTabs={true}
              style={{
                width: '100%',
                height: '100%'
              }}
            />
            <SandpackPreview
              showNavigator
              showOpenInCodeSandbox={false}
              style={{
                height: '100%'
              }}
            />
            <SandpackConsole
              style={{
                height: '100%'
              }}
            />
        </SandpackLayout>
  </SandpackProvider>
  );
}

export default App;
