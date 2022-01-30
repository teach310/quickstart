import * as assert from 'assert';
import { dateFormat } from '../../dateformat';

suite('Extension Test Suite', () => {
	test('Dateformat test', () => {
		let testdate: Date = new Date("2020-1-1");
		assert.strictEqual(dateFormat(testdate), '2020-1-1');
	});
});
