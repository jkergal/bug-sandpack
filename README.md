# Repo to reproduce sandpack bug
Using SandpackProvider component, when we want to use the "files" prop to use our own files, without template, there are some unwanted behaviors :

- if we don't set anything in the "template" prop, or pass `undefined` to it, it loads a fallback "static" tempalte with its files, even we pass custom files
- in all cases, when we pass custom files, the sandpack provider loads our custom files AND templates' files (fallback or defined template) in the file explorer.

![image](https://github.com/jkergal/bug-sandpack/assets/89657288/045612cc-f1d9-4dae-971f-5dc62ddbc624)

We do not want to have these unwanted template files... It would be better that, when we set custom files through the "files" prop, only these files should be loaded in the sandpack.

## Reproduce bug 
This is a simple implementation of sandpack-react with create-react-app.

Just install dependencies:
`npm install`

And run the app :
`npm start`

The sandpack is in the `App.tsx` file, without template but with a hard-coded custome file passed to the "files" prop. 
![image](https://github.com/jkergal/bug-sandpack/assets/89657288/34ef9337-b549-4f0d-a64f-8df602dea6b3)
