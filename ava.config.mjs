const config = {
	extensions: {
		ts: 'module',
	},
	files: ['test/**/*.test.ts'],
	nodeArguments: ['--loader=tsx'],
};

export default config;
