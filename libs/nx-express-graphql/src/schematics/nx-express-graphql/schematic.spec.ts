import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxExpressGraphqlSchematicSchema } from './schema';

describe('nx-express-graphql schematic', () => {
  let appTree: Tree;
  const options: NxExpressGraphqlSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@kantup/nx-express-graphql',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner
        .runSchematicAsync('nxExpressGraphql', options, appTree)
        .toPromise()
    ).resolves.not.toThrowError();
  });
});
