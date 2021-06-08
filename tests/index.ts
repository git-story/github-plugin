console.log('user file', process.env['user']);

const user = require(process.env['user'] as string);
import { Github } from '../src/';

(async () => {
	const gh = new Github(user);
	try {
		const repo = await gh.initRepo('test');

		/*
		let { data } = await gh.rest.repos.get({ owner: 'hexojs', repo: 'hexo-theme-landscape' });
		const { default_branch } = data;
		*/

		/*
		let res: any = await gh.rest.git.getRef({
			owner: 'hexojs',
			repo: 'hexo-theme-landscape',
			ref: `heads/${default_branch}`,
		});
		*/
	   /*
		const res = await gh.getTreeByRef('hexojs/hexo-theme-landscape');
		const sha = res.sha;
		console.log(sha);
		const modules = submodule.serialize({
			'hexo-theme-landscape': {
				'path': 'hexo-theme-landscape',
				'url': 'https://github.com/hexojs/hexo-theme-landscape',
			},
		});
		gh.add('.gitmodules', modules);
		gh.add('hexo-theme-landscape', sha, 'link');
		await gh.commit('TEST COMMIT!!');
		*/

	   	gh.add('src/test5/aaaaaa12.txt', 'HIHIHI');
		gh.add('src/test5/bbbbbb12.txt', 'BYEBYEBYE');
		gh.update('src/test3/aaaaaa12.txt', 'UPUPUP');
		gh.remove('src/test2/aaaaaa12.txt');
		await gh.commit('COMMIT!!@!@!@');

	} catch(error) {
		console.log(error);
	}
})();
