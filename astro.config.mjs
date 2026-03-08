// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://amdphreak.github.io',
	base: '/git-docs/',
	integrations: [
		starlight({
			title: 'Git',
			description: 'A sensible Git reference — common commands first, beginner-friendly.',
			plugins: [starlightClientMermaid()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AMDphreak/git-docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Workflow', slug: 'workflow' },
				{ label: 'Cheat sheet', slug: 'cheat-sheet' },
				{ label: 'Getting started', slug: 'getting-started' },
				{
					label: 'Commands (by frequency)',
					items: [
						{ label: 'status', slug: 'commands/status' },
						{ label: 'add', slug: 'commands/add' },
						{ label: 'commit', slug: 'commands/commit' },
						{ label: 'push', slug: 'commands/push' },
						{ label: 'pull', slug: 'commands/pull' },
						{ label: 'branch', slug: 'commands/branch' },
						{ label: 'checkout / switch', slug: 'commands/checkout' },
						{ label: 'merge', slug: 'commands/merge' },
						{ label: 'log', slug: 'commands/log' },
						{ label: 'diff', slug: 'commands/diff' },
						{ label: 'clone', slug: 'commands/clone' },
					],
				},
			],
		}),
	],
});
