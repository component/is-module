const assert = require('assert');
const isModule = require('../index.js');

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
describe('import syntax', function() {
	it('#1', function() {
	  assert.equal(isModule(`import name from "module-name";`), true);
	});

	it('#2a', function() {
	  assert.equal(isModule(`import * as name from "module-name";`), true);
	});

	it('#2b', function() {
	  assert.equal(isModule(`import*as name from"module-name";`), true);
	});

	it('#3a', function() {
	  assert.equal(isModule(`import { member } from "module-name";`), true);
	});

	it('#3b', function() {
	  assert.equal(isModule(`import{member}from"module-name";`), true);
	});

	it('#4a', function() {
	  assert.equal(isModule(`import { member as alias } from "module-name";`), true);
	});

	it('#4b', function() {
	  assert.equal(isModule(`import{member as alias}from "module-name";`), true);
	});

	it('#5a', function() {
	  assert.equal(isModule(`import { member1 , member2 } from "module-name";`), true);
	});

	it('#5b', function() {
	  assert.equal(isModule(`import{ member1,member2}from "module-name";`), true);
	});

	it('#6a', function() {
	  assert.equal(isModule(`import { member1 , member2 as alias2 } from "module-name";`), true);
	});

	it('#6b', function() {
	  assert.equal(isModule(`import{member1,member2 as alias2}from "module-name";`), true);
	});

	it('#7a', function() {
	  assert.equal(isModule(`import defaultMember, { member } from "module-name";`), true);
	});

	it('#7b', function() {
	  assert.equal(isModule(`import defaultMember,{member}from "module-name";`), true);
	});

	it('#8b', function() {
	  assert.equal(isModule(`import defaultMember, * as alias from "module-name";`), true);
	});

	it('#8b', function() {
	  assert.equal(isModule(`import defaultMember,*as alias from"module-name";`), true);
	});

	it('#9', function() {
	  assert.equal(isModule(`import defaultMember from "module-name";`), true);
	});

	it('#10', function() {
	  assert.equal(isModule(`import "module-name";`), true);
	});
});

// from https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/export
describe('export syntax', function() {
	it('#1a', function() {
	  assert.equal(isModule(`export { name1, name2, …, nameN };`), true);
	});

	it('#1b', function() {
	  assert.equal(isModule(`export{name1,name2};`), true);
	});

	it('#2a', function() {
	  assert.equal(isModule(`export { variable1 as name1, variable2 as name2 };`), true);
	});

	it('#2b', function() {
	  assert.equal(isModule(`export{variable1 as name1,variable2 as name2};`), true);
	});

	it('#3a', function() {
	  assert.equal(isModule(`export let name1, name2;`), true);
	});

	it('#3b', function() {
	  assert.equal(isModule(`export let name1,name2;`), true);
	});

	it('#4a', function() {
	  assert.equal(isModule(`export let name1 = 1, name2 = 2;`), true);
	});

	it('#4b', function() {
	  assert.equal(isModule(`export let name1=1,name2=2;`), true);
	});

	it('#5', function() {
	  assert.equal(isModule(`export function FunctionName(){}`), true);
	});

	it('#6a', function() {
	  assert.equal(isModule(`export class ClassName {}`), true);
	});

	it('#6b', function() {
	  assert.equal(isModule(`export class ClassName{}`), true);
	});

	it('#7', function() {
	  assert.equal(isModule(`export default expression;`), true);
	});

	it('#8a', function() {
	  assert.equal(isModule(`export default function () {}`), true);
	});

	it('#8b', function() {
	  assert.equal(isModule(`export default function(){}`), true);
	});

	it('#9a', function() {
	  assert.equal(isModule(`export default function name1() {}`), true);
	});

	it('#9b', function() {
	  assert.equal(isModule(`export default function name1(){}`), true);
	});

	it('#10a', function() {
	  assert.equal(isModule(`export { name1 as default };`), true);
	});

	it('#10b', function() {
	  assert.equal(isModule(`export{name1 as default};`), true);
	});

	it('#11a', function() {
	  assert.equal(isModule(`export * from './foo';`), true);
	});

	it('#11b', function() {
	  assert.equal(isModule(`export*from'./foo';`), true);
	});

	it('#12a', function() {
	  assert.equal(isModule(`export { name1, name2 } from './foo';`), true);
	});

	it('#12b', function() {
	  assert.equal(isModule(`export{name1,name2}from'./foo';`), true);
	});

	it('#13a', function() {
	  assert.equal(isModule(`export { import1 as name1, import2 as name2 } from './foo';`), true);
	});

	it('#13b', function() {
	  assert.equal(isModule(`export{import1 as name1,import2 as name2}from'./foo';`), true);
	});

	it('#14a', function() {
	  assert.equal(isModule(`export { default } from './foo';`), true);
	});

	it('#14b', function() {
	  assert.equal(isModule(`export{default}from'./foo';`), true);
	});
})


describe('non ES6 syntax', function() {
	it('#1', function() {
	  assert.equal(isModule(`import`), false);
	});

	it('#2', function() {
	  assert.equal(isModule(`import()`), false);
	});

	it('#3', function() {
	  assert.equal(isModule(`export`), false);
	});

	it('#4', function() {
	  assert.equal(isModule(`export()`), false);
	});

})
