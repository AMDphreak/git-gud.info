// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightClientMermaid from '@pasqal-io/starlight-client-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://git-gud.info',
	base: '/',
	integrations: [
		starlight({
			title: 'g1t-GUD',
			logo: {
				src: './src/assets/git-logo-h4xor.svg',
				alt: 'Git',
			},
			description: 'Git Guided Usage Document. A complete Git reference in simple words. Tutorials, how-to guides, and reference. Written so anyone can follow.',
			plugins: [starlightClientMermaid()],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				Sidebar: './src/components/Sidebar.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AMDphreak/git-docs' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{ label: 'Cheat sheet', slug: 'cheat-sheet' },
				{ label: 'What is git?', slug: 'what-is-git' },
				{
					label: 'Alternatives to Git',
					items: [
						{ label: 'Git vs Fossil', slug: 'alternatives/fossil' },
						{ label: 'Git vs Mercurial', slug: 'alternatives/mercurial' },
					],
				},
				{
					label: 'Tutorial',
					items: [
						{ label: 'Getting started', slug: 'getting-started' },
					],
				},
				{
					label: 'How-to guides',
					items: [
						{ label: 'Put my project on GitHub', slug: 'how-to/put-project-on-github' },
						{ label: 'Create a new branch', slug: 'how-to/create-a-branch' },
						{ label: 'See what I changed', slug: 'how-to/see-what-changed' },
						{ label: 'Undo my last commit', slug: 'how-to/undo-last-commit' },
						{ label: 'Fix typo in last commit', slug: 'how-to/fix-typo-in-last-commit' },
					],
				},
				{
					label: 'Reference: commands',
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
				{
					label: 'Explanation',
					items: [
						{ label: 'How the commands fit together', slug: 'workflow' },
						{ label: 'Why Git feels hard', slug: 'why-git-feels-hard' },
						{ label: 'Background — how Git got this way', slug: 'background' },
						{ label: 'About this site', slug: 'about-this-site' },
					],
				},
			],
		}),
	],
});
