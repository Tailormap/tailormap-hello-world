# Tailormap Hello World component

This is a demo component that can be imported inside a Tailormap project. It can also serve as example for how to create an external component for Tailormap.

Use `ng add @tailormap-b3p/hello-world` to use the component inside Tailormap

Inside the projects/hello-world directory the code for this library is located.

In `hello-world.module.ts` we register our components to Tailormap
In `hello-world-panel.component.ts` we register our menu button in Tailormap to toggle our panel

Schematics are added to be able to install the library using `ng add`

# Publishing

The component can be published by using the following commands:

```shell
cd projects/hello-world
npm version patch
cd ../..
npm run build-hello-world
cd dist/hello-world
npm publish --scope=@tailormap-b3p --registry=https://repo.b3p.nl/nexus/repository/npm-public
cd ../..
git add -A
```

Or simply by running `node publish.js`
