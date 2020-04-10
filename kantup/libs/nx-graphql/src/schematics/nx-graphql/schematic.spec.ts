import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxGraphqlSchematicSchema } from './schema';

describe('nx-graphql schematic', () => {
  let appTree: Tree;
  const options: NxGraphqlSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@kantup/nx-graphql',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('nxGraphql', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
