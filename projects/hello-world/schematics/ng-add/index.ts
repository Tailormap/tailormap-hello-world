import { chain, Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { addRootImport } from '@schematics/angular/utility';
import { Schema } from './schema';

const moduleName = 'HelloWorldModule';
const packageName = '@tailormap-b3p/hello-world';
const translation = {
  'nl': `node_modules/${packageName}/assets/locale/messages.core.nl.xlf`,
};

function addTranslationsToAngular(options: Schema) {
  return (host: Tree, context: SchematicContext) => {
    try {
      const angularJsonFile = host.read('angular.json');
      if (angularJsonFile) {
        const angularJsonFileObject = JSON.parse(angularJsonFile.toString('utf-8'));
        const project = options.project
          ? options.project
          : Object.keys(angularJsonFileObject['projects'])[0];
        const projectObject = angularJsonFileObject.projects[project];
        const locales = projectObject.i18n.locales;
        Object.entries(translation).forEach(([ language, translationFile ]) => {
          if (locales[language]) {
            locales[language].translations.push(translationFile);
          }
        });
        host.overwrite('angular.json', JSON.stringify(angularJsonFileObject, null, 2));
      }
    } catch (e) {
      context.logger.log('error', `Error: ${e?.toString()}`);
      context.logger.log('error', `🚫 Failed to add the translation files to i18n section`);
    }

    context.logger.log('info', `✅️ Added translation files to i18n section`);

    return host;
  };
}

export function ngAdd(options: Schema): Rule {
  return () => {
    return chain([
      addTranslationsToAngular(options),
      addRootImport(options.project || 'default', ({code, external}) => code`${external(moduleName, packageName)}`)
    ]);
  };
}
