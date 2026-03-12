import fs from 'fs';
import { build } from 'vite';

async function test() {
  await build({});
}
test();
