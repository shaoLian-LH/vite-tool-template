import { describe, it, assert } from "vitest"

describe('example describe', () => {
	it('example unit test', () => {
		const example = 'test'
		assert.strictEqual('test', example, 'str is equal')
	})
})
